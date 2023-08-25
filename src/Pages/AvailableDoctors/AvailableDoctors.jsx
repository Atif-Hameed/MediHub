import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import { MdArrowForwardIos } from 'react-icons/md';
import docLoc from '../../Assets/docLoc.svg'
import docTime from '../../Assets/docTime.svg'
import docFemale from '../../Assets/docFemale.svg'
import docStarSquare from '../../Assets/docStarSquare.svg'
import docStar from '../../Assets/docStar.svg'
import docCash from '../../Assets/docCash.svg'
import crown from '../../Assets/crown.svg'
import longShadesBg from '../../Assets/longShadesBg.svg'
import DoctorDetails from './DoctorDetails';
import PlatinumDoctor from './PlatinumDoctors';



const AvailableDoctors = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow((prev) => !prev)
    }

    return (
        <>
            <div style={{
                backgroundImage: `url(${longShadesBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
            }}>
                <Navbar />

                <div className='w-full px-24'>

                    <div className='bg-[#D9D9D9] px-8 py-10 rounded-t-2xl mt-10' >

                        <div className='text-black flex items-center gap-1'>
                            <p className='text-sm'>HOME</p>
                            <MdArrowForwardIos className='text-white' />
                            <p className='text-sm'>PAKISTAN</p>
                            <MdArrowForwardIos className='text-white' />
                            <p className='text-sm'>LAHORE</p>
                            <MdArrowForwardIos className='text-white' />
                            <p className='text-sm'>GYNECOLOGISTS IN LAHORE</p>
                        </div>

                        <h1 className='text-[2.4rem] text-black font-medium mt-4'>680 Best Gynecologists in Lahore</h1>
                        <p className='text-lg text-black'>Also known as Female Health Specialist, OB-GYN or Women Health Specialist</p>

                        <div className='grid grid-cols-6 gap-4 mt-12'>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docLoc} className='w-2/3' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 px-4'>
                                    <p className='text-black text-md font-medium' >Doctors Near Me</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docCash} className='w-2/3' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 px-4'>
                                    <p className='text-black text-md font-medium' >Lowest Fee</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docStar} className='w-2/3' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 px-4'>
                                    <p className='text-black text-md font-medium' >Most Reviewed</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docStarSquare} className='w-2/3' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 px-4'>
                                    <p className='text-black text-md font-medium' >Most Experienced</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docTime} className='w-2/3' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 px-4'>
                                    <p className='text-black text-md font-medium' >Available Today</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docFemale} className='w-2/3' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 px-4'>
                                    <p className='text-black text-md font-medium' >Female Doctors</p>
                                </div>
                            </div>
                        </div>

                        <DoctorDetails />

                        <div className='bg-[#E7E7E7] p-6 pb-10 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <img src={crown} className='w-[1.7rem]' alt="" />
                                    <h1 className='text-[1.6rem] uppercase text-black font-medium'>Platinum Doctors</h1>
                                </div>
                                <p onClick={handleShow} className='cursor-pointer text-black underline text-xl' >
                                    {show ? 'View Less' : 'View All'}
                                </p>
                            </div>

                            <div className='grid grid-cols-4 gap-6 mt-6'>

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                            </div>
                            <div className={`grid grid-cols-4 gap-6 mt-6 ${show ? 'block' : 'hidden'} `}>

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                            </div>
                        </div>

                        <DoctorDetails />

                        <DoctorDetails />

                        <DoctorDetails />

                        <DoctorDetails />
                        
                        <DoctorDetails />

                    </div>

                </div>
            </div>
        </>
    )
}

export default AvailableDoctors
