"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Camera } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Notification } from "@/components/ui/notification"

export function ProfileSettings() {
  const [avatar, setAvatar] = useState("/placeholder.svg?height=100&width=100")
  const [notification, setNotification] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatar(reader.result as string)
        setNotification({
          show: true,
          message: "Profile picture updated successfully!",
        })
        setTimeout(() => setNotification({ show: false, message: "" }), 3000)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6 w-2/5">
      {notification.show && <Notification variant="success" title="Success" description={notification.message} />}

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your profile information and email address.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-24 w-24 cursor-pointer" onClick={handleAvatarClick}>
                <AvatarImage src={avatar} alt="Profile" />
                <AvatarFallback>AH</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                onClick={handleAvatarClick}
              >
                <Camera className="h-4 w-4" />
              </Button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>
            <p className="text-sm text-muted-foreground">Click to upload a new profile picture</p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" defaultValue="Alesha Hyocinth" className="rounded-full" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                defaultValue="alesha@example.com"
                className="rounded-full"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Write a short bio about yourself"
                className="rounded-3xl min-h-[100px]"
                defaultValue="Project Manager at Lemonade with over 5 years of experience in SaaS development."
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="rounded-full">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
