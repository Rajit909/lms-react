import Image from 'next/image'
import React from 'react'

const ProgressCourseItem = ({course}) => {
  return (
    <div className=" border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-300">
    <div>
      <Image
        src={course.courseList?.banner?.url}
        width={500}
        height={200}
        alt="banner"
        className="rounded-t-xl h-[120px] lg:h-[150px] object-cover]"
      />
    </div>
    <div className="flex flex-col gap-5 p-3">
      <h2 className="font-medium">{course.courseList?.name}</h2>
      <h2 className="text-[12px] text-gray-400">{course.courseList?.author}</h2>
    
     <div className="flex items-center gap-5">
      <Image src="/images/chapter.jfif" width={30} height={30} alt="chapter"/>
      <h2 className="font-medium text-sm ">Total Chapters: {course.courseList?.totalChapters} </h2>
    </div> 
      <h2 className="text-[15px]">{course.courseList?.free ? "Free" : "Paid"}</h2>
    </div>
  </div>
  )
}

export default ProgressCourseItem
