import React from 'react'
import shades from '../../Assets/aboutShade.svg'
import shades2 from '../../Assets/shades2.svg'

const MidSection = () => {
    return (
        <>
            <div className='flex md:flex-row flex-col md:gap-0 gap-6 md:px-32 px-6 justify-between w-full md:mt-32 mt-16'>
                <div className='md:w-[62%] flex justify-center'>
                    <div className='flex flex-col'>
                        <h1 className='md:text-lg font-medium'>About Us</h1>
                        <h1 className='mt-2 md:text-[3.5rem] text-3xl font-semibold md:leading-[4rem]'>Your Go-To Online<br /> Medical Service Provider</h1>
                        <p className='md:mt-2 mt-3 md:text-sm text-[0.75rem] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br className='md:block hidden' /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                </div>
                <div className='md:w-[38%] flex md:justify-normal justify-end md:mt-0 mt-8 md:pl-6'>
                    <img src={shades} className='md:w-[20rem] w-[12rem] self-center z-20' alt="" />
                </div>
            </div>

            <div className='flex md:justify-center md:pl-48 pl-6'>
                <img src={shades} className='md:w-[20rem] w-[12rem] md:mt-[-3rem] mt-[-1.8rem] z-10' alt="" />
            </div>

            <div className='flex md:flex-row flex-col-reverse md:px-32 px-6 md:gap-12 mt-24 md:items-center'>
                <div className='md:w-1/2 flex md:justify-end justify-start md:mt-0 mt-6'>
                    <img src={shades2} className='md:w-[30rem] w-[18rem]' alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div className='flex flex-col justify-start md:w-[80%]'>
                        <h1 className='text-lg font-medium'>About Us</h1>
                        <h1 className='mt-2 md:text-[4rem] text-4xl font-semibold md:leading-[4.5rem]'>Updated with the Latest Equipment</h1>
                        <p className='mt-2 text-sm font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MidSection
