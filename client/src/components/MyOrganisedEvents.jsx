import React from 'react'
import TCard from './TCard'
import Image from "../assets/event-photo.jpg";

const MyOrganisedEvents = () => {
    const eventsTimeline = [
        {title:"London banking event", desc:"London banking event for investment bankers",category:"Banking", location: "London",
    img:Image,userName:"John100",
    date:"20th September 2023"},
    ]

  return (
    <div className='sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar flex flex-col gap-2 mt-[20px] mx-2'>
    {/* add filters */}
    {eventsTimeline.map((event,index)=>(
      <TCard event={event} key={index} />
    ))}
    </div>
  )
}

export default MyOrganisedEvents