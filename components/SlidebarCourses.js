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
        className={`top-0 left-0 w-screen bg-white text-black fixed h-screen z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      > 
        <div className="pb-5 pt-20 sm:px-10 h-screen scrollbar-hide overflow-y-scroll">
            <div className="fixed flex items-center justify-start z-40 top-0 left-0 h-16 shadow-lg w-full pl-6 bg-white">
              <img className="w-12 h-12 object-contain" src='/logo.png'/>
              <a className="p-2 text-white text-xs sm:text-base mx-auto my-2 bg-green-500 shadow-lg rounded-full" href="https://forms.gle/DUZarUMgWLPsY4DCA">Registration</a>
            </div>
            <div className='flex flex-wrap gap-2 mx-2 mb-2'>
            {
                CoursesData.map(({topic, courses, id, def, time, starts, duration})=>(
                    <div key={id}>
                        <button onClick={()=>openCourse(id)} className={`p-2 text-xs sm:text-base rounded-full shadow-lg border border-blue-600 ${course[0].id===id ? ('bg-blue-600 text-white'):('text-black bg-white')}`}>{topic}</button>
                    </div> 
                ))             
            } 
            </div>

            <div>
            {
                course.map(({topic, courses, id, def, time, starts, duration})=>(
                    <> 
                    <div className="bg-blue-200 p-4">
                        <h1 className="text-lg sm:text-xl font-bold p-4 text-center text-white rounded-lg bg-blue-600 shadow-lg">{topic}</h1>
                        {courses.map(({title, list})=>(
                            <div className="p-2 bg-white rounded-lg mt-2">
                                <h1 className="sm:text-lg text-blue-700 font-semibold">{title}</h1>
                                {list.map(val=>(
                                    <div className={`${!time &&('grid grid-cols-2 ')}`}>
                                        <p className="text-xs sm:text-base text-gray-700">{val}</p>
                                        {!time && <p className="text-xs text-right sm:text-base text-gray-700">30 Hours</p>}
                                    </div>
                                ))}
                            </div>
                        ))} 
                    </div> 
                 
                    <div className="mt-2 mx-2 sm:p-4 p-2 shadow-lg bg-blue-600 rounded-lg text-white">
                        {time && <h1><span className='sm:text-xl'>{time}</span> Hours</h1>}
                        <h1>Batch Starts: <span className='sm:text-xl'>{starts}</span></h1>
                        <h1 className="sm:text-lg">{duration}</h1>
                    </div>
                    </> 
                ))
                       
            } 
            
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default SidebarCourses;