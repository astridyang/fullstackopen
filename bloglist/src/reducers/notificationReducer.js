let timer = null
const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SHOW':
            clearTimeout(timer)
            return action.data
        case 'HIDE':
            return null
        default:
            return state
    }
}

export const setNotification = msg => {
    return dispatch => {
        dispatch({
            type: 'SHOW',
            data: msg
        })
        timer = setTimeout(() => {
            dispatch({
                type: 'HIDE',
            })
        }, 3000)
    }
}


export default notificationReducer