import React from 'react'
import HeroBg from '../Assets/HeroBg.svg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Hero = (props) => {
    return (
        <>
            <div className='md:h-screen h-[25rem] w-full '>
                <div className='relative' style={{ background: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>

                    <Navbar />


                    <div className='flex flex-col md:mt-[8rem] mt-16 justify-center items-center'>
                        <h1 className='md:text-[5rem] text-5xl font-semibold md:leading-[5.5rem] text-center md:w-[60%]'>
                            {props.heading}
                        </h1>
                        <p className='md:mt-12 mt-4 text-center font-thin md:text-base text-[0.75rem] md:w-[45%] w-[85%]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                        <Link to="/ContactUs">
                            <button style={{ boxShadow: ' 2px 8px 6px 0px #00000040' }} className='md:mt-8 mt-6 py-4 md:px-20 px-7 rounded-lg md:text-lg text-sm font-medium  bg-[#181818] hover:bg-[#000] w-fit self-center hover:text-[#d79949]'>Make Appointment</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero
