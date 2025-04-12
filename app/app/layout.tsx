import type React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { Providers } from "@/components/providers"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import "../../app/globals.css"

// Use Archivo with thin weight
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300"], // Including thin (100) weight
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "Lemonade Dashboard",
  description: "Project management dashboard for Lemonade",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable}`}>
        <Providers>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="md:p-6 pt-[4rem] md:pt-6">{children}</SidebarInset>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  )
}
