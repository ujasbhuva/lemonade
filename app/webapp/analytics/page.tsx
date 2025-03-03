"use client"

import { useState } from "react"
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnalyticsChart } from "@/components/analytics/analytics-chart"
import { AnalyticsMetrics } from "@/components/analytics/analytics-metrics"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-lg font-light">Analytics</h1>
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AnalyticsMetrics />
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 gap-4 rounded-full p-1">
            <TabsTrigger value="overview" className="rounded-full">
              <LineChart className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="projects" className="rounded-full">
              <BarChart3 className="mr-2 h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="tasks" className="rounded-full">
              <TrendingUp className="mr-2 h-4 w-4" />
              Tasks
            </TabsTrigger>
            <TabsTrigger value="team" className="rounded-full">
              <PieChart className="mr-2 h-4 w-4" />
              Team
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Activity Overview</CardTitle>
                  <CardDescription>Project activity across all teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnalyticsChart type="line" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Task Distribution</CardTitle>
                  <CardDescription>Tasks by status</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnalyticsChart type="pie" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Project Performance</CardTitle>
                <CardDescription>Progress and completion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsChart type="bar" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tasks">
            <Card>
              <CardHeader>
                <CardTitle>Task Completion Trends</CardTitle>
                <CardDescription>Task completion over time</CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsChart type="area" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Team Productivity</CardTitle>
                  <CardDescription>Productivity metrics by team member</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnalyticsChart type="bar" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Workload Distribution</CardTitle>
                  <CardDescription>Current workload by team member</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnalyticsChart type="pie" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

