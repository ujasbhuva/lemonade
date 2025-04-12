"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { MoreHorizontal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Task {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  assignee: {
    name: string
    avatar: string
  }
}

interface Column {
  id: string
  title: string
  tasks: Task[]
}

const initialColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "task-1",
        title: "Design System Updates",
        description: "Update component library with new design tokens",
        priority: "high",
        assignee: {
          name: "Alesha H",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      },
      {
        id: "task-2",
        title: "API Documentation",
        description: "Write documentation for new API endpoints",
        priority: "medium",
        assignee: {
          name: "John D",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "task-3",
        title: "User Authentication",
        description: "Implement OAuth2 authentication flow",
        priority: "high",
        assignee: {
          name: "Sarah M",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        id: "task-4",
        title: "Dashboard Analytics",
        description: "Add new analytics charts to dashboard",
        priority: "medium",
        assignee: {
          name: "Mike R",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "task-5",
        title: "Email Templates",
        description: "Create responsive email templates",
        priority: "low",
        assignee: {
          name: "Emma S",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      },
    ],
  },
]

const priorityColors = {
  low: "bg-blue-50 text-blue-700",
  medium: "bg-yellow-50 text-yellow-700",
  high: "bg-red-50 text-red-700",
}

interface KanbanBoardProps {
  searchQuery: string
}

export function KanbanBoard({ searchQuery }: KanbanBoardProps) {
  const [columns, setColumns] = useState(initialColumns)
  const [activeColumn, setActiveColumn] = useState<string | null>(null)

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const { source, destination } = result

    if (source.droppableId === destination.droppableId) {
      // Reorder within the same column
      const column = columns.find((col) => col.id === source.droppableId)
      if (!column) return

      const newTasks = Array.from(column.tasks)
      const [removed] = newTasks.splice(source.index, 1)
      newTasks.splice(destination.index, 0, removed)

      const newColumns = columns.map((col) => (col.id === source.droppableId ? { ...col, tasks: newTasks } : col))
      setColumns(newColumns)
    } else {
      // Move between columns
      const sourceColumn = columns.find((col) => col.id === source.droppableId)
      const destColumn = columns.find((col) => col.id === destination.droppableId)
      if (!sourceColumn || !destColumn) return

      const sourceTasks = Array.from(sourceColumn.tasks)
      const destTasks = Array.from(destColumn.tasks)
      const [removed] = sourceTasks.splice(source.index, 1)
      destTasks.splice(destination.index, 0, removed)

      const newColumns = columns.map((col) => {
        if (col.id === source.droppableId) {
          return { ...col, tasks: sourceTasks }
        }
        if (col.id === destination.droppableId) {
          return { ...col, tasks: destTasks }
        }
        return col
      })
      setColumns(newColumns)
    }
  }

  const filteredColumns = columns.map((column) => ({
    ...column,
    tasks: column.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }))

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex items-center space-x-2 mb-4">
          <Select value={activeColumn || filteredColumns[0].id} onValueChange={setActiveColumn}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select column" />
            </SelectTrigger>
            <SelectContent>
              {filteredColumns.map((column) => (
                <SelectItem key={column.id} value={column.id}>
                  {column.title} ({column.tasks.length})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {filteredColumns.map((column) => (
          <div key={column.id} className={column.id === (activeColumn || filteredColumns[0].id) ? "block" : "hidden"}>
            <div className="font-medium mb-4">{column.title}</div>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {column.tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="cursor-grab active:cursor-grabbing"
                        >
                          <CardContent className="p-4 space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium">{task.title}</h3>
                                <p className="text-sm text-muted-foreground">{task.description}</p>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className={`rounded-full ${priorityColors[task.priority]}`}>
                                {task.priority}
                              </Badge>
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                                <AvatarFallback>
                                  {task.assignee.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {filteredColumns.map((column) => (
          <div key={column.id} className="space-y-4">
            <div className="font-medium">{column.title}</div>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4 min-h-[200px]">
                  {column.tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="cursor-grab active:cursor-grabbing"
                        >
                          <CardContent className="p-4 space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium">{task.title}</h3>
                                <p className="text-sm text-muted-foreground">{task.description}</p>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className={`rounded-full ${priorityColors[task.priority]}`}>
                                {task.priority}
                              </Badge>
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                                <AvatarFallback>
                                  {task.assignee.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  )
}
