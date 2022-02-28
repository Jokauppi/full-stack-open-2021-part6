import { createSlice } from '@reduxjs/toolkit'

const asObject = (notification, timeout) => {
  return {
    content: notification,
    timeout: timeout
  }
}

const initialState = asObject('', null)

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      const {message, timeout} = action.payload
      clearTimeout(state.timeout)
      return asObject(message, timeout)
    }
  }
})

export const { setNotification } = notificationSlice.actions

export const notify = (message, time) => {
  return async dispatch => {
    const timeout = setTimeout(() => {
      dispatch(setNotification({message: '', timeout: null}))
    }, 1000*time)
    dispatch(setNotification({message, timeout}))
  }
}

export default notificationSlice.reducer