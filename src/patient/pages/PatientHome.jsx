import React, { useState } from 'react'
import {Link, Routes, Route, useLocation} from "react-router-dom"
import Dashboard from '../components/Dashboard.jsx';
import ChooseDoc from '../components/ChooseDoc.jsx';
import Booking from '../components/Booking.jsx';
import BookingSummary from '../components/BookingSummary.jsx';
import Payment from '../components/Payment.jsx';
import TalkDoctor from '../components/TalkDoctor.jsx';
import Profile from '../components/Profile.jsx';
import Settings from '../components/Settings.jsx';
import Notifications from '../components/Notifications.jsx';
import Logout from '../components/Logout.jsx';
import SymptomsChecker from '../components/SymptomsChecker.jsx';


const Homepage = () => {
  const [sidebar,setSidebar]=useState(false)
  // console.log(window.location.pathname)
  const { pathname } = useLocation();
  return (
    <div className='h-[100vh] overflow-hidden bg-[#9DB2BF] grid grid-cols-1 md:grid-cols-[1fr_5fr]'>
      <div className='h-full p-2 pr-0 overflow-auto'>
        
        <div className={`${sidebar ? "flex absolute top-0 right-0 w-[50vw] bg-[#DDE6ED] pl-2" : "hidden"} md:flex gap-3 items-center  border-b-1 border-[#526D82] mb-3 pb-2 h-[3rem] `}>
         <span className='text-2xl text-shadow-sm text-[#27374D] font-semibold'>Hi, Mr. John</span>
        </div>
        <div className={`h-[calc(100vh-5rem)] ${sidebar ? "flex absolute top-12 right-0 w-[50vw]" : "hidden"} md:flex flex-col justify-between  text-[#27374D] bg-[#DDE6ED] p-2 rounded`}>
          <ul>
            <li className=' '>
              <Link className={`flex gap-2 p-2 mb-2 rounded ${pathname == "/patient_dashboard/" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `} to="/patient_dashboard/">
                <img src='/patient_dashboard/images/dashboard.svg'/> <span className='text-md font-semibold'>Dashboard</span>
              </Link>
              <Link className={`flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]' ${pathname === "/patient_dashboard/choosedoc" || pathname === "/patient_dashboard/choosedoc/booking" || pathname === "/patient_dashboard/choosedoc/booking/registration" || pathname === "/patient_dashboard/choosedoc/booking/bookingsummary" || pathname === "/patient_dashboard/choosedoc/booking/payment" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `} to="/patient_dashboard/choosedoc" >
                <img src='/patient_dashboard/images/dashboard.svg'/> <span className='text-md font-semibold'>Appointment Booking</span>
              </Link>
              {/* <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>All Reports</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>Medicine Record</span>
              </Link> */}
              <Link className={`flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF] ${pathname == "/patient_dashboard/talkdoctor" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `} to="/patient_dashboard/talkdoctor">
                <img src='/patient_dashboard/images/dashboard.svg'/> <span className='text-md font-semibold'>Talk Doctor</span>
              </Link>
              <Link className={`flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF] ${pathname == "/patient_dashboard/symptomschecker" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `} to="/patient_dashboard/symptomschecker">
                <img src='/patient_dashboard/images/dashboard.svg'/> <span className='text-md font-semibold'>Symptom Checker (AI)</span>
              </Link>
              
              
            </li>
          </ul>
          
          <ul>
            <li className=' '>
              <Link className={`flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF] ${pathname == "/patient_dashboard/profile" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `} to="/patient_dashboard/profile">
                <img src='/patient_dashboard/images/user.svg'/> <span className='text-md font-semibold'>Profile</span>
              </Link>
              <Link className={`flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF] ${pathname == "/patient_dashboard/settings" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `}   to="/patient_dashboard/settings">
                <img src='/patient_dashboard/images/settings.svg'/> <span className='text-md font-semibold'>Settings</span>
              </Link>
              
              
            </li>
          </ul>
        </div>

      </div>
      <div className='h-full p-2 pl-0 overflow-auto'>

        <div className='flex gap-3 items-center justify-end border-b-1 border-[#526D82] mb-3 pb-2 h-[3rem]'>
          <div className='mr-auto' onClick={()=>{setSidebar(prev => !prev)}}>
            <p className='md:hidden'>T</p>
          </div>
          
          
          {/* <div>
            <img src='/images/settings.svg'/>
          </div> */}
          <div>
              <Link to="/patient_dashboard/notifications"> 
                <img src='/patient_dashboard/images/notification.svg' className={`${pathname == "/notifications" ? "bg-[#526D82] rounded text-[#DDE6ED] " : "bg-[#9DB2BF]" } `}/>
              </Link>
          </div>
          <div>
            <Link to="/patient_dashboard/logout">
              <img src='/patient_dashboard/images/logout.svg' className={`w-[1.3rem] cursor-pointer ${pathname == "/logout" ? "bg-[#526D82] rounded text-[#DDE6ED] " : "bg-[#9DB2BF]" } `}/>
            </Link>
          </div>
          
        </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/logout" element={<Logout />} />            
            <Route path="/choosedoc/*" element={<ChooseDoc />} />
            <Route path="/choosedoc/booking" element={<Booking />} />
            <Route path="/choosedoc/booking/payment" element={<Payment />} />
            <Route path="/choosedoc/booking/bookingsummary" element={<BookingSummary />} />
            <Route path="/talkdoctor/" element={<TalkDoctor />} />
            <Route path="/SymptomsChecker" element={<SymptomsChecker />} />
            
          </Routes>

      </div>



    </div>

  )
}

export default Homepage