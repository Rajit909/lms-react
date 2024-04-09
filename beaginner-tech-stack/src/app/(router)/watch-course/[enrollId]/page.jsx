'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import {React, useEffect, useState} from 'react'
import CourseContentSection from '../../course_preview/[courseId]/_components/CourseContentSection'
import CourseVideoDesccription from '../../course_preview/[courseId]/_components/CourseVideoDesccription'
import { toast } from 'sonner'

const WatchCourse = ({params}) => {
  const {user} = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState([]);

  useEffect(() => {
   params&&user&&getUserEnrolledCourseDetail();

  }, [params&&user])
  

  const getUserEnrolledCourseDetail = () => {
    // get the enrolled course details
    GlobalApi.getUserEnrolledCourseDetails(params.enrollId, user.primaryEmailAddress.emailAddress).then(res => {
      console.log(res.userEnrollCourses[0])
      setCourseInfo(res.userEnrollCourses[0].courseList)
    })
  }

  // save completed chapterid
  const onChapterCompleted = (chapterId)=> {
    GlobalApi.markChapterCompleted(params.enrollId, chapterId).then(res=>{
      console.log(res);
      if (res) {
        toast('Chapter Marked as completed')
      }
    })
  }

  return courseInfo.name&& (
    <div>
    <div className='grid grid-col-1 md:grid-cols-3 p-5 gap-3'>
      {/* video desc & title */}
        <div className='col-span-2 bg-white'>
        <CourseVideoDesccription courseInfo={courseInfo} activeChapterIndex={activeChapterIndex} watchMode={true} 
        setChapterCompleted={(chapterId) => onChapterCompleted(chapterId)}/>

        </div>
        {/* course content */}
        <div className='lg:col-span-1 col-span-2'>
         <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={true} 
         watchMode={true} 
         setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}/>
        </div>

    </div>
</div>
  )
}

export default WatchCourse