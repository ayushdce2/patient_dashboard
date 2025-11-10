import React from 'react'
import {Link, Routes, Route, useLocation} from "react-router-dom"

const ChooseDoc = () => {
    
  return (
        <>
        <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Book Appointment</p>
          <p className='italic text-[#526D82] font-semibold'>Choose doctor and go ahead with booking.</p>
        </div>
        <div className='ml-2 mt-2 bg-[#DDE6ED] p-2  flex items-center gap-5'>
            <div>
                <p>Sort By : </p>
            </div>
            <div>
                <select className='boxShadow1 md:w-[10rem] p-1 rounded focus:outline-0'>
                    <option>Department</option>
                    <option>one</option>
                    <option>one</option>
                </select>
            </div>
            <div>
                <select className='boxShadow1 md:w-[10rem] p-1 rounded focus:outline-0'>
                    <option>Experience</option>
                    <option>one</option>
                    <option>one</option>
                </select>
            </div>
        </div>
        <div className='ml-2 bg-[#DDE6ED] p-2 flex flex-col items-center gap-5 overflow-auto h-[calc(80vh-3.8rem)]'>
            <div className='md:flex items-center p-2 rounded w-full boxShadow1 hover:bg-[#fff]'>
                <div>
                    <img src='/patient_dashboard/images/user.png' className='w-[5rem] h-[5rem]'/>
                </div>
                <div className='md:flex grow-1 justify-between'>
                    <div className=' pl-5'>
                        <p className='text-lg font-bold text-[#27374D]'>Dr. John</p>
                        <p className='text-sm text-[#27374D]'>MBBS </p>
                    </div>
                    <div className='my-3 md:m-0'>
                         
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Speciality : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Areas of Expertise : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                    </div>
                    <div className=''>
                        <Link to="/patient_dashboard/choosedoc/booking" className='text-md text-[#DDE6ED] bg-[#27374D] p-2 rounded cursor-pointer'>Book Now</Link>
                    </div>
                </div>
            </div>

            <div className='md:flex items-center p-2 rounded w-full boxShadow1 hover:bg-[#fff]'>
                <div>
                    <img src='/patient_dashboard/images/user.png' className='w-[5rem] h-[5rem]'/>
                </div>
                <div className='md:flex grow-1 justify-between'>
                    <div className=' pl-5'>
                        <p className='text-lg font-bold text-[#27374D]'>Dr. John</p>
                        <p className='text-sm text-[#27374D]'>MBBS </p>
                    </div>
                    <div className='my-3 md:m-0'>
                         
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Speciality : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Areas of Expertise : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                    </div>
                    <div className=''>
                        <Link to="/patient_dashboard/choosedoc/booking" className='text-md text-[#DDE6ED] bg-[#27374D] p-2 rounded cursor-pointer'>Book Now</Link>
                    </div>
                </div>
            </div>

            <div className='md:flex items-center p-2 rounded w-full boxShadow1 hover:bg-[#fff]'>
                <div>
                    <img src='/patient_dashboard/images/user.png' className='w-[5rem] h-[5rem]'/>
                </div>
                <div className='md:flex grow-1 justify-between'>
                    <div className=' pl-5'>
                        <p className='text-lg font-bold text-[#27374D]'>Dr. John</p>
                        <p className='text-sm text-[#27374D]'>MBBS </p>
                    </div>
                    <div className='my-3 md:m-0'>
                         
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Speciality : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Areas of Expertise : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                    </div>
                    <div className=''>
                        <Link to="/patient_dashboard/choosedoc/booking" className='text-md text-[#DDE6ED] bg-[#27374D] p-2 rounded cursor-pointer'>Book Now</Link>
                    </div>
                </div>
            </div>

            <div className='md:flex items-center p-2 rounded w-full boxShadow1 hover:bg-[#fff]'>
                <div>
                    <img src='/patient_dashboard/images/user.png' className='w-[5rem] h-[5rem]'/>
                </div>
                <div className='md:flex grow-1 justify-between'>
                    <div className=' pl-5'>
                        <p className='text-lg font-bold text-[#27374D]'>Dr. John</p>
                        <p className='text-sm text-[#27374D]'>MBBS </p>
                    </div>
                    <div className='my-3 md:m-0'>
                         
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Speciality : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Areas of Expertise : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                    </div>
                    <div className=''>
                        <Link to="/patient_dashboard/choosedoc/booking" className='text-md text-[#DDE6ED] bg-[#27374D] p-2 rounded cursor-pointer'>Book Now</Link>
                    </div>
                </div>
            </div>

            <div className='md:flex items-center p-2 rounded w-full boxShadow1 hover:bg-[#fff]'>
                <div>
                    <img src='/patient_dashboard/images/user.png' className='w-[5rem] h-[5rem]'/>
                </div>
                <div className='md:flex grow-1 justify-between'>
                    <div className=' pl-5'>
                        <p className='text-lg font-bold text-[#27374D]'>Dr. John</p>
                        <p className='text-sm text-[#27374D]'>MBBS </p>
                    </div>
                    <div className='my-3 md:m-0'>
                         
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Speciality : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Areas of Expertise : </span>High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                    </div>
                    <div className=''>
                        <Link to="/patient_dashboard/choosedoc/booking" className='text-md text-[#DDE6ED] bg-[#27374D] p-2 rounded cursor-pointer'>Book Now</Link>
                    </div>
                </div>
            </div>
            

            

            

            

            

        </div>
    </>
  )
}

export default ChooseDoc