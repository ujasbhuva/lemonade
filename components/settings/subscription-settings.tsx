"use client"

import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for individuals and small teams",
    features: ["Up to 5 team members", "Basic project management", "2GB storage", "Email support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing teams and organizations",
    features: [
      "Up to 20 team members",
      "Advanced project management",
      "10GB storage",
      "Priority email & chat support",
      "Custom workflows",
      "Advanced analytics",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "Enterprise project management",
      "Unlimited storage",
      "24/7 phone & email support",
      "Custom workflows & integrations",
      "Advanced security features",
      "Dedicated account manager",
    ],
    current: false,
  },
]

export function SubscriptionSettings() {
  return (
    <div className="space-y-6 w-full">
      <div className="w-3/4 flex flex-col gap-6">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.current ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {plan.name}
                  <span className="text-2xl font-light">{plan.price}</span>
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" variant={plan.current ? "outline" : "default"}>
                  {plan.current ? "Current Plan" : "Upgrade"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Billing Information</CardTitle>
            <CardDescription>Your subscription will renew on September 1, 2024</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl bg-muted p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Pro Plan</p>
                  <p className="text-sm text-muted-foreground">Next billing date: September 1, 2024</p>
                </div>
                <Button variant="outline" className="rounded-full">
                  Cancel Subscription
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
