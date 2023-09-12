import React from 'react'
import ProfilePic from "../assets/default-profile.png";


const Message = ({message}) => {
  return (
    <div className='p-4 flex flex-col gap-2 h-[100vh] overflow-scroll'>
    {/* messages */}

    {/* owner message */}
      <div>
        <div className='flex flex-col bg-blue-700 text-white p-2 rounded-md gap-2 max-w-[200px] md:max-w-md lg:max-w-xl'>
        <div className='flex items-center gap-2'>
        <img src={ProfilePic} className='rounded-full h-6 w-6 object-cover' />
          <span>Jimmy200</span>
        </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Error aperiam dicta temporibus officia quasi commodi fuga 
            iste debitis nihil molestiae 
          </p>
        </div>
      </div>

      {/* recipient message */}
      <div className='flex flex-row-reverse'>
        <div className='fle flex-col bg-slate-500 text-white p-2 rounded-md gap-2 max-w-[200px] md:max-w-md lg:max-w-xl'>
        <div className='flex items-center gap-2'>
        <img src={ProfilePic} className='rounded-full h-6 w-6 object-cover' />
          <span>Dave100</span>
        </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Error aperiam dicta temporibus
          </p>
        </div>
      </div>
      {/* write */}
      <hr className='border-[0.5px] border-slate-300 my-1' />
      <div className='flex items-center gap-2'>
        <textarea name="" placeholder='Write a message' id="" cols="30" rows="10"
        className='flex items-center p-1 w-[100%] rounded-md h-[100px]'>

        </textarea>
        <button className='bg-green-500 text-white p-4 md:p-8 flex items-center rounded-md cursor-pointer justify-center'>Send</button>
      </div>
    </div>
  )
}

export default Message