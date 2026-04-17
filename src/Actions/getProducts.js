export const getProducts = () =>{
    return async (dispatch , state) =>{
      console.log('getProducts action called with state:', state())
      dispatch({type:'SET_LOADER',payload:true})
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      dispatch({type:'ADD_PRODUCT',payload:data})
      dispatch({type:'SET_LOADER',payload:false})
    }
  }