/* eslint-disable no-case-declarations */
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'
const blogReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_BLOG':
            return [...state, action.data]
        case 'UPDATE_BLOG':
            const changedBlog = action.data
            const id = changedBlog.id
            return state.map(blog => blog.id === id ? changedBlog : blog)
        case 'COMMENT_BLOG':
            const comment = action.data
            return state.map(blog => blog.id === action.id ? { ...blog, comments: [...blog.comments, comment] } : blog)
        case 'DEL_BLOG':
            return state.filter(blog => blog.id !== action.data.id)
        case 'INIT_BLOG':
            return action.data
        default:
            return state
    }
}

export const initialBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'INIT_BLOG',
            data: blogs
        })
    }
}

export const createBlog = (newObject) => {
    return async dispatch => {
        try {
            const blog = await blogService.create(newObject)
            dispatch({
                type: 'NEW_BLOG',
                data: blog
            })
        } catch (exception) {
            console.log(exception)
            dispatch(setNotification('Fail to create blog'))
        }
    }
}

export const updateBlog = (object) => {
    return async dispatch => {
        const blog = await blogService.update(object)
        dispatch({
            type: 'UPDATE_BLOG',
            data: blog
        })
    }
}

export const commentBlog = (object) => {
    return async dispatch => {
        const comment = await blogService.comment(object)
        dispatch({
            type: 'COMMENT_BLOG',
            data: comment,
            id: object.id
        })
    }
}
export const removeBlog = (object) => {
    return async dispatch => {
        await blogService.del(object)
        dispatch({
            type: 'DEL_BLOG',
            data: object
        })
    }
}
export default blogReducer