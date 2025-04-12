import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ArrowLeft, Citrus } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";

export const metadata: Metadata = {
  title: "Contact Us | Lemonade",
  description: "Get in touch with our team",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundPattern />

      <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border/20">
        <Link href="/" className="flex items-center gap-2">
          <Citrus
            className="h-8 w-8 text-primary rotate-45"
            strokeWidth={"2"}
          />
          <span className="text-xl font-light text-primary">Lemonade</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link href="/blog" className="text-primary transition-colors">
            Blog
          </Link>
          <Link
            href="/app/dashboard"
            className="text-foreground hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
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
      <section className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-thin tracking-tight mb-6">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-6 md:p-10 shadow-lg border border-border/50">
            <h2 className="text-2xl md:text-3xl font-thin mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-3xl p-6 shadow-md flex flex-col items-center text-center border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-thin mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Our friendly team is here to help
                </p>
                <a
                  href="mailto:hello@lemonade.com"
                  className="text-primary hover:underline"
                >
                  hello@lemonade.com
                </a>
              </div>

              <div className="bg-card rounded-3xl p-6 shadow-md flex flex-col items-center text-center border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-thin mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Mon-Fri from 8am to 5pm
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div className="bg-card rounded-3xl p-6 shadow-md flex flex-col items-center text-center border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-thin mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">
                  Come say hello at our office
                </p>
                <address className="not-italic text-primary">
                  123 Lemonade Street
                  <br />
                  San Francisco, CA 94107
                </address>
              </div>

              <div className="bg-card rounded-3xl p-6 shadow-md flex flex-col items-center text-center border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-thin mb-2">Working Hours</h3>
                <p className="text-muted-foreground mb-4">
                  We work all days except holidays
                </p>
                <p className="text-primary">
                  Monday - Friday: 9am - 5pm
                  <br />
                  Saturday: 10am - 2pm
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-3xl p-6 shadow-lg border border-border/50">
              <h3 className="text-xl font-thin mb-4">Our Location</h3>
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017532033!3d37.75781499229416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1649252132504!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lemonade Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-thin mb-6">
            Connect With Us
          </h2>
          <p className="text-muted-foreground mb-8">
            Follow us on social media to stay updated with our latest news and
            updates
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-card hover:bg-primary/10 transition-colors p-4 rounded-full border border-border/50 hover:border-primary/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="bg-card hover:bg-primary/10 transition-colors p-4 rounded-full border border-border/50 hover:border-primary/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="bg-card hover:bg-primary/10 transition-colors p-4 rounded-full border border-border/50 hover:border-primary/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="bg-card hover:bg-primary/10 transition-colors p-4 rounded-full border border-border/50 hover:border-primary/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M16 8a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h9z" />
                <path d="M13.5 5a.5.5 0 0 1 .5.5V8a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 py-12 text-center">
        <Button asChild variant="outline" className="group">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Lemonade. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary text-sm"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
