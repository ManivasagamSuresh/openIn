"use client"
import React from 'react'
import Topbar from './Topbar'
import Card from './Card'
import Barchart from './BarChart'
import Piechart from './PieChart'
import AddProfile from './AddProfile'
import Profile from './Profile'
import MenuMobile from './MenuMobile'
import ProfileForm from './ProfileForm'


const data = false;

function DashboardMain() {
  return (
    <div className='containerDashboard py-3 px-3 lg:px-10 flex flex-col gap-6 max-w-full min-h-screen relative'>
      <div className='lg:hidden stickyTop z-50'> <MenuMobile/></div>
      
      <div className='Topbar'><Topbar/> </div>
      <div className=''><Card/> </div>
      <div className=''><Barchart/></div>
      <div className='flex flex-col w-full gap-9 sm:flex-row mb-14'>
        <div className='flex-1 bg-white  rounded-xl shadow-xl'><Piechart/></div>
        {
         data ?  <div className='flex-1 bg-white  rounded-xl shadow-xl'><Profile/></div>
         : <div className='flex-1 bg-white  rounded-xl shadow-xl'><AddProfile/></div>
        }
     
      
      </div>
    </div>
  )
}

export default DashboardMain