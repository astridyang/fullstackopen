import userService from '../services/users'


const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_USER':
            return action.data
        default:
            return state
    }
}


export const initialUsers = () => {
    return async dispatch => {
        const users = await userService.getAll()
        dispatch({
            type: 'INITIAL_USER',
            data: users
        })
    }
}


export default userReducer