import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const createAnecdote = async event => {
    event.preventDefault()
    const content = event.target.content.value
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(create(newAnecdote))
    dispatch(notify(`Created anecdote '${event.target.content.value}'`))
    event.target.content.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm