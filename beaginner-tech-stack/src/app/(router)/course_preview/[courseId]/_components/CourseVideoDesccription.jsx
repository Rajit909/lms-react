import React from 'react'
import VideoPlayer from './VideoPlayer'
import Markdown  from 'react-markdown'

const CourseVideoDesccription = ({courseInfo}) => {
  return (
    <div className='p-5'>
     <h2 className='text-[20px] font-extrabold '>{courseInfo.name}</h2>
     <h2 className=' text-gray-500 font-bold text-[14px] mb-3 '>{courseInfo.author} </h2>
   
   {/* video player */}
   <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url}/>
   
   {/* description */}
   <h2 className="mt-5 font-semibold text-[17px]">
    About this course
   </h2>
   
   <div>
        <Markdown className=' text-md mt-2'>
            {
                courseInfo.description
            }
        </Markdown>
    </div>


  
   
    </div>
  )
}

export default CourseVideoDesccription
