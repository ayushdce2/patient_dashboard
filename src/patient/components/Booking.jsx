import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for drag-n-drop, selectable
import {Link} from "react-router-dom"
// import '@fullcalendar/common/main.css';
// import '@fullcalendar/daygrid/main.css';

const Booking = () => {
    return (
        <>
            <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
                <p className='text-2xl font-bold text-[#27374D]'>Book Appointment</p>
                <p className='italic text-[#526D82] font-semibold'>Choose timing, day and go ahead with booking.</p>
            </div>
            <div className='ml-2 mt-2 bg-[#DDE6ED] p-2 rounded'>
                <div className='flex gap-2 '>
                    <div className=''>
                        <img src='/images/user.png' className='w-[10rem] h-[10rem]' />
                    </div>
                    <div className=' grow-1'>
                        <p className='text-2xl font-bold text-[#27374D]'>Dr. Johm Cena</p>
                        <p className='text-lg  text-[#27374D] mt-5'><strong>Designation : </strong>Head Of Department (Obst & Gynae)</p>
                        <p className='text-lg  text-[#27374D]'><strong>Speciality  : </strong>Obstetrics and Gynaecology</p>
                        <p className='text-lg  text-[#27374D]'><strong>Areas of Expertise  : </strong> High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
                        <p className='text-lg  text-[#27374D]'><strong>Qualification : </strong> DGO, MBBS from Lady Hardinge Medical College, Delhi</p>
                    </div>
                </div>
            </div>
            <div className='ml-2 bg-[#DDE6ED] p-2 flex'>
                <div className=' boxShadow1' >
                    <div style={{ height: '24rem',width:"30rem" }}>
                    <FullCalendar
  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
  initialView="dayGridMonth"
  height={`100%`}
  expandRows={true}
  editable={true}
  selectable={true}
  selectMirror={true}
  
  headerToolbar={{
    // left: 'prev,next today',
    // center: 'title',
    // right: 'dayGridMonth,timeGridWeek,timeGridDay',
        // right: null
  }}
  dayMaxEventRows={3}
  events={[
    { title: 'Design Review', start: '2025-08-07T14:00:00', end: '2025-08-07T15:00:00', color: 'blue' },
  ]}
  select={(info) => {
    console.log("New selection:", info.startStr, info.endStr);
  }}
  eventClick={(info) => {
    console.log("Event clicked:", info.event.title);
  }}
  eventDrop={(info) => {
    console.log("Dropped to:", info.event.start);
  }}
/>
</div>
                </div>
                <div className='grow-1 pl-3 flex flex-col justify-between ' >



                    <div className='flex justify-around'>
                        <div className=''>
                            <p className='text-2xl font-bold text-[#27374D]'>OPD Type</p>
                            <div className='ml-5 flex gap-5'>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>Normal</p>

                                </div>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>Premium</p>

                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-2xl font-bold text-[#27374D]'>Consultancy Type</p>
                            <div className='ml-5 flex gap-5'>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>In Person</p>

                                </div>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>Video Call</p>

                                </div>
                            </div>
                        </div>



                    </div>

                    <div className='flex justify-around'>
                        <div className=''>
                            <p className='text-2xl font-bold text-[#27374D]'>Doctor Timing</p>
                            <div className='ml-5 flex gap-5'>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>Normal</p>

                                </div>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>Premium</p>

                                </div>
                            </div>
                        </div>






                        <div className=''>
                            <p className='text-2xl font-bold text-[#27374D]'>Doctor Time Slot</p>
                            <div className='ml-5 flex gap-5'>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>In Person</p>

                                </div>
                                <div className='flex items-center gap-3'>
                                    <input type='radio' />
                                    <p>Video Call</p>

                                </div>
                            </div>
                        </div>
                    </div>


                    <Link to="/choosedoc/booking/payment" className='text-center bg-[#27374D] p-3 rounded text-[#DDE6ED] mx-[auto] w-[50%]'>Next </Link>






                </div>

            </div>

        </>
    )
}

export default Booking