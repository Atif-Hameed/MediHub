import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
import thumb from '../../Assets/thumb.svg'
import shade from '../../Assets/aboutShade.svg'
import profilePhoto from '../../Assets/profilePhoto.svg'



const PlatinumDoctor = () => {
    return (
        <>
            <div className='py-4 md:px-4 px-2 rounded-lg' style={{
                backgroundImage: `url(${shade})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%', height: '100%'
            }}>
                <div className='flex md:flex-row flex-col items-center gap-2'>
                    <img src={profilePhoto} className='md:w-[6rem] w-[4rem]' alt="" />
                    <div className='flex flex-col'>
                        <h1 className='md:text-[1.35rem] text-md font-medium'>Assoc. Prof. Dr..</h1>
                        <p className='md:text-[0.93rem] text-[0.75rem] font-thin'>15 years experience</p>
                        <div className='flex mt-1 gap-1 items-center'>
                            <img src={thumb} className='md:w-[1rem] w-[0.9rem]' alt="" />
                            <p className='text-[0.75rem] font-thin'>100% (290)</p>
                        </div>
                    </div>
                </div>
                <div className='flex md:gap-4 items-center md:mt-6 mt-4'>
                    <p className='md:text-md text-[0.75rem]'>Book Appointment</p>
                    <MdArrowForwardIos className='text-white ' />
                </div>
            </div>
        </>
    )
}

export default PlatinumDoctor
