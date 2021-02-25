import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateBlog, commentBlog } from '../reducers/blogReducer'
import Togglable from './Togglable'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { TextField } from '@material-ui/core'
const Blog = () => {
    const dispatch = useDispatch()
    const changeLikes = (blog) => {
        dispatch(updateBlog(blog))
    }
    const blogs = useSelector(state => state.blogs)
    const blogById = (id) => blogs.find(blog => blog.id === id)
    const match = useRouteMatch('/blog/:id')
    const blog = match ? blogById(match.params.id) : null
    const addCommment = async (event) => {
        event.preventDefault()
        const title = event.target.comment.value
        const comment = {
            title,
        }
        event.target.comment.value = ''
        dispatch(commentBlog({
            id: blog.id,
            comment
        }))
    }
    if (!blog) {
        return null
    } else {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography component='h2' variant="h4">
                            {blog.title}
                        </Typography>
                        <Typography component='p'>
                            <a href={blog.url} >{blog.url}</a>
                        </Typography>
                        <Typography component='p'>
                            likes: {blog.likes} <Button size='small' variant="contained" color='primary' onClick={() => { changeLikes(blog) }}>like</Button>
                        </Typography>
                        <Typography color='textSecondary'>
                            added by {blog.author}
                        </Typography>
                    </CardContent>
                </Card>
                <h4>comments</h4>
                <div>
                    <Togglable buttonLabel="add comment" canceLabel="close">
                        <form onSubmit={addCommment}>
                            <TextField label="your comment" name='comment' />
                            <Button size='small' variant="contained" color='primary'>Submit</Button>
                        </form>
                    </Togglable>
                </div>
                <List>
                    {
                        blog && blog.comments.map(comment => <ListItem key={comment.id}>{comment.title}</ListItem>)
                    }
                </List>
            </div>
        )
    }
}


export default Blog