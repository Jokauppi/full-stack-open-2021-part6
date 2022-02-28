import { connect } from 'react-redux'


const Notification = ({notification}) => {

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

const ConnectedNotification = connect(mapStateToProps, null)(Notification)
export default ConnectedNotification