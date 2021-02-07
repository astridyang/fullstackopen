import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}
const create = async (newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const res = await axios.post(baseUrl, newObject, config)
    return res.data
}
const update = async (newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const res = await axios.put(`${baseUrl}/${newObject.id}`, newObject, config)
    return res.data
}
const del = async (blog) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const res = await axios.delete(`${baseUrl}/${blog.id}`,config)
    return res.data
}
export default { getAll, create, setToken, update, del }