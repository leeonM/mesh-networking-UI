import React from 'react'

const UpdateEvent = () => {
  return (
    <div>
       <div className="flex h-[100vh] bg-gray-200 overflow-y-scroll overflow-x-clip p-4">
       <div className='w-[60%] md:w-[80%] bg-white h-[130%] md:h-[105%] p-2 rounded-md'>
          <h1 className='text-2xl font-bold my-6'>Update Event</h1>
          <form className='flex flex-col gap-2'>
          
            <label>Name</label>
            <input type="text" placeholder='Username' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Date</label>
            <input type="date" placeholder='Date' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Linkedin</label>
            <input type="text" placeholder='Linkedin URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Instagram</label>
            <input type="text" placeholder='Instagram URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Twitter</label>
            <input type="text" placeholder='Twitter URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Github</label>
            <input type="text" placeholder='Github URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Website</label>
            <input type="text" placeholder='www.yoursite.com' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Cover Image</label>
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

export default UpdateEvent