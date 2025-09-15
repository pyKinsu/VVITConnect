"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Ensure initial theme is light
  React.useEffect(() => {
    if (!theme) setTheme("light");
  }, [theme, setTheme]);

  const toggleTheme = () => {
    // Toggle between light and dark
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative bg-card text-card-foreground border border-border transition-all duration-300
                 hover:bg-primary hover:text-primary-foreground active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {/* Sun Icon */}
      <Sun
        className={`absolute h-[1.2rem] w-[1.2rem] text-yellow-400 transition-all duration-500
                    ${resolvedTheme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`}
      />
      {/* Moon Icon */}
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] text-indigo-400 transition-all duration-500
                    ${resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
      />
    </Button>
  );
}
