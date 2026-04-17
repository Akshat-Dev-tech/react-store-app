// export const getProducts = () =>{
//     return async (dispatch , state) =>{
//       console.log('getProducts action called with state:', state())
//       dispatch({type:'SET_LOADER',payload:true})
//       const response = await fetch('https://fakestoreapi.com/products')
//       const data = await response.json()
//       console.log(data)
//       dispatch({type:'ADD_PRODUCT',payload:data})
//       dispatch({type:'SET_LOADER',payload:false})
//     }
//   }


import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async(_, thunkAPI)=>{
    const { dispatch, getState } = thunkAPI
    dispatch({type:'SET_LOADER',payload:true})
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    dispatch({type:'SET_LOADER',payload:false})
    dispatch({type:'product/addProduct',payload:data})
    // dispatch({type:'ADD_PRODUCT',payload:data})
    return data

  }
)