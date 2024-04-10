'use client'
import React from 'react'
import SideBanners from '../courses/_components/SideBanners'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard'
import { useUser } from '@clerk/nextjs'
import InProgressCourseList from './_components/InProgressCourseList'

const Dashboard = () => {
  const {user} = useUser();
  return (
    <div className=" grid grid-cols-1 md:grid-cols-4">
    {/* left section */}
    <div className="col-span-3">
      {/* welcome banner */}
    <WelcomeBannerDashboard user={user}/>

    {/* inprogress course list */}
    <InProgressCourseList/>
    
    </div>
    {/* right section */}
    <div className="lg:block hidden">
      <SideBanners/>
    </div>



  </div>
  )
}

export default Dashboard
