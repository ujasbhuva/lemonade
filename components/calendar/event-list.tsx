import { cn } from "@/lib/utils"
import { Clock, Users, Video } from "lucide-react"

interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  endTime: string
  type: string
  color: string
}

interface EventListProps {
  events: Event[]
}

export function EventList({ events }: EventListProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return Users
      case "presentation":
        return Video
      default:
        return Clock
    }
  }

  if (events.length === 0) {
    return <div className="text-center py-4 text-muted-foreground">No events scheduled for this day</div>
  }

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-sm">Upcoming Events</h3>
      <div className="space-y-2">
        {events.map((event) => {
          const Icon = getEventIcon(event.type)
          return (
            <div
              key={event.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors",
                event.color,
              )}
            >
              <Icon className="h-4 w-4 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium text-sm leading-none">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.description}</p>
                <p className="text-xs">
                  {event.time} - {event.endTime}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

