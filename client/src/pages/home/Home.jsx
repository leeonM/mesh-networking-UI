import React from 'react'
import LeftBar from '../../components/LeftBar'
import Timeline from '../../components/Timeline'
import UpdateUser from '../../components/updateUser'
import AddEvent from '../../components/AddEvent'
import Event from '../../components/Event'
import Messages from '../../components/Messages'
import Message from '../../components/Message'


const Home = () => {
  const currentUser = true
  return (
    <div className='h-[100vh] flex'>
        {/* sidebar component */}
       {currentUser && <div className='flex-2 w-[30%] border-r-[1px] border-b-gray-300'>
        <LeftBar />
       </div>}
       <div className='flex-1 bg-gray-200'>
        <Event />
       </div>
       

        {/* event timeline component */}

        {/* Your upcoming events component */}

    </div>
  )
}

export default Home