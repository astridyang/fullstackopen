import loginService from '../services/login'
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'
const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            blogService.setToken(action.data.token)
            return action.data
        case 'LOGOUT':
            return null
        default:
            return state

    }
}

export const login = credential => {
    return async dispatch => {
        try {
            const loggedUser = await loginService.login(credential)
            window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
            dispatch({
                type: 'LOGIN',
                data: loggedUser
            })
            dispatch(setNotification(`Welcome ${loggedUser.username}`))
        } catch (exception) {
            console.log(exception)
            dispatch(setNotification('Wrong credencial'))
        }
    }
}
export const logout = () => {
    window.localStorage.removeItem('loggedUser')
    return dispatch => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}
export const setLogin = user => {
    return dispatch => {
        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export default userReducer