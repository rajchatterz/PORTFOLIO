import React from 'react'

import Typed from 'react-typed'
import profile from '../image/profilehero.png'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='h-full md:flex md:scroll-smooth md:mt-10 md:flex-row md:h-full md:justify-center md:gap-[0] md:pt-12 md:items-center flex flex-col items-center justify-around gap-8 scroll-smooth'>
        <div>
            <img src={profile} width={300} className='md:w-1/2 md:relative md:left-7' alt="" />
        </div>
        <div className='text-center md:relative md:right-24 mt-7 flex flex-col justify-around'>
            <h1 className='text-white md:text-5xl text-4xl font-serif'>My Name <span className='text-orange-100'>Is</span></h1>
            <h1 className='text-orange-400 font-black md:text-4xl md:mt-1 text-4xl'>RAJ <span className='text-orange-500'>CHATTERJEE</span></h1>
            <h1 className='text-2xl text-white font-sans md:text-2xl mt-2'>FULL STACK DEVELOPER</h1>
            
                <h1 className='text-white mt-2 text-xl md:text-2xl font-bold'>WHO IS SPECILIZED IN </h1>
                <Typed strings={['REACT JS','MYSQL','JAVASCRIPT','NOSQL','MONGODB','HTML','CSS3','NODE JS']} className=' mt-4  text-3xl text-orange-400 font-black' typeSpeed={150} backSpeed={150} loop/>
            <div className='flex justify-center items-center gap-4 mt-4'>
                <FaLinkedin size={30} className='text-orange-100'/>
                <FaGithub size={30} className='text-orange-100'/>
            </div>
        </div>
    </div>
  )
}

export default Hero