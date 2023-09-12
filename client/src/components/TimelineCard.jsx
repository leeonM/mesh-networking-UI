import React from 'react'

const TimelineCard = ({event}) => {
  return (
    <div className='bg-white w-[80%x]'>
        <h1>{event.title}</h1>
        <div>
        <p>Category: <span>{event.category}</span></p>
        <p>Date: <span>{event.date}</span></p>
        <p>Desc: <span>{event.date}</span></p>
        <p>Organiser: <span>{event.userName}</span></p>
        <div>
            <img src={event.img} alt="" />
        </div>
        </div>
    </div>
  )
}

export default TimelineCard