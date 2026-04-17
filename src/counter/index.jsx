import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from '../Reducer/counterReducer'

const Counter = () => {
const dispatch = useDispatch()
const count = useSelector((state)=>state.count)
const handleCounter = () => {
    // dispatch({type:'INCREMENT',payload:1})
    // dispatch(counterSlice.actions.increment())
    dispatch({type:'counter/increment'})

}
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleCounter}>Add Val</button>
    </div>
  )
}

export default Counter