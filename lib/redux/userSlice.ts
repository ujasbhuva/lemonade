import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
  id: string
  name: string
  email: string
  role: string
}

interface UserState {
  currentUser: User | null
  isLoading: boolean
  error: string | null
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    userLoginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.currentUser = action.payload
      state.error = null
    },
    userLoginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    userLogout: (state) => {
      state.currentUser = null
    },
  },
})

export const { userLoginStart, userLoginSuccess, userLoginFailure, userLogout } = userSlice.actions
export default userSlice.reducer
