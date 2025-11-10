import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <>
     <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Payment</p>
          <p className='italic text-[#526D82] font-semibold'>Pay for booking slot.</p>
        </div>
    <div className='ml-2 mt-2 bg-[#DDE6ED] p-2 rounded'>
        <div className='flex   gap-2 '>
                    <div className='flex flex-col gap-2'>
                        <p className='text-lg font-bold text-[#27374D]'>Name : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Phone Number : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Date : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Timing : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Dr. Name : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Department : </p>
                        <p className='text-lg font-bold text-[#27374D]'>OPD Type : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Consultancy Type : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Doctor Timing : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Doctor Time Slot : </p>
                        <p className='text-lg font-bold text-[#27374D]'>Consultation Fee : </p>
                        

                    </div>
                    <div className='flex flex-col grow-1 gap-2'>
                        <p className='text-lg font-semibold text-[#27374D]'>Mr. Patient</p>
                        <p className='text-lg font-semibold text-[#27374D]'>+91 91919191919</p>
                        <p className='text-lg font-semibold text-[#27374D]'>12th July 2025</p>
                        <p className='text-lg font-semibold text-[#27374D]'>10:00 AM</p>
                        <p className='text-lg font-semibold text-[#27374D]'>Dr. Johm Cena</p>
                        <p className='text-lg font-semibold text-[#27374D]'>ENT</p>
                        <p className='text-lg font-semibold text-[#27374D]'>Normal</p>
                        <p className='text-lg font-semibold text-[#27374D]'>Video Call</p>
                        <p className='text-lg font-semibold text-[#27374D]'>10:00 AM</p>
                        <p className='text-lg font-semibold text-[#27374D]'>8:00 AM - 9:00 AM</p>
                        <p className='text-lg font-semibold text-[#27374D]'>Rs. 500</p>

                        
                    </div>
                </div>
        <Link to="/patient_dashboard/choosedoc/booking/bookingsummary" className='bg-[#27374D] text-[#DDE6ED] p-2 rounded inline-block mt-5'>Make Payment</Link>
    </div>
        
    </>
  )
}

export default Payment