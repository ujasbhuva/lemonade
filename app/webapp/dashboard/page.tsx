"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Phone, Send } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", activity: 186 },
  { month: "February", activity: 305 },
  { month: "March", activity: 237 },
  { month: "April", activity: 73 },
  { month: "May", activity: 209 },
  { month: "June", activity: 214 },
];
const chartConfig = {
  activity: {
    label: "Activity",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          <Card className="overflow-hidden bg-accent/50 rounded-3xl">
            <CardHeader className="pb-2 px-6 pt-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="" alt="Alesha Hyocinth" />
                  <AvatarFallback>AH</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-light text-sm">
                    Alesha Hyocinth
                  </CardTitle>
                  <CardDescription>Project Manager</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light">Lemonade</h3>
                  <p className="text-sm text-muted-foreground">
                    Industry: SaaS
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Project progress</span>
                    <span>34%</span>
                  </div>
                  <Progress value={34} className="h-3 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="report">
                    <SelectTrigger className="w-full rounded-full py-3">
                      <SelectValue placeholder="Select a report" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="report">Select a report</SelectItem>
                      <SelectItem value="progress">Progress Report</SelectItem>
                      <SelectItem value="financial">
                        Financial Report
                      </SelectItem>
                      <SelectItem value="team">Team Report</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    size="icon"
                    variant="default"
                    className="rounded-full p-5 bg-black text-white hover:bg-black/90"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Meetings Card */}
          <Card className="rounded-3xl">
            <CardHeader className="px-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-light">
                    Upcoming Meetings
                  </CardTitle>
                </div>
                <Select defaultValue="september">
                  <SelectTrigger className="w-[160px] rounded-full">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="september">September</SelectItem>
                    <SelectItem value="october">October</SelectItem>
                    <SelectItem value="november">November</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>3 calls</span>
                  <span>•</span>
                  <span>Thu, 11</span>
                </div>
                <div className="grid grid-cols-7 gap-3 text-center">
                  {[
                    { day: "8", label: "Mon" },
                    { day: "9", label: "Tue" },
                    { day: "10", label: "Wed" },
                    { day: "11", label: "Thu", active: true },
                    { day: "12", label: "Fri" },
                    { day: "13", label: "Sat" },
                    { day: "14", label: "Sun" },
                  ].map((date) => (
                    <div
                      key={date.day}
                      className={`flex flex-col items-center justify-center rounded-full p-4 ${
                        date.active ? "bg-primary text-white" : "bg-muted"
                      }`}
                    >
                      <span className="text-md font-light">{date.day}</span>
                      <span className="text-xs font-light">{date.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center relative px-4">
                  <div className="absolute w-full border left-0 top-1/2 border-muted-foreground border-dashed"></div>
                  <div className="h-2 w-2 z-10 rounded-full bg-muted-foreground"></div>
                  <div className="h-2 w-2 z-10 rounded-full bg-muted-foreground"></div>
                  <div className="h-2 w-2 z-10 rounded-full bg-muted-foreground"></div>
                  <div className="h-3 w-3 z-10 rounded-full bg-black"></div>
                  <div className="h-2 w-2 z-10 rounded-full bg-muted-foreground"></div>
                  <div className="h-2 w-2 z-10 rounded-full bg-muted-foreground"></div>
                  <div className="h-2 w-2 z-10 rounded-full bg-muted-foreground"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Time Card */}
          <Card className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-muted p-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">
                    Total project time
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl font-bold">645</span>
                <span className="text-5xl font-light text-muted-foreground">
                  {" "}
                  h
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Project Roadmap Card */}
          <Card className="col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Project Roadmap</CardTitle>
                <Button>
                  <span className="mr-1">+</span> Add task
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-full bg-muted/50 p-2 px-4">
                    <div className="flex items-center justify-between">
                      <span>Intro</span>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="flex">
                    <Avatar className="h-6 w-6 border-2 border-background">
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <Avatar className="-ml-2 h-6 w-6 border-2 border-background">
                      <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-full bg-muted/50 p-2 px-4">
                    <div className="flex items-center justify-between">
                      <span>Audit</span>
                      <span>59%</span>
                    </div>
                  </div>
                  <div className="flex">
                    <Avatar className="h-6 w-6 border-2 border-background">
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-full bg-accent p-2 px-4">
                    <div className="flex items-center justify-between">
                      <span>Research</span>
                      <span>75%</span>
                    </div>
                  </div>
                  <div className="flex">
                    <Avatar className="h-6 w-6 border-2 border-background">
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <Avatar className="-ml-2 h-6 w-6 border-2 border-background">
                      <AvatarFallback>E</AvatarFallback>
                    </Avatar>
                    <Avatar className="-ml-2 h-6 w-6 border-2 border-background">
                      <AvatarFallback>F</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex justify-between pt-4 text-sm">
                  <span>Mon 12</span>
                  <span>Tue 13</span>
                  <span>Wed 14</span>
                  <span className="font-medium">Thu 15</span>
                  <span>Fri 16</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Efficiency Card */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-black text-white">
              <div className="flex items-center justify-between">
                <CardTitle>Efficiency</CardTitle>
                <Select defaultValue="january">
                  <SelectTrigger className="w-[120px] border-white/20 bg-transparent text-white rounded-full">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="february">February</SelectItem>
                    <SelectItem value="march">March</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="rounded-full bg-white/20 px-2 py-1 text-xs">
                  +40%
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer config={chartConfig} className="bg-black">
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="activity"
                    type="natural"
                    fillOpacity={0}
                    stroke="lime"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
