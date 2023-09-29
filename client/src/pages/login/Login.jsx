import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) =>{
      setInputs((prev)=>(
        {...prev, [e.target.name]: e.target.value}
        ))
    }

    const {login} = useContext(AuthContext)

    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        await login(inputs);
        navigate('/')
      } catch (error) {
        setErr(err.response.data)
        console.log(err)
      }
    };



  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
        <div className="min-h-fit w-[50%] rounded-md flex flex-col items-center border-[1px] border-gray-300
        md:w-[30%] pb-6 shadow-xl">
          <h1 className='text-2xl font-bold my-6'>Login</h1>
          <form className='flex flex-col gap-2 w-[80%]'>
            <label>Email</label>
            <input type="email" placeholder='E-mail' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            onChange={handleChange}
            name='email'
            />
            <label>Password</label>
            <input type="password" placeholder='Password' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            onChange={handleChange}
            name='password'
            />
            {err && err}
            <button onClick={handleLogin} className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md'>Login</button>
            <Link to="/register">
            <p className='flex cursor-pointer justify-center text-sm'
            >Don't have an account? Register</p>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default Login