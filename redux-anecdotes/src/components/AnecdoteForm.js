import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { emptyNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    const newAnecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createAnecdote(newAnecdote))
    setTimeout(() => {
      dispatch(emptyNotification())
    }, 5000)
  }

  const style = {
    marginBottom: 10,
    marginTop: 10,
  }

  return (
    <div style={style}>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
