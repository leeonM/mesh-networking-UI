import React, { useContext, useEffect, useState } from 'react'
import Attendee from './Attendee';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import LeftBar from './LeftBar';
import moment from 'moment';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { makeRequest } from '../axios';

const Event = ({}) => {
  const {currentUser} = useContext(AuthContext)
  const [event, setEvent] = useState({})
  const [attendees, setAttendees] = useState([])
  const [interest, setInterest] = useState("")
  const {id} = useParams()
  const checkAttending = obj => obj.userId === currentUser.id
  const attending = attendees.some(checkAttending)
  const navigate = useNavigate()

  useEffect(() => {
    const getEventDetails = async () => {
      const res = await makeRequest.get(`/events/${id}`)
      setEvent(res.data)
    }    
    const getAttendees = async () => {
      if(event){
        const res = await makeRequest.get(`/events/attendees/${id}`)
      setAttendees(res.data)
      }
    }
    getEventDetails()
    getAttendees()
  }, [attendees])


  const attendEvent = async () => {
    if (interest.length < 5){
      alert("please enter at least 5 characters")
    } else {
      try {
        const res = await makeRequest.post(`/events/attendees/${id}`,{
          interest,
          userId: currentUser.id
        })
        alert("You are now attending the event")
        setInterest("")
      } catch (error) {
        console.log(error)
      }
    }
  }


  const deleteAttendance = async () =>{
      try {
        await makeRequest.delete(`/events/attendees/${id}`,{
          userId: currentUser.id
        })
        alert("You are no longer attending this event")
      } catch (error) {
        console.log(error)
      }
  }

  const deleteEvent = async () => {
    try {
      await makeRequest.delete(`/events/${id}`)
      alert("Event deleted successfully")
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
    <Navbar />
    <div className='flex'>
    {currentUser && (<div className='flex'>
    <LeftBar />
    </div>)}
    <div className='bg-gray-200 p-4 sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar'>
    
      <div className='bg-white p-6 rounded-md'>
      <div className='flex justify-between'>
      {(currentUser.id === event.userId) && <Link to="/">
      <button className='bg-red-500 text-sm text-white p-2 rounded-md cursor-pointer'
      onClick={deleteEvent}>Delete Event</button>
      </Link>}
  
          {(currentUser.id === event.userId) && (<Link to={"/update-event/"+event.id}><button className='bg-green-600 text-sm text-white p-2 rounded-md cursor-pointer'>Update Event</button></Link>)}
          </div>
          <div className='py-2'>
            <h1 className='text-2xl font-bold'>{event.title}</h1>
            <div>
              <h2 className='text-lg font-semibold'>{moment(event.date).format('MMMM Do YYYY')}</h2>
              <p className='py-2'>{event.description}</p>
              <p className='mb-2 font-semibold'>{event.location}, {event.address}</p>
              <img src={event.img} className='rounded-md md:h-auto md:max-w-lg' />
            </div>
          </div>
          <div className='py-2'>
          {!attending ? (currentUser.id !== event.userId) && (
            <div className='flex flex-col mb-2'>
            <label>Why are you interested in attending?</label>
            <input type="text" onChange={(e)=>setInterest(e.target.value)} 
            className='border-[1px] p-2 my-2 rounded-md'
            placeholder
            maxLength={100}
            />
            <button className='bg-blue-800 text-sm text-white p-2 rounded-md cursor-pointer w-[40%] md:w-[25%]'
          onClick={attendEvent}>Attend</button>
          </div>): 
          (<button className='bg-red-600 text-sm text-white p-2 rounded-md cursor-pointer mb-2'
          onClick={deleteAttendance}
          >Remove Attendance</button>)}
            <h2 className='text-xl font-semibold mb-2'>Attendees ({attendees.length})</h2>
            {currentUser ? (<div className='flex flex-col md:flex-row md:flex-wrap gap-2'>
              {attendees.map((attendee,index)=>(
               <Attendee attendee={attendee} key={index} />
              ))}
            </div>) : (<Link to="/login"><p className='cursor-pointer'>Log in to view attendees</p></Link>)}
          </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Event