import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { notify } from '../reducers/notificationReducer'


const Notification = () => {
  const notification = useSelector(state => state.notification.content)

  const dispatch = useDispatch()

  useEffect(() => {
    if (notification !== '') {
      setTimeout(() => {
        dispatch(notify(''))
      }, 5000)
    }
  }, [notification])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (

    <div>
      {notification !== '' &&
        <div style={style}>
          {notification}
        </div>
      }
    </div>

  )
}

export default Notification