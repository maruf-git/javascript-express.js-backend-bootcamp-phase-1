"use client"

import { useState, useEffect } from "react"
import { Plus, RefreshCw, Layers } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import TodoList from "@/components/TodoList"
import TodoForm from "@/components/TodoForm"
import TodoDetail from "@/components/TodoDetail"
import DeleteConfirm from "@/components/DeleteConfirm" // NEW: Custom confirm
import { todoService } from "@/services/todoService"

/**
 * Main Page: Updated with Custom Deletion logic.
 */
export default function Home() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false) // NEW: state for delete dialog
  
  const [editingTodo, setEditingTodo] = useState(null)
  const [viewingTodo, setViewingTodo] = useState(null)
  const [deletingTodoId, setDeletingTodoId] = useState(null) // NEW: track which one is being deleted
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fetchTodos = async () => {
    setLoading(true)
    try {
      const data = await todoService.getAll()
      const sortedData = [...data].sort((a, b) => {
        const aDone = a.completed || a.status === "completed"
        const bDone = b.completed || b.status === "completed"
        return aDone === bDone ? 0 : aDone ? 1 : -1
      })
      setTodos(sortedData)
    } catch (error) {
      toast.error("Connection failed. Ensure your Express server is running.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true)
    try {
      if (editingTodo) {
        const todoId = editingTodo._id || editingTodo.id
        await todoService.update(todoId, formData)
        toast.success("Task updated successfully!")
      } else {
        await todoService.create({ ...formData, completed: false })
        toast.success("Added new task to list")
      }
      setIsFormOpen(false)
      setEditingTodo(null)
      fetchTodos()
    } catch (error) {
      toast.error("Operation failed.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleToggleStatus = async (todo) => {
    const todoId = todo._id || todo.id
    try {
      const currentCompleted = todo.completed || todo.status === "completed"
      const newStatus = !currentCompleted
      await todoService.update(todoId, { completed: newStatus })
      fetchTodos()
      toast.info(newStatus ? "Goal achieved!" : "Task reactivated")
    } catch (error) {
      toast.error("Status update failed")
    }
  }

  /**
   * Custom Delete Logic:
   * Instead of confirming immediately, we just set the ID and open the custom Dialog.
   */
  const handleDeleteClick = (id) => {
    setDeletingTodoId(id)
    setIsDeleteOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!deletingTodoId) return
    
    try {
      await todoService.delete(deletingTodoId)
      toast.success("Task erased from database")
      setIsDeleteOpen(false)
      setDeletingTodoId(null)
      fetchTodos()
    } catch (error) {
      toast.error("Deletion failed")
    }
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase">
            <Layers className="h-3 w-3" />
            Workspace
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight">Daily Dashboard</h2>
          <p className="text-muted-foreground text-lg">
            {todos.length === 0 
              ? "Start your day by adding a new task." 
              : `You have ${todos.filter(t => !(t.completed || t.status === "completed")).length} active tasks today.`}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={fetchTodos} disabled={loading} className="rounded-full h-10 w-10 border">
            <RefreshCw className={loading ? "animate-spin h-4 w-4 opacity-50" : "h-4 w-4"} />
          </Button>
          <Button onClick={() => { setEditingTodo(null); setIsFormOpen(true); }} className="rounded-full shadow-lg shadow-primary/20 h-10 px-6 gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      <TodoList 
        todos={todos} 
        loading={loading}
        onToggleStatus={handleToggleStatus}
        onDelete={handleDeleteClick} // Pass the new handler
        onEdit={(todo) => { setEditingTodo(todo); setIsFormOpen(true); }}
        onView={(todo) => { setViewingTodo(todo); setIsDetailOpen(true); }}
      />

      <TodoForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingTodo}
        loading={isSubmitting}
      />

      <TodoDetail
        todo={viewingTodo}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />

      {/* NEW: Custom Delete Confirmation Component */}
      <DeleteConfirm 
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
      />

      <footer className="mt-20 pt-10 border-t border-muted/50 text-center text-xs text-muted-foreground">
        <p>Built with Next.js, Shadcn UI, and MongoDB</p>
        <p className="mt-2 opacity-50 font-mono">Real-time Backend Synchronization Enabled</p>
      </footer>
    </div>
  )
}
