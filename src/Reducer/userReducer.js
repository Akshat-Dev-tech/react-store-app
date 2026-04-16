export const userReducer=(state={},action)=>{
    console.log('User Reducer called with state:', state, 'and action:', action)
    switch (action.type) {
        case 'ADD_USER':
            return {...state,...action.payload}
        default:
            return state
    }
}