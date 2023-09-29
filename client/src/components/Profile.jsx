import React, { useState,useContext, useEffect } from 'react'
import ProfilePic from "../assets/default-profile.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { makeRequest } from '../axios';

const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  const {pathname}= useLocation()
  const userId = parseInt(pathname.split('/')[2])
  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    const getProfile = async () =>{
      const res = await makeRequest.get(`/users/${userId}`)
      setUserProfile(res.data)
    }
    getProfile()
  }, [])  

  return (
    <div>
      <div className='bg-white m-4 rounded-md p-4'>
          <div className=''>
          <div className='flex justify-between'>
          {(currentUser.id === userId) && (<Link to={"/update-user/"+currentUser.id}><button className='bg-green-600 text-sm text-white p-2 rounded-xl cursor-pointer'>Update user</button></Link>)}
          </div>
          <div className='flex flex-col mt-4'>
              <img src={userProfile.profilePic ? userProfile.profilePic : ProfilePic} alt="" className='rounded-md h-[30%] w-[30%]' />
              <h1 className='text-3xl font-bold my-2'>{userProfile.username}</h1>
              <h2 className='font-semibold'>{userProfile.company ? userProfile.company : 'Not Specified'}</h2>
              <h2 className='italic'>{userProfile.occupation ? userProfile.occupation : 'Not Specified'}</h2>
              <h2 className='text-sm'>{userProfile.location ? userProfile.location : 'Not Specified'}</h2>
              <hr className='my-2' />
              <div className='flex items-center gap-2 text-2xl'>
              {userProfile.linkedin && <a href={'https://'+userProfile.linkedin}>
              <LinkedInIcon className='cursor-pointer' />
              </a>}
              {userProfile.website && <a href={'https://'+userProfile.website}>
              <LanguageIcon className='cursor-pointer' />
              </a>}
              {userProfile.github && <a href={'https://'+userProfile.github}>
                <GitHubIcon className='cursor-pointer' />
                </a>}
                {userProfile.instagram && <a href={'https://'+userProfile.instagram}>
                <InstagramIcon className='cursor-pointer' />
                </a>}
                {userProfile.twitter && <a href={'https://'+userProfile.twitter}>
                <TwitterIcon className='cursor-pointer' />
                </a>}
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Profile