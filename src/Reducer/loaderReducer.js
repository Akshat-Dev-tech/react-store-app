export const loaderReducer = (state=false , action) =>{
    console.log('Loader Reducer called with state:', state, 'and action:', action)
    switch (action.type) {
        case 'SET_LOADER':
            return action.payload
        default:
            return state
    }
}