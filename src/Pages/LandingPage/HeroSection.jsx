import React from 'react'
import HeroBg from '../../Assets/HeroBg.svg'
import Navbar from '../../Components/Navbar'

const HeroSection = () => {
    return (
        <>
            <div className='md:h-screen h-[25rem] w-full '>
                <div className='relative' style={{ background: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>

                    <Navbar />


                    <div className='flex flex-col md:mt-[8rem] mt-[5rem]'>
                        <h1 className='md:text-[5.5rem] text-[4.5rem] font-semibold md:leading-[5.5rem] leading-[5rem] text-center'>MediHub</h1>
                        <p className='text-center md:text-[1.5rem] text-[1.2rem] font-semibold bg-gradient-to-b from-[#FFCA88] via-[#FFB45E] to-[#734B21] text-transparent bg-clip-text'>FULLY IMMERSED HEALTHCARE</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
