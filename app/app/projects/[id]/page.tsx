"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectOverview } from "@/components/projects/project-overview"
import { ProjectFiles } from "@/components/projects/project-files"

export default function ProjectDetailsPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("overview")

  // In a real app, fetch project data based on params.id
  const project = {
    id: params.id as string,
    name: "Lemonade Dashboard",
    description: "Project management dashboard with analytics",
    status: "In Progress",
    progress: 65,
    dueDate: "2024-09-01",
    team: [
      { name: "Alesha H", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "John D", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Sarah M", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    files: [
      {
        id: "1",
        name: "Project Requirements.pdf",
        type: "PDF",
        size: "2.5 MB",
        uploadedBy: "Alesha H",
        uploadedAt: "2024-02-28",
        status: "Approved",
      },
      {
        id: "2",
        name: "Design Mockups.fig",
        type: "Figma",
        size: "15 MB",
        uploadedBy: "John D",
        uploadedAt: "2024-02-27",
        status: "In Review",
      },
      {
        id: "3",
        name: "Technical Specs.docx",
        type: "Document",
        size: "1.2 MB",
        uploadedBy: "Sarah M",
        uploadedAt: "2024-02-26",
        status: "Pending",
      },
    ],
  }

  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-light">{project.name}</h1>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 gap-4 rounded-full p-1 w-fit">
            <TabsTrigger value="overview" className="rounded-full w-32">
              Overview
            </TabsTrigger>
            <TabsTrigger value="files" className="rounded-full w-32">
              Files
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <ProjectOverview project={project} />
          </TabsContent>
          <TabsContent value="files">
            <ProjectFiles project={project} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
