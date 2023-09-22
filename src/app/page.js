"use client"
import Svg from "./components/Svg"
import { FcGoogle } from 'react-icons/fc';
import { DiApple } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BiLogoDiscord } from 'react-icons/bi';
import Link from "next/link";
import {  Montserrat, Lato, Poppins } from 'next/font/google'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'




const monteserat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'] })
const lato = Lato({ 
  weight: '400',
  subsets: ['latin'] })
 

export default function Home() {
  const {data,status} = useSession();
  

  const router = useRouter();

const HandleGoogleLogin = async()=>{
  try {
     signIn("google")
  } catch (error) {
    console.log(error)
  }
  
}

if(status === 'loading'){
  return <div className="text-3xl font-bold flex items-center justify-center h-screen w-screen">Loading...</div>
}
if(status === "authenticated"){
  router.push('dashBoard')
}
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
    <div className="right flexP bg-bgSoft flex flex-col  lg:ml-24 justify-center items-center lg:gap-5 px-10 md:py-5">
      <div className={`text-white bg-blueS lg:hidden w-full text-2xl mb-3 md:text-3xl font-bold text-center py-2 md:py-5 ${monteserat.className}`}>Board.</div>
      <div className="rightContainer flex flex-col gap-2 lg:gap-7 w-full sm:w-4/5 md:w-3/5  lg:w-fit ">
        <div>
          
        <div className={`text-2xl text-black font-bold ${monteserat.className}`} >Sign In</div>
        <div className={`mb-4 md:mb-6 text-black ${lato.className}`}>Sign in to your account</div>
        </div>

        <div className="signbutton flex flex-col sm:flex-row items-center gap-4 lg:gap-8 ">
        <div className="gButton flex items-center justify-center gap-2 h-10 w-full lg:w-52 bg-white p-4 rounded-md cursor-pointer">
          <span className="flex "><FcGoogle size="20px"/> </span>
          <span className="text-greySoft " onClick={() => {HandleGoogleLogin()}}>Sign in with Google</span>
        </div>
        <div className="aButton flex items-center justify-center gap-2 h-10 w-full lg:w-52 bg-white p-4 rounded-md cursor-pointer">
          <span className="flex"><DiApple size="20px"/> </span> 
          <span className="text-greySoft">Sign in with Apple</span>
        </div>
        </div>

        <form className="flex flex-col bg-white px-5 py-7 lg:py-8 rounded-lg gap-4 lg:gap-8">
          <div className="flex flex-col gap-3">
          <label htmlFor="email" className={`${lato.className}`}>Email address</label>
        <input id="email" type="email" className="border rounded-lg h-10 px-5 bg-inputBg border-none outline-none"/>
          </div>

          <div className="flex flex-col gap-3">     
        <label htmlFor="password" className={`${lato.className}`}>Password</label>
        <input id="password" type="password"  className="border rounded-lg h-10 px-5 bg-inputBg border-none focus:outline-none"/>
          </div>
        <div className="text-link cursor-pointer">Forgot Password?</div>
        <button className="bg-blueBg p-2 rounded-md text-white font-semibold"> Sign In</button>
        </form>
        <div className="text-center">
        Don’t have an account? <span className="text-link cursor-pointer"><Link href="/signup">Register here</Link>  </span>
        </div>
      </div>
      </div>
</div>
  )
}
