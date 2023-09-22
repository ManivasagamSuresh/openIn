import React from 'react'
import { BiLogoWhatsapp } from 'react-icons/bi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import {  Montserrat, Lato, Poppins } from 'next/font/google'

const monteserat = Montserrat({ subsets: ['latin'] })

function Profile() {
  return (
    <div className='flex flex-col sm:justify-around h-56 sm:h-full py-8 px-5 gap-5'>
        <div className={`text-2xl ${monteserat.className} font-bold px-5`}>John Doe</div>
        <div className='flex flex-col sm:flex-row gap-3'>

            <div className='flex-1 flex flex-col  justify-center items-start pl-8 gap-2'>
            <div className='flex items-center justify-center gap-3'>
                <div className='p-1 bg-greenPercentBg rounded-full text-whatsapp'><BiLogoWhatsapp /></div>
                <div className={`text-sm ${monteserat.className}`}>1234567890</div>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div className='p-1 bg-mailBg rounded-full text-mail'><FiMail/></div>
                <div className={`text-sm ${monteserat.className}`}>Jond@gmail.com</div>
            </div>
            </div>

            <div className='flex-1 flex flex-col  justify-center items-start pl-8 gap-2'>

            <div className=' flex items-center justify-center gap-3'>
            <div className='p-1 bg-instaBg rounded-full text-insta'><BsInstagram/></div>
                <div className={`text-sm ${monteserat.className}`}>Intsa.Official</div>
            </div>

            <div className=' flex items-center justify-center gap-3'>
                <div className='p-1 bg-youtubeBg rounded-full text-youtube'><AiOutlineYoutube/></div>
                <div className={`text-sm ${monteserat.className}`}>Youtube.Official</div>                
            </div>
            </div>

        </div>
    </div>
  )
}

export default Profile