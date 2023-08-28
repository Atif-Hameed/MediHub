import React, { useEffect, useState } from 'react'
import evening from '../../Assets/evening.svg'
import { MdKeyboardArrowDown } from 'react-icons/md';
import horizontalShades from '../../Assets/horizontalShades.svg'
import { RxCross1 } from 'react-icons/rx';
import profilePhoto from '../../Assets/profilePhoto.svg'



const TabsContent = (props) => {

    const [showPopUp, setShowPopUp] = useState(false)

    const openShowPopUp = () => {
        setShowPopUp(true)
    }

    const closeShowPopUp = () => {
        setShowPopUp(false)
    }

    useEffect(() => {

        if (showPopUp) {
            document.body.classList.add("overflow-hidden")
        }
        else {
            document.body.classList.remove("overflow-hidden")
        }

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [showPopUp])

    return (
        <>
            <div className='md:px-24 px-0'>

                <div onClick={closeShowPopUp} className={`${showPopUp ? 'block' : 'hidden'} px-4 fixed z-50 inset-0 flex justify-center items-center bg-[#00000085] `} >
                    <div onClick={e => e.stopPropagation()} className='md:h-[35rem] h-[30rem] w-[33rem] bg-[#D9D9D9] rounded-xl'>
                        <div className='h-[12%] w-full bg-[#CCCCCC]  flex items-center justify-end px-6 rounded-t-xl'>
                            <RxCross1 onClick={closeShowPopUp} className='cursor-pointer text-black text-xl' />
                        </div>
                        <div className='flex justify-between h-[88%] grow flex-col py-8 md:px-12 px-6'>
                            <div className='mt-0'>
                                <h1 className='md:text-3xl text-xl text-black font-medium text-center'>Appointment Confirmation</h1>
                            </div>
                            <div className='bg-white py-8 md:pb-24 pb-20 md:px-8 px-4 rounded-lg' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <div className='flex md:gap-3 gap-2 items-center'>
                                    <div>
                                        <img src={profilePhoto} className='md:w-[6rem] w-[5rem]' alt="" />
                                    </div>
                                    <div>
                                        <h1 className='md:text-[1rem] text-[0.8rem] text-black md:font-medium font-semibold'>Assist. Prof. Dr. Jane Doe</h1>
                                        <p className='mt-1 md:text-[0.7rem] text-[0.75rem] text-black'>Clinic Name Here</p>
                                        <p className='mt-1 text-[0.8rem] font-medium text-black'>Fee: Rs. 3,000 PKR</p>
                                    </div>
                                </div>
                                <h1 className='text-black font-medium md:text-sm text-xs mt-4'>Appointment Details</h1>
                            </div>
                            <div className='h-[3rem] rounded w-full mt-6'>
                                <div onClick={closeShowPopUp} className='flex items-center rounded' style={{ backgroundImage: `url(${horizontalShades})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}>
                                    <button className='flex items-center justify-center w-full'>
                                        <p className='text-white md:text-xl text-lg font-thin'>Confirm Appointment</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-6'>
                    <img src={evening} className='w-[1.4rem]' alt="" />
                    <p className='text-black text-[0.82rem] ml-2'>
                        {props.state}
                    </p>
                    <MdKeyboardArrowDown className='text-black text-[0.8rem] mt-0.5' />
                </div>

                <div className='grid md:grid-cols-5 grid-cols-3 md:px-10 px-4 md:gap-x-14 gap-x-4 md:gap-y-10 gap-y-4 md:mt-10 mt-6' >

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time1}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time2}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time3}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time4}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time5}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time6}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time7}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time8}
                        </p>
                    </div>

                    <div onClick={openShowPopUp} className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 md:px-6 px-3 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center md:text-lg text-sm group-hover:text-[#FD9012] '>
                            {props.time9}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabsContent