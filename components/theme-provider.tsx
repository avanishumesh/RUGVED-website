"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type ThemeCtx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const Ctx = createContext<ThemeCtx>({ theme: "dark", toggle: () => {}, setTheme: () => {} });

export function useTheme() {
  return useContext(Ctx);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("rugved-theme") as Theme | null) || null;
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
    const initial: Theme = saved ?? (prefersLight ? "light" : "dark");
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
      root.dataset.theme = "light";
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      root.dataset.theme = "dark";
    }
    localStorage.setItem("rugved-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <Ctx.Provider value={{ theme, toggle, setTheme }}>{children}</Ctx.Provider>;
}
