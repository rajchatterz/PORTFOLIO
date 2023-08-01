import React from 'react'
import {Circle} from 'rc-progress'
const Skill = () => {
  return (
    <div className='h-full flex md:mt-36 flex-col items-center justify-center gap-4 mt-12'>
        <h1 className='text-5xl font-black text-orange-400'>Skills</h1>
        <div className='grid grid-cols-2 md:grid md:grid-cols-3 md:justify-evenly md:items-center md:gap-16 gap-4'>
            <div className='flex flex-col items-center hover:transition-all justify-center gap-2 hover:scale-110'>
                <h1 className=' text-orange-400 text-2xl font-bold'>JAVASCRIPT</h1>
                <Circle
                percent={80}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute mt-10 text-2xl font-bold hover:scale-125 text-orange-400'>80%</h1>
            </div>
            <div className='flex flex-col hover:transition-all hover:scale-110 items-center justify-center gap-2'>
                <h1 className=' text-orange-400 text-2xl font-bold'>HTML</h1>
                <Circle
                percent={95}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute hover:scale-125 mt-10 text-2xl font-bold text-orange-400'>95%</h1>
            </div>
            <div className='flex flex-col hover:transition-all hover:scale-110 items-center justify-center gap-2'>
                <h1 className=' text-orange-400 text-2xl font-bold'>CSS</h1>
                <Circle
                percent={90}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute hover:scale-125 mt-10 text-2xl font-bold text-orange-400'>90%</h1>
            </div>
            <div className='flex flex-col hover:transition-all hover:scale-110 items-center justify-center gap-2'>
                <h1 className=' text-orange-400 text-2xl font-bold'>TAILWIND CSS</h1>
                <Circle
                percent={70}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute hover:scale-125 mt-10 text-2xl font-bold text-orange-400'>70%</h1>
            </div>
            <div className='flex flex-col hover:transition-all hover:scale-110 items-center justify-center gap-2'>
                <h1 className=' text-orange-400 text-2xl font-bold'>REACT JS</h1>
                <Circle
                percent={40}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute hover:scale-125 mt-10 text-2xl font-bold text-orange-400'>40%</h1>
            </div>
            <div className='flex flex-col hover:transition-all hover:scale-110 hover:transition-all items-center justify-center gap-2'>
                <h1 className=' text-orange-400 text-2xl font-bold'>MONGO-DB</h1>
                <Circle
                percent={20}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute hover:scale-125 mt-10 text-2xl font-bold text-orange-400'>20%</h1>
            </div>
            <div className='flex flex-col hover:transition-all hover:scale-110 items-center justify-center gap-2'>
                <h1 className=' text-orange-400 text-2xl font-bold'>NODE JS</h1>
                <Circle
                percent={60}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute hover:scale-125 mt-10 text-2xl font-bold text-orange-400'>60%</h1>
            </div>
            <div className='flex flex-col hover:transition-all hover:scale-110 items-center justify-center gap-2'>
                <h1 className=' text-orange-400 text-2xl font-bold'>MYSQL</h1>
                <Circle
                percent={40}
                strokeColor="lightpink"
                strokeWidth={20}
                trailColor='white'
                trailWidth={14}
                className='w-36 md:w-56'
                />
                <h1 className='absolute hover:scale-125 mt-10 text-2xl font-bold text-orange-400'>40%</h1>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Skill