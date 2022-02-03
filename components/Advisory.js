import {AdvisoryData} from './AdvisoryData'

function Advisory() {
    return (
        <div id="advisory" className="mt-24 py-8 bg-blue-100">
            <div className="max-w-6xl xl:mx-auto mx-5">
                <h1 className="text-4xl font-bold text-center mt-10 mb-2 text-black">Advisory</h1>
                <p className="text-lg md:text-2xl text-center text-black">Center for Advanced IT Experiential Learning</p>
                <h1 className="text-lg md:text-2xl font-bold text-center mb-10 text-blue-700">Advisory Board</h1>
                
                <div className="flex scrollbar scrollbar-thumb-black p-3 pb-10 space-x-4">
                    {AdvisoryData.map(({id, name,title, subtitle, area, img})=>{
                        return(
                            <div key={id} className="relative rounded-lg group shadow-lg shadow-gray-500 flex-shrink-0 transform hover:scale-105 hover:shadow-lg hover:shadow-black transition duration-500 ease-out ">
                                <img src={img} alt="image" className=' object-fill rounded-lg h-56 w-56 md:h-96 md:w-96'/>
                                <div className='absolute text-xs md:text-base rounded-lg transform transition duration-500 ease-out group-hover:bg-opacity-75 flex flex-col justify-end items-center text-gray-300 bg-black bg-opacity-50 top-0 bottom-0 z-10 p-2'>
                                    <h1 className="md:text-lg text-white font-bold transition duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-3">{name}</h1>
                                    <p className="transition duration-700 ease-out group-hover:-translate-y-3">{title}</p>
                                    <p className="hidden group-hover:inline-block mb-2 text-xs"><span className="hidden md:inline-block">{subtitle}</span></p>
                                    <p className="hidden group-hover:inline-block"><span className="md:text-lg font-semibold text-white">Area of Specialization: </span>{area}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Advisory
