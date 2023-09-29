import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { makeRequest } from '../axios'
import upload from '../utils/upload'


const UpdateUser = () => {
  const {currentUser} = useContext(AuthContext)
  const {pathname}= useLocation()
  const userId = parseInt(pathname.split('/')[2])
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (currentUser.id !== userId) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await makeRequest.get(`/users/${currentUser.id}`)
      setUser(res.data)
    }    
    getUserDetails()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userProfilePic = user.profilePic
    if (file) userProfilePic = await upload(file)
    try {
      await makeRequest.put("/users/"+currentUser.id, {
        ...user,
        profilePic: userProfilePic,
        userId: currentUser.id
      });
      alert("Event updated successfully")
      navigate('/')
    } catch (err) {
      console.log(err);
    }

  }
  

  const handleChange = (e) => {
    setUser((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

  return (
    <div>
       <div className="flex bg-gray-200 h-[100vh] overflow-y-scroll overflow-x-clip p-4">
       <div className='w-[60%] md:w-[80%] h-[100vh] overflow-y-scroll bg-white p-4 rounded-md'>
          <h1 className='text-2xl font-bold my-6'>Update User</h1>
          <form className='flex flex-col gap-2'
          onSubmit={handleSubmit}>
          <label>Username</label>
            <input type="text" placeholder='Username' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='username'
            onChange={handleChange}
            />
            <label>Email</label>
            <input type="email" placeholder='E-mail' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='email'
            onChange={handleChange}
            />
            <label>Occupation</label>
            <input type="text" placeholder='Occupation' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='occupation'
            onChange={handleChange}
            />
            <label>Company</label>
            <input type="text" placeholder='Username' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='company'
            onChange={handleChange}
            />
            <label>Linkedin</label>
            <input type="text" placeholder='Linkedin URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='linkedin'
            onChange={handleChange}
            />
            <label>Instagram</label>
            <input type="text" placeholder='Instagram URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='instagram'
            onChange={handleChange}
            />
            <label>Twitter</label>
            <input type="text" placeholder='Twitter URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='twitter'
            onChange={handleChange}
            />
            <label>Github</label>
            <input type="text" placeholder='Github URL' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='github'
            onChange={handleChange}
            />
            <label>Website</label>
            <input type="text" placeholder='www.yoursite.com' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='website'
            onChange={handleChange}
            />
            <label>Location</label>
            <input type="text" placeholder='e.g. London' 
            className='rounded-md border-[1px] p-2 border-gray-300'
            name='location'
            onChange={handleChange}
            />
            <label>Profile Picture</label>
            <input type="file"
            className='rounded-md border-[1px] p-2 border-gray-300'
            onChange={(e) => setFile(e.target.files[0])} 
            />
            <button className='w-full mt-3 bg-blue-600 text-white p-2 rounded-md mb-4'
            type='submit'
            >Update</button>
          </form>
          </div>
        </div>
    </div>
  )
}

export default UpdateUser