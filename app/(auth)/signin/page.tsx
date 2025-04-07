"use client";

import loginAnimation from "@/animations/login.json"; // You'll need to add this JSON file
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Citrus } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ui/theme-toggle";

// Login validation schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  // Form for login
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle login submission
  function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    // Simulate API call for login
    setTimeout(() => {
      console.log("Login:", values);
      // Redirect to dashboard after successful login
      window.location.href = "/app/dashboard";
      setIsLoading(false);
    }, 1500);
  }

  // Handle Google login
  function handleGoogleLogin() {
    setIsLoading(true);

    // Simulate API call for Google login
    setTimeout(() => {
      console.log("Google login");
      // Redirect to dashboard after successful login
      window.location.href = "/app/dashboard";
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-5xl">
        <Link href="/">
          <div className="flex items-center px-6 py-4 w-full justify-center">
            <Citrus
              className="h-8 w-8 text-primary rotate-45"
              strokeWidth={"1.5"}
            />
            <div className="flex flex-col">
              <span className="font-light text-3xl text-primary">Lemonade</span>
            </div>
          </div>
        </Link>
        <Card className="border rounded-3xl flex flex-col md:flex-row overflow-hidden">
          {/* Left side - Login Form */}
          <div className="w-full md:w-1/2 p-2">
            <ThemeToggle />
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-light text-center">
                Sign in
              </CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-light px-1">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="name@example.com"
                            className="rounded-xl px-5"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="font-light px-1">
                            Password
                          </FormLabel>
                          <Button
                            variant="link"
                            className="px-0 font-light h-auto text-xs"
                            asChild
                          >
                            <Link href="/forgot-password">
                              Forgot password?
                            </Link>
                          </Button>
                        </div>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="rounded-xl px-5"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-background px-2 text-muted-foreground">
                    or
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                type="button"
                disabled={isLoading}
                onClick={handleGoogleLogin}
                className="w-full font-light rounded-xl"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
            </CardContent>
          </div>

          {/* Right side - Lottie Animation */}
          <div className="hidden md:flex md:w-1/2 bg-primary/5 items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <Lottie
                animationData={loginAnimation}
                loop={true}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </Card>
        <div className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Button variant="link" className="px-0 font-normal" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
