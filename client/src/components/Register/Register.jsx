import { useState } from "react"
import { useEffect } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
import './Register.css'

const Register = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const registerUser = async (e)=>{
      e.preventDefault();
        try {
                const res = await fetch("http://localhost:3000/register",{
                    method: "POST",
                    headers :{
                        'Content-type': "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        confirmPassword
                    })
                })
                const data = await res.json();
                if(data.user){
                  navigate('/login')
                }
        } catch (error) {
            console.log(error)
        }
    }
    

  return (
    <div className='register'>
      <h1 className='title'>Welcome to Food Heaven</h1>
      <h2 className="subtitle">Please register with your details here</h2>
      <form className="input" onSubmit={registerUser}>
        <div className="register-details">
        <label htmlFor="namel">Name</label>
        <input className="register-input" id="name" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Name..." type="text" />
        </div>
        <div className="register-details">
        <label htmlFor="email">Email</label>
        <input className="register-input" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email..." type="email" />
          </div>
          <div className="register-details">
          <label htmlFor="password">Password</label>
          <input className="register-input" name='password' id="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password..' type="password" />
          </div>
          <div className="register-details">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input className="register-input" name='confirm-password' id="confirm-password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password..' type="password" />
          </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
