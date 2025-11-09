import React from 'react';
import {Link} from "react-router-dom"

const Dashboard = () => {
  return (
    <>
        <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Dashboard</p>
          <p className='italic text-[#526D82] font-semibold'>Subheading goes here</p>
        </div>

        <div className='ml-2 my-3  p-3 rounded'>
          <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-4'>
            
            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

          </div>
        </div>

        <div className='ml-2 mt-3  p-2 rounded bg-[#DDE6ED]'>
          <div className='md:flex gap-5 bg-[#9DB2BF] p-3 rounded'>
            <div>
                <p className='font-bold text-lg text-[#27374D]'>Appointment Summary</p>
            </div>
            <div className='ml-auto'>
              <select>
                <option value="option1">Sort by</option>
                <option value="option2">oldest</option>
                <option value="option2">Latest</option>
              </select>
            </div>
            <div className='flex gap-2'>
              <input type='search' className='border-1'/><Link to="" className='text-md text-[#DDE6ED] bg-[#27374D] p-1 rounded cursor-pointer'>Search</Link>
            </div>
            <div>
              <img src='./images/daterange.svg' />
            </div>
          </div>
        </div>
          <div className='ml-2  p-3 bg-[#DDE6ED] overflow-auto h-[calc(49vh-1.5rem)]'>
            <table className=' my_dashboard_table'>
              <thead>
                <tr>
                  <th className='text-[#27374D] text-md font-bold '>S.No.</th>
                  <th className='text-[#27374D] text-md font-bold '>Date</th>
                  <th className='text-[#27374D] text-md font-bold '>Time</th>
                  <th className='text-[#27374D] text-md font-bold '>Patient Name</th>
                  <th className='text-[#27374D] text-md font-bold '>Doctor</th>
                  <th className='text-[#27374D] text-md font-bold '>Department</th>
                  <th className='text-[#27374D] text-md font-bold  text-center' colSpan={3}>Action</th>
                  <th className='text-[#27374D] text-md font-bold '>Status</th>
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
                  <td><Link to="" className='text-md text-[#DDE6ED] bg-[#27374D] p-1 rounded cursor-pointer'>View Reports</Link></td>
                  <td><Link to="" className='text-md text-[#DDE6ED] bg-[#27374D] p-1 rounded cursor-pointer'>View Prescription</Link></td>
                  <td><Link to="" className='text-md text-[#DDE6ED] bg-[#27374D] p-1 rounded cursor-pointer'>EDIT</Link></td>
                  <td>Active / Expired</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2022-01-01</td>
                  <td>10:00 AM</td>
                  <td>John Doe</td>
                </tr>
                
                
                
              </tbody>
            </table>
          </div>
    </>
  )
}

export default Dashboard