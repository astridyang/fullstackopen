const filterReducer = (state = '', action) =>{
    switch(action.type){
        case 'SET':
            return action.data
        default:
            return state
    }
}
export const setFilter = (content) => {
    return {
        type: 'SET',
        data: content
    }
}
export default filterReducer