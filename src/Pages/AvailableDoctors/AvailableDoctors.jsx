import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import { MdArrowForwardIos } from 'react-icons/md';
import docLoc from '../../Assets/docLoc.svg'
import docTime from '../../Assets/docTime.svg'
import docFemale from '../../Assets/docFemale.svg'
import docStarSquare from '../../Assets/docStarSquare.svg'
import docStar from '../../Assets/docStar.svg'
import docCash from '../../Assets/docCash.svg'
import triangle from '../../Assets/trianle.svg'
import videoIcon from '../../Assets/videoIcon.svg'
import crown from '../../Assets/crown.svg'
import thumb from '../../Assets/thumb.svg'
import shade from '../../Assets/aboutShade.svg'
import profilePhoto from '../../Assets/profilePhoto.svg'
import { Link } from 'react-router-dom';


const DoctorDetails = () => {
    return (
        <>
            <div className='bg-[#E7E7E7] p-6 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>

                <div className='flex justify-between items-start'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img src={profilePhoto} className='w-[9rem]' alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl text-black font-medium'>Assist. Prof. Dr. Jane Doe</h1>
                            <p className='mt-1 text-sm text-black'>Gynecologist, Fertility Consultant, Obstetrician</p>
                            <p className='text-sm text-black'>MRCOG, FACOG, FCPS, M.C.P.S, Diploma in IVF, Membership</p>

                            <div className='grid grid-cols-3 divide-x gap-4 divide-black mt-4'>
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <h1 className='text-[1.08rem] text-black font-medium'>Under 15 Min</h1>
                                        <p className='text-[0.65rem]  text-black'>Wait Time</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <h1 className='text-[1.08rem] text-black font-medium'>16 Years</h1>
                                        <p className='text-[0.65rem] text-black'>Experience</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <h1 className='text-[1.08rem] text-black font-medium'>100% (263)</h1>
                                        <p className='text-[0.65rem] text-black'>Satisfied Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to="/AppointBoking" >
                            <button className='mt-3 py-4 px-16 rounded-lg text-lg font-medium  bg-[#DDB660] hover:bg-[#bc984c] w-fit self-center '>Video Consultation</button>
                        </Link>
                    </div>
                </div>

                <div className='mt-8'>
                    <h1 className='text-md font-medium text-black pl-1'>Latest Review</h1>
                    <div className='flex mt-1'>
                        <div className='bg-[#C2C2C2] py-2 px-3 rounded-lg w-[70%] relative'>
                            <p className='text-black text-[0.9rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            <img src={triangle} className='w-[2.5rem] absolute right-[-1rem] top-[0.6rem]' alt="" />
                        </div>

                    </div>
                </div>

                <div className='w-[60%] grid grid-cols-2 gap-8 mt-8'>
                    <div className='border-2 border-[#181818] rounded-lg px-3 py-3'>
                        <div className='flex items-center gap-2'>
                            <img src={videoIcon} className='w-[1.7rem]' alt="" />
                            <h1 className='text-[#4246B4] text-xl'>Online Video Consultation (Onl....</h1>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <div className='flex items-center gap-2 pl-2'>
                                <div className='h-[0.5rem] w-[0.5rem] bg-[#55B865] rounded-full'></div>
                                <p className='text-[#55B865] font-medium '>Available tomorrow</p>
                            </div>
                            <p className='text-black text-lg'>Rs. 3,000</p>
                        </div>
                    </div>
                    <div className='border-2 border-[#181818] rounded-lg px-3 py-3'>
                        <div className='flex items-center gap-2'>
                            <img src={videoIcon} className='w-[1.7rem]' alt="" />
                            <h1 className='text-[#4246B4] text-xl'>Online Video Consultation (Onl....</h1>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <div className='flex items-center gap-2 pl-2'>
                                <div className='h-[0.5rem] w-[0.5rem] bg-[#55B865] rounded-full'></div>
                                <p className='text-[#55B865] font-medium '>Available tomorrow</p>
                            </div>
                            <p className='text-black text-lg'>Rs. 3,000</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


const PlatinumDoctor = () => {
    return (
        <>
            <div className='py-4 px-4 rounded-lg' style={{
                backgroundImage: `url(${shade})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%', height: '100%'
            }}>
                <div className='flex items-center gap-2'>
                    <img src={profilePhoto} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-[1.35rem] font-medium'>Assoc. Prof. Dr..</h1>
                        <p className='text-[0.93rem] font-thin'>15 years experience</p>
                        <div className='flex mt-1 gap-1 items-center'>
                            <img src={thumb} className='w-[1rem]' alt="" />
                            <p className='text-[0.75rem] font-thin'>100% (290)</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center mt-6'>
                    <p>Book Appointment</p>
                    <MdArrowForwardIos className='text-white' />
                </div>
            </div>
        </>
    )
}


const AvailableDoctors = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow((prev) => !prev)
    }

    return (
        <>
            <div>
                <Navbar />

                <div className='w-full px-24'>

                    <div className='bg-[#D9D9D9] px-8 py-10 rounded-2xl mt-10' >

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

                    </div>

                </div>
            </div>
        </>
    )
}

export default AvailableDoctors
