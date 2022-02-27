import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    append(state, action) {
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

export const {append, vote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const create = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(append(newAnecdote))
  }
}

export default anecdoteSlice.reducer