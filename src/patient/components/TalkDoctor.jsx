import React from 'react';
import {Link} from "react-router-dom"

const TalkDoctor = () => {
  return (
    <>
    <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Talk to Doctor</p>
          <p className='italic text-[#526D82] font-semibold'>Subheading goes here</p>
        </div>
    <div className='ml-2 my-3  p-3 bg-[#DDE6ED] overflow-auto h-[calc(49vh-1.2rem)]'>
        <table className=' my_dashboard_table'>
              <thead>
                <tr>
                  <th className='text-[#27374D] text-md font-bold '>S.No.</th>
                  <th className='text-[#27374D] text-md font-bold '>Date</th>
                  <th className='text-[#27374D] text-md font-bold '>Time</th>
                  <th className='text-[#27374D] text-md font-bold '>Patient Name</th>
                  <th className='text-[#27374D] text-md font-bold '>Doctor</th>
                  <th className='text-[#27374D] text-md font-bold '>Department</th>
                  <th className='text-[#27374D] text-md font-bold  text-center' colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                  <td>Dr. John Doe</td>
                  <td>ENT</td>
                  <td><Link to="" className='text-md text-[#DDE6ED] bg-[#27374D] p-1 rounded cursor-pointer'>Chat Now</Link></td>
                  <td><Link to="" className='text-md text-[#DDE6ED] bg-[#27374D] p-1 rounded cursor-pointer'>Video Call</Link></td>
                </tr>
                </tbody>
                </table>
                </div>
    </>
  )
}

export default TalkDoctor