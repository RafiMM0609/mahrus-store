"use client";

import { useEffect } from "react";

function resolveInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem("theme-preference");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function ThemeScript() {
  useEffect(() => {
    const mode = resolveInitialTheme();
    document.documentElement.dataset.theme = mode;
  }, []);

  return null;
}
