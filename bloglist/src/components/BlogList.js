import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog } from '../reducers/blogReducer'
import { Link } from 'react-router-dom'
import BlogForm from './BlogForm'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Button,
} from '@material-ui/core'
const Blog = ({ blog }) => {
    const dispatch = useDispatch()
    const delBlog = (blog) => {
        dispatch(removeBlog(blog))
    }

    return (
        <TableRow key={blog.id}>
            <TableCell>
                <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
            </TableCell>
            <TableCell>
                <Button color="secondary" onClick={() => { delBlog(blog) }}>
                    remove
                </Button>
            </TableCell>
        </TableRow>
    )
}

const BlogList = () => {
    // const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.loggedUser)
    return (
        <>
            <h3>Blogs</h3>
            {
                user ? <BlogForm /> : null
            }
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {blogs.map(blog =>
                            <Blog blog={blog} key={blog.id} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default BlogList