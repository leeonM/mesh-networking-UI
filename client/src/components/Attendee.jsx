import React from 'react'
import ProfilePic from "../assets/default-profile.png";
import { Link } from 'react-router-dom';

const Attendee = ({attendee}) => {
  return (
    <Link to={`/profile/${attendee.id}`} className='w-[70%] md:w-[30%]'>
      <div className='border-[1px] border-gray-400 text-xs flex flex-col gap-2 p-2 items-center rounded-md cursor-pointer
    text-center h-full'>
        <img src={attendee.profilePic ? attendee.profilePic : ProfilePic} className='rounded-full h-6' />
        <p>{attendee.username}</p>
        {attendee.role ?( <p>{attendee.role}</p>):( <p>No role specified</p>)}
        <p><strong>Interested in:</strong> {attendee.interest}</p>
        {attendee.company ?( <p>{attendee.company}</p>):(<p>No company specified</p>)}
        {attendee.role ?( <p>{attendee.role}</p>):(null)}
    </div>
    </Link>
    
  )
}

export default Attendee