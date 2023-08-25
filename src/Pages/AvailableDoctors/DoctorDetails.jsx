import React, { useState } from 'react'
import triangle from '../../Assets/trianle.svg'
import videoIcon from '../../Assets/videoIcon.svg'
import profilePhoto from '../../Assets/profilePhoto.svg'
import { Link } from 'react-router-dom';


const DoctorDetails = () => {

    // const [showPopUp, setShowPopUp] = useState(false)

    // const handlePopUp = () => {
    //     setShowPopUp((prev) => !prev)
    // }

    return (
        <>
            <div className='w-full h-full'>

                {/* <div className={` ${showPopUp ? 'block' : 'hidden'} h-[35rem] w-[30rem] bg-white flex justify-center items-center absolute top-[10%] left-[35%]`} >
                    <p>Hello</p>
                </div> */}

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
            </div>
        </>
    )
}



export default DoctorDetails
