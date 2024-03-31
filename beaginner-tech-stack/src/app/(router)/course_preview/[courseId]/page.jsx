'use client'
import React, { useEffect, useState } from 'react'
import CourseVideoDesccription from './_components/CourseVideoDesccription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseEnrollSection from './_components/CourseEnrollSection'

const CoursePreview = ({params}) => {
 const [courseInfo, setCourseInfo] = useState()

  useEffect(() => {
    params&&getCourseInfoById();
  }, [params])
  
// used to get course info by slug name
    const getCourseInfoById = () => {
      GlobalApi.getCourseById(params?.courseId).then(res=> {
        console.log(res);
        setCourseInfo(res?.courseList)
      })
    }

  return courseInfo&& (
    <div>
        <div className='grid grid-col-1 md:grid-cols-3 p-5 gap-3'>
          {/* video desc & title */}
            <div className='col-span-2 bg-white'>
            <CourseVideoDesccription courseInfo={courseInfo}/>

            </div>
            {/* course content */}
            <div>
             <CourseEnrollSection/>
            </div>

        </div>
    </div>
  )
}

export default CoursePreview
