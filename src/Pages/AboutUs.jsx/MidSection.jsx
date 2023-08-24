import React from 'react'
import shades from '../../Assets/aboutShade.svg'
import shades2 from '../../Assets/shades2.svg'

const MidSection = () => {
    return (
        <>
            <div className='flex px-32 justify-between w-full mt-32'>
                <div className='w-[62%] flex justify-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-lg font-medium'>About Us</h1>
                        <h1 className='mt-2 text-[3.5rem] font-semibold leading-[4rem]'>Your Go-To Online<br /> Medical Service Provider</h1>
                        <p className='mt-2 text-sm font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                </div>
                <div className='w-[38%] flex pl-6'>
                    <img src={shades} className='w-[20rem] self-center z-20' alt="" />
                </div>
            </div>

            <div className='flex justify-center pl-48'>
                <img src={shades} className='w-[20rem] mt-[-3rem] z-10' alt="" />
            </div>

            <div className='flex px-32 gap-12 mt-24 items-center'>
                <div className='w-1/2 flex justify-end'>
                    <img src={shades2} className='w-[30rem]' alt="" />
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col justify-start w-[80%]'>
                        <h1 className='text-lg font-medium'>About Us</h1>
                        <h1 className='mt-2 text-[4rem] font-semibold leading-[4.5rem]'>Updated with the Latest Equipment</h1>
                        <p className='mt-2 text-sm font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MidSection
