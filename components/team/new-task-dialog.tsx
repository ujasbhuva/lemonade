"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface NewTaskDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NewTaskDialog({ open, onOpenChange }: NewTaskDialogProps) {
  const [priority, setPriority] = useState<string>()
  const [assignee, setAssignee] = useState<string>()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>Add a new task to the board.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Task Title</Label>
            <Input id="title" placeholder="Enter task title" className="rounded-full" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter task description" className="rounded-3xl min-h-[100px]" />
          </div>
          <div className="grid gap-2">
            <Label>Priority</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger className="rounded-full">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Assignee</Label>
            <Select value={assignee} onValueChange={setAssignee}>
              <SelectTrigger className="rounded-full">
                <SelectValue placeholder="Select team member" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alesha">Alesha H</SelectItem>
                <SelectItem value="john">John D</SelectItem>
                <SelectItem value="sarah">Sarah M</SelectItem>
                <SelectItem value="mike">Mike R</SelectItem>
                <SelectItem value="emma">Emma S</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-full">
            Cancel
          </Button>
          <Button className="rounded-full">Create Task</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

