const notification = ''

const notificationReducer = (state = notification, action) => {
  console.log('notification state now: ', state)
  console.log('notification action', action)

  switch (action.type) {
    case 'VOTE':
      const content = action.data.content
      return "you voted '" + content + "'"
    case 'NEW_ANECDOTE':
      return "you added '" + action.data.anecdote.content + "'"
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

export default notificationReducer
