import React from 'react'

const AddEvent = () => {
  return (
    <div>
       <div className="flex bg-gray-200 overflow-y-scroll overflow-x-clip p-4">
       <div className='w-[60%] md:w-[80%] bg-white p-4 rounded-md'>
       <div>
                 <h1 className='text-2xl font-bold my-6'>Add Event</h1>
          <form className='flex flex-col gap-2'>
            <label>Event Title</label>
            <input type="text" placeholder='Event Title' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Description</label>
            <textarea type="text" placeholder='Description' 
            rows="3" cols="33"
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Category</label>
            <select name="category">
                <option value="Finance">Finance</option>
                <option value="Tech">Tech</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
                <option value="Sport">Sport</option>
                <option value="Fashion">Fashion</option>
                <option value="Science">Science</option>
                <option value="Other">Other</option>
            </select>
            <label>Date</label>
            <input type="date" placeholder='Date'
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <label>Image</label>
            <input type="file"
            className='rounded-md border-[1px] p-2 border-gray-300'
            />
            <button className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md mb-4'>Add</button>
          </form>
          </div>
          </div>
        </div>
    </div>
  )
}

export default AddEvent