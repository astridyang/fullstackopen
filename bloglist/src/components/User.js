import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
const User = () => {
    const users = useSelector(state => state.users)
    const userById = (id) => users.find(user => user.id === id)
    const match = useRouteMatch('/user/:id')
    const user = match ? userById(match.params.id) : null
    if (!user) {
        return null
    } else {
        return (
            <div>
                <h3>{user.name}</h3>
                <Typography color='textSecondary'>
                    added blogs
                </Typography>
                <List>
                    {
                        user.blogs.map(blog => <ListItem key={blog.id}>{blog.title}</ListItem>)
                    }
                </List>
            </div>
        )
    }

}


export default User