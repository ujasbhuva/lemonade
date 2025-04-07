"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Copy, Eye, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Notification } from "@/components/ui/notification"
import { EmailTemplatePreview } from "@/components/email/email-template-preview"
import { EmailTemplateCode } from "@/components/email/email-template-code"

// This would come from a database in a real app
const getTemplateData = (id: string) => {
  const templates = {
    welcome: {
      name: "Welcome Email",
      description: "Send to new users after they sign up",
      subject: "Welcome to Lemonade!",
    },
    "password-reset": {
      name: "Password Reset",
      description: "Help users recover their account",
      subject: "Reset Your Password",
    },
    invoice: {
      name: "Invoice",
      description: "Monthly billing notification",
      subject: "Your Monthly Invoice",
    },
    newsletter: {
      name: "Newsletter",
      description: "Monthly product updates and news",
      subject: "Lemonade Monthly Newsletter",
    },
    verification: {
      name: "Email Verification",
      description: "Verify user email addresses",
      subject: "Verify Your Email Address",
    },
    "trial-ending": {
      name: "Trial Ending Soon",
      description: "Notify users before their trial expires",
      subject: "Your Trial is Ending Soon",
    },
  }

  return (
    templates[id as keyof typeof templates] || {
      name: "Template Not Found",
      description: "This template doesn't exist",
      subject: "N/A",
    }
  )
}

export default function TemplateDetailPage() {
  const params = useParams()
  const templateId = params.id as string
  const template = getTemplateData(templateId)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")

  const handleCopyCode = () => {
    const code = document.getElementById("template-code")?.textContent
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-light mb-2">{template.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">{template.description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Subject:</span>
              <span>{template.subject}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {copied && (
            <div className="mb-4">
              <Notification
                variant="success"
                title="Copied to clipboard"
                description="The template code has been copied to your clipboard."
              />
            </div>
          )}

          <Card>
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center justify-between border-b px-4 py-2">
                  <TabsList className="rounded-full">
                    <TabsTrigger value="preview" className="rounded-full gap-2">
                      <Eye className="h-4 w-4" />
                      Preview
                    </TabsTrigger>
                    <TabsTrigger value="code" className="rounded-full gap-2">
                      <Code className="h-4 w-4" />
                      HTML
                    </TabsTrigger>
                  </TabsList>

                  <Button variant="outline" size="sm" className="rounded-full gap-2" onClick={handleCopyCode}>
                    <Copy className="h-4 w-4" />
                    Copy Code
                  </Button>
                </div>

                <TabsContent value="preview" className="mt-0">
                  <div className="p-4 md:p-6 bg-muted/30 min-h-[600px]">
                    <div className="bg-white max-w-[600px] mx-auto shadow-md">
                      <EmailTemplatePreview templateId={templateId} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-0">
                  <div className="p-4 md:p-6 bg-muted/30 min-h-[600px] overflow-auto">
                    <div id="template-code" className="bg-white p-4 rounded-lg border">
                      <EmailTemplateCode templateId={templateId} />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

