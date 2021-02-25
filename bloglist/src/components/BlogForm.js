import React from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import Togglable from './Togglable'
import { TextField, Button } from '@material-ui/core'
const BlogForm = () => {
    const dispatch = useDispatch()
    const newBlog = async (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const author = event.target.author.value
        const url = event.target.url.value
        event.target.title.value = ''
        event.target.author.value = ''
        event.target.url.value = ''
        const newObject = {
            title, author, url
        }
        dispatch(createBlog(newObject))
    }
    // onchage todo
    return (
        <Togglable buttonLabel="create new" canceLabel="close">
            <form onSubmit={newBlog}>
                <div>
                    <TextField label="title" name='title' />
                </div>
                <div>
                    <TextField label="author" name='author' />
                </div>
                <div>
                    <TextField label="url" name='url' />
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit">create</Button>
                </div>
            </form>
        </Togglable>
    )
}
export default BlogForm