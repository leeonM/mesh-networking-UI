import React from 'react'
import TCard from './TCard'
import Image from "../assets/event-photo.jpg";
import { Link } from 'react-router-dom';

const Timeline = () => {
    const eventsTimeline = [
        {title:"London banking event", desc:"London banking event for investment bankers",category:"Banking", location: "London",
    img:Image,userName:"Mike100", owner:1,
    date:"20th September 2023"},
    {title:"London Tech event", desc:"London banking event for investment bankers",category:"Tech",location: "London",
    img:Image,userName:"Mike100", owner:1,
    date:"20th September 2023"},
    {title:"London fashion meetup event", desc:"London banking event for investment bankers",category:"Fashion",location: "London",
    img:Image,userName:"Mike100", owner:1,
    date:"20th September 2023"},
    {title:"London Sports event", desc:"London banking event for investment bankers",category:"Sports",location: "London",
    img:Image,userName:"Mike100", owner:2,
    date:"20th September 2023"},
    {title:"London Doctors event", desc:"London banking event for investment bankers",category:"Medical",location: "London",
    img:Image,userName:"Mike100", owner:3,
    date:"21st September 2023"},
    ]

  return (
    <div className='sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar flex flex-col gap-2 mt-[20px] mx-2'>
    {/* add filters */}
    {eventsTimeline.map((event,index)=>(
      <Link to="/events/2"><TCard event={event} key={index} /></Link>
    ))}
    </div>
  )
}

export default Timeline