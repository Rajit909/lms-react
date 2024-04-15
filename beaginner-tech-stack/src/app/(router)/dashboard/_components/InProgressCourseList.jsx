// 'use client'
import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'

const InProgressCourseList = ({userEnrolledCourses}) => {
  return (
    <div>
      <h2 className=' text-[blue] font-semibold m-3 bg-white p-3 text-[18px] rounded-[5px]'>Recently Enrolled Course</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 mt-10 m-5'>
          {
            userEnrolledCourses.map((course, index) => (
              <ProgressCourseItem key={index} course={course}/>
            ))
          }
          
        </div>
    </div>
  )
}

export default InProgressCourseList