import React from 'react'
import MainLogo from '../Assets/mainLogoSvg.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-transparent flex md:px-[10rem] px-4 md:py-12 py-6 items-center'>
                <div className='flex flex-col gap-2 w-full'>
                   
                    <Link to="/">
                        <p className='text-white hover:text-[#d79949] cursor-pointer md:text-md text-sm'>Home</p>
                    </Link>

                    <div className='h-[0.11rem] rounded bg-white md:w-3/4 w-[90%]'></div>
                   
                    <Link to="/SkinCondition" >
                        <p className='text-white hover:text-[#d79949] cursor-pointer md:text-md text-sm'>Services</p>
                    </Link>
                </div>

                <div>
                    <Link to="/">
                        <img src={MainLogo} className='md:w-[30rem] w-[15rem] h-auto' alt="" />
                    </Link>
                </div>

                <div className='flex flex-col gap-2 w-full'>

                    <Link to="/AboutUs" className='self-end'>
                        <p className=' text-white self-end hover:text-[#d79949] cursor-pointer md:text-md text-sm'>About Us</p>
                    </Link>

                    <div className='h-[0.11rem] rounded bg-white md:w-3/4 w-[90%] self-end'></div>

                    <Link to="/ContactUs" className='self-end'>
                        <p className='text-white self-end hover:text-[#d79949] cursor-pointer md:text-md text-sm'>Contact Us</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
