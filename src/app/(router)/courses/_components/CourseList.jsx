import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect , useState} from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem'


const CourseList = () => {
  const [courseList, setCourseList] = useState([])

    useEffect(() => {
        getAllCourses()
    }, []);

    const getAllCourses = () => {
        GlobalApi.getAllCourseList().then(res=>{
            setCourseList(res?.courseLists)
            console.log(res?.courseLists)
        })
    }

  return (
    <div className='p-5 bg-white rounded-lg m-5'>
      {/* title and filter */}
      <div className='flex items-center justify-between'>
        <h2 className='text-[20px] font-bold text-blue-700'>All courses</h2>
        <div>
        <Select>
  <SelectTrigger className="w-[100px]">
    <SelectValue placeholder="Filter" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">All</SelectItem>
    <SelectItem value="dark">paid</SelectItem>
    <SelectItem value="system">free</SelectItem>
  </SelectContent>
</Select>

        </div>
      </div>
      {/* display courses */}
      <div className='grid col-span-2 lg:grid-cols-3 gap-5 mt-5'>
       {
        courseList.map((item, index) => (
          <div key={index} >
            <CourseItem course={item}/>
          </div>
        ))
       }
      </div>

    </div>
  )
  }

export default CourseList