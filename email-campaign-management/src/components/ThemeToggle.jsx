import React from 'react'
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const {
    theme,
    toggleTheme,
  } = useTheme();
  return (
    <div className="theme-toggle">

      <button
        type="button"
        onClick={toggleTheme}
        className={`theme-option ${
          theme === "blue"
            ? "active"
            : ""
        }`}
      >
        🔵 Blue
      </button>


      <button
        type="button"
        onClick={toggleTheme}
        className={`theme-option ${
          theme === "purple"
            ? "active"
            : ""
        }`}
      >
        🟣 Purple
      </button>

    </div>
  )
}
