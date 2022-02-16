import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const voteAnecdote = event => {
    dispatch(vote(event.target.getAttribute('id')))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={voteAnecdote} id={anecdote.id}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList