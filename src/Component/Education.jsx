import React from 'react'
import {FaUniversity} from 'react-icons/fa'
import {IoIosPerson} from 'react-icons/io'
import profile from '../image/sidepro.png'
const Education = () => {
  return (
    <div className='h-full md:scroll-smooth mt-20 scroll-smooth'>
        <h1 className='text-center text-orange-400 font-black text-4xl'>About Me</h1>
        <div className='flex flex-col justify-center items-center gap-4 mt-4'>
            <img src={profile} className='shadow-2xl rounded-[50%]' width={250} />
            <div className='flex flex-col gap-4 md:flex md:flex-row'>
                <div className='border border-black shadow-lg px-9 py-8 flex flex-col justify-center items-center rounded-3xl text-white font-bold'>
                    <FaUniversity size={20}/>
                    <h1>Education</h1>
                    <h1>Bachelor of Engineering Technology</h1>
                    <h1>Full Stack Developer</h1>
                </div>
                <div className='border border-black shadow-lg px-32 py-8 flex flex-col justify-center items-center rounded-3xl text-white font-bold'>
                    <IoIosPerson size={20}/>
                    <h1>Experienced</h1>
                    <h1>1+ years</h1>
                </div>
            </div>
            <div className='text-white  md:mx-56 md:font-medium  border shadow-2xl border-black p-4 rounded-3xl m-2'>
                <p>I am thrilled to present my portfolio, a collection that embodies my passion, skills and achievements. My name is <span>Raj Chatterjee</span>, and i am excited to share my story with you. 
                </p>
                <p className='mt-2'>
                Finished my gradution with Aerospace Engineering degree, The degree has allowed me to develop a strong foundation in problem-solving, critical thinking and meticulous attention to detail. These skills will undoubtedly be an assets as i trasition into the field of computer science.
                </p>
                <p className='mt-2'>
                Computer science has always fascinated me and i have been actively exploring and studying the subject in my transition phase.
                </p>
                <p className='mt-2'>
                To facilitate this transition, I have taken proactive steps t enhance my knowledge and skills in the field. I have completed online courses, engaged in personal project to strengthen my understanding of programing languages.
                </p>
                <p className='mt-2'>
                I believe that my background in aerspace, with its emphasis on complex systems, data analysis and optimization will bring a unique prospective to the field of computer science. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Education