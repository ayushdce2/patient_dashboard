import React from 'react'

const BookingSummary = () => {
  return (
    <>
         <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Booking Summary</p>
          <p className='italic text-[#526D82] font-semibold'>Get detailed booking summary.</p>
        </div>
        <div className='ml-2 mt-2 bg-[#DDE6ED] p-2 rounded'>
            <div className='bg-[#9DB2BF] rounded p-2 flex items-center mb-2'>
                <p className='text-[#27374D]'><strong>Appointment Date : </strong> 12 July 2025 | 10:00 AM</p>
                <img src='/images/download.svg' className='ml-auto cursor-pointer hover:bg-[#DDE6ED] p-1 rounded'/>
            </div>
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
                        <p className='text-lg font-semibold text-[#27374D]'>PAID</p>

                        
                    </div>
                </div>
        </div>
    </>
  )
}

export default BookingSummary