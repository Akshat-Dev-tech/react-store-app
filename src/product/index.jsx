import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
  const dispatch=useDispatch()

  const productState = useSelector((state)=>state.product)
  const loaderState= useSelector((state)=>state.loader)
  console.log('Product State:', productState)
 
  const [product , showProduct] = React.useState(false)

  const getProducts = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    dispatch({type:'SET_LOADER',payload:false})
    dispatch({type:'ADD_PRODUCT',payload:data})
  }

  useEffect(()=>{
    if(product){
      dispatch({type:'SET_LOADER',payload:true})
      setTimeout(()=>{
        getProducts()
      },2000)
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