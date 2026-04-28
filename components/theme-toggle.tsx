"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      suppressHydrationWarning
      className={cn(
        "relative w-9 h-9 rounded-lg btn-ghost flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <span
        suppressHydrationWarning
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100",
        )}
      >
        <Sun className="w-4 h-4" />
      </span>
      <span
        suppressHydrationWarning
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50",
        )}
      >
        <Moon className="w-4 h-4" />
      </span>
    </button>
  );
}
