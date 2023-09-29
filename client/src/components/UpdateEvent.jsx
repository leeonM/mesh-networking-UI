import React, { useContext, useEffect, useState } from 'react'
import { makeRequest } from '../axios'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import upload from '../utils/upload'
import axios from 'axios'

const UpdateEvent = () => {
  const [file, setFile] = useState(null)
  const [event, setEvent] = useState({})
  const {currentUser} = useContext(AuthContext)
  const {id} = useParams()
  const navigate = useNavigate()

  
  useEffect(() => {
    const getEventDetails = async () => {
      const res = await axios.get(`http://localhost:8800/api/events/${id}`)
      setEvent(res.data)
    }    
    getEventDetails()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let eventImgUrl = event.img
    if (file) eventImgUrl = await upload(file)
    try {
      await makeRequest.put("/events/"+id, {
        ...event,
        img: eventImgUrl,
        userId: currentUser.id
      });
      alert("Event updated successfully")
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
       <div className="flex h-[100vh] bg-gray-200 overflow-y-scroll overflow-x-clip p-4">
       <div className='w-[60%] md:w-[80%] bg-white h-[100vh] overflow-y-scroll p-2 rounded-md'>
          <h1 className='text-2xl font-bold my-6'>Update Event</h1>
          <form className='flex flex-col gap-2'
          onSubmit={handleSubmit}
          >
          <label>Event Title</label>
            <input type="text" placeholder={event?.title} 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='title'
            onChange={handleChange}
            />
            <label>Description</label>
            <textarea type="text" placeholder={event?.description}
            rows="3" cols="33"
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='description'
            onChange={handleChange}
            />
            <label>Category</label>
            <input type="text" placeholder={event?.category} 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='category'
            onChange={handleChange}
            />
            <label>Location</label>
            <input type="text" placeholder={event?.location}
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='location'
            onChange={handleChange}
            />
            <label>Address</label>
            <input type="text" placeholder={event?.address} 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='address'
            onChange={handleChange}
            />
            <label>Date</label>
            <input type="datetime-local" placeholder={event?.date}
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='date'
            onChange={handleChange}
            />
            <label>Image</label>
            <input type="file"
            className='rounded-md border-[1px] p-2 border-gray-300'
            onChange={(e) => setFile(e.target.files[0])} 
            />
            <button className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md mb-4
            ' type='submit'
            >Update</button>
          </form>
          </div>
        </div>
    </div>
  )
}

export default UpdateEvent