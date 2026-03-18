"use client"

import * as React from "react"
import { Moon, Sun, CheckSquare } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

/**
 * Navbar component that includes the app name and a theme toggle.
 * It uses 'next-themes' to switch between light and dark mode.
 */
export default function Navbar() {
  const { theme, setTheme } = useTheme()

  /**
   * Toggles between 'light' and 'dark'.
   * This is a great place to show students how to interact with theme context.
   */
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight">TodoPro</h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
