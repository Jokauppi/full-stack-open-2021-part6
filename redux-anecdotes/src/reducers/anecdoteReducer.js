import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    create(state, action) {
      const content = action.payload
      state.push(asObject(content))
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