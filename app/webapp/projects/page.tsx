"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/projects/project-card";
import { NewProjectDialog } from "@/components/projects/new-project-dialog";

const projects = [
  {
    id: "1",
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
  },
  {
    id: "2",
    name: "Client Portal",
    description: "Customer access portal for project tracking",
    status: "Planning",
    progress: 25,
    dueDate: "2024-10-15",
    team: [
      { name: "Mike R", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Emma S", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: "3",
    name: "Mobile App",
    description: "Cross-platform mobile application",
    status: "Completed",
    progress: 100,
    dueDate: "2024-08-30",
    team: [
      { name: "Chris P", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Lisa K", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Tom W", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
];

export default function ProjectsPage() {
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-lg font-light">Projects</h1>
          <Button
            onClick={() => setIsNewProjectOpen(true)}
            className="rounded-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
            <CardDescription>
              View and manage all your projects in one place.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 rounded-full"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <NewProjectDialog
        open={isNewProjectOpen}
        onOpenChange={setIsNewProjectOpen}
      />
    </div>
  );
}
