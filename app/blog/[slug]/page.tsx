import Link from "next/link"
import Image from "next/image"
import { Citrus, ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react"
import { notFound } from "next/navigation"
import ThemeToggle from "@/components/ui/theme-toggle"

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
    content: `
      <p>Welcome to Lemonade, the comprehensive Next.js template for building modern web applications. In this guide, we'll walk you through the process of setting up and customizing your Lemonade dashboard.</p>
      
      <h2>Installation</h2>
      
      <p>Getting started with Lemonade is simple. First, clone the repository from GitHub:</p>
      
      <pre><code class="language-bash">git clone https://github.com/lemonade/lemonade.git
cd lemonade
npm install</code></pre>
      
      <p>Once the installation is complete, you can start the development server:</p>
      
      <pre><code class="language-bash">npm run dev</code></pre>
      
      <p>This will start the Next.js development server, and you can access your Lemonade dashboard at <code>http://localhost:3000</code>.</p>
      
      <h2>Project Structure</h2>
      
      <p>Lemonade follows a well-organized project structure that makes it easy to navigate and customize:</p>
      
      <ul>
        <li><code>app/</code> - Contains all the pages and layouts using Next.js App Router</li>
        <li><code>components/</code> - Reusable UI components</li>
        <li><code>lib/</code> - Utility functions and configuration</li>
        <li><code>public/</code> - Static assets</li>
      </ul>
      
      <h2>Customizing the Theme</h2>
      
      <p>Lemonade comes with a beautiful lime-themed design by default, but you can easily customize it to match your brand. The theme is defined in <code>app/globals.css</code> using CSS variables.</p>
      
      <p>To change the primary color, simply update the <code>--primary</code> variable in the CSS file:</p>

      <pre><code class="language-css">:root {
  --primary: 220 100% 50%; /* Change to your desired color */
}</code></pre>

      <p>You can also customize other aspects of the theme, such as the border radius, font weights, and spacing.</p>
      
      <h2>Authentication</h2>
      
      <p>Lemonade includes a complete authentication system with sign-in, sign-up, and password recovery flows. The authentication pages are located in the <code>app/(auth)</code> directory.</p>
      
      <p>By default, Lemonade uses a simple authentication system, but you can easily integrate it with your preferred authentication provider, such as Auth0, NextAuth.js, or Supabase.</p>
      
      <h2>Dashboard Components</h2>
      
      <p>Lemonade comes with a variety of dashboard components that you can use to build your application:</p>
      
      <ul>
        <li>Analytics charts and metrics</li>
        <li>Calendar and event management</li>
        <li>Project management tools</li>
        <li>Team collaboration features</li>
        <li>Email template editor</li>
        <li>Settings and preferences</li>
      </ul>
      
      <p>These components are designed to be modular and reusable, so you can easily mix and match them to create your custom dashboard.</p>
      
      <h2>Conclusion</h2>
      
      <p>Lemonade provides a solid foundation for building modern web applications with Next.js. By following this guide, you should now have a good understanding of how to set up and customize your Lemonade dashboard.</p>
      
      <p>In future guides, we'll explore more advanced topics, such as integrating with APIs, implementing real-time features, and deploying your application to production.</p>
    `,
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
    content: `
      <p>Modern web applications require intuitive, responsive dashboards that provide users with the information they need at a glance. In this article, we'll explore how to use Lemonade's component library to build beautiful dashboards for your web applications.</p>
      
      <h2>Understanding Dashboard Design Principles</h2>
      
      <p>Before diving into the technical aspects, it's important to understand some key principles of effective dashboard design:</p>
      
      <ul>
        <li><strong>Clarity:</strong> Present information in a clear, easy-to-understand format</li>
        <li><strong>Context:</strong> Provide context for the data being displayed</li>
        <li><strong>Customization:</strong> Allow users to customize their view</li>
        <li><strong>Consistency:</strong> Maintain consistent design patterns throughout</li>
        <li><strong>Responsiveness:</strong> Ensure the dashboard works well on all devices</li>
      </ul>
      
      <p>Lemonade's component library is designed with these principles in mind, making it easy to create effective dashboards.</p>
      
      <h2>Key Components for Dashboards</h2>
      
      <p>Lemonade provides several key components that are essential for building dashboards:</p>
      
      <h3>1. Analytics Charts</h3>
      
      <p>The <code>AnalyticsChart</code> component allows you to visualize data in various formats, including line charts, bar charts, and pie charts. Here's an example of how to use it:</p>
      
      <pre><code class="language-tsx">import { AnalyticsChart } from "@/components/analytics/analytics-chart";

export default function SalesOverview() {
  return (
    <AnalyticsChart
      title="Sales Overview"
      data={salesData}
      type="line"
      height={300}
    />
  );
}</code></pre>
      
      <h3>2. Metric Cards</h3>
      
      <p>Metric cards are used to display key performance indicators (KPIs) and other important metrics. Lemonade's <code>AnalyticsMetrics</code> component makes it easy to create these cards:</p>
      
      <pre><code class="language-tsx">import { AnalyticsMetrics } from "@/components/analytics/analytics-metrics";

export default function KeyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <AnalyticsMetrics
        title="Total Revenue"
        value="$24,567"
        change={12.5}
        trend="up"
      />
      <AnalyticsMetrics
        title="Active Users"
        value="1,234"
        change={8.2}
        trend="up"
      />
      <AnalyticsMetrics
        title="Conversion Rate"
        value="3.2%"
        change={-1.5}
        trend="down"
      />
      <AnalyticsMetrics
        title="Avg. Session Duration"
        value="2m 45s"
        change={5.3}
        trend="up"
      />
    </div>
  );
}</code></pre>
      
      <h3>3. Data Tables</h3>
      
      <p>Data tables are essential for displaying detailed information in a structured format. Lemonade provides a flexible table component that supports sorting, filtering, and pagination:</p>
      
      <pre><code class="language-tsx">import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from "@/components/ui/table";

export default function RecentOrders() {
  return (
    <Table
      columns={columns}
      data={ordersData}
      pagination
      searchable
    />
  );
}</code></pre>
      
      <h2>Creating a Dashboard Layout</h2>
      
      <p>With these components in hand, you can now create a complete dashboard layout. Here's an example of how to structure a simple dashboard:</p>
      
      <pre><code class="language-tsx">import { AnalyticsChart } from "@/components/analytics/analytics-chart";
import { AnalyticsMetrics } from "@/components/analytics/analytics-metrics";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsMetrics
          title="Total Revenue"
          value="$24,567"
          change={12.5}
          trend="up"
        />
        {/* Other metrics... */}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          title="Sales Overview"
          data={salesData}
          type="line"
          height={300}
        />
        <AnalyticsChart
          title="Traffic Sources"
          data={trafficData}
          type="pie"
          height={300}
        />
      </div>
      
      {/* Recent Orders */}
      <div>
        <h2 className="text-xl font-light mb-4">Recent Orders</h2>
        <Table
          columns={columns}
          data={ordersData}
          pagination
          searchable
        />
      </div>
    </div>
  );
}</code></pre>
      
      <h2>Customizing Your Dashboard</h2>
      
      <p>Lemonade's components are designed to be highly customizable. You can adjust colors, sizes, and other properties to match your brand and design requirements.</p>
      
      <p>For example, to customize the appearance of a chart, you can pass additional options to the <code>AnalyticsChart</code> component:</p>
      
      <pre><code class="language-tsx">import { AnalyticsChart } from "@/components/analytics/analytics-chart";

export default function CustomChart() {
  return (
    <AnalyticsChart
      title="Custom Sales Chart"
      data={salesData}
      type="line"
      height={300}
      options={{
        colors: ["#4ade80", "#f43f5e"],
        stroke: {
          curve: "smooth",
          width: 2,
        },
        theme: {
          mode: "light",
        },
      }}
    />
  );
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Building modern dashboards with Lemonade is straightforward thanks to its comprehensive component library. By combining these components and customizing them to fit your needs, you can create beautiful, functional dashboards that provide value to your users.</p>
      
      <p>In the next article, we'll explore how to add interactivity to your dashboards with real-time data updates and user interactions.</p>
    `,
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
    content: `
      <p>Authentication is a critical aspect of any web application. In this article, we'll explore best practices for implementing secure authentication in Next.js applications using Lemonade's built-in authentication components and patterns.</p>
      
      <h2>Authentication Fundamentals</h2>
      
      <p>Before diving into implementation details, let's review some fundamental concepts of authentication:</p>
      
      <ul>
        <li><strong>Authentication</strong> - Verifying the identity of a user</li>
        <li><strong>Authorization</strong> - Determining what actions a user is allowed to perform</li>
        <li><strong>Session Management</strong> - Maintaining user state across requests</li>
        <li><strong>Password Security</strong> - Ensuring passwords are stored and transmitted securely</li>
      </ul>
      
      <p>Lemonade provides components and patterns for handling all these aspects of authentication.</p>
      
      <h2>Authentication Flows in Lemonade</h2>
      
      <p>Lemonade includes several authentication flows out of the box:</p>
      
      <h3>1. Sign In</h3>
      
      <p>The sign-in flow allows existing users to authenticate using their email and password. Lemonade's sign-in component includes features like:</p>
      
      <ul>
        <li>Email and password validation</li>
        <li>Remember me functionality</li>
        <li>Forgot password link</li>
        <li>Error handling for invalid credentials</li>
      </ul>
      
      <p>Here's an example of how to use the sign-in component:</p>
      
      <pre><code class="language-tsx">import { SignInForm } from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-light">Sign In</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}</code></pre>
      
      <h3>2. Sign Up</h3>
      
      <p>The sign-up flow allows new users to create an account. Lemonade's sign-up component includes:</p>
      
      <ul>
        <li>Email, password, and name fields</li>
        <li>Password strength requirements</li>
        <li>Terms of service agreement</li>
        <li>Email verification option</li>
      </ul>
      
      <h3>3. Password Recovery</h3>
      
      <p>The password recovery flow allows users to reset their password if they've forgotten it. This flow typically involves:</p>
      
      <ul>
        <li>Requesting a password reset via email</li>
        <li>Sending a reset link or code</li>
        <li>Verifying the link or code</li>
        <li>Setting a new password</li>
      </ul>
      
      <h2>Implementing Secure Authentication</h2>
      
      <p>When implementing authentication in your Next.js application, consider the following best practices:</p>
      
      <h3>1. Use HTTPS</h3>
      
      <p>Always use HTTPS to encrypt data transmitted between the client and server. This prevents attackers from intercepting sensitive information like passwords.</p>
      
      <h3>2. Implement CSRF Protection</h3>
      
      <p>Cross-Site Request Forgery (CSRF) attacks can be prevented by using CSRF tokens. Lemonade includes built-in CSRF protection for all form submissions.</p>
      
      <h3>3. Store Passwords Securely</h3>
      
      <p>Never store passwords in plain text. Instead, use a strong hashing algorithm like bcrypt with a salt. Lemonade's authentication system handles this automatically.</p>
      
      <h3>4. Implement Rate Limiting</h3>
      
      <p>Rate limiting prevents brute force attacks by limiting the number of authentication attempts from a single IP address or user account.</p>
      
      <pre><code class="language-tsx">// Example of implementing rate limiting with Next.js API routes
import { rateLimit } from "@/lib/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
  max: 5, // 5 requests per minute
});

export default async function handler(req, res) {
  try {
    await limiter.check(res, req.ip, 5);
    // Handle authentication logic
  } catch {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
}</code></pre>
      
      <h3>5. Implement Multi-Factor Authentication</h3>
      
      <p>Multi-Factor Authentication (MFA) adds an extra layer of security by requiring users to provide multiple forms of identification. Lemonade includes an OTP (One-Time Password) component that you can use to implement MFA:</p>
      
      <pre><code class="language-tsx">import { OTPInput } from "@/components/ui/otp-input";

export default function VerificationPage() {
  const handleVerify = (code) => {
    // Verify the code
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-light">Verify Your Identity</h2>
      <p className="text-muted-foreground">
        Enter the 6-digit code sent to your email
      </p>
      <OTPInput
        length={6}
        onComplete={handleVerify}
      />
    </div>
  );
}</code></pre>
      
      <h2>Authentication Providers</h2>
      
      <p>Lemonade is designed to work with various authentication providers, including:</p>
      
      <ul>
        <li><strong>NextAuth.js</strong> - A complete authentication solution for Next.js</li>
        <li><strong>Auth0</strong> - A flexible, drop-in authentication service</li>
        <li><strong>Firebase Authentication</strong> - Google's authentication service</li>
        <li><strong>Supabase Auth</strong> - Open source Firebase alternative</li>
        <li><strong>Custom Authentication</strong> - Build your own authentication system</li>
      </ul>
      
      <p>The choice of provider depends on your specific requirements and constraints.</p>
      
      <h2>Conclusion</h2>
      
      <p>Implementing secure authentication in Next.js applications is crucial for protecting user data and preventing unauthorized access. Lemonade provides a comprehensive set of components and patterns that make it easy to implement best practices for authentication.</p>
      
      <p>By following the guidelines outlined in this article, you can create a secure authentication system that protects your users and your application.</p>
    `,
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

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

      {/* Back to blog */}
      <div className="container mx-auto max-w-4xl px-6 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
      </div>

      {/* Blog Post */}
      <article className="container mx-auto max-w-4xl px-6 pb-16">
        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={
              post.slug === "getting-started-with-lemonade"
                ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                : post.slug === "building-modern-dashboards"
                  ? "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
            }
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <div className="inline-block rounded-full bg-accent px-4 py-1 text-sm text-accent-foreground mb-4">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lime max-w-none prose-headings:font-light prose-p:font-thin prose-li:font-thin prose-pre:bg-muted prose-pre:text-foreground prose-pre:rounded-lg prose-pre:overflow-x-auto prose-code:text-primary prose-code:bg-muted/50 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related Posts */}
      <section className="w-full py-12 px-6 bg-accent/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-light mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="block group">
                  <div className="bg-background rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-colors h-full flex flex-col">
                    <div className="relative h-[200px]">
                      <Image
                        src={
                          relatedPost.slug === "getting-started-with-lemonade"
                            ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                            : relatedPost.slug === "building-modern-dashboards"
                              ? "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                              : "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                        }
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="inline-block rounded-full bg-accent/50 px-3 py-1 text-xs text-accent-foreground mb-3 w-fit">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-xl font-light mb-3 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t border-border/20">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
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
