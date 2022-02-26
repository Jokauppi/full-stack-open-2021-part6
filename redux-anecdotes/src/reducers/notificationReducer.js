import { createSlice } from '@reduxjs/toolkit'

const asObject = (notification) => {
  return {
    content: notification
  }
}

const initialState = asObject('')

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notify(state, action) {
      return asObject(action.payload)
    }
  }
})

export const { notify } = notificationSlice.actions
export default notificationSlice.reducer