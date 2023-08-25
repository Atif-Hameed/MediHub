import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
import thumb from '../../Assets/thumb.svg'
import shade from '../../Assets/aboutShade.svg'
import profilePhoto from '../../Assets/profilePhoto.svg'



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

export default PlatinumDoctor
