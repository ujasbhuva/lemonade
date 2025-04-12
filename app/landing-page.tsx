import Link from "next/link"
import Image from "next/image"
import { Citrus, Calendar, BarChart3, Mail, Users, MessageSquare, Settings } from "lucide-react"
import ThemeToggle from "@/components/ui/theme-toggle"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/10">
      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border/20">
        <Link href="/" className="flex items-center gap-2">
          <Citrus className="h-8 w-8 text-primary rotate-45" strokeWidth={"2"} />
          <span className="text-xl font-light text-primary">Lemonade</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-primary transition-colors">Home</Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
          <Link href="/app/dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
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
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 px-6">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-light tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Modern Dashboard Template for Next.js
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A beautiful, responsive, and feature-rich dashboard template built with Next.js, Tailwind CSS, and TypeScript.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/app/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary text-primary-foreground px-8 text-sm font-light hover:bg-primary/90 transition-colors"
              >
                View Demo
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-light shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Documentation
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              alt="Dashboard Preview"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Everything you need to build modern web applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background p-6 hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-5">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dashboard" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-light">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Visualize your data with beautiful charts and metrics. Monitor your application's performance in real-time.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background p-6 hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-5">
                <Image 
                  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop" 
                  alt="Calendar" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-light">Calendar & Events</h3>
                <p className="text-muted-foreground">
                  Manage your schedule with an intuitive calendar interface. Create, edit, and delete events with ease.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background p-6 hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-5">
                <Image 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Email" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-light">Email Templates</h3>
                <p className="text-muted-foreground">
                  Create and manage beautiful email templates. Preview and test your emails before sending them.
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background p-6 hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-5">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-light">Team Management</h3>
                <p className="text-muted-foreground">
                  Manage your team members and their permissions. Assign tasks and track progress with Kanban boards.
                </p>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background p-6 hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-5">
                <Image 
                  src="https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=2070&auto=format&fit=crop" 
                  alt="Chat" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-light">Chat Interface</h3>
                <p className="text-muted-foreground">
                  Communicate with your team in real-time. Share files, code snippets, and more with the built-in chat.
                </p>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background p-6 hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-5">
                <Image 
                  src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop" 
                  alt="Settings" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-light">Settings & Preferences</h3>
                <p className="text-muted-foreground">
                  Customize your dashboard to fit your needs. Change themes, layouts, and more with the settings panel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 px-6 bg-accent/10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Developers
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              See what our users have to say about Lemonade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-2xl border border-border/40 bg-background p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop" 
                    alt="Avatar" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-light">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Lemonade has saved me countless hours of development time. The components are well-designed and easy to customize."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="rounded-2xl border border-border/40 bg-background p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" 
                    alt="Avatar" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="\
