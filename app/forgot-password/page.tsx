import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Illustration with gradient */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-primary/20 via-primary/5 to-background">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <Image
            src="/images/forgot-password-illustration.svg"
            alt="Forgot password illustration"
            width={500}
            height={500}
            className="max-w-full h-auto"
            priority
          />
        </div>
        <div className="absolute bottom-12 left-12 max-w-md">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Password Recovery
          </h2>
          <p className="text-muted-foreground">
            We'll help you reset your password and get back to your account
          </p>
        </div>
      </div>

      {/* Right side - Forgot password form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              No worries, we'll send you reset instructions
            </p>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="reset">Reset</TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <Button type="button" className="w-full">
                Send Reset Link
              </Button>
            </TabsContent>

            <TabsContent value="reset" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium">Create new password</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Your new password must be different from previous passwords
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>

              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </TabsContent>
          </Tabs>

          <div className="text-center text-sm">
            Remember your password?{" "}
            <Link
              href="/signin"
              className="font-medium text-primary hover:underline"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
