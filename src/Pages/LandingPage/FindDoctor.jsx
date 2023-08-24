import React from 'react'
import womenDoc from '../../Assets/womenDoc.svg'
import DocBg from '../../Assets/DocBg.svg'
import Mobile from '../../Assets/mobilePhoto.svg'
import { BiSearch } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import chairBubble from '../../Assets/chairBuuble.svg'
import eyeBubble from '../../Assets/eyeBuuble.svg'
import boneBubble from '../../Assets/boneBuuble.svg'
import microscopeBubble from '../../Assets/microscopeBuuble.svg'
import manBubble from '../../Assets/manBuuble.svg'
import girlBubble from '../../Assets/girlBuuble.svg'
import personBubble from '../../Assets/personBuuble.svg'
import keyBubble from '../../Assets/keyBuuble.svg'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const FindDoctor = () => {
    return (
        <>
            <div className='relative w-full h-full'>

                <div className='w-[61rem] h-[91.37rem] z-10'>
                    <div className='mt-8' style={{
                        backgroundImage: `url(${womenDoc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }}>
                        <div style={{
                            backgroundImage: `url(${DocBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                        }}>

                            <div className='absolute top-[36%] left-[17%]'>
                                <h1 className='text-[5rem] font-semibold w-[60%] leading-[6rem]  text-white'>Find the Right Doctor right at your fingertips</h1>
                            </div>

                            <div className='flex flex-row-reverse absolute gap-2 bottom-4 items-end right-4'>
                                <div className='h-[10rem] w-[0.1rem] bg-[#E7E7E7]'>
                                </div>
                                <p className='text-[#E7E7E7] text-end font-light w-[33%] text-[0.8rem] pt-4 pl-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            </div>

                            <img src={Mobile} className='w-[28rem] absolute right-[-11rem] top-[25%]' alt="" />

                            <div className='flex absolute justify-end gap-2 top-[30%] items-end right-[-22.5rem] '>
                                <div className='h-[12rem] w-[0.1rem] bg-[#E7E7E7]'>
                                </div>
                                <p className='text-[#E7E7E7] font-light w-[20.5%] text-[0.8rem] pt-4 pl-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                            </div>


                        </div>
                    </div>
                </div>


                <div>
                    <div className='absolute top-[-8rem] w-full px-[5.5rem]'>
                        <div className='bg-[#181818] w-full h-[18rem]  rounded-2xl mx-auto py-12' style={{ boxShadow: '5px 5px 4px 2px #00000069' }}>
                            <div className='flex gap-4 justify-center'>

                                <div className='flex relative items-center bg-white rounded-lg p-2 w-[44%] gap-4'>
                                    <BiSearch className='text-black text-3xl' />
                                    <input type="text" placeholder='Search Doctor, Conditions or Procedures' className='w-full text-black focus:outline-none placeholder-black ::placeholder font-semibold' />
                                </div>
                                <div className='flex relative items-center bg-white rounded-lg p-2 w-[44%] gap-4'>
                                    <GrLocation className=' text-3xl' />
                                    <input type="text" placeholder='Set Your Location' className='w-full text-black focus:outline-none placeholder-black ::placeholder font-semibold' />
                                </div>

                                <button type='submit' value='submit' className='flex bg-black p-2 bg-gradient-to-b from-[#bd966c] via-[#966b3a] to-[#351e07] rounded-lg'>
                                    <BiSearch className=' text-3xl' />
                                </button>
                            </div>

                            <p className='text-center text-2xl mt-8'>Search Doctor by Health Condition</p>
                        </div>
                        < div className='h-px w-[45%] bg-[#E7E7E7] mt-4 mx-2' >
                            <p className='text-[#E7E7E7] font-light w-[65%] text-[0.9rem] pt-4 pl-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        </div >
                    </div>
                    <Marquee speed={70} pauseOnHover style={{ position: 'absolute', top: '7rem' }} >

                        <Link to="/MentalHealth">
                            <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                                <img src={chairBubble} className='w-[4rem]' alt="" />
                            </div>
                        </Link>

                        <Link to='/SkinCondition' >
                            <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                                <img src={girlBubble} className='w-[4rem]' alt="" />
                            </div>
                        </Link>

                        <Link to="/SexualHealth" >
                        <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                            <img src={personBubble} className='w-[4rem]' alt="" />
                        </div>
                        </Link>

                        <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                            <img src={boneBubble} className='w-[4rem]' alt="" />
                        </div>

                        <Link to="/Digestive">
                            <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                                <img src={manBubble} className='w-[4rem]' alt="" />
                            </div>
                        </Link>

                        <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                            <img src={microscopeBubble} className='w-[4rem]' alt="" />
                        </div>
                        <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                            <img src={keyBubble} className='w-[4rem]' alt="" />
                        </div>
                        <div className='mx-14 p-5 bg-[#C09B4F] w-fit rounded-full'>
                            <img src={eyeBubble} className='w-[4rem]' alt="" />
                        </div>
                    </Marquee>
                </div>


                <div className='w-[70%] h-[0.1rem] bg-[#E7E7E7] my-20 mx-auto'></div>
            </div>
        </>
    )
}

export default FindDoctor
