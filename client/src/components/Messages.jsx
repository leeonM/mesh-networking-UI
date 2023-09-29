import React from 'react'
import Message from "./Message"
import { Link } from 'react-router-dom'

const messages = [
  {id:1,senderId:1, receiverId:2,status: "unread", username: "ray100", chat:[{userName:"john100",message:"Hello"},{userName:"david100",message:"How you doing, how can i help"}]},
  {id:1,senderId:1, receiverId:2,status: "unread", username: "teddykingz", chat:[{userName:"john100",message:"Hello"},{userName:"david100",message:"How you doing, how can i help"}]},
  {id:1,senderId:1, receiverId:2,status: "read", username: "john100", chat:[{userName:"david100",message:"Hello"},{userName:"john100",message:"How you doing, how can i help"}]},
  {id:1,senderId:1, receiverId:2,status: "read", username: "john100", chat:[{userName:"david100",message:"Hello"},{userName:"john100",message:"How you doing, how can i help"}]},
]

const Messages = () => {
  return (
    <div className='bg-gray-200 p-4 sticky top-[60px] h-[calc(100vh-60px)] overflow-scroll no-scrollbar'>
      <div className='bg-white p-6 rounded-md w-full md:w-[50%]'>
          <h1 className='text-2xl font-bold mb-4'>Messages</h1>  
          <div className='flex flex-col gap-2'>
          {messages.map((message,index)=>(
            <div key={index} className={`border-[1px] ${message.status === "read" ? "bg-white": "bg-blue-300 border-blue-500"} p-2 rounded-md text-sm cursor-pointer`}>
              <p className='font-bold mb-2'>{message.username} {message.status === "unread" &&<span className='ml-1 bg-red-500 p-1 text-white text-xs rounded-md font-thin'>Unread</span>}</p>
              {message.chat.map((item,index)=>(
                <Link to="/messages/message/1" key={index}>
                <div className='flex'>
               <span className='font-semibold'>{item.userName}:</span><p key={index}>{item.message.substring(0,10)}...</p>
               </div>
               </Link>
              ))}
            </div>
          ))}
      </div>        
      </div>
    </div>
  )
}

export default Messages