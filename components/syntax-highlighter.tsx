"use client"

import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useTheme } from "next-themes"

interface CodeBlockProps {
  language: string
  value: string
}

export default function CodeBlock({ language, value }: CodeBlockProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code>{value}</code>
      </pre>
    )
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={theme === "dark" ? tomorrow : oneLight}
      customStyle={{
        borderRadius: "0.5rem",
        padding: "1rem",
        fontSize: "0.875rem",
        lineHeight: "1.5",
        margin: "1.5rem 0",
      }}
    >
      {value}
    </SyntaxHighlighter>
  )
}
