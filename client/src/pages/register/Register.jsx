import React from 'react'

const Register = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
        <div className="min-h-fit w-[70%] rounded-md flex flex-col items-center border-[1px] border-gray-300
        md:w-[30%] pb-6 shadow-xl">
          <h1 className='text-2xl font-bold my-6'>Register</h1>
          <form className='flex flex-col gap-2 w-[80%]'>
            <label>Email</label>
            <input type="email" placeholder='E-mail' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Username</label>
            <input type="text" placeholder='Username' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Password</label>
            <input type="password" placeholder='Password' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <button className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md'>Register</button>
            <p className='flex cursor-pointer justify-center text-sm'>Already have an account? Login</p>
          </form>
        </div>
    </div>
  )
}

export default Register