import React from 'react'
import LayerBg from '../../Assets/aboutBg.svg'
import HeroBg from '../../Assets/DoctorsTeam.svg'
import Navbar from '../../Components/Navbar'

const HeroSection = () => {
    return (
        <>
            <div className='h-[150vh] w-full '>
                <div className='relative' style={{
                    background: `url(${HeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%', height: '100%'
                }}>
                    <div style={{
                        background: `url(${LayerBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%', height: '100%'
                    }}>

                        <Navbar />

                        <div className='flex flex-col mt-[11rem] justify-center items-center'>
                            <h1 className='text-[4.5rem] font-semibold leading-[5.5rem] text-center w-[50%]'>
                                The Best Medical Care You Can Get!
                            </h1>
                            <p className='mt-12 text-center font-thin text-md w-[32%]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </p>
                            <button style={{ boxShadow: ' 2px 8px 6px 0px #00000040' }} className='mt-8 py-4 px-20 rounded-lg text-lg font-medium  bg-[#181818] hover:bg-[#000] w-fit self-center hover:text-[#d79949]'>Make Appointment</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
