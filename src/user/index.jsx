import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const User = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

const handleForm = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('username')
    const email = form.get('useremail')
    const age = form.get('userage')
    dispatch({type:'ADD_USER',payload:{name,email,age}})
    console.log('Form submitted with:', name, email , age)
}

  return (
    <div style={{display:'flex',flexDirection:'column',width:'200px',margin:'20px auto'}}>
       <h1>User</h1>
        <form onSubmit={handleForm}>
            <input type="text" placeholder='Name' name="username" required></input>
            <input type="email" placeholder='Email' name="useremail" required></input>
            <input type="number" placeholder='age' name="userage"  required></input>
            <button type='submit'>Submit</button>
        </form>
        {
            user.name && (
                <div style={{marginTop:'20px'}}>
                    <h2>User Info:</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                </div>
            )
        }
    </div>
  )
}

export default User;