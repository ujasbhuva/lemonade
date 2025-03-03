"use client";

import { useState } from "react";
import {
  addDays,
  format,
  startOfToday,
  startOfWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { NewEventDialog } from "@/components/calendar/new-event-dialog";
import { EventList } from "@/components/calendar/event-list";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Dummy events data with colors
const events = [
  {
    id: "1",
    title: "Team Meeting",
    description: "Weekly project sync",
    date: startOfToday(),
    time: "10:00",
    endTime: "11:00",
    type: "meeting",
    color: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    id: "2",
    title: "Client Presentation",
    description: "Project milestone presentation",
    date: addDays(startOfToday(), 2),
    time: "14:00",
    endTime: "15:30",
    type: "presentation",
    color: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    id: "3",
    title: "Design Review",
    description: "Review new UI components",
    date: addDays(startOfToday(), 4),
    time: "11:30",
    endTime: "12:30",
    type: "review",
    color: "bg-green-100 text-green-700 border-green-200",
  },
];

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, "0");
  return `${hour}:00`;
});

export default function CalendarPage() {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<"month" | "week" | "day">("week");
  const [isNewEventOpen, setIsNewEventOpen] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));

  const handlePreviousWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  const handleNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] ">
      <header className="border-b">
        <div className="container flex px-4 h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-light">Calendar</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePreviousWeek}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextWeek}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setDate(new Date())}
                className="rounded-full"
              >
                Today
              </Button>
            </div>
            <Button
              onClick={() => setIsNewEventOpen(true)}
              className="rounded-full"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        {/* Side Panel */}
        <div className="hidden md:flex flex-col w-[300px] border-r p-4 space-y-4">
          <Card className="rounded-xl border-0 shadow-none">
            <CardContent className="p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate as any}
                className="rounded-xl border"
                classNames={{
                  day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                }}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <EventList
                events={events.filter(
                  (event) =>
                    format(event.date, "yyyy-MM-dd") ===
                    format(date, "yyyy-MM-dd")
                )}
              />
            </CardContent>
          </Card>
        </div>

        {/* Main Calendar Grid */}
        <div className="flex-1 overflow-auto">
          <div className="flex">
            {/* Time Labels */}
            <div className="w-16 flex-shrink-0">
              <div className="h-16" /> {/* Header spacer */}
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className="h-16 text-xs text-muted-foreground pr-2 text-right"
                >
                  {time}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="flex-1 grid grid-cols-7">
              {/* Day Headers */}
              {weekDays.map((day, i) => (
                <div
                  key={i}
                  className={cn("h-16 border-b border-r p-2 text-center", {
                    "bg-accent":
                      format(day, "yyyy-MM-dd") ===
                      format(new Date(), "yyyy-MM-dd"),
                  })}
                >
                  <div className="text-sm font-medium">
                    {format(day, "EEE")}
                  </div>
                  <div
                    className={cn("text-2xl", {
                      "text-primary":
                        format(day, "yyyy-MM-dd") ===
                        format(new Date(), "yyyy-MM-dd"),
                    })}
                  >
                    {format(day, "d")}
                  </div>
                </div>
              ))}

              {/* Time Grid */}
              {timeSlots.map((time, timeIndex) =>
                weekDays.map((day, dayIndex) => {
                  const currentEvents = events.filter(
                    (event) =>
                      format(event.date, "yyyy-MM-dd") ===
                        format(day, "yyyy-MM-dd") &&
                      event.time.split(":")[0] === time.split(":")[0]
                  );

                  return (
                    <div
                      key={`${dayIndex}-${timeIndex}`}
                      className="h-16 border-b border-r relative group hover:bg-accent/50 transition-colors"
                    >
                      {currentEvents.map((event) => (
                        <div
                          key={event.id}
                          className={cn(
                            "absolute left-1 right-1 rounded-lg border p-2 cursor-pointer",
                            event.color
                          )}
                          style={{
                            top: "4px",
                            minHeight: "calc(100% - 8px)",
                          }}
                        >
                          <div className="text-xs font-medium">
                            {event.title}
                          </div>
                          <div className="text-xs">
                            {event.time} - {event.endTime}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <NewEventDialog open={isNewEventOpen} onOpenChange={setIsNewEventOpen} />
    </div>
  );
}
