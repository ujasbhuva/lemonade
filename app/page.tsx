"use client";
import Link from "next/link";
import { ArrowRight, Citrus, CupSoda } from "lucide-react";

import Lottie from "lottie-react";
import signupAnimation from "@/animations/login.json"; // You'll need to add this JSON file

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/20">
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-4 justify-center mb-6">
            <Citrus
              className="h-16 w-16 text-primary rotate-45"
              strokeWidth={"2"}
            />
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-primary">
              Lemonade
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
            The comprehensive ready to use nextjs theme for modern
            web-applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/signin"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-lg font-light hover:bg-primary/90 transition-colors"
            >
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent text-primary px-8 py-3 text-lg font-light hover:bg-primary/10 transition-colors"
            >
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-16">
            <Link
              href="webapp/dashboard"
              className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Explore Dashboard & Components
            </Link>
          </div>
        </div>
      </div>

      <footer className="w-full py-8 text-center text-sm text-muted-foreground border-t border-border/20">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Lemonade. All rights reserved.</p>
          <p className="mt-2">Ready to use nextjs theme</p>

          <div className="mt-6 flex justify-center space-x-6">
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
