import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const templates = [
  {
    id: "welcome",
    name: "Welcome Email",
    description: "Send to new users after they sign up",
    preview:
      "https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "onboarding",
  },
  {
    id: "invoice",
    name: "Invoice",
    description: "Monthly billing notification",
    preview:
      "https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "billing",
  },
  {
    id: "newsletter",
    name: "Newsletter",
    description: "Monthly product updates and news",
    preview:
      "https://images.unsplash.com/photo-1640102371408-5fc0c42a8792?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    category: "marketing",
  },
  {
    id: "verification",
    name: "Email Verification",
    description: "Verify user email addresses",
    preview:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    category: "account",
  },
  {
    id: "trial-ending",
    name: "Trial Ending Soon",
    description: "Notify users before their trial expires",
    preview:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
    category: "billing",
  },
]

export default function EmailTemplatesPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-lg font-light">Email Templates</h1>
        </div>
      </header>

      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="mx-auto">
          <Tabs defaultValue="all" className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <TabsList className="rounded-full">
                <TabsTrigger value="all" className="rounded-full">
                  All Templates
                </TabsTrigger>
                <TabsTrigger value="onboarding" className="rounded-full">
                  Onboarding
                </TabsTrigger>
                <TabsTrigger value="account" className="rounded-full">
                  Account
                </TabsTrigger>
                <TabsTrigger value="billing" className="rounded-full">
                  Billing
                </TabsTrigger>
                <TabsTrigger value="marketing" className="rounded-full">
                  Marketing
                </TabsTrigger>
              </TabsList>
              <Button asChild className="rounded-full">
                <Link href="/app/email-templates/create">
                  Create Custom Template <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Link key={template.id} href={`/app/email-templates/${template.id}`}>
                    <Card className="overflow-hidden h-full hover:border-primary transition-colors">
                      <div className="aspect-[4/3] relative bg-muted/30">
                        <img
                          src={template.preview || "/placeholder.svg"}
                          alt={template.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="font-light">{template.name}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {["onboarding", "account", "billing", "marketing"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {templates
                    .filter((template) => template.category === category)
                    .map((template) => (
                      <Link key={template.id} href={`/app/email-templates/${template.id}`}>
                        <Card className="overflow-hidden h-full hover:border-primary transition-colors">
                          <div className="aspect-[4/3] relative bg-muted/30">
                            <img
                              src={template.preview || "/placeholder.svg"}
                              alt={template.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="font-light">{template.name}</CardTitle>
                            <CardDescription>{template.description}</CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  )
}
