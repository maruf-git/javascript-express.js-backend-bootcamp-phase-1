"use client"

import * as React from "react"
import TodoItem from "./TodoItem"
import { ClipboardList } from "lucide-react"

/**
 * TodoList: Updated to use MongoDB's '_id' for keys.
 */
export default function TodoList({ todos, loading, onToggleStatus, onDelete, onEdit, onView }) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 w-full rounded-xl bg-muted animate-pulse" />
        ))}
      </div>
    )
  }

  if (!todos || todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground bg-muted/20 rounded-2xl border border-dashed">
        <ClipboardList className="h-16 w-16 mb-4 opacity-10" />
        <h3 className="text-xl font-semibold mb-1">No tasks yet</h3>
        <p className="text-sm max-w-[200px]">Time to add some goals to your list!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id || todo.id}
          todo={todo}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  )
}
