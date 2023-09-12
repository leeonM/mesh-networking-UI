import React from 'react'
import { Link } from 'react-router-dom'

const TCard = ({event}) => {
  const currentUser = 2
  return (
    <div className='bg-white w-full rounded-md p-4 cursor-pointer md:w-[70%] relative'>
    <div className='flex items-center justify-between'>
    <h1 className='font-bold text-2xl pb-2'>{event.title}</h1>
        {currentUser === event.owner && (<Link to="/update-event/2"><button className='bg-green-600 text-sm text-white p-1 rounded-xl cursor-pointer'>Update event</button></Link>)}
    </div>
        <div className='flex flex-col text-sm'>
        <p className='font-semibold bg-blue-800 w-fit p-1 rounded-md text-white mb-2'>{event.category}</p>     
        <p className='font-semibold'>{event.date}</p>
        <p>{event.desc}</p>
        <p className="font-bold text-gray-700">{event.location}</p>
        <div>
            <img src={event.img} alt="" className='rounded-md' />
        </div>
        </div>
    </div>
  )
}

export default TCard