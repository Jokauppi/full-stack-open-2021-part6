import { connect } from 'react-redux'
import { useEffect } from 'react'
import { notify } from '../reducers/notificationReducer'


const Notification = ({notification, notify}) => {

  useEffect(() => {
    if (notification !== '') {
      setTimeout(() => {
        notify('')
      }, 5000)
    }
  }, [])

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

const mapStateToProps = (state) => {
  return {notification: state.notification.content}
}

const mapDispatchToProps = {
  notify,
}

const ConnectedNotification = connect(mapStateToProps, mapDispatchToProps)(Notification)
export default ConnectedNotification