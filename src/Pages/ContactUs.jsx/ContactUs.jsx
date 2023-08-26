import React from 'react'
import LayerBg from '../../Assets/aboutBg.svg'
import HeroBg from '../../Assets/contactBg.svg'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <>
            <div className='md:h-[150vh] h-[115vh] w-full '>
                <div className='relative' style={{
                    background: `url(${HeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%', height: '100%'
                }}>
                    <div style={{
                        background: `url(${LayerBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%', height: '100%'
                    }}>

                        <Navbar />

                        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-12 md:px-[10rem] px-8 items-center md:mt-20 mt-16'>
                            <div>
                                <h1 className='md:text-[4rem] text-4xl font-semibold md:leading-[5rem]'>The Best Medical Care You Can Get!</h1>

                                <Link to="/AppointBoking">
                                    <button style={{ boxShadow: ' 2px 8px 6px 0px #00000040' }} className='mt-8 py-4 md:px-20 px-8 rounded-lg text-lg font-medium  bg-[#181818] hover:bg-[#000] w-fit self-center hover:text-[#d79949]'>Make Appointment</button>
                                </Link>

                            </div>
                            <div>
                                <div className='bg-white md:px-10 px-4 md:py-6 py-2 md:pb-8 pb-4 rounded-xl'>

                                    <p className='text-black font-semibold md:mt-4 mt-3 md:text-md text-sm'>Name</p>
                                    <input type="text" className='text-black md:text-xl pl-4 rounded-lg md:h-[3.5rem] h-[2.5rem] w-full bg-[#1818184D]' />

                                    <p className='text-black font-semibold md:mt-4 mt-3 md:text-md text-sm'>Email</p>
                                    <input type="email" className='text-black md:text-xl pl-4 rounded-lg md:h-[3.5rem] h-[2.5rem] w-full bg-[#1818184D]' />

                                    <p className='text-black font-semibold md:mt-4 mt-3 md:text-md text-sm'>Contact #</p>
                                    <input type="text" className='text-black md:text-xl pl-4 rounded-lg md:h-[3.5rem] h-[2.5rem] w-full bg-[#1818184D]' />

                                    <p className='text-black font-semibold md:mt-4 mt-3 md:text-md text-sm'>Condition</p>
                                    <textarea name="" id="" cols="30" rows="7" className='text-black md:text-xl  pl-4 rounded-lg bg-[#1818184D] w-full'></textarea>

                                    <div className='w-full flex justify-end mt-4'>
                                        <Link to="/AvailableDoctors" >
                                            <button className='font-medium  bg-[#181818] hover:bg-[#000] hover:text-[#d79949] py-4 md:px-16 px-10 self-end rounded-lg' >Continue</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>
            </div>
        </>
    )
}

export default ContactUs
