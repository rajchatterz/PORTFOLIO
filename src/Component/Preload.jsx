import React from 'react'
import video from '../video/Namaste.mp4'
const Preload = () => {
  return (
    <div className='top-0 left-0 z-auto flex justify-center items-center'>
        <video src={video} autoPlay muted loop className=' h-screen w-full object-fill'></video>
    </div>
  )
}


export default Preload