import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Signup = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handlesignup=()=>{
        axios.post('http://localhost:3001/users',
        {"username":username,"email":email,"password":password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div className='signpage'>
        <h1 style={{ textAlign: 'center' }}>Signup page</h1>
        <form onSubmit={handlesignup}>
            <label>Username:</label>
            <input type='text' placeholder='Username' value={username} onChange={(e)=>{
                setUsername(e.target.value)}}/><br></br><br></br>
            <label>Email:</label><br></br>
            <input type='email' placeholder='Email' className='mail' value={email} onChange={(e)=>{
                setEmail(e.target.value)}}/><br></br><br></br>
            <label>password:</label>
            <input type='text' value={password} placeholder='Password' onChange={(e)=>{
                setPassword(e.target.value)}}/><br></br><br></br>

        <button type='submit' className='signbut'>Signup</button><br></br><br></br>
        <Link className='flink' to="/login">Already have an account? Login</Link>
        </form>
    </div>
  )
}