import type React from "react";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";
import ThemeToggle from "@/components/ui/theme-toggle";

// Use Archivo with thin weight
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300"], // Including thin (100) weight
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Lemonade - Ready to use nextjs theme",
  description: "The comprehensive ready to use nextjs theme",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={archivo.variable}>
        <Providers>
          <div className="absolute top-0 left-0 right-0 z-10 w-full flex items-center justify-end p-4">
            <ThemeToggle />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
