import React from 'react'


const updateUser = () => {
  return (
    <div>
       <div className="flex bg-gray-200 h-[100vh] overflow-y-scroll overflow-x-clip p-4">
       <div className='w-[60%] md:w-[80%] h-[140%] md:h-[115%] bg-white p-2 rounded-md'>
          <h1 className='text-2xl font-bold my-6'>Update User</h1>
          <form className='flex flex-col gap-2'>
            <label>Email</label>
            <input type="email" placeholder='E-mail' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Password</label>
            <input type="password" placeholder='Password' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Confirm Password</label>
            <input type="password" placeholder='Password' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Username</label>
            <input type="text" placeholder='Username' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Role</label>
            <input type="text" placeholder='Role' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Company</label>
            <input type="text" placeholder='Username' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Linkedin</label>
            <input type="text" placeholder='Linkedin URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Website</label>
            <input type="text" placeholder='www.yoursite.com' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Profile Picture</label>
            <input type="file"
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <button className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md mb-4'>Update</button>
          </form>
          </div>
        </div>
    </div>
  )
}

export default updateUser