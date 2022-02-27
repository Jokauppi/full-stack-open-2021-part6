import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    create(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload
      return state.map(anecdote => {
        return anecdote.id !== id ? anecdote : {...anecdote, votes: anecdote.votes + 1}
      }).sort((a,b) => a.votes > b.votes ? -1 : 1)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const {vote, create, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer