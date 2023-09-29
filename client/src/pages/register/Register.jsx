import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",

  })

  const [err, setErr] = useState(false)
  const [match, setMatch] = useState(true)

  useEffect(()=>{
    if(inputs.confirmPassword.length > 0 ||inputs.password !== inputs.confirmPassword){setMatch(false)}
    if(inputs.password === inputs.confirmPassword){setMatch(true)}
  },[inputs.confirmPassword])
  const navigate = useNavigate()


    const handleChange = (e) =>{
      setInputs((prev)=>(
        {...prev, [e.target.name]: e.target.value}
        ))
    }

  const handleClick = async (e)=>{
    e.preventDefault()
    if (inputs.password !== inputs.confirmPassword){alert("Password does not match")}
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs)
      alert("User registered successfully")
      setInputs({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    
      })
      navigate("/login")
    } catch (error) {
      setErr(true)
    }
  }
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
        <div className="min-h-fit w-[70%] rounded-md flex flex-col items-center border-[1px] border-gray-300
        md:w-[30%] pb-6 shadow-xl">
          <h1 className='text-2xl font-bold my-6'>Register</h1>
          <form className='flex flex-col gap-2 w-[80%]'>
            <label>Email</label>
            <input type="email" placeholder='E-mail' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name="email"
            onChange={handleChange}
            />
            <label>Username</label>
            <input type="text" placeholder='Username' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='username'
            onChange={handleChange}
            />
            {!match && <p>Password does not match</p>}
            <label>Password</label>
            <input type="password" placeholder='Password' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='password'
            onChange={handleChange}
            />
            <label>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='confirmPassword'
            onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick} className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md'>Register</button>
            <Link to="/login">
            <p className='flex cursor-pointer justify-center text-sm'>Already have an account? Login</p>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default Register