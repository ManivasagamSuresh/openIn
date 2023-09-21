// "use client"
import React from 'react';
import Menu from '../components/Menu';
import DashboardMain from '../components/DashboardMain';




function Dashboard  () {
  return (
    <div className='dashboard flex bg-bgSoft min-h-screen'>
      <div className='flex-1 h-screen p-10'><Menu/></div>
      <div className='flexCustomDashboard p-10'><DashboardMain/></div>
    </div>
  );
}

export default Dashboard    ;
