import React from 'react'
import ProfilePic from "../assets/default-profile.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Profile = () => {
  const currentUser = 2
  const userId = 3

  return (
    <div>
      <div className='bg-white m-4 rounded-md p-4'>
          <div className=''>
          <div className='flex justify-between'>
           <Link to="/events/2">
           <button className='bg-blue-800 text-sm text-white p-2 rounded-xl cursor-pointer'>Back</button>
           </Link>
          {currentUser === userId && (<Link to="/update-user/2"><button className='bg-green-600 text-sm text-white p-2 rounded-xl cursor-pointer'>Update user</button></Link>)}
          </div>
          <div className='flex flex-col mt-4'>
              <img src={ProfilePic} alt="" className='rounded-md h-[30%] w-[30%]' />
              <h1 className='text-3xl font-bold my-2'>John100</h1>
              <h2 className='font-semibold'>Google</h2>
              <h2 className='italic'>Software Engineer</h2>
              <h2 className='text-sm'>London, UK</h2>
              <hr className='my-2' />
              <p className='text-sm'>Interested in finding out more about Typescript, 
              and have an idea for a SaaS tool that leverages AI</p>
              <hr className='my-2' />
              <div className='flex items-center gap-2 text-2xl'>
                <LinkedInIcon className='cursor-pointer' />
                <LanguageIcon className='cursor-pointer' />
                <GitHubIcon className='cursor-pointer' />
                <InstagramIcon className='cursor-pointer' />
                <TwitterIcon className='cursor-pointer' />
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Profile