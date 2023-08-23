import React from 'react'
import MainLogo from '../Assets/mainLogoSvg.svg'

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-transparent flex px-[10rem] py-12 items-center'>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='text-white hover:text-[#d79949] cursor-pointer'>Home</p>
                    <div className='h-[0.11rem] rounded bg-white w-3/4'></div>
                    <p className='text-white hover:text-[#d79949] cursor-pointer'>Services</p>
                </div>
                <div>
                    <img src={MainLogo} className='w-[30rem] h-auto' alt="" />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className=' text-white self-end hover:text-[#d79949] cursor-pointer'>About Us</p>
                    <div className='h-[0.11rem] rounded bg-white w-3/4 self-end'></div>
                    <p className='text-white self-end hover:text-[#d79949] cursor-pointer'>Contact Us</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
