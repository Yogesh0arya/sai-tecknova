import { Menu } from '@headlessui/react'
import {CoursesData} from './CoursesData'
import { useState } from "react";

function Brochure() {
    return (
        <>
            <Menu as="div" className="hidden lg:flex">
            {({open})=>(
                <>
                <Menu.Button className={`px-2 py-1 rounded-md ${open ? ('bg-white text-black border-2 border-black') : ('bg-blue-600 text-white')} `}>
                    Explore Program
                </Menu.Button>
                    {/* menu list */}
                    <Menu.Items className="absolute z-30 top-20 left-0 right-0 text-black min-h-[450px] bg-white shadow-lg">
                        <div className='relative max-w-screen-2xl mx-auto px-5 '>
                        <h1 className="text-blue-700 text-xl my-5 font-bold">Browse by Domains</h1>
                        {
                        CoursesData.map(({topic, courses, id, def, time, starts, duration, eachTime, project, year, degree})=>(
                            <div className="grid grid-cols-3 group">
                                <h1 className={`px-2 py-1 ${def && ('active:bg-blue-600 active:text-white')} group-hover:bg-blue-600 group-hover:text-white cursor-pointer`}>{topic}</h1>
                                <div className="col-span-2">

                                <div className={`absolute pb-12 shadow-lg min-h-[430px] bg-white left-56 top-0 right-0  ${def ? ('default:inline-block') : ('hidden')} group-hover:inline-block text-black`}>
                                    <h1 key={id} className="text-xl text-center font-bold mb-3 text-blue-700">{topic}</h1>
                                    {time && <div className="grid grid-cols-2 gap-x-5 gap-y-5 px-5">
                                        {courses.map(({title, list})=>(
                                            <div className='p-2 shadow-md even:bg-red-50 odd:bg-green-50 cursor-pointer rounded-sm'>
                                                <h1 className="text-lg mb-2 text-center">{title}</h1>
                                                {list.map(val=>(
                                                    <p className="text-gray-500">{val}</p>
                                                ))}
                                            </div>
                                        ))}
                                        
                                    </div>}
                                    
                                    {eachTime &&<div className="grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 px-5">
                                        {courses.map(({title, list})=>(
                                            <div>
                                                <h1 className="text-lg mb-2 text-center">{title}</h1>
                                                <div className='grid grid-cols-2 gap-x-3 gap-y-3'>
                                                {list.map(val=>(
                                                    <div className="p-2 shadow-md bg-violet-50 cursor-pointer rounded-sm">
                                                        <p className="text-black mb-2">{val}</p>
                                                        <p className="text-gray-500 text-right align-bottom">●  30 Hrs</p>
                                                    </div>
                                                ))}
                                                </div>
                                                
                                            </div>
                                        ))} 
                                    </div>}

                                    {project &&<div className="px-5">
                                        {courses.map(({title, list})=>(
                                            <div>
                                                <div className="flex justify-center space-x-3 items-end border-b border-gray-200">
                                                    <h1 className="text-xl">{year}</h1>
                                                    <h1 className="text-blue-600 text-xs">{degree}</h1>
                                                </div>
                                                <h1 className="text-lg mb-2 text-center text-gray-600">{title}</h1>
                                                <div className='grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-5 '>
                                                {list.map(val=>(
                                                    <div className="p-2 shadow-md bg-orange-200 cursor-pointer rounded-sm">
                                                        <p className="text-black mb-2">{val}</p>
                                                    </div>
                                                ))}
                                                </div>
                                                
                                            </div>
                                        ))}
                                    </div>}

                                    {!project &&<div className="absolute pb-2 pt-1 border border-t-gray-300 bottom-0 left-0 right-0 flex justify-around text-gray-500 text-xl font-semibold">
                                        {time && <h1><span className="text-red-600 lg:text-3xl">{time}</span> Hours</h1>}
                                        <h1>Batch Starts: <span className="text-green-600 lg:text-2xl">{starts}</span></h1>
                                        <h1>{duration}</h1>
                                    </div>}
                                </div>
                                    
                                </div>
                            </div>
                            
                        ))} 
                        </div>

                    </Menu.Items>
                </>
            )}
            </Menu>
        </>
    )
}

export default Brochure


