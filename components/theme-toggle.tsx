"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-8 w-8 place-items-center rounded-full border border-[#c2b8a3]/15 bg-black/30 text-[#c2b8a3] backdrop-blur transition-colors hover:border-[#c2b8a3]/30 hover:bg-black/50"
    >
      {theme === "dark" ? <IconSun className="h-4 w-4" /> : <IconMoon className="h-4 w-4" />}
    </button>
  );
}
