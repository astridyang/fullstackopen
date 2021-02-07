import React from 'react'
import Togglable from './Togglable'
const Blog = ({ blog, addLikes, removeBlog }) => {
    const changeLikes = (blog) => {
        const newObject = {
            id: blog.id,
            user: blog.user.id,
            author: blog.author,
            likes: blog.likes + 1,
            title: blog.title,
            url: blog.url,
        }
        addLikes(newObject)
    }
    const delBlog = (blog) => {
        if (window.confirm(`Remove blog you are not gona need it. by ${blog.author}`)) {
            removeBlog(blog)
        }
    }
    return (
        <div className="blog-item">
            <h3>{blog.title}</h3>
            <Togglable buttonLabel="view" canceLabel="hide">
                <p>{blog.url}</p>
                <p>likes: {blog.likes} <button onClick={() => { changeLikes(blog) }} className="like">like</button></p>
                <p>{blog.author}</p>
            </Togglable>
            <button className="del" onClick={() => { delBlog(blog) }}>remove</button>
        </div>
    )
}

export default Blog
