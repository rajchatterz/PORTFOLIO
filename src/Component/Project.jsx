import React from 'react'
import app from '../image/app.png'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'

const Project = () => {
  return (
    <div className='h-full md:scroll-smooth flex flex-col mt-12 items-center scroll-smooth'>
      <h1 className='text-4xl font-black text-orange-400'>Projects</h1>
        <div className='grid grid-cols-1 md:grid md:grid-cols-3 md:gap-16 md:justify-around md:items-center items-center justify-between'>
            <div  className='bg-fixed  text-center mt-6 hover:transition-all hover:scale-110'>
              <img src={app} className='rounded-3xl ' width={270} />
              <div className=' mt-[-40%] flex flex-col gap-3'>
              <h1 className='relative text-2xl text-orange-500 font-black'>Project Name</h1>
              <div className='flex gap-3 justify-center items-center'>
                <button className='relative border hover:scale-115  px-5 py-2 rounded-xl bg-orange-300 border-orange-400 '><SiNetlify/></button>
                <button className='relative px-5 py-2 rounded-xl  bg-orange-300'><FaGithub/></button>
              </div>
              </div>
            </div>
            <div  className='bg-fixed text-center hover:transition-all mt-12 hover:scale-110'>
              <img src={app} className='rounded-3xl ' width={270} />
              <div className=' mt-[-40%] flex flex-col gap-3'>
              <h1 className='relative text-2xl text-orange-500 font-black'>Project Name</h1>
              <div className='flex gap-3 justify-center items-center'>
                <button className='relative border hover:scale-115  px-5 py-2 rounded-xl bg-orange-300 border-orange-400 '><SiNetlify/></button>
                <button className='relative px-5 py-2 rounded-xl  bg-orange-300'><FaGithub/></button>
              </div>
              </div>
            </div>
            <div  className='bg-fixed text-center hover:transition-all mt-12 hover:scale-110'>
              <img src={app} className='rounded-3xl ' width={270} />
              <div className=' mt-[-40%] flex flex-col gap-3'>
              <h1 className='relative text-2xl text-orange-500 font-black'>Project Name</h1>
              <div className='flex gap-3 justify-center items-center'>
                <button className='relative border hover:scale-115  px-5 py-2 rounded-xl bg-orange-300 border-orange-400 '><SiNetlify/></button>
                <button className='relative px-5 py-2 rounded-xl  bg-orange-300'><FaGithub/></button>
              </div>
              </div>
            </div>
            <div  className='bg-fixed text-center hover:transition-all mt-12 hover:scale-110'>
              <img src={app} className='rounded-3xl ' width={270} />
              <div className=' mt-[-40%] flex flex-col gap-3'>
              <h1 className='relative text-2xl text-orange-500 font-black'>Project Name</h1>
              <div className='flex gap-3 justify-center items-center'>
                <button className='relative border hover:scale-115  px-5 py-2 rounded-xl bg-orange-300 border-orange-400 '><SiNetlify/></button>
                <button className='relative px-5 py-2 rounded-xl  bg-orange-300'><FaGithub/></button>
              </div>
              </div>
            </div>
            <div  className='bg-fixed text-center hover:transition-all mt-12 hover:scale-110'>
              <img src={app} className='rounded-3xl ' width={270} />
              <div className=' mt-[-40%] flex flex-col gap-3'>
              <h1 className='relative text-2xl text-orange-500 font-black'>Project Name</h1>
              <div className='flex gap-3 justify-center items-center'>
                <button className='relative border hover:scale-115  px-5 py-2 rounded-xl bg-orange-300 border-orange-400 '><SiNetlify/></button>
                <button className='relative px-5 py-2 rounded-xl  bg-orange-300'><FaGithub/></button>
              </div>
              </div>
            </div>
            <div  className='bg-fixed text-center hover:transition-all mt-12 hover:scale-110'>
              <img src={app} className='rounded-3xl ' width={270} />
              <div className=' mt-[-40%] flex flex-col gap-3'>
              <h1 className='relative text-2xl text-orange-500 font-black'>Project Name</h1>
              <div className='flex gap-3 justify-center items-center'>
                <button className='relative border hover:scale-115  px-5 py-2 rounded-xl bg-orange-300 border-orange-400 '><SiNetlify/></button>
                <button className='relative px-5 py-2 rounded-xl  bg-orange-300'><FaGithub/></button>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project