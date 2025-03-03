import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HelpPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-light">Help Center</h1>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I create a new project?
                </AccordionTrigger>
                <AccordionContent>
                  To create a new project, navigate to the Projects page and
                  click the "New Project" button. Fill in the required
                  information such as project name, description, and team
                  members, then click "Create Project".
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How can I invite team members?
                </AccordionTrigger>
                <AccordionContent>
                  You can invite team members by going to the Team page and
                  clicking "Invite Member". Enter their email address and select
                  their role. They will receive an invitation email with
                  instructions to join.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do I track project progress?
                </AccordionTrigger>
                <AccordionContent>
                  Project progress can be tracked through the Dashboard and
                  Analytics pages. You can view various metrics, charts, and
                  reports showing task completion rates, team performance, and
                  overall project status.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What are the available task priorities?
                </AccordionTrigger>
                <AccordionContent>
                  Tasks can be assigned three priority levels: Low, Medium, and
                  High. These help team members understand task urgency and
                  manage their workload effectively.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our support team is available 24/7 to help you with any
                  questions or issues you may have.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Contact Methods</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Email: support@Lemonade.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Live Chat: Available on dashboard</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Average response time: &lt; 2 hours
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Helpful guides and tutorials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Video Tutorials</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Getting Started Guide</li>
                    <li>Project Management Basics</li>
                    <li>Advanced Features Tutorial</li>
                    <li>Team Collaboration Tips</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Documentation</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>User Manual</li>
                    <li>API Reference</li>
                    <li>Best Practices Guide</li>
                    <li>Security Guidelines</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
