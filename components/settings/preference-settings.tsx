"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Combobox } from "@/components/ui/combobox"

const themeOptions = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
]

const languageOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
]

const timezoneOptions = [
  { value: "utc", label: "UTC" },
  { value: "est", label: "Eastern Time" },
  { value: "cst", label: "Central Time" },
  { value: "pst", label: "Pacific Time" },
]

export function PreferenceSettings() {
  return (
    <div className="space-y-6 w-2/5">
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how Lemonade looks and feels.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Theme</Label>
            <Combobox options={themeOptions} value="system" placeholder="Select theme" />
          </div>
          <div className="space-y-2">
            <Label>Language</Label>
            <Combobox options={languageOptions} value="en" placeholder="Select language" />
          </div>
          <div className="space-y-2">
            <Label>Timezone</Label>
            <Combobox options={timezoneOptions} value="utc" placeholder="Select timezone" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="marketing-emails">Marketing Emails</Label>
            <Switch id="marketing-emails" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
          <CardDescription>Manage your privacy settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="public-profile">Public Profile</Label>
            <Switch id="public-profile" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="show-activity">Show Activity Status</Label>
            <Switch id="show-activity" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="share-data">Share Usage Data</Label>
            <Switch id="share-data" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

