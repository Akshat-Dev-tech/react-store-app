import { createSlice } from "@reduxjs/toolkit"

// export const productReducer = (state=[] , action) =>{
//     console.log('Product Reducer called with state:', state, 'and action:', action)
//     switch (action.type) {
//         case 'ADD_PRODUCT':
//             return [...state,...action.payload]
//         default:
//             return state
//     }
// }


export const productSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addProduct:(state, action)=>{
            return action.payload
        }
    }
})