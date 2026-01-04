"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function resolveInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme-preference");
  if (stored === "light" || stored === "dark") return stored;
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  return media.matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => resolveInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme-preference", mode);
    }
  }, [mode]);

  const handleToggle = () => {
    setMode((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="group inline-flex items-center gap-3 rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border/70 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
      aria-label="Toggle theme"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
        {mode === "dark" ? "DK" : "LT"}
      </span>
      <div className="flex flex-col leading-tight text-left">
        <span className="text-xs text-muted">Tampilan</span>
        <span className="font-semibold text-foreground">{mode === "dark" ? "Dark mode" : "Light mode"}</span>
      </div>
    </button>
  );
}
