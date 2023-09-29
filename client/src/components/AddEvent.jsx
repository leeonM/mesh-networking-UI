import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import upload from '../utils/upload';
import { makeRequest } from "../axios";
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
  const [file, setFile] = useState(null)
  const {currentUser} = useContext(AuthContext)
  const [event, setEvent] = useState({
     title:"",
     description:"",
     category:"",
     location:"",
     address:"",
     date:"",
     userId: currentUser.id,
  })
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await makeRequest.post("/events", {
        ...event,
        img: url,
        userId: currentUser.id,
      });
      alert("Event added successfully")
      navigate('/')
    } catch (err) {
      console.log(err);
    }

  }

  
  const handleChange = (e) => {
    setEvent((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }


  return (
    <div>
       <div className="flex bg-gray-200 h-[100vh] overflow-y-scroll overflow-x-clip p-4">
       <div className='w-[60%] md:w-[80%] h-[100vh] overflow-y-scroll bg-white p-4 rounded-md'>
       <div>
                 <h1 className='text-2xl font-bold my-6'>Add Event</h1>
          <form className='flex flex-col gap-2'
          onSubmit={handleSubmit}
          >
            <label>Event Title</label>
            <input type="text" placeholder='Event Title' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='title'
            onChange={handleChange}
            />
            <label>Description</label>
            <textarea type="text" placeholder='Description' 
            rows="3" cols="33"
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='description'
            onChange={handleChange}
            />
            <label>Category</label>
            <input type="text" placeholder='Event Category e.g. Tech, Finance etc.' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='category'
            onChange={handleChange}
            />
            <label>Location</label>
            <input type="text" placeholder='Location/City' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='location'
            onChange={handleChange}
            />
            <label>Address</label>
            <input type="text" placeholder='Event Category e.g. Tech, Finance etc.' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='address'
            onChange={handleChange}
            />
            <label>Date</label>
            <input type="datetime-local" placeholder='Date'
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='date'
            onChange={handleChange}
            />
            <label>Image</label>
            <input type="file"
            className='rounded-md border-[1px] p-2 border-gray-300'
            onChange={(e) => setFile(e.target.files[0])} 
            />
            <button className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md mb-4'
            type='submit'
            >Add</button>
          </form>
          </div>
          </div>
        </div>
    </div>
  )
}

export default AddEvent