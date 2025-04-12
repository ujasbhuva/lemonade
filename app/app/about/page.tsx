import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-light">About Lemonade</h1>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Empowering teams to achieve more</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Lemonade is dedicated to revolutionizing project management through innovative solutions that enhance team
              collaboration, streamline workflows, and drive successful outcomes. Our platform combines powerful
              features with intuitive design to help teams of all sizes work more efficiently.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
              <CardDescription>Meet the people behind Lemonade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Alesha Hyocinth" />
                    <AvatarFallback>AH</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Alesha Hyocinth</h3>
                    <p className="text-sm text-muted-foreground">CEO & Founder</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="John Davidson" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">John Davidson</h3>
                    <p className="text-sm text-muted-foreground">CTO</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Sarah Mitchell" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Sarah Mitchell</h3>
                    <p className="text-sm text-muted-foreground">Head of Design</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Values</CardTitle>
              <CardDescription>What drives us forward</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We constantly push boundaries to create cutting-edge solutions that solve real problems.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe in the power of teamwork and foster an environment of open communication.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for excellence in everything we do, from product development to customer support.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">User-Centric</h3>
                  <p className="text-sm text-muted-foreground">
                    Our users are at the heart of every decision we make and feature we build.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
