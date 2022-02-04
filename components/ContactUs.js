import {PhoneIcon} from '@heroicons/react/outline'

function ContactUs() {
    return (
    <>
        <div id="contact" className="bg-blue-100 mt-24 py-8">
            <div className="max-w-6xl xl:mx-auto mx-5 grid grid-cols-1 lg:grid-cols-3">
                <div className="">
                    <h1 className="text-4xl font-bold text-center mt-8 mb-2 text-black">Still have queries?</h1>
                    <h1 className="text-4xl font-bold text-center mb-8 text-black">Contact Us</h1>
                    <div className="text-gray-600">
                        <p>Please fill in the form and an expert from the admissions office will call you in the next 4 working hours. You can also reach out to us at <span className="text-blue-700 cursor-pointer">pgpdsba@greatlearning.in</span> or <span className="text-blue-700 cursor-pointer">080-4718-9251</span></p>
                        
                    </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-2 gap-x-8 mt-16 lg:px-4">
                    <div>
                        <h1>Name</h1>
                        <input className="w-full p-2 rounded-md mb-4 border border-gray-400 outline-none bg-gray-100" type="text" placeholder="Name"/>
                        <h1>Email</h1>
                        <input className="w-full p-2 rounded-md mb-4 border border-gray-400 outline-none bg-gray-100" type="email" placeholder="Email "/>
                    </div>
                    <div>
                        <h1>Mobile Number</h1>
                        <input className="w-full p-2 rounded-md mb-4 border border-gray-400 outline-none bg-gray-100" type="text" placeholder="Mobile No"/>
                        <h1>Work experience in years</h1>
                        <input className="w-full p-2 rounded-md mb-4 border border-gray-400 outline-none bg-gray-100" min={0} type="number" placeholder="Select number of years"/>
                    </div>

                    <div className="col-span-2 flex flex-col items-center text-black space-y-2 ">
                        <p>By submitting the form, you agree to our <span className="text-blue-700 underline cursor-pointer">Terms and Conditions</span> and <span className="text-blue-700 underline cursor-pointer">our Privacy Policy</span>.</p>
                        <button className="py-3 px-6 bg-blue-700 rounded-lg text-white hover:shadow-lg">Submit</button>
                    </div>
                </div>            
            </div>
        </div>

        <div className="bg-black">
            <div className="max-w-6xl xl:mx-auto py-10 mx-5 flex flex-wrap gap-x-8 text-white">
                <p className="cursor-pointer flex"><PhoneIcon className="w-6 mr-2"/>+91-7708940140</p>
                <p className="cursor-pointer">DataInfo Academy</p>
            </div>
        </div>
    </>
    )
}

export default ContactUs
