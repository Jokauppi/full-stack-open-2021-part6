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
    voteList(state, action) {
      const votedAnecdote = action.payload
      return state.map(anecdote => {
        return anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote
      }).sort((a,b) => a.votes > b.votes ? -1 : 1)
    },
    setAnecdotes(state, action) {
      return action.payload.sort((a,b) => a.votes > b.votes ? -1 : 1)
    }
  },
})

export const {append, voteList, setAnecdotes} = anecdoteSlice.actions

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

export const vote = anecdote => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
    dispatch(voteList(votedAnecdote))
  }
}

export default anecdoteSlice.reducer