"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ThemeToggle from "@/components/ui/theme-toggle"
import { Citrus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [stage, setStage] = useState("email") // 'email' or 'reset'
  const [email, setEmail] = useState("")

  const handleSendResetLink = () => {
    if (!email) return
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStage("reset")
    }, 1500)
  }

  const handleResetPassword = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/signin"
    }, 1500)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
        <Link href="/">
          <div className="flex items-center px-6 py-4 w-full justify-center">
            <Citrus className="h-8 w-8 text-primary rotate-45" strokeWidth={"1.5"} />
            <div className="flex flex-col">
              <span className="font-light text-3xl text-primary">Lemonade</span>
            </div>
          </div>
        </Link>

        <Card className="border rounded-3xl">
          <CardHeader className="space-y-1">
            <ThemeToggle />
            <CardTitle className="text-2xl font-light text-center">
              {stage === "email" ? "Forgot password?" : "Reset password"}
            </CardTitle>
            <CardDescription className="text-center">
              {stage === "email" ? "No worries, we'll send you reset instructions" : "Enter your new password below"}
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            {stage === "email" ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-light px-1">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="rounded-xl px-5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="button"
                  className="w-full rounded-xl"
                  onClick={handleSendResetLink}
                  disabled={isLoading || !email}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="font-light px-1">
                    New Password
                  </Label>
                  <Input id="new-password" type="password" className="rounded-xl px-5" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="font-light px-1">
                    Confirm Password
                  </Label>
                  <Input id="confirm-password" type="password" className="rounded-xl px-5" required />
                </div>

                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-200"></div>
                    <p>At least 8 characters</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-200"></div>
                    <p>At least 1 uppercase letter</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gray-200"></div>
                    <p>At least 1 number</p>
                  </div>
                </div>

                <Button type="button" className="w-full rounded-xl" onClick={handleResetPassword} disabled={isLoading}>
                  {isLoading ? "Resetting..." : "Reset Password"}
                </Button>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-2"></CardFooter>
        </Card>

        <div className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Remember your password?{" "}
          <Button variant="link" className="px-0 font-normal" asChild>
            <Link href="/signin">Back to sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
