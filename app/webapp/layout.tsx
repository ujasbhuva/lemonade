import type React from "react";
import type { Metadata } from "next/metadata";
import { Archivo } from "next/font/google";
import { Providers } from "@/components/providers";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import "../../app/globals.css";

// Use Archivo with thin weight
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300"], // Including thin (100) weight
});

export const metadata: Metadata = {
  title: "Lemonade Dashboard",
  description: "Project management dashboard for Lemonade",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.className} font-thin`}>
        <Providers>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="md:p-6 pt-[4rem] md:pt-6">
              {children}
            </SidebarInset>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
