import React from 'react'
import LayerBg from '../../Assets/aboutBg.svg'
import HeroBg from '../../Assets/contactBg.svg'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <>
            <div className='h-[150vh] w-full '>
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

                        <div className='grid grid-cols-2 px-[10rem] items-center mt-20'>
                            <div>
                                <h1 className='text-[4rem] font-semibold leading-[5rem]'>The Best Medical Care You Can Get!</h1>

                                <Link to="/AvailableDoctors">
                                    <button style={{ boxShadow: ' 2px 8px 6px 0px #00000040' }} className='mt-8 py-4 px-20 rounded-lg text-lg font-medium  bg-[#181818] hover:bg-[#000] w-fit self-center hover:text-[#d79949]'>Make Appointment</button>
                                </Link>
                                
                            </div>
                            <div>
                                <div className='bg-white px-10 py-6 pb-8 rounded-xl'>

                                    <p className='text-black font-semibold mt-4'>Name</p>
                                    <input type="text" className='text-black text-xl pl-4 rounded-lg h-[3.5rem] w-full bg-[#1818184D]' />

                                    <p className='text-black font-semibold mt-4'>Email</p>
                                    <input type="email" className='text-black text-xl pl-4 rounded-lg h-[3.5rem] w-full bg-[#1818184D]' />

                                    <p className='text-black font-semibold mt-4'>Contact #</p>
                                    <input type="text" className='text-black text-xl pl-4 rounded-lg h-[3.5rem] w-full bg-[#1818184D]' />

                                    <p className='text-black font-semibold mt-4'>Condition</p>
                                    <textarea name="" id="" cols="30" rows="7" className='text-black text-xl pl-4 rounded-lg bg-[#1818184D] w-full'></textarea>

                                    <div className='w-full flex justify-end mt-4'>
                                        <button className='font-medium  bg-[#181818] hover:bg-[#000] hover:text-[#d79949] py-4 px-16 self-end rounded-lg' >Continue</button>
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
