import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ""
        dispatch(createAnecdote(content))
    }
    return (
        <form onSubmit={addAnecdote}>
            <p>Content: </p>
            <input name="anecdote" />
            <p><button type="submit">add anecdote</button></p>
        </form>
    )
}

export default AnecdoteForm