import React from 'react'

const UpcomingEventCard = ({event}) => {
  return (
    <div className='max-w-full flex flex-col border-[1px] p-2 rounded-md gap-2
    '>
        <h1 className='font-bold'>{event.name}</h1>
        <div className='flex flex-col justify-between'>
        <p className='text-xs'>{event.date}</p>
        <span className='text-xs'>{event.location}</span>
        </div>
    </div>
  )
}

export default UpcomingEventCard