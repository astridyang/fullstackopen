import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const newBlog = async (event) => {
        event.preventDefault()
        createBlog({
            title, author, url
        })
        setTitle('')
        setAuthor('')
        setUrl('')
    }
    // onchage todo
    return (
        <form onSubmit={newBlog}>
            <div>
        title
                <input
                    type='text'
                    value={title}
                    name="title"
                    id="title"
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>
            <div>
        author
                <input
                    type='text'
                    value={author}
                    name="author"
                    id="author"
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </div>
            <div>
        url
                <input
                    type='text'
                    value={url}
                    name="url"
                    id="url"
                    onChange={({ target }) => setUrl(target.value)}
                />
            </div>
            <button>create</button>
        </form>
    )
}
export default BlogForm