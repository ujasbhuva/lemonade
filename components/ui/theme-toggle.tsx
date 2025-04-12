"use client"
import { Button } from "@/components/ui/button"
import { toggleTheme } from "@/lib/redux/themeSlice"
import { Moon, Sun } from "lucide-react"
import { useDispatch } from "react-redux"

export default function ThemeToggle() {
  const dispatch = useDispatch()
  return (
    <Button
      variant="outline"
      size="icon"
      className="relative h-10 w-10 rounded-full"
      onClick={() => dispatch(toggleTheme())}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
