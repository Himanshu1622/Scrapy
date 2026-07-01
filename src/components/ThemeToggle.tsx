"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder of the same size to avoid layout shift
    return <div className={styles.placeholder}></div>;
  }

  return (
    <button
      className={styles.toggleBtn}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun className={styles.icon} size={20} />
      ) : (
        <Moon className={styles.icon} size={20} />
      )}
    </button>
  );
}
