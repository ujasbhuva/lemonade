import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const notificationVariants = cva(
  "relative w-full rounded-2xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600",
        warning: "border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600",
        info: "border-blue-500/50 text-blue-600 dark:border-blue-500 [&>svg]:text-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const icons = {
  default: Info,
  destructive: XCircle,
  success: CheckCircle2,
  warning: AlertCircle,
  info: Info,
}

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  title?: string
  description?: string
  icon?: React.ElementType
}

export function Notification({ className, variant, title, description, icon, ...props }: NotificationProps) {
  const Icon = icon || icons[variant || "default"]

  return (
    <div role="alert" className={cn(notificationVariants({ variant }), className)} {...props}>
      <Icon className="h-5 w-5" />
      <div className="space-y-1">
        {title && <h5 className="font-medium leading-none tracking-tight">{title}</h5>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
    </div>
  )
}

