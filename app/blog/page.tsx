import Link from "next/link"
import Image from "next/image"
import { Citrus, ArrowRight, Calendar, Clock } from "lucide-react"
import ThemeToggle from "@/components/ui/theme-toggle"

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "getting-started-with-lemonade",
    title: "Getting Started with Lemonade: A Comprehensive Guide",
    excerpt:
      "Learn how to set up and customize your Lemonade dashboard in minutes. This guide covers installation, configuration, and best practices.",
    date: "April 8, 2025",
    readTime: "8 min read",
    category: "Tutorial",
    author: "Alex Johnson",
    authorRole: "Lead Developer",
  },
  {
    slug: "building-modern-dashboards",
    title: "Building Modern Dashboards with Lemonade Components",
    excerpt:
      "Discover how to leverage Lemonade's component library to create beautiful, responsive dashboards for your web applications.",
    date: "April 5, 2025",
    readTime: "6 min read",
    category: "Design",
    author: "Sarah Miller",
    authorRole: "UI/UX Designer",
  },
  {
    slug: "authentication-best-practices",
    title: "Authentication Best Practices for Next.js Applications",
    excerpt:
      "Implement secure authentication flows in your Next.js applications using Lemonade's built-in authentication components and patterns.",
    date: "March 29, 2025",
    readTime: "10 min read",
    category: "Security",
    author: "Michael Chen",
    authorRole: "Security Engineer",
  },
]

export default function BlogPage() {
  // Featured post is the first one
  const featuredPost = blogPosts[0]
  // Other posts
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/10">
      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border/20">
        <Link href="/" className="flex items-center gap-2">
          <Citrus className="h-8 w-8 text-primary rotate-45" strokeWidth={"2"} />
          <span className="text-xl font-light text-primary">Lemonade</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-primary transition-colors">
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

      {/* Blog Header */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Lemonade Blog</h1>
            <p className="text-xl text-muted-foreground">Insights, tutorials, and updates from the Lemonade team</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="grid md:grid-cols-2 gap-8 bg-background rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-colors p-6 md:p-0">
              <div className="relative h-[300px] md:h-full order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300 rounded-xl md:rounded-none"
                />
              </div>
              <div className="flex flex-col justify-center p-4 md:p-8 order-2 md:order-1">
                <div className="inline-block rounded-full bg-accent px-4 py-1 text-sm text-accent-foreground mb-4 w-fit">
                  {featuredPost.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t border-border/20">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="w-full px-6 pb-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-light mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                <div className="bg-background rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-colors h-full flex flex-col">
                  <div className="relative h-[200px]">
                    <Image
                      src={
                        post.slug === "building-modern-dashboards"
                          ? "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                          : "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                      }
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="inline-block rounded-full bg-accent/50 px-3 py-1 text-xs text-accent-foreground mb-3 w-fit">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-light mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t border-border/20">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 px-6 bg-accent/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">Subscribe to our newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest articles, tutorials, and updates from the Lemonade team delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2 text-sm font-light hover:bg-primary/90 transition-colors"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-border/20 mt-auto">
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
