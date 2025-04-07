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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Calendar,
  MessageSquare,
  Phone,
  Plus,
  Search,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample chart data
const projectStatsData = [
  { month: "Jan", lorem: 150000, ipsum: 140000 },
  { month: "Feb", lorem: 180000, ipsum: 90000 },
  { month: "Mar", lorem: 220000, ipsum: 150000 },
  { month: "Apr", lorem: 280000, ipsum: 230000 },
  { month: "May", lorem: 250000, ipsum: 300000 },
  { month: "Jun", lorem: 300000, ipsum: 380000 },
  { month: "Jul", lorem: 330000, ipsum: 340000 },
  { month: "Aug", lorem: 380000, ipsum: 280000 },
  { month: "Sep", lorem: 450000, ipsum: 220000 },
  { month: "Oct", lorem: 500000, ipsum: 320000 },
  { month: "Nov", lorem: 470000, ipsum: 230000 },
];

const barChartData = [
  { month: "Jan", lorem: 280000, ipsum: 320000 },
  { month: "Feb", lorem: 270000, ipsum: 350000 },
  { month: "Mar", lorem: 590000, ipsum: 150000 },
  { month: "Apr", lorem: 290000, ipsum: 420000 },
  { month: "May", lorem: 140000, ipsum: 260000 },
];

