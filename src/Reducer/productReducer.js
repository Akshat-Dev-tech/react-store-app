export const productReducer = (state=[] , action) =>{
    console.log('Product Reducer called with state:', state, 'and action:', action)
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state,...action.payload]
        default:
            return state
    }
}