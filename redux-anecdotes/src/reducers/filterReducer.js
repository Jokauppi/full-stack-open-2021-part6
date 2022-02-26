import { createSlice } from '@reduxjs/toolkit'

const asObject = (filter) => {
  return {
    text: filter
  }
}

const initialState = asObject('')

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    set(state, action) {
      return asObject(action.payload)
    }
  }
})

export const { set } = filterSlice.actions
export default filterSlice.reducer