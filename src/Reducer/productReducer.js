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
    initialState:{
        loading:false,
        productList:[]
    },
    reducers:{
        // No longer required since create aysnc thunk automatically dispatching an action  
        // -> 'products/getProducts/fulfilled' with the payload as the resolved value of the async function
        // -> we can handle this action in extraReducers to update the state accordingly

        // addProduct:(state, action)=>{
        //     return action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase('products/getProducts/pending', (state, action) => {
            console.log('getProducts pending:', state, action)
            // if using normal redux return like this now immer handles it internall with reudx tool kit
            //  {
            //     ...state,
            //     loading:true
            //  }
               state.loading = true
        })
        .addCase('products/getProducts/fulfilled', (state, action) => {
            console.log('getProducts fulfilled:', state, action)
            state.loading = false
            state.productList = action.payload
        })
    }
})