import { createSlice } from '@reduxjs/toolkit'

const asObject = (notification) => {
  return {
    content: notification
  }
}

const initialState = asObject('Initial notification')

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notify(state, action) {
      const notification = action.payload
      state = asObject(notification)
    }
  },
})

export const {notify} = notificationSlice.actions
export default notificationSlice.reducer