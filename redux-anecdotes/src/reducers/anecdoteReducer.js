import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('anecdote state now: ', state)
  console.log('anecdote action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state
        .map((anecdote) => (anecdote.id !== id ? anecdote : changedAnecdote))
        .sort((a, b) => b.votes - a.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.data.anecdote]
    case 'INIT_ANECDOTES':
      return action.data.anecdotes
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

export const voteForAnecdote = (anecdote) => {
  return {
    type: 'VOTE',
    data: { id: anecdote.id, content: anecdote.content },
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: { anecdotes },
    })
  }
}

export default anecdoteReducer
