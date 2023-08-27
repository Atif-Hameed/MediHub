import React, { useEffect, useRef, useState } from 'react'
import triangle from '../../Assets/trianle.svg'
import videoIcon from '../../Assets/videoIcon.svg'
import profilePhoto from '../../Assets/profilePhoto.svg'
import { Link } from 'react-router-dom';


const DoctorDetails = () => {

    const [showPopUp, setShowPopUp] = useState(false)

    const openShowPopUp = () => {
        setShowPopUp(true)
    }
    const closeShowPopUp = () => {
        setShowPopUp(false)
    }

    useEffect( () => {
        if(showPopUp){
            document.body.classList.add("overflow-hidden")
        }
        else{
            document.body.classList.remove("overflow-hidden")
        }

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    },[showPopUp] )

    const divRef = useRef(null)

    useEffect( () => {

        const handleClickOutside = (event) => {
            if(divRef.current && !divRef.current.contains(event.target)){
                setShowPopUp(false)
            }

            document.addEventListener("mousedown", handleClickOutside)

            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }
    },[] )


    // const handlePopUp = () => {
    //     setShowPopUp((prev) => !prev)
    // }

    return (
        <>
            <div className='w-full h-full'>

                       {/* PopUp BOX */}
                <div ref={divRef} className={` ${showPopUp ? 'block' : 'hidden'} fixed z-40 h-screen inset-0 bg-[#18181893] flex justify-center items-center `} >
                    <div className='h-[30rem] w-[25rem] bg-white flex flex-col justify-center items-center'>
                        <h1 className='text-black' >Hello Peter</h1>
                        <button className='text-black bg-red-500' onClick={closeShowPopUp} >Close</button>
                    </div>
                </div>

                <div className='bg-[#E7E7E7] md:p-6 p-3 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>

                    <div className='flex md:flex-row flex-col justify-between items-start'>
                        <div className='flex md:flex-row flex-col gap-3 items-center'>
                            <div>
                                <img src={profilePhoto} className='w-[9rem]' alt="" />
                            </div>
                            <div>
                                <h1 className='md:text-xl text-lg text-black font-medium'>Assist. Prof. Dr. Jane Doe</h1>
                                <p className='mt-1 md:text-sm text-[0.75rem] text-black'>Gynecologist, Fertility Consultant, Obstetrician</p>
                                <p className='md:text-sm text-[0.75rem] text-black'>MRCOG, FACOG, FCPS, M.C.P.S, Diploma in IVF, Membership</p>

                                <div className='grid grid-cols-3 divide-x md:gap-4 gap-2 divide-black mt-4'>
                                    <div className='flex flex-col items-center'>
                                        <div>
                                            <h1 className='md:text-[1.08rem] text-sm text-black font-medium'>Under 15 Min</h1>
                                            <p className='text-[0.65rem]  text-black'>Wait Time</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div>
                                            <h1 className='md:text-[1.08rem] text-sm text-black font-medium'>16 Years</h1>
                                            <p className='text-[0.65rem] text-black'>Experience</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <div>
                                            <h1 className='md:text-[1.08rem] text-sm text-black font-medium'>100% (263)</h1>
                                            <p className='text-[0.65rem] text-black'>Satisfied Patients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* <Link to="/AppointBoking" > */}
                                <button onClick={openShowPopUp} className='md:mt-3 mt-8 md:py-4 py-3 md:px-16 px-6 rounded-lg md:text-lg text-sm font-medium  bg-[#DDB660] hover:bg-[#bc984c] w-fit self-center '>Video Consultation</button>
                            {/* </Link> */}
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h1 className='text-md font-medium text-black pl-1'>Latest Review</h1>
                        <div className='flex mt-1  md:pr-0 pr-2'>
                            <div className='bg-[#C2C2C2] py-2 px-3 rounded-lg md:w-[70%] w-full relative  '>
                                <p className='text-black text-[0.9rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <img src={triangle} className='w-[2.5rem] absolute md:right-[-1rem] -right-3 md:top-[0.6rem] top-[2rem]' alt="" />
                            </div>

                        </div>
                    </div>

                    <div className='md:w-[60%] grid grid-cols-2 md:gap-8 gap-2 mt-8'>
                        <div className='border-2 border-[#181818] rounded-lg px-3 py-3'>
                            <div className='flex items-center md:flex-row flex-col md:gap-2 gap-4'>
                                <img src={videoIcon} className='md:w-[1.7rem] w-10' alt="" />
                                <h1 className='text-[#4246B4] md:text-xl text-[0.85rem]'>Online Video Consultation (Onl....</h1>
                            </div>
                            <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center mt-1'>
                                <div className='flex items-center md:gap-2 gap-1 md:pl-2'>
                                    <div className='md:h-[0.5rem] md:w-[0.5rem] h-2 w-2 bg-[#55B865] rounded-full'></div>
                                    <p className='text-[#55B865] md:text-base text-[0.75rem] font-medium '>Available tomorrow</p>
                                </div>
                                <p className='text-black text-lg'>Rs. 3,000</p>
                            </div>
                        </div>
                        <div className='border-2 border-[#181818] rounded-lg px-3 py-3'>
                            <div className='flex items-center md:flex-row flex-col md:gap-2 gap-4'>
                                <img src={videoIcon} className='md:w-[1.7rem] w-10' alt="" />
                                <h1 className='text-[#4246B4] md:text-xl text-[0.85rem]'>Online Video Consultation (Onl....</h1>
                            </div>
                            <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center mt-1'>
                                <div className='flex items-center md:gap-2 gap-1 md:pl-2'>
                                    <div className='md:h-[0.5rem] md:w-[0.5rem] h-2 w-2 bg-[#55B865] rounded-full'></div>
                                    <p className='text-[#55B865] md:text-base text-[0.75rem] font-medium '>Available tomorrow</p>
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
