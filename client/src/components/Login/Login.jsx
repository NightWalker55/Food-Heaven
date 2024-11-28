import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const loginUser = async (e)=>{
        e.preventDefault()
       const res =  await fetch("http://localhost:3000/login",{
            method: "POST",
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await res.json();

        
        if(data.user){
            alert('Login Successful')
            navigate('/')
        }
        else{
            alert('Please check email and password')
        }
    }


  return (
    <div className='login'>
      <h1 className='title'>Welcome to Food Heaven</h1>
      <h2 className="subtitle">Please login with your details here</h2>
      <form className="input" onSubmit={loginUser}>
      <label htmlFor="email">Email</label>
       <input className='login-input' id="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email..." type="email" />
        <label htmlFor="password">Password</label>
        <input className='login-input' name='password' id="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password..' type="password" />
        <p>Forgot Password?</p>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
