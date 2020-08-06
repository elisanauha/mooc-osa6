import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { emptyNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector((state) => state.filter)
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
  )

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote)
    dispatch(voteForAnecdote(anecdote))
    setTimeout(() => {
      dispatch(emptyNotification())
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
