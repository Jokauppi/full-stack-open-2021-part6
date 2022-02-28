import { connect } from 'react-redux'
import { set } from '../reducers/filterReducer'

const Filter = ({set}) => {

  const handleChange = (event) => {
    set(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const ConnectedFilter = connect(null, {set})(Filter)
export default ConnectedFilter