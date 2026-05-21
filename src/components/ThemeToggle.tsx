import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark")

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(nextTheme)
    localStorage.setItem("vite-ui-theme", nextTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="glass-panel glass-panel-hover rounded-full w-10 h-10 flex items-center justify-center border-border/50"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-all hover:scale-110" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-all hover:scale-110" />
      )}
    </Button>
  )
}
