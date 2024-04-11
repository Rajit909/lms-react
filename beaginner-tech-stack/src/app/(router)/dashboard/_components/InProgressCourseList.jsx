// 'use client'
import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'

const InProgressCourseList = ({userEnrolledCourses}) => {
  return (
    <div>
      <h2 className=' text-[blue] font-semibold m-3 bg-white p-3 text-[18px] rounded-[5px]'>Recently Enrolled Course</h2>
        <div>
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