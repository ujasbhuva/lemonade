import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Notification {
  id: string;
  title: string;
  description: string;
  type: "default" | "success" | "error" | "warning" | "info";
  read: boolean;
  timestamp: string;
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [
    {
      id: "1",
      title: "New Project Created",
      description: "Project 'Lemonade Dashboard' has been created",
      type: "success",
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    },
    {
      id: "2",
      title: "Task Assigned",
      description: "You have been assigned to 'Design System Updates'",
      type: "info",
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    },
    {
      id: "3",
      title: "Meeting Reminder",
      description: "Team meeting starts in 15 minutes",
      type: "warning",
      read: false,
      timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
    },
  ],
};

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(
        (n) => n.id === action.payload
      );
      if (notification) {
        notification.read = true;
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach((notification) => {
        notification.read = true;
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },
    addNotification: (
      state,
      action: PayloadAction<Omit<Notification, "id" | "timestamp">>
    ) => {
      state.notifications.unshift({
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const {
  markAsRead,
  markAllAsRead,
  removeNotification,
  addNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;
