"use client"

import { useDispatch, useSelector } from "react-redux"
import { formatDistanceToNow } from "date-fns"
import { Check, Trash2, Bell } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { RootState } from "@/lib/redux/store"
import { markAllAsRead, markAsRead, removeNotification } from "@/lib/redux/notificationSlice"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function NotificationsList() {
  const dispatch = useDispatch()
  const notifications = useSelector((state: RootState) => state.notifications.notifications)
  const unreadCount = notifications.filter((n) => !n.read).length

  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 min-h-[300px]">
        <Bell className="h-12 w-12 text-muted-foreground/50 mb-4" />
        <p className="text-sm text-muted-foreground text-center">No notifications yet</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 w-full md:w-[380px]">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium">Notifications</h4>
          {unreadCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full bg-primary text-primary-foreground">
              {unreadCount}
            </span>
          )}
        </div>
        <Button variant="ghost" size="sm" className="text-xs" onClick={() => dispatch(markAllAsRead())}>
          Mark all as read
        </Button>
      </div>
      <Separator />
      <ScrollArea className="h-[400px] md:h-[500px]">
        <AnimatePresence mode="popLayout">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2 }}
              className={`flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50 ${
                notification.read ? "opacity-60" : ""
              }`}
            >
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {!notification.read && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => dispatch(markAsRead(notification.id))}
                  >
                    <Check className="h-4 w-4" />
                    <span className="sr-only">Mark as read</span>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-destructive"
                  onClick={() => dispatch(removeNotification(notification.id))}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete notification</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </ScrollArea>
    </div>
  )
}
