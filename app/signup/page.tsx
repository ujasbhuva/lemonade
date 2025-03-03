"use client";

import * as React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Citrus, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { OtpInput } from "@/components/ui/otp-input";

// Email and password validation schema
const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

// OTP validation schema
const otpSchema = z.object({
  otp: z.string().length(6, { message: "Please enter all 6 digits" }),
});

export default function SignupPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showOtpForm, setShowOtpForm] = React.useState(false);
  const [email, setEmail] = React.useState("");

  // Form for signup
  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form for OTP verification
  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Handle signup form submission
  function onSignupSubmit(values: z.infer<typeof signupSchema>) {
    setIsLoading(true);

    // Simulate API call to send OTP
    setTimeout(() => {
      setEmail(values.email);
      setShowOtpForm(true);
      setIsLoading(false);
    }, 1500);
  }

  // Handle OTP form submission
  function onOtpSubmit(values: z.infer<typeof otpSchema>) {
    setIsLoading(true);

    // Simulate API call to verify OTP
    setTimeout(() => {
      console.log("OTP verified:", values.otp);
      // Redirect to dashboard or home page after successful verification
      window.location.href = "/webapp/dashboard";
      setIsLoading(false);
    }, 1500);
  }

  // Handle Google signup
  function handleGoogleSignup() {
    setIsLoading(true);

    // Simulate API call for Google signup
    setTimeout(() => {
      console.log("Google signup");
      // Redirect to dashboard or home page after successful signup
      window.location.href = "/webapp/dashboard";
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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

        <Card className="shadow-lg border">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-thin text-center">
              {showOtpForm ? "Verify your email" : "Sign up"}
            </CardTitle>
            <CardDescription className="text-center">
              {showOtpForm
                ? "We've sent a verification code to your email"
                : "Enter your information to create an account"}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {showOtpForm ? (
              <Form {...otpForm}>
                <form
                  onSubmit={otpForm.handleSubmit(onOtpSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={otpForm.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Verification Code</FormLabel>
                        <FormControl>
                          <OtpInput
                            value={field.value}
                            onChange={field.onChange}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the 6-digit code sent to your email
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Verifying..." : "Verify Email"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            ) : (
              <>
                <Form {...signupForm}>
                  <form
                    onSubmit={signupForm.handleSubmit(onSignupSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={signupForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="name@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signupForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </Form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  type="button"
                  disabled={isLoading}
                  onClick={handleGoogleSignup}
                  className="w-full"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-center text-sm text-muted-foreground">
              {showOtpForm ? (
                <>
                  Didn't receive the code?{" "}
                  <Button
                    variant="link"
                    className="px-0 font-normal"
                    disabled={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsLoading(false);
                      }, 1500);
                    }}
                  >
                    Resend
                  </Button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Button variant="link" className="px-0 font-normal" asChild>
                    <Link href="/signin">Sign in</Link>
                  </Button>
                </>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
