import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const UserList = () => {
    const users = useSelector(state => state.users)
    return (
        <>
            <h3>Users</h3>
            <table>
                <thead>
                    <tr><th>blogs created</th></tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr key={user.id}><td><Link to={`/user/${user.id}`}>{user.name}</Link></td><td>{user.blogs.length}</td></tr>)
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserList