import React from 'react'
import PropTypes from 'prop-types'
const LoginForm = ({ handleSubmit, username, handleUsernameChange, password, handlePasswordChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                username
                <input type="text"
                    value={username}
                    name="username"
                    id="username"
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                password
                <input type="password"
                    value={password}
                    name="password"
                    id="password"
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" id="login-btn">login</button>
        </form>
    )
}
LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}
export default LoginForm