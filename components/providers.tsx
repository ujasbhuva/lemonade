"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/lib/redux/store"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

