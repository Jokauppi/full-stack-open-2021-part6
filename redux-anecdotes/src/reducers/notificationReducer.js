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
    setNotification(state, action) {
      return asObject(action.payload)
    }
  }
})

export const { setNotification } = notificationSlice.actions

export const notify = (message, time) => {
  return async dispatch => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(setNotification(''))
    }, 1000*time)
  }
}

export default notificationSlice.reducer