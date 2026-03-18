"use client"

import * as React from "react"
import { Trash2, Edit2, Eye, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { cn, formatCreationTime } from "@/lib/utils"

/**
 * TodoItem: Updated to display local creation time extracted from MongoDB _id.
 */
export default function TodoItem({ todo, onToggleStatus, onDelete, onEdit, onView }) {
  const todoId = todo._id || todo.id
  const isCompleted = todo.completed || todo.status === "completed"
  
  // EXTRA: Extract and format creation time from the MongoDB ID
  const creationTime = formatCreationTime(todoId)

  return (
    <Card className={cn(
      "group transition-all hover:shadow-md border-l-4",
      isCompleted ? "bg-muted/50 border-l-muted-foreground/30" : "border-l-primary"
    )}>
      <CardContent className="flex items-center gap-4 p-4">
        <Checkbox 
          id={`todo-${todoId}`}
          checked={isCompleted}
          onCheckedChange={() => onToggleStatus(todo)}
          className="h-5 w-5 rounded-full"
        />

        <div className="flex-1 min-w-0">
          <label 
            htmlFor={`todo-${todoId}`}
            className={cn(
              "text-base font-medium leading-none cursor-pointer truncate block mb-1",
              isCompleted && "text-muted-foreground line-through"
            )}
          >
            {todo.title}
          </label>
          
          <div className="flex items-center gap-3">
            {todo.description && (
              <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                {todo.description}
              </p>
            )}
            
            {/* Timestamp Display */}
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground/60 font-medium">
              <Clock className="h-3 w-3" />
              <span>Created: {creationTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" onClick={() => onView(todo)} className="h-8 w-8">
            <Eye className="h-4 w-4 text-blue-500" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => onEdit(todo)} className="h-8 w-8">
            <Edit2 className="h-4 w-4 text-amber-500" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onDelete(todoId)} // This now triggers custom menu in page.js
            className="h-8 w-8 text-destructive hover:text-white hover:bg-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <Badge 
          variant={isCompleted ? "secondary" : "outline"} 
          className={cn("hidden sm:inline-flex", !isCompleted && "border-primary text-primary")}
        >
          {isCompleted ? "Completed" : "Pending"}
        </Badge>
      </CardContent>
    </Card>
  )
}
