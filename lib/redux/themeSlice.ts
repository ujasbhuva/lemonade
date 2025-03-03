"use client";

import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
  mode: "light" | "dark" | "system"
}

// Get initial theme from localStorage or system preference
const getInitialTheme = (): "light" | "dark" | "system" => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system"
    if (savedTheme) return savedTheme

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
  }
  return "light"
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newMode = state.mode === "dark" ? "light" : "dark"
      state.mode = newMode
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newMode)
        if (newMode === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer

