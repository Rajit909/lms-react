'use client'
import React, { useEffect, useState } from 'react'
import CourseVideoDesccription from './_components/CourseVideoDesccription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseEnrollSection from './_components/CourseEnrollSection'
import CourseContentSection from './_components/CourseContentSection'
import { useUser } from '@clerk/nextjs'

const CoursePreview = ({params}) => {
 const [courseInfo, setCourseInfo] = useState()
 const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState()

  const {user} = useUser();

  useEffect(() => {
    params&&getCourseInfoById();
  }, [params]);

  useEffect(()=>{
    courseInfo&&user&&checkUserEnrolledToCourse();

  }, [courseInfo, user])
  
// used to get course info by slug name
    const getCourseInfoById = () => {
      GlobalApi.getCourseById(params?.courseId).then(res=> {
        console.log(res);
        setCourseInfo(res?.courseList)
      })
    }

// to check user already enrolled to course or not
    const checkUserEnrolledToCourse = async () => {
      GlobalApi.checkUserEnrolledToCourse(courseInfo.slug, user.primaryEmailAddress.emailAddress).then(res => {
        console.log(res);
        if(res?.userEnrollCourses[0]?.id){
          setIsUserAlreadyEnrolled(res?.userEnrollCourses[0]?.id);
        }
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
             <CourseEnrollSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
             <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
            </div>

        </div>
    </div>
  )
}

export default CoursePreview