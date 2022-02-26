import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter.text)

  return (
    <div>
      {anecdotes.filter(anecdote => anecdote.content.includes(filter)).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={event => {
              dispatch(vote(event.target.getAttribute('id')))
              console.log('test')
              dispatch(notify(`You voted '${event.target.getAttribute('name')}'`))
              }} id={anecdote.id} name={anecdote.content}>vote</button>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default AnecdoteList