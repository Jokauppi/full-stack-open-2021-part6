import { connect } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteForm = ({create, notify}) => {

  const createAnecdote = async event => {
    event.preventDefault()
    const content = event.target.content.value
    create(content)
    notify(`Created anecdote '${event.target.content.value}'`, 5)
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

const ConnectedAnecdoteForm = connect(null, {create, notify})(AnecdoteForm)
export default ConnectedAnecdoteForm