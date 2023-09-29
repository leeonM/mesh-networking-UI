import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='flex items-center justify-between h-[60px] border-b-[1px] border-b-gray-300 px-[5%] sticky top-0 z-[999] bg-white'>
       <Link to="/">
       <div className=''>
        <h1 className='font-bold text-xl cursor-pointer'>mesh</h1>
        </div>
       </Link>
        {/* add search bar */}
        <div className='flex font-semibold text-sm gap-4'>
           {currentUser ?
            (<>
            <p>{currentUser.username}</p>
            <Link to={"/profile/"+currentUser.id}>
            <p className='cursor-pointer'>Profile</p>
            </Link>
            <Link to="/login">
            <p className='cursor-pointer'>Logout</p>
            </Link>
            </>): (
                <>
                <Link to="/login">
                <p className='cursor-pointer'>Login</p>
                </Link>
                <Link to="/register">
                <p className='cursor-pointer'>Register</p>
                </Link>
                </>
                )}
        </div>
        </div>
  )
}

export default Navbar