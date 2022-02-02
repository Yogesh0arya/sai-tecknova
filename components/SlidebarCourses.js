import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/outline'
import {CoursesData} from './CoursesData'

const SidebarCourses = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [course, setCourse] = useState([CoursesData[0]]);

  const openCourse=(index)=>setCourse(CoursesData.filter(ele=>ele.id===index))


  return (
    <div className="lg:hidden">
      {showSidebar ? (
        <button
          className="flex text-2xl text-blue-700 items-center cursor-pointer fixed top-4 right-10  z-50 md:top-6"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <div className="absolute z-30 flex items-center cursor-pointer right-8 sm:right-14 top-5 md:top-6">
          <button onClick={() => setShowSidebar(!showSidebar)} className="text-xs flex items-center rounded-lg bg-blue-500 text-white p-1 sm:p-2 hover:shadow-lg active:bg-blue-800">
            <ChevronDownIcon className="w-3"/>All Programs
          </button>
        </div>
        
      )}

      <div
        className={`top-0 left-0 w-screen bg-white p-4 pl-5 sm:p-10 sm:pl-20 text-black fixed h-screen z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      > 
        <div className="pb-5 pt-16 h-screen scrollbar-hide overflow-y-scroll">
            <div className="fixed flex items-center justify-start z-40 top-0 left-0 h-16 shadow-lg w-full pl-16 bg-white">
              <img className="w-12 h-12 object-contain" src='/logo.png'/>
            </div>
            <div className='flex flex-wrap gap-2 pb-3 border-b-1 border-blue-100'>
            {
                CoursesData.map(({topic, courses, id, def, time, starts, duration})=>(
                    <div key={id}>
                        <button onClick={()=>openCourse(id)} className={`p-2 text-xs sm:text-base rounded-full shadow-lg border ${course[0].id===id ? ('bg-blue-600 text-white'):('text-black bg-white')}`}>{topic}</button>
                    </div> 
                ))             
            } 
            </div>

            <div>
            {
                course.map(({topic, courses, id, def, time, starts, duration})=>(
                    <div className="bg-gray-100 rounded-md">
                        <h1 className="mt-2 text-xl p-2 text-center rounded-lg text-white bg-blue-400">{topic}</h1>
                        {courses.map(({title, list})=>(
                            <div className="p-2">
                                <h1 className="text-lg text-blue-600 mt-2 font-semibold">{title}</h1>
                                {list.map(val=>(
                                    <p className="text-gray-600">{val}</p>
                                ))}
                            </div>
                        ))} 
                    </div> 
                ))             
            } 
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default SidebarCourses;