"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { SubscriptionSettings } from "@/components/settings/subscription-settings"
import { PreferenceSettings } from "@/components/settings/preference-settings"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-light">Settings</h1>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-3 gap-4 rounded-full p-1 w-fit">
            <TabsTrigger value="profile" className="rounded-full w-32">
              Profile
            </TabsTrigger>
            <TabsTrigger value="preferences" className="rounded-full w-32">
              Preferences
            </TabsTrigger>
            <TabsTrigger value="subscription" className="rounded-full w-32">
              Subscription
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4">
            <ProfileSettings />
          </TabsContent>
          <TabsContent value="subscription" className="space-y-4">
            <SubscriptionSettings />
          </TabsContent>
          <TabsContent value="preferences" className="space-y-4">
            <PreferenceSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
