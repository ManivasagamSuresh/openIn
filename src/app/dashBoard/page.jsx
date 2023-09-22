// "use client"
import React from 'react';
import Menu from '../components/Menu';
import DashboardMain from '../components/DashboardMain';
import MenuMobile from '../components/MenuMobile';
import ProfileForm from '../components/ProfileForm';




function Dashboard  () {
  return (
    <div className='relative '>
    <div className='absolute z-50'><ProfileForm/></div>
    <div className='dashboard flex bg-bgSoft min-h-screen w-screen relative z-10'>
       
      <div className='flex-1 h-screen lg:p-5 hidden lg:block'><Menu/></div>
      
      <div className='flexCustomDashboard py-1 lg:py-5'><DashboardMain/></div>
    </div>
    </div>
  );
}

export default Dashboard    ;
