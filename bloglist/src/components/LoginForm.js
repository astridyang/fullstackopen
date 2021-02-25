import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/loginReducer'
import { Redirect } from 'react-router-dom'
// import PropTypes from 'prop-types'
const LoginForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        const credential = {
            username,
            password
        }
        dispatch(login(credential))
    }
    const user = useSelector(state => state.loggedUser)
    if (user) {
        return <Redirect to='/' />
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    username
                    <input name="username" type='text' />
                </div>
                <div>
                    password
                    <input name="password" type='password' />
                </div>
                <button type="submit" id="login-btn">login</button>
            </form>
        )
    }

}
// LoginForm.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
//     handleUsernameChange: PropTypes.func.isRequired,
//     handlePasswordChange: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired
// }
export default LoginForm