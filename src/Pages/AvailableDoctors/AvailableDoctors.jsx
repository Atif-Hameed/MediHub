import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
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

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }

    const divRef = useRef(null)

    useEffect(() => {

        const handleClickOutside = (clicked) => {
            if (divRef.current && !divRef.current.contains(clicked.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    }, [])


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

                <div className='w-full md:px-24 px-4'>

                    <div className='bg-[#D9D9D9] md:px-8 px-4 md:py-10 py-4 rounded-t-2xl mt-10' >

                        <div className='md:flex hidden text-black items-center md:text-base text-[0.7rem] gap-1'>
                            <p className='md:text-sm text-[0.7rem]'>HOME</p>
                            <MdArrowForwardIos className='text-white md:text-md text-[0.7rem]' />
                            <p className='md:text-sm text-[0.7rem]'>PAKISTAN</p>
                            <MdArrowForwardIos className='text-white md:text-md text-[0.7rem]' />
                            <p className='md:text-sm text-[0.7rem]'>LAHORE</p>
                            <MdArrowForwardIos className='text-white md:text-md text-[0.7rem]' />
                            <p className='md:text-sm text-[0.7rem]'>GYNECOLOGISTS IN LAHORE</p>
                        </div>

                        {/* View Moble Screen Only */}
                        <div className='md:hidden block'>
                            <button onClick={handleOpen} ref={divRef}>{open ? <RxCross1 className='text-black text-2xl' /> : <AiOutlineMenu className='text-black text-2xl' />}</button>
                            <div className={`flex transition-all duration-700 rounded-lg py-3  flex-col gap-2 bg-[#181818] items-center ${open ? 'block' : 'hidden'} `}>
                                <p className='md:text-sm text-[0.7rem]'>HOME</p>
                                <p className='md:text-sm text-[0.7rem]'>PAKISTAN</p>
                                <p className='md:text-sm text-[0.7rem]'>LAHORE</p>
                                <p className='md:text-sm text-[0.7rem]'>GYNECOLOGISTS IN LAHORE</p>
                            </div>
                        </div>

                        <h1 className='md:text-[2.4rem] text-3xl text-black font-medium mt-4'>680 Best Gynecologists in Lahore</h1>
                        <p className='md:text-lg md:mt-4 text-sm text-black'>Also known as Female Health Specialist, OB-GYN or Women Health Specialist</p>

                        <div className='grid md:grid-cols-6 grid-cols-3 md:gap-4 gap-3 md:mt-12 mt-8'>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docLoc} className='md:w-2/3 w-full' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 md:px-4 px-2'>
                                    <p className='text-black md:text-base text-[0.75rem] font-medium' >Doctors Near Me</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docCash} className='md:w-2/3 w-full' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 md:px-4 px-2'>
                                    <p className='text-black md:text-base text-[0.75rem] font-medium' >Lowest Fee</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docStar} className='md:w-2/3 w-full' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 md:px-4 px-2'>
                                    <p className='text-black md:text-base text-[0.75rem] font-medium' >Most Reviewed</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docStarSquare} className='md:w-2/3 w-full' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 md:px-4 px-2'>
                                    <p className='text-black md:text-base text-[0.75rem] font-medium' >Most Experienced</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docTime} className='md:w-2/3 w-full' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 md:px-4 px-2'>
                                    <p className='text-black md:text-base text-[0.75rem] font-medium' >Available Today</p>
                                </div>
                            </div>

                            <div className='w-full flex bg-[#D9D9D9] rounded-lg items-center' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='w-[35%] bg-[#181818] h-full p-2 rounded-tl-lg rounded-bl-lg flex justify-center'>
                                    <img src={docFemale} className='md:w-2/3 w-full' alt="" />
                                </div>
                                <div className='w-[75%]  p-2 md:px-4 px-2'>
                                    <p className='text-black md:text-base text-[0.75rem] font-medium' >Female Doctors</p>
                                </div>
                            </div>
                        </div>

                        <DoctorDetails />

                        <div className='bg-[#E7E7E7] md:p-6 p-3 pb-10 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center md:gap-3 gap-1.5'>
                                    <img src={crown} className='w-[1.7rem]' alt="" />
                                    <h1 className='md:text-[1.6rem] text-base uppercase text-black font-medium'>Platinum Doctors</h1>
                                </div>
                                <p onClick={handleShow} className='cursor-pointer text-black underline md:text-xl text-sm' >
                                    {show ? 'View Less' : 'View All'}
                                </p>
                            </div>

                            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-3 mt-6'>

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                                <PlatinumDoctor />

                            </div>
                            <div className={`grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-3 mt-6 ${show ? 'block' : 'hidden'} `}>

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
