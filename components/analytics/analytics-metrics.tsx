import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const metrics = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: ArrowUpIcon,
    change: "+19%",
    trend: "up",
  },
  {
    title: "Subscriptions",
    value: "2350",
    icon: ArrowUpIcon,
    change: "+12%",
    trend: "up",
  },
  {
    title: "Avg. Session Time",
    value: "3m 22s",
    icon: ArrowDownIcon,
    change: "-3%",
    trend: "down",
  },
  {
    title: "New Visitors",
    value: "12,234",
    icon: ArrowUpIcon,
    change: "+22%",
    trend: "up",
  },
]

export function AnalyticsMetrics() {
  return (
    <>
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="p-4 md:p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-0">
              <div className="text-xl md:text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    metric.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                  }
                >
                  {metric.trend === "up" ? (
                    <ArrowUpIcon className="mr-1 h-4 w-4 inline" />
                  ) : (
                    <ArrowDownIcon className="mr-1 h-4 w-4 inline" />
                  )}
                  {metric.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}

