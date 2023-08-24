import React from 'react'
import Navbar from '../../Components/Navbar'
import { MdArrowForwardIos } from 'react-icons/md';
import docLoc from '../../Assets/docLoc.svg'
import docTime from '../../Assets/docTime.svg'
import docFemale from '../../Assets/docFemale.svg'
import docStarSquare from '../../Assets/docStarSquare.svg'
import docStar from '../../Assets/docStar.svg'
import docCash from '../../Assets/docCash.svg'
import profilePhoto from '../../Assets/profilePhoto.svg'


const DoctorDetails = (props) => {
    return (
        <>
            <div className='bg-[#E7E7E7] px-4 py-4 mt-8' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>

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
                        <button className='mt-3 py-4 px-16 rounded-lg text-lg font-medium  bg-[#DDB660] hover:bg-[#bc984c] w-fit self-center '>Video Consultation</button>
                    </div>
                </div>

                <div>
                    <h1 className='text-md font-medium text-black'>Latest Review</h1>
                    <div className='flex'>
                        <div className='bg-[#C2C2C2] py-2 px-3 rounded-lg w-[70%] relative'>
                            <p className='text-black text-[0.9rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            <div className="w-0 h-0 absolute right-[-1rem] top-[0.48rem] rounded-full
                                    border-l-[20px] border-l-transparent
                                    border-b-[30px] border-b-[#C2C2C2]
                                    border-r-[20px] border-r-transparent">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const AvailableDoctors = () => {
    return (
        <>
            <div>
                <Navbar />

                <div className='w-full px-24'>

                    <div className='bg-[#D9D9D9] px-8 py-10' >

                        {/* HEADER */}

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

                    </div>

                </div>
            </div>
        </>
    )
}

export default AvailableDoctors
