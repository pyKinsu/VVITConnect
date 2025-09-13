"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground border border-border transition-all duration-300"
    >
      <Sun
        className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-yellow-400 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-indigo-400 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}
