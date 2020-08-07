import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('anecdote state now: ', state)
  console.log('anecdote action', action)

  switch (action.type) {
    case 'VOTE':
      return state
        .map((anecdote) =>
          anecdote.id !== action.data.id ? anecdote : action.data
        )
        .sort((a, b) => b.votes - a.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data.anecdotes
    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const voteForAnecdote = (anecdote) => {
  return async (dispatch) => {
    const anecdoteToChange = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }
    const changedAnecdote = await anecdoteService.voteFor(
      anecdote.id,
      anecdoteToChange
    )
    dispatch({
      type: 'VOTE',
      data: changedAnecdote,
    })
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
