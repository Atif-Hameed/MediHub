import React from 'react'
import HeroBg from '../Assets/HeroBg.svg'
import Navbar from './Navbar'

const Hero = (props) => {
    return (
        <>
            <div className='h-screen w-full '>
                <div className='relative' style={{ background: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>

                    <Navbar />


                    <div className='flex flex-col mt-[8rem] justify-center items-center'>
                        <h1 className='text-[5rem] font-semibold leading-[5.5rem] text-center w-[60%]'>
                            {props.heading}
                        </h1>
                        <p className='mt-12 text-center font-thin text-md w-[45%]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                        <button style={{ boxShadow: ' 2px 8px 6px 0px #00000040' }} className='mt-8 py-4 px-20 rounded-lg text-lg font-medium  bg-[#181818] hover:bg-[#000] w-fit self-center hover:text-[#d79949]'>Make Appointment</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero
