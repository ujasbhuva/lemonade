import type React from "react"
import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import { Providers } from "@/components/providers"
import "./globals.css"

// Use Archivo with thin weight
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300"], // Including thin (100) weight
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "Lemonade - Ready to use nextjs theme",
  description: "The comprehensive ready to use nextjs theme",
    generator: 'v0.dev'
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


import './globals.css'