const notification = ''

const notificationReducer = (state = notification, action) => {
  console.log('notification state now: ', state)
  console.log('notification action', action)

  switch (action.type) {
    case 'SET':
      return action.data
    case 'EMPTY':
      return ''
    default:
      return state
  }
}

export const emptyNotification = () => {
  return {
    type: 'EMPTY',
  }
}

export const setNotification = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET',
      data: message,
    })
    await new Promise((resolve) => setTimeout(resolve, time * 1000))
    dispatch({
      type: 'EMPTY',
    })
  }
}

export default notificationReducer
