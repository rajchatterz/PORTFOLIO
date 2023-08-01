import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'


const Email = () => {
  const form = useRef();
  const [success,setSuccess]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hyh1g3o', 'template_7qb8ayg', form.current, 'FfXpqyJl1_6FwR_Z7')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
          console.log("Message Sent")
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  };
  return (
    <div className='mt-28 md:scroll-smooth h-screen scroll-smooth text-center flex flex-col justify-between items-center'>
      <div className=''>
      <h1 className='text-4xl font-black text-orange-400 pt-16 '>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-7 mt-24'>
          <div className='flex border border-white rounded-xl  text-white font-semibold text-md justify-start items-center'>
            <BsFillPersonFill size={30}/>
            <label className=' '>Name</label>
            <input className='bg-transparent p-5 w-full border-hidden' type="text" name="name" />
          </div>
        <div className='flex border border-white rounded-xl text-white font-semibold text-md justify-start items-center'>
          <MdEmail size={30}/>
          <label className=' border-none'>Email</label>
          <input className='bg-transparent p-5 w-full border-transparent' type="email" name="email" />
        </div>
        <div className='flex border border-white rounded-xl  text-white font-semibold text-md justify-start items-center'>
          <BiMessageDetail size={30}/>
          <label className=' border-none'>Message</label>
          <textarea className='bg-transparent p-5 w-full' rows={4} name="message" />
        </div>
          <input type="submit" className='px-24 py-6 bg-orange-400 text-white font-bold text-2xl rounded-xl' value="Send" />
          {success && 
            "Your Message has been sent, We will get back to you soon"
          }
        </form>
      </div>
    </div>
  )
}

export default Email