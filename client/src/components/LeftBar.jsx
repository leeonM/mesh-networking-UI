import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EventIcon from '@mui/icons-material/Event';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UpcomingEventCard from './UpcomingEventCard';
import { Link } from 'react-router-dom';

const events = [
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    {name: 'Networking dinner',date: "20th October 2023", location:"London"},
    {name: 'Bankers networking conference',date: "1st December 2023", location: "London"},
    {name: 'Sales conference',date: "9th December 2023", location: "Birmingham"},
    
]
const LeftBar = () => {
  return (
    <div className='text-sm sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar'>
        <Link to="/messages">
        <div className='flex items-center p-4 gap-2 cursor-pointer'>
            <MailOutlineIcon />
            <span>Messages</span>
        </div>
        </Link>
        <Link to="/my-organised-events">
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
            {events.map((event,index)=>(
                <Link key={index} to="/events/1"><UpcomingEventCard event={event} /></Link>
            ))}
            </div>
        </div>

    </div>
  )
}

export default LeftBar