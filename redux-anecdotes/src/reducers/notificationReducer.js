const notification = 'Notification'

const notificationReducer = (state = notification, action) => {
  console.log('notification state now: ', state)
  console.log('notification action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      return 'voted for ' + id
    case 'NEW_ANECDOTE':
      return 'added ' + action.data.anecdote
    default:
      return state
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: { anecdote },
  }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id },
  }
}

export default notificationReducer
