import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <li>
            <p>{anecdote.content}</p>
            <p>has {anecdote.votes} votes <button onClick={handleClick}>vote</button></p>
        </li>
    )
}



const AnecdoteList = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter) {
            return state.anecdotes.filter(anecdote => (anecdote.content).toLowerCase().indexOf(state.filter) > -1)
        }
        return state.anecdotes
    })
    const sorted_anecdotes = anecdotes.sort(function (a, b) {
        return b.votes - a.votes
    })

    const handleVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
    }
    return (
        <ul>
            {sorted_anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() =>
                        handleVote(anecdote)
                    }
                />
            )}
        </ul>
    )
}

export default AnecdoteList