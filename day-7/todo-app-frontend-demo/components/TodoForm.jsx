"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/**
 * TodoForm: A versatile form used for both creating and updating todos.
 * It's shown inside a Dialog (modal) for a better user experience.
 * 
 * @param {boolean} isOpen - Controls whether the modal is visible
 * @param {function} onClose - Function to call to close the modal
 * @param {function} onSubmit - Function to call when the form is submitted
 * @param {object} initialData - Optional data if editing (title, description, etc.)
 * @param {boolean} loading - Shows a loading state on the submit button
 */
export default function TodoForm({ isOpen, onClose, onSubmit, initialData = null, loading = false }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // Update form fields when initialData changes (e.g., when clicking Edit)
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "")
      setDescription(initialData.description || "")
    } else {
      setTitle("")
      setDescription("")
    }
  }, [initialData, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    
    // Pass the form data back to the parent component
    onSubmit({ title, description })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{initialData ? "Update Todo" : "Create New Todo"}</DialogTitle>
            <DialogDescription>
              {initialData 
                ? "Update your todo details below." 
                : "Fill in the details to add a new task to your list."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Buy groceries..."
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Milk, eggs, and bread"
                className="col-span-3"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : (initialData ? "Update Task" : "Add Task")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
