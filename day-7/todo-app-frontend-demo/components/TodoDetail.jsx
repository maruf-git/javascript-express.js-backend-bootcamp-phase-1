"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Hash, CheckCircle2, Clock, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * TodoDetail: Updated for MongoDB's '_id' and improved visuals.
 */
export default function TodoDetail({ todo, isOpen, onClose }) {
  if (!todo) return null

  const isCompleted = todo.completed || todo.status === "completed"
  const todoId = todo._id || todo.id

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant={isCompleted ? "secondary" : "default"} className="px-3 py-1">
              {isCompleted ? "Task Done" : "Currently Active"}
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold leading-tight">{todo.title}</DialogTitle>
          <div className="mt-4 p-4 rounded-lg bg-muted/40 min-h-[100px]">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {todo.description || "The user didn't provide a description for this task."}
            </p>
          </div>
        </DialogHeader>

        <div className="mt-6 flex flex-col gap-4 text-xs font-medium text-muted-foreground border-t pt-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              <Hash className="h-4 w-4" />
            </div>
            <div>
              <p className="text-foreground">Database ID</p>
              <p className="text-[10px] font-mono">{todoId}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={cn(
              "h-8 w-8 rounded-full flex items-center justify-center",
              isCompleted ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-500" : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500"
            )}>
              {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
            </div>
            <div>
              <p className="text-foreground">Current Status</p>
              <p className="text-[10px] uppercase tracking-wider">
                {isCompleted ? "Completed" : "In Progress"}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

