import React, { useContext, useEffect, useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EventIcon from '@mui/icons-material/Event';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UpcomingEventCard from './UpcomingEventCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { makeRequest } from '../axios';

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext)
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    const getMyAttending = async () =>{
        const res = await makeRequest.get(`/events/my-events/${currentUser.id}`).then(res=>{
            return res.data;
          })
          setUpcoming(res)
    }
    getMyAttending()
  }, [upcoming])
  

  return (
    <div className='text-sm sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar'>
        {/* <Link to={"/messages/"+currentUser?.id}>
        <div className='flex items-center p-4 gap-2 cursor-pointer'>
            <MailOutlineIcon />
            <span>Messages</span>
        </div>
        </Link> */}
        <Link to={"/my-organised-events/"+currentUser?.id}>
        <div className='flex items-center p-4 gap-2 cursor-pointer'>
            <EventIcon />
            <span>My Organised Events</span>
        </div>
        </Link>
        <Link to="/add-event">
        <div className='flex items-center p-4 gap-2 cursor-pointer'>
            <AddCircleOutlineIcon />
            <span>Add New Event</span>
        </div>
        </Link>
        <hr />
        <div className='flex flex-col p-4 gap-2'>
            <h2 className='font-bold'>My Upcoming Attending</h2>
            <div className='flex flex-col gap-2 min-w-fit cursor-pointer'>
            {upcoming.map((event,index)=>(
                <Link key={index} to={"/events/"+event.eventId}><UpcomingEventCard event={event} /></Link>
            ))}
            </div>
        </div>

    </div>
  )
}

export default LeftBar