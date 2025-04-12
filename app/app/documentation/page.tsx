import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentationPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-light">Documentation</h1>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn how to use Lemonade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Introduction</h2>
              <p className="text-muted-foreground">
                Lemonade is a comprehensive project management solution designed to help teams collaborate effectively
                and track progress efficiently.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Project Dashboard with real-time analytics</li>
                <li>Team collaboration tools</li>
                <li>Task management with Kanban board</li>
                <li>File sharing and version control</li>
                <li>Customizable workflows</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">System Requirements</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>Internet connection</li>
                <li>Minimum screen resolution: 1280x720</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>User Guide</CardTitle>
              <CardDescription>Step-by-step instructions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Creating a Project</h3>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                    <li>Navigate to the Projects page</li>
                    <li>Click "New Project"</li>
                    <li>Fill in project details</li>
                    <li>Add team members</li>
                    <li>Set up project milestones</li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Managing Tasks</h3>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                    <li>Open the Team Board</li>
                    <li>Create new tasks</li>
                    <li>Assign team members</li>
                    <li>Track progress</li>
                    <li>Update task status</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Integration guidelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Authentication</h3>
                  <p className="text-muted-foreground">
                    API requests are authenticated using Bearer tokens. Obtain your API key from the settings page.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Endpoints</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>/api/projects - Project management</li>
                    <li>/api/tasks - Task operations</li>
                    <li>/api/users - User management</li>
                    <li>/api/analytics - Analytics data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
