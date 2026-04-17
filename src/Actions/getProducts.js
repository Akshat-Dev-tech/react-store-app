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
  // It is a unique name used by Redux Toolkit to generate and group async lifecycle actions.
  // You don’t “use” this string directly in UI
  //generats three action types: 'products/getProducts/pending', 'products/getProducts/fulfilled', and 'products/getProducts/rejected'. These action types
  // can be used in reducer to handle different states of the async operation (pending, fulfilled, rejected)-> builder.addCase(getProducts.pending, ...)
  'products/getProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
  }
  // async(_, thunkAPI)=>{
  //   const { dispatch, getState } = thunkAPI
  //   dispatch({type:'SET_LOADER',payload:true})
  //   const response = await fetch('https://fakestoreapi.com/products')
  //   const data = await response.json()
  //   dispatch({type:'SET_LOADER',payload:false})
  //   dispatch({type:'product/addProduct',payload:data})
  //   // dispatch({type:'ADD_PRODUCT',payload:data})
  //   return data

  // }
)