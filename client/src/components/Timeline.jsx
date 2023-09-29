import React, { useContext, useEffect, useState } from 'react'
import TCard from './TCard'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  useQuery
} from '@tanstack/react-query'
import { makeRequest } from '../axios';

const Timeline = () => {
  const [events, setEvents] = useState(null)
  const {currentUser} = useContext(AuthContext)
  const { isLoading, error, data } = useQuery(['events'], () =>
    makeRequest.get("/events").then(res=>{
      return res.data;
    })
  )
  const navigate = useNavigate()


  const myLocationEvents = async () =>{
    const res = await makeRequest.get("/events/local").then(res=>{
      return res.data;
    })
    setEvents(res)
  }

  useEffect(() => {
    if (!currentUser){
      navigate("/login")
    }
  }, [])
  



  return (
    <div className='sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar flex flex-col gap-2 mt-[20px] mx-2'>
    {currentUser?.location && (!events ? (<button 
    onClick={myLocationEvents}
    className='flex justify-start bg-blue-700 text-white max-w-fit p-1 rounded-sm text-xs cursor-pointer'>Events in my Location</button>):
    (<button
    onClick={(e)=>setEvents(null)}
     className='flex justify-start bg-blue-700 text-white max-w-fit p-1 rounded-sm text-xs cursor-pointer'
    >All Events</button>))}
    {/* add filters */}
    {error ? "Something went wrong" : (isLoading ? "Loading..." : !events ? 
    (data.map((event,index)=>(
      <Link to={`/events/${event.id}`} key={index} ><TCard event={event} /></Link>
    )))
    :(events.map((event,index)=>(
      <Link to={`/events/${event.id}`} key={index} ><TCard event={event} /></Link>
    ))))}
    </div>
  )
}

export default Timeline