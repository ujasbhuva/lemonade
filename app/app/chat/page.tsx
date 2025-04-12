"use client"

import type React from "react"

import { useState } from "react"
import { format } from "date-fns"
import { Search, Send, Phone, Video, MoreVertical, Plus, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

// Sample data
const conversations = [
  {
    id: "1",
    name: "Sarah Mitchell",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "The new design looks great!",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "John Davidson",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "When can we schedule the meeting?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    unread: 0,
    online: true,
  },
  {
    id: "3",
    name: "Emma Thompson",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "I'll review the documents tomorrow",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    unread: 0,
    online: false,
  },
]

const messages = [
  {
    id: "1",
    content: "Hi Sarah, how's the design coming along?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    sender: "me",
  },
  {
    id: "2",
    content: "Hey! I've just finished the main components. Would you like to take a look?",
    timestamp: new Date(Date.now() - 1000 * 60 * 25),
    sender: "them",
  },
  {
    id: "3",
    content: "That would be great! Can you share the Figma link?",
    timestamp: new Date(Date.now() - 1000 * 60 * 20),
    sender: "me",
  },
  {
    id: "4",
    content: "Here you go: https://figma.com/file/...",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    sender: "them",
  },
  {
    id: "5",
    content: "The new design looks great! I especially like the new color scheme and typography choices.",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    sender: "me",
  },
]

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageInput, setMessageInput] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    // In a real app, this would send the message to an API
    console.log("Sending message:", messageInput)
    setMessageInput("")
  }

  return (
    <div className="flex h-[calc(100vh-3rem)] rounded-3xl border shadow">
      {/* Conversation List - Hidden on mobile */}
      <div className="hidden md:flex flex-col w-[320px] border-r bg-muted/10">
        <div className="h-16 px-4 border-b flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-light">Chat</h2>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-9 bg-background rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b"
          />
        </div>
        <ScrollArea className="flex-1">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 cursor-pointer hover:bg-accent/50 transition-colors ${
                selectedConversation.id === conversation.id ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-background rounded-full bg-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{conversation.name}</span>
                    <span className="text-xs text-muted-foreground">{format(conversation.timestamp, "HH:mm")}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</span>
                    {conversation.unread > 0 && (
                      <Badge variant="default" className="rounded-full h-5 w-5 flex items-center justify-center p-0">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-background rounded-r-3xl">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b h-16">
          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[320px]">
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search messages..." className="pl-9" />
                  </div>
                </div>
                <ScrollArea className="flex-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 cursor-pointer hover:bg-accent/50 transition-colors ${
                        selectedConversation.id === conversation.id ? "bg-accent" : ""
                      }`}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{conversation.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {format(conversation.timestamp, "HH:mm")}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} />
              <AvatarFallback>
                {selectedConversation.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{selectedConversation.name}</div>
              <div className="text-sm text-muted-foreground">{selectedConversation.online ? "Online" : "Offline"}</div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Video className="h-5 w-5" />
            </Button>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Search in Conversation</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Block User</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">{format(message.timestamp, "HH:mm")}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon" className="rounded-full shrink-0">
              <Plus className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="rounded-full"
            />
            <Button type="button" variant="ghost" size="icon" className="rounded-full shrink-0">
              <Smile className="h-5 w-5" />
            </Button>
            <Button type="submit" size="icon" className="rounded-full shrink-0">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
