import Link from "next/link"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: {
    id: string
    name: string
    description: string
    status: string
    progress: number
    dueDate: string
    team: Array<{
      name: string
      avatar: string
    }>
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    "In Progress": "bg-blue-50 text-blue-700",
    Planning: "bg-yellow-50 text-yellow-700",
    Completed: "bg-green-50 text-green-700",
  }

  return (
    <Link href={`/app/projects/${project.id}`}>
      <Card className="hover:border-primary transition-colors">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="font-light">{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </div>
            <Badge
              variant="outline"
              className={`rounded-full px-2 py-0.5 text-xs ${
                statusColors[project.status as keyof typeof statusColors]
              }`}
            >
              {project.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.team.map((member, i) => (
                <Avatar key={i} className="border-2 border-background h-8 w-8">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(project.dueDate).toLocaleDateString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