const balanceData = [
  { month: "01", value: 65 },
  { month: "02", value: 85 },
  { month: "03", value: 52 },
  { month: "04", value: 40 },
  { month: "05", value: 70 },
  { month: "06", value: 88 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-lg font-light">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-64 rounded-full border border-input bg-background py-2 pl-10 pr-4 text-sm"
              />
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-20 rounded-full">
                <SelectValue placeholder="EN" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
                <SelectItem value="de">DE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <main className="flex-1 container p-4 md:p-6">
        {/* Notification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-amber-50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="rounded-full bg-amber-200 p-3">
                <Bell className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <CardTitle className="text-sm font-light">
                  Notification
                </CardTitle>
                <CardDescription>5 Unread notification</CardDescription>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="rounded-full bg-green-200 p-3">
                <MessageSquare className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-sm font-light">Message</CardTitle>
                <CardDescription>5 Unread notification</CardDescription>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="rounded-full bg-purple-200 p-3">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-sm font-light">Calendar</CardTitle>
                <CardDescription>5 Unread notification</CardDescription>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-white">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="rounded-full bg-white/20 p-3">
                <Plus className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-base font-light">
                  Create New Project
                </CardTitle>
              </div>
            </CardContent>
          </Card>
        </div>


        <div className="grid gap-6 md:grid-cols-4 mb-6">
          {/* Client Stats */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-base font-light">Total Clients</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">78</span>
                    <span className="text-sm text-green-600">+0.5%</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full"
                    style={{
                      background:
                        "conic-gradient(hsl(var(--primary)) 76%, #e5e7eb 0)",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-medium">
                      76%
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Task Stats */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-base font-light">Total Task Done</h3>
                  <div className="text-3xl font-bold mt-2">34</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    87 left from target
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-accent rounded-full overflow-hidden ">
                <div
                  className="h-full bg-primary"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Total Clients */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-base font-light mb-2">Total Clients</h3>
              <div className="text-3xl font-bold">565</div>
              <div className="text-sm text-red-500 mb-4">
                -3% than last month
              </div>
              <div className="h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { value: 10 },
                      { value: 15 },
                      { value: 25 },
                      { value: 20 },
                      { value: 30 },
                      { value: 22 },
                    ]}
                  >
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* New Projects */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-base font-light mb-2">New Projects</h3>
              <div className="text-3xl font-bold">565</div>
              <div className="text-sm text-green-600 mb-4">
                +0.5% than last month
              </div>
              <div className="h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { value: 15 },
                      { value: 25 },
                      { value: 20 },
                      { value: 30 },
                      { value: 40 },
                      { value: 35 },
                    ]}
                  >
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>


        <div className="grid gap-6 md:grid-cols-3 mb-6">
          {/* Project Statistics Chart */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center justify-between">
                  <CardTitle>Project Statistics</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="text-sm">Lorem</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                      <span className="text-sm">Ipsum</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectStatsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `${value / 1000}k`}
                        dx={-10}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "16px",
                          border: "1px solid #eee",
                        }}
                        formatter={(value) => [`${value.toLocaleString()}`, ""]}
                      />
                      <Line
                        type="monotone"
                        dataKey="lorem"
                        stroke="hsl(var(--primary))"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="ipsum"
                        stroke="#FBBF24"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-6 md:grid-cols-2 my-6">
              {/* Current Balance Card */}
              <Card>
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="text-base font-light">
                    Current Balance
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="mb-2">
                    <h3 className="text-3xl font-bold">$ 25,456.44</h3>
                    <p className="text-sm text-green-600">
                      +3.2 than last week
                    </p>
                  </div>
                  <div className="h-[180px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={balanceData} barGap={10}>
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          dy={10}
                        />
                        <Bar
                          dataKey="value"
                          fill="#22C55E"
                          radius={[4, 4, 0, 0]}
                          barSize={20}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Card */}
              <Card>
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  <div className="relative w-48 h-48 mb-4">
                    <div className="absolute inset-0 rounded-full bg-accent"></div>
                    <div
                      className="absolute inset-0 rounded-full bg-accent"
                      style={{
                        clipPath: "polygon(0 0, 50% 0, 50% 50%, 0 50%)",
                        transform: "rotate(90deg)",
                        background:
                          "conic-gradient(from 0deg, hsl(var(--primary)) 50%, transparent 0%)",
                      }}
                    ></div>
                    <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold">On Progress</div>
                        <div className="text-3xl font-bold text-primary">
                          50%
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-1">
                    Workload Dashboard
                  </h3>
                  <p className="text-base font-light mb-1">For CMS Website</p>
                  <p className="text-sm text-muted-foreground text-center">
                    Praesent eu dolor eu orci vehiculo euismod.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="md:col-span-1 space-y-6">
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

            {/* Daily Tasks Card */}
            <Card>
              <CardHeader className="px-6 pt-6">
                <CardTitle>Daily Task</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="flex">
                    <div className="w-20 text-sm text-muted-foreground">
                      10:00
                    </div>
                    <div className="flex-1 bg-orange-200 rounded-xl p-3 text-orange-800">
                      <p className="font-medium">iOS Dev team meeting</p>
                      <p className="text-sm">10:00 - 11:00</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-20 text-sm text-muted-foreground">
                      11:00
                    </div>
                    <div className="flex flex-1 gap-2">
                      <div className="flex-1 bg-amber-200 rounded-xl p-3 text-amber-800">
                        <p className="font-medium">Design meeting</p>
                        <p className="text-sm">11:00 - 11:30</p>
                      </div>
                      <div className="flex-1 bg-accent rounded-xl p-3 text-primary">
                        <p className="font-medium">SEO meeting</p>
                        <p className="text-sm">11:30 - 12:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Promotional Card */}
            <Card className="bg-indigo-600 text-white rounded-3xl">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <div>
                  <h2 className="text-2xl font-light mb-2">
                    Manage your project in one touch
                  </h2>
                  <p className="text-sm text-indigo-100 mb-6">
                    Etiam facilisis ligula nec velit posuere egestas. Nunc
                    dictum
                  </p>
                </div>
                <Button className="bg-white text-primary hover:bg-white/90 self-start">
                  Try For Free Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bar Chart */}
        <Card className="mb-6">
          <CardHeader className="px-6 pt-6">
            <CardTitle>Project Statistics</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData} barGap={20}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `${value / 1000}k`}
                    dx={-10}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "1px solid #eee",
                    }}
                    formatter={(value) => [`${value.toLocaleString()}`, ""]}
                  />
                  <Bar
                    dataKey="lorem"
                    fill="#818cf8"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                  <Bar
                    dataKey="ipsum"
                    fill="#fcd34d"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
