"use client"
import React from 'react'

// import Svg from "./components/Svg"
import { FcGoogle } from 'react-icons/fc';
import { DiApple } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BiLogoDiscord } from 'react-icons/bi';

import {  Montserrat, Lato, Poppins } from 'next/font/google'
import Svg from '../components/Svg';
import Link from 'next/link';
import { useFormik } from 'formik';
import axios from 'axios';

const monteserat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'] })
const lato = Lato({ 
  weight: '400',
  subsets: ['latin'] })





function Signup() {


  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:async(values)=>{
      try {
        console.log(values)
        const result  = await axios.post("/api/signup",values);
        console.log(result);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    }
  })

  return (
    <div className='signin flex h-screen bg-bgSoft'>

  {/* left panel */}
    <div className="left hidden lg:flex flex-col  items-center h-screen  flex-1 bg-bgSoft">
      <Svg/>
      <div className={`flex-1 z-10 w-full ml-32 mt-12 font-bold text-white text-2xl ${poppins.className}` }> <div>LOGO</div></div>
      <h1 className={`flex-1  z-10 text-6xl font-bold text-white pt-16 pr-10 ${monteserat.className}`}>Board.</h1>
    <div className="icons flex-1 flex  z-10 items-center justify-center gap-5 pr-10">
      <div> <BsGithub size="30px" className="text-whiteI"/></div>
      <div> <AiFillTwitterCircle size="30px" className="text-whiteI"/></div>
      <div> <BsLinkedin size="27px" className="text-whiteI"/> </div>
      <div> <BiLogoDiscord size="30px" className="text-whiteI"/> </div>
    </div>
    </div>

    {/* right panel  */}
    <div className="right flexP bg-bgSoft flex lg:ml-24 justify-center items-center lg:gap-5 p-10 md:p-0">
      <div className="rightContainer flex flex-col gap-2 lg:gap-7 w-full sm:w-3/4 md:w-3/5  lg:w-3/5 ">
        <div>
          
        <div className={`text-2xl text-black font-bold ${monteserat.className}`}>Sign Up</div>
        <div className={`mb-10 text-black ${lato.className}`}>Create your account</div>
        </div>



        <form className="flex flex-col bg-white px-5 py-7 lg:py-10 rounded-lg gap-4 lg:gap-8" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-3">
          <label for="email" className={`${lato.className}`}>Email address</label>
        <input id="email" type="email" 
               value={formik.values.email}
               onChange={formik.handleChange}
               name="email"
        className="border rounded-lg h-10 px-5 bg-inputBg border-none outline-none"/>
          </div>

          <div className="flex flex-col gap-3">     
        <label for="password" className={`${lato.className}`}>Password</label>
        <input id="password" type="password"  
               value={formik.values.password}
               onChange={formik.handleChange}
               name="password"
        className="border rounded-lg h-10 px-5 bg-inputBg border-none focus:outline-none"/>
          </div>
        
        <button type='submit' className="bg-blueBg p-2 rounded-md text-white font-semibold">Sign Up</button>
        </form>
        <div className="text-center">
        Already have an account? <span className="text-link cursor-pointer"><Link href="/">Sign In</Link>  </span>
        </div>
      </div>
      </div>
</div>
  )
}

export default Signup