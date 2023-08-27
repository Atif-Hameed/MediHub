import React from 'react'
import LayerBg from '../../Assets/aboutBg.svg'
import HeroBg from '../../Assets/DoctorsTeam.svg'
import Navbar from '../../Components/Navbar'

const HeroSection = () => {
    return (
        <>
            <div className='md:h-[150vh] h-screen w-full '>
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

                        <div className='flex flex-col md:mt-[11rem] mt-32 justify-center items-center md:px-0 px-4'>
                            <h1 className='md:text-[4.5rem] text-[2.8rem] font-semibold md:leading-[5.5rem] leading-[3rem] text-center md:w-[50%]'>
                                The Best Medical Care You Can Get!
                            </h1>
                            <p className='mt-12 text-center font-thin text-md md:w-[32%]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </p>
                            <button style={{ boxShadow: ' 2px 8px 6px 0px #00000040' }} className='mt-8 py-4 md:px-20 px-12 rounded-lg md:text-lg font-medium  bg-[#181818] hover:bg-[#000] w-fit self-center hover:text-[#d79949]'>Make Appointment</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
