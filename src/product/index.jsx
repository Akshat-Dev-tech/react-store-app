import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Actions/getProducts'

const Product = () => {
  const dispatch=useDispatch()

  const productState = useSelector((state)=>state.product)
  const {productList,loading:loaderState} = productState
  // const loaderState= useSelector((state)=>state.loader)
  console.log('Product State:', productState)
  console.log('Product List:', productList)
 
  const [product , showProduct] = React.useState(false)

  ///by default RTK addes thunk , just used it directly here
  // const getProducts = () =>{
  //   return async (dispatch) =>{
  //     dispatch({type:'SET_LOADER',payload:true})
  //     const response = await fetch('https://fakestoreapi.com/products')
  //     const data = await response.json()
  //     console.log(data)
  //     dispatch({type:'ADD_PRODUCT',payload:data})
  //     dispatch({type:'SET_LOADER',payload:false})
  //   }
  // }

  useEffect(()=>{
    if(product){
      dispatch(getProducts())
      // setTimeout(()=>{
      //   getProducts()
      // },2000)
    }
  }
  ,[product])

  return (
    <div>
       <h1>Product</h1> 
       <button onClick={()=>showProduct(!product)}>Show Product</button>
        <div>
        {loaderState && <p>Loading...</p>}
          {/* {
             productState.length > 0 && productState.map((item)=>{
                  return <div key={item.id}>
                      <h3>{item.title}</h3>
                      <p>{item.price}</p>
                  </div>
              })
          } */}
          </div>
    </div>
  )
}
export default Product;