import React, { useContext, useEffect, useState } from 'react'
import TCard from './TCard'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  useQuery
} from '@tanstack/react-query'
import { makeRequest } from '../axios';
import Image from "../assets/event-photo.jpg";

const MyOrganisedEvents = () => {
    const eventsTimeline = [
        {title:"London banking event", desc:"London banking event for investment bankers",category:"Banking", location: "London",
    img:Image,userName:"John100",
    date:"20th September 2023"},
    ]
  const {currentUser} = useContext(AuthContext)
  const { isLoading, error, data } = useQuery(['events'], () =>
    makeRequest.get("/events/user-events/"+currentUser.id).then(res=>{
      return res.data;
    })
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser){
      navigate("/login")
    }
  }, [])

  return (
    <div className='sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar flex flex-col gap-2 mt-[20px] mx-2'>
    {error ? "Something went wrong" : (isLoading ? "Loading..." : data ? 
    (data.map((event,index)=>(
      <Link to={`/events/${event.id}`} key={index} ><TCard event={event} key={index} /></Link>
    )))
    :( <p>You have no upcoming events</p>))}
    </div>
  )
}

export default MyOrganisedEvents