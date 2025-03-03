"use client";
import signupAnimation from "@/animations/login.json"; // You'll need to add this JSON file
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
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Check, Citrus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import dynamic from "next/dynamic";
import ThemeToggle from "@/components/ui/theme-toggle";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmitEmail = () => {
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleSubmitPassword = () => {
    if (!password || password !== confirmPassword) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1000);
  };

  const handleVerifyOtp = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  const handleGoogleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 2000);
  };

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
        <Card className="w-full rounded-3xl flex flex-col md:flex-row overflow-hidden">
          {/* Left side - Signup Form */}
          <div className="w-full md:w-1/2 p-2">
            <ThemeToggle />
            <CardHeader className="pb-4">
              <div className="w-full mb-4">
                <Progress value={(step / 4) * 100} className="h-1" />
              </div>
              <CardTitle className="text-2xl font-light text-center">
                {step === 1 && "Create your account"}
                {step === 2 && "Set your password"}
                {step === 3 && "Verify your email"}
                {step === 4 && "Success!"}
              </CardTitle>
              <CardDescription className="text-center">
                {step === 1 && "Sign up to get started with our platform"}
                {step === 2 && "Choose a secure password for your account"}
                {step === 3 && "Enter the 6-digit code sent to your email"}
                {step === 4 && "Your account has been created successfully"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-light px-1">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-xl px-5"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <Button
                    onClick={handleSubmitEmail}
                    disabled={loading}
                    className="w-full rounded-xl"
                  >
                    {loading ? "Please wait..." : "Continue with Email"}
                  </Button>

                  <div className="relative flex items-center py-2">
                    <Separator className="flex-1" />
                    <span className="mx-4 text-sm text-gray-500">or</span>
                    <Separator className="flex-1" />
                  </div>

                  <Button
                    variant="outline"
                    onClick={handleGoogleSignup}
                    disabled={loading}
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
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-light px-1">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      className="rounded-xl px-5"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="font-light px-1"
                    >
                      Confirm password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="rounded-xl px-5"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {password &&
                      confirmPassword &&
                      password !== confirmPassword && (
                        <p className="text-sm text-red-500 px-1 mt-1">
                          Passwords do not match
                        </p>
                      )}
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          password.length >= 8 ? "bg-green-500" : "bg-gray-200"
                        }`}
                      >
                        {password.length >= 8 && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <p>At least 8 characters</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          /[A-Z]/.test(password)
                            ? "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      >
                        {/[A-Z]/.test(password) && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <p>At least 1 uppercase letter</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          /[0-9]/.test(password)
                            ? "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      >
                        {/[0-9]/.test(password) && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <p>At least 1 number</p>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <p className="text-sm text-center mb-6">
                    We've sent a 6-digit verification code to{" "}
                    <span className="font-medium">{email}</span>
                  </p>

                  <div className="flex justify-center gap-2">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]"
                        className="h-12 w-12 text-center text-lg"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-center">
                    Didn't receive the code?{" "}
                    <Button variant="link" className="p-0 h-auto">
                      Resend
                    </Button>
                  </p>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium">Welcome aboard!</h3>
                  <p className="text-center text-gray-500 mt-2">
                    Your account has been successfully created.
                  </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between">
              {step > 1 && step < 4 && (
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  disabled={loading}
                  className="rounded-full"
                >
                  Back
                </Button>
              )}

              {step === 1 && <div></div>}

              {step === 2 && (
                <Button
                  onClick={handleSubmitPassword}
                  disabled={
                    !password || password !== confirmPassword || loading
                  }
                  className="rounded-full"
                >
                  {loading ? "Processing..." : "Continue"}
                </Button>
              )}

              {step === 3 && (
                <Button
                  onClick={handleVerifyOtp}
                  disabled={otp.join("").length !== 6 || loading}
                  className="rounded-full"
                >
                  {loading ? "Verifying..." : "Verify"}
                </Button>
              )}

              {step === 4 && (
                <Button
                  className="w-full rounded-full"
                  onClick={() => (window.location.href = "/webapp/dashboard")}
                >
                  Go to Dashboard
                </Button>
              )}
            </CardFooter>
          </div>

          {/* Right side - Lottie Animation */}
          <div className="hidden md:flex md:w-1/2 bg-primary/5 items-center justify-center p-6">
            <div className="relative w-full h-full flex items-center justify-center">
              <Lottie
                animationData={signupAnimation}
                loop={true}
                className="w-full max-w-md"
              />
              {/* Animation steps based on current step */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      className={`w-2 h-2 rounded-full ${
                        stepNumber === step ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Button variant="link" className="px-0 font-normal" asChild>
            <Link href="/signin">Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
