import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./themeSlice"
import userReducer from "./userSlice"
import notificationReducer from "./notificationSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    notifications: notificationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
