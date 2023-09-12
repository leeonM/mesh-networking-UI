import React from 'react'
import Image from "../../assets/event-photo.jpg";
import ProfilePic from "../../assets/default-profile.png";
import Attendee from '../../components/Attendee';

const attendees = [
  {id:1, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic},
  {id:2, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic},
  {id:3, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic},
  {id:4, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic},
  {id:5, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic},
  {id:6, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic},  
  {id:7, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic},
  {id:8, username: 'john100',role:'Investment analyst',reasonInterest:"Fintech", company: 'HSBC',linkedin:'linkedin.com',website:'www.hsbc.com', profilePic: ProfilePic}

]

const Event = () => {
  return (
    <div className='bg-gray-200 p-4 sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar'>
      <div className='bg-white p-6 rounded-md'>
          <button className='bg-blue-800 text-sm text-white p-2 rounded-xl cursor-pointer'>Back</button>
          <div className='py-2'>
            <h1 className='text-2xl font-bold'>London Banking Event</h1>
            <div>
              <h2 className='text-lg font-semibold'>13th October 2023</h2>
              <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto consectetur exercitationem distinctio magni ipsam minus illum dolores?</p>
              <img src={Image} className='rounded-md' />
            </div>
          </div>
          <div className='py-2'>
            <h2 className='text-xl font-semibold mb-2'>Attendees</h2>
            <div className='flex flex-wrap gap-2'>
              {attendees.map((attendee,index)=>(
                <Attendee attendee={attendee} key={index} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Event