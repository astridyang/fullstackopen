import anecdotesService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data]
        case 'VOTE':
            const changedAnecdote = action.data
            const id = changedAnecdote.id
            return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
        case 'INIT_ANECDOTE':
            return action.data
        default:
            return state
    }
}
export const initialAnecdotes = () => {
    return async dipatch => {
        const anecdotes = await anecdotesService.getAll()
        dipatch({
            type: 'INIT_ANECDOTE',
            data: anecdotes
        })
    }
}
export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await anecdotesService.createNew(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote,
        })
    }
}

export const voteAnecdote = (object) => {
    return async dispatch => {
        const votedAnecdote = await anecdotesService.vote(object)
        dispatch({
            type: 'VOTE',
            data: votedAnecdote
        })
    }
}

export default anecdoteReducer