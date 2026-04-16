// export const userReducer=(state={},action)=>{
//     console.log('User Reducer called with state:', state, 'and action:', action)
//     switch (action.type) {
//         case 'ADD_USER':
//             return {...state,...action.payload}
//         default:
//             return state
//     }
// }

import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{},
    reducers:{
        addUser:(state,action)=>{
            state=action.payload
            return state
        }
    }
})