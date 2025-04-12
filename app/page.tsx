"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Citrus, LayoutDashboard, Calendar, Mail, Users, MessageSquare, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ui/theme-toggle"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/20">
      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border/20">
        <div className="flex items-center gap-2">
          <Citrus className="h-8 w-8 text-primary rotate-45" strokeWidth={"2"} />
          <span className="text-xl font-light text-primary">Lemonade</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/app/dashboard" className="text-foreground hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/signin"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-primary bg-transparent text-primary px-4 py-2 text-sm font-light hover:bg-primary/10 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-light hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-block rounded-full bg-accent px-4 py-1 text-sm text-accent-foreground">
                Ready to use Next.js template
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground">
                Modern dashboard for your <span className="text-primary">next project</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive, ready-to-use Next.js theme with beautiful UI components, authentication flows, and
                complete dashboard functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-lg font-light hover:bg-primary/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/app/dashboard"
                  className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent text-primary px-8 py-3 text-lg font-light hover:bg-primary/10 transition-colors"
                >
                  Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-border/40 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Dashboard Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-light text-foreground">Dashboard Overview</h3>
                  <p className="text-sm text-muted-foreground">Modern & responsive design</p>
                </div>
                <Button variant="secondary" size="sm" className="rounded-full">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-accent/30 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Everything you need to build modern web apps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lemonade comes with all the components and pages you need to build your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={LayoutDashboard}
              title="Dashboard"
              description="Comprehensive analytics dashboard with charts, metrics, and data visualization components."
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            />
            <FeatureCard
              icon={Calendar}
              title="Calendar"
              description="Interactive calendar with event management, scheduling, and reminder functionality."
              imageUrl="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop"
            />
            <FeatureCard
              icon={Mail}
              title="Email Templates"
              description="Ready-to-use email templates for newsletters, welcome emails, and notifications."
              imageUrl="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop"
            />
            <FeatureCard
              icon={Users}
              title="Team Management"
              description="Kanban board and task management tools for team collaboration and project tracking."
              imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Chat Interface"
              description="Real-time messaging interface with conversation history and notification system."
              imageUrl="https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=2070&auto=format&fit=crop"
            />
            <FeatureCard
              icon={Settings}
              title="Settings & Preferences"
              description="User profile, preferences, and subscription management components."
              imageUrl="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1964&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Loved by developers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what others are saying about Lemonade template.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Lemonade saved me weeks of development time. The components are well-designed and easy to customize."
              author="Alex Johnson"
              role="Frontend Developer"
              avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            />
            <TestimonialCard
              quote="The authentication flow and dashboard components were exactly what I needed for my SaaS project."
              author="Sarah Miller"
              role="Product Manager"
              avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
            />
            <TestimonialCard
              quote="Clean code, beautiful design, and excellent documentation. What more could you ask for?"
              author="Michael Chen"
              role="Full Stack Developer"
              avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-primary/10 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of developers building modern web applications with Lemonade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-lg font-light hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent text-primary px-8 py-3 text-lg font-light hover:bg-primary/10 transition-colors"
            >
              Read Our Blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Citrus className="h-8 w-8 text-primary rotate-45" strokeWidth={"2"} />
                <span className="text-xl font-light text-primary">Lemonade</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The comprehensive ready-to-use Next.js theme for modern web applications. Built with the latest
                technologies and best practices.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Discord
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/app/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webapp/components"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webapp/documentation"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Lemonade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
