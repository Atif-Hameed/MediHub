import React from 'react'
import HeroBg from '../../Assets/HeroBg.svg'
import Navbar from '../../Components/Navbar'

const HeroSection = () => {
    return (
        <>
            <div className='h-screen w-full '>
                <div className='relative' style={{ background: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>

                    <Navbar />


                    <div className='flex flex-col mt-[8rem]'>
                        <h1 className='text-[5.5rem] font-semibold leading-[5.5rem] text-center'>MediHub</h1>
                        <p className='text-center text-[1.5rem] font-semibold bg-gradient-to-b from-[#FFCA88] via-[#FFB45E] to-[#734B21] text-transparent bg-clip-text'>FULLY IMMERSED HEALTHCARE</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
