// export const counterReducer = (state = 0, action) => {
//     console.log('Reducer called with state:', state, 'and action:', action)
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         // case 'DECREMENT':
//         //     return state - 1
//         default:
//             return state
//     }
// }


import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increment:(state)=>{
            return state=state+1
        }, 
    }
})

// export const {increment}=counterSlice.actions

console.log('Actions',counterSlice.actions, counterSlice)