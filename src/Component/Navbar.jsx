import React, { useState } from 'react'
import profile from '../image/name.png'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import download from 'downloadjs'
const Navbar = () => {
    const [nav,setNav]=useState(true)

    const handleNav=()=>{
        setNav(!nav)
    }
    const handleDownload = ()=>{
        const fileurl = 'https://drive.google.com/file/d/1y6nrLMFqkBkLO7Im-W9lW5U_87gJmaLi/view?usp=sharing'
        window.open(fileurl,'_blank');
    }
  return (
    <div className='flex justify-around  font-semibold font-mono items-center h-32 mx-auto max-w-[1440px]  text-white'>
        <div className=''>
            <img src={profile} alt="" width={160} />
        </div>
        <div>
            <ul className='hidden md:flex md:justify-around md:items-center text-sm'>
                <li className='p-4 hover:text-orange-400 hover:ease-in-out hover:duration-200'><a href="#">Skills</a></li>
                <li className='p-4 hover:text-orange-400 hover:ease-in-out hover:duration-200'><a href="#">Project</a></li>
                <li className='p-4 hover:text-orange-400 hover:ease-in-out hover:duration-200'><a href="#">Education</a></li>
                <li className='p-4 hover:text-orange-400 hover:ease-in-out hover:duration-200'><a href="#">Contact Me</a></li>
                <li className='p-4 hover:text-black hover:ease-in-out hover:duration-200 '><button onClick={handleDownload} className='uppercase bg-orange-400  p-4 rounded-2xl'>Get Resume</button></li>
            </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30} className='z-10'/> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={!nav ? 'fixed  top-16 w-[100%] z-20 border-purple-400 m-8 ease-in-out bg-purple-400 h-screen duration-500 text-center md:hidden':'fixed top-[-70%]'}>
            <ul className='p-2 uppercase'>
                <li className='py-6'><a href="#">Skills</a></li>
                <li className='py-6'><a href="#">Project</a></li>
                <li className='py-6'><a href="#">Education</a></li>
                <li className='py-6'><a href="#">Contact Me</a></li>
                <li className='py-6'><button onClick={handleDownload} className='uppercase bg-orange-400 p-4 rounded-2xl'>Get Resume</button></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar