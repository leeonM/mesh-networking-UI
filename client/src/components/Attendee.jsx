import React from 'react'

const Attendee = ({attendee}) => {
  return (
    <div className='border-[1px] border-gray-400 text-xs flex flex-col gap-2 p-2 items-center rounded-md md:w-[30%] cursor-pointer'>
        <img src={attendee.profilePic} className='rounded-full h-6' />
        <p>{attendee.username}</p>
        <p>{attendee.role}</p>
        <p>Interested in {attendee.reasonInterest}</p>
        <p>{attendee.company}</p>
        <p>{attendee.website}</p>
    </div>
  )
}

export default Attendee