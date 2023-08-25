import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import profilePhoto from '../../Assets/profilePhoto.svg'
import greenTick from '../../Assets/greenTick.svg'
import longShadesBg from '../../Assets/longShadesBg.svg'
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import Slider from 'react-slick';
import TabsContent from './TabsContent';
import DoctorReviews from './DoctorReviews'


const AppointBoking = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <GrNext />,
        prevArrow: <GrPrevious />
    };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div style={{
                backgroundImage: `url(${longShadesBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
            }}>
                <Navbar />

                <div className='w-full h-full px-24'>

                    <div className='bg-[#D9D9D9] px-8 py-10 pb-36 rounded-t-2xl mt-10' >

                        <div className='bg-[#E7E7E7] px-14 py-5 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>
                            <div className='flex justify-between items-start'>
                                <div className='flex gap-3 items-center'>
                                    <div>
                                        <img src={profilePhoto} className='w-[9rem]' alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[1.3rem] text-black font-medium'>Assist. Prof. Dr. Jane Doe</h1>

                                        <div className='flex items-center gap-2'>
                                            <p className='mt-1 text-[0.8rem] text-black'>Clinic Name Here</p>
                                            <p className='mt-1 text-[0.85rem] font-medium text-black underline'>Change Clinic</p>
                                        </div>

                                        <p className='mt-2 text-[0.95rem] font-medium text-black'>Fee: Rs. 3,000 PKR</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='relative w-full '>

                            <div className='h-px w-full bg-[#CCCCCC] z-30 top-[4.92rem] absolute' ></div>

                            <div className='relative bg-[#E7E7E7] px-12 py-5 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>

                                <Slider {...settings} className='w-full px-20 z-50'>
                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(1) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 1 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 1 ? 'text-[#FFB45E]' : 'text-black'}`} >Today, 18</p>
                                        </div>
                                    </div>

                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(2) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 2 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 2 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 15</p>
                                        </div>
                                    </div>

                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(3) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 3 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 3 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 16</p>
                                        </div>
                                    </div>

                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(4) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 4 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 4 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 17</p>
                                        </div>
                                    </div>

                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(1) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 1 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 1 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 18</p>
                                        </div>
                                    </div>
                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(2) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 2 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 2 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 19</p>
                                        </div>
                                    </div>
                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(3) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 3 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 3 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 20</p>
                                        </div>
                                    </div>
                                    <div className='px-16'>
                                        <div onClick={() => { handleTabClick(4) }} className={`w-fit flex justify-center items-center cursor-pointer px-5 py-4 ${activeTab === 4 ? 'border-b-4   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center ${activeTab === 4 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 21</p>
                                        </div>
                                    </div>
                                </Slider>

                                {activeTab === 1 && <TabsContent
                                    state="Evening Slots"
                                    time1="06:50 PM" time2="07:10 PM" time3="07:30 PM" time4="07:50 PM" time5="08:10 PM"
                                    time6="08:30 PM" time7="08:50 PM" time8="09:10 PM" time9="09:30 PM"
                                />}

                                {activeTab === 2 && <TabsContent
                                    state="Morning Slots"
                                    time1="06:50 AM" time2="07:10 AM" time3="07:40 AM" time4="07:55 AM" time5="08:15 AM"
                                    time6="08:25 AM" time7="08:40 AM" time8="09:20 AM" time9="09:45 AM"
                                />}

                                {activeTab === 3 && <TabsContent
                                    state="Afternoon Slots"
                                    time1="10:50 AM" time2="11:10 AM" time3="12:40 PM" time4="12:55 PM" time5="01:15 PM"
                                    time6="02:25 PM" time7="02:40 PM" time8="04:20 PM" time9="04:45 PM"
                                />}

                                {activeTab === 4 && <TabsContent
                                    state="Midnight Slots"
                                    time1="11:50 PM" time2="12:10 AM" time3="12:30 AM" time4="12:50 AM" time5="01:10 AM"
                                    time6="01:30 AM" time7="01:50 AM" time8="02:10 AM" time9="02:30 AM"
                                />}
                            </div>
                        </div>


                        <div className='flex items-center gap-10 px-10 my-20'>
                            <img src={greenTick} className='w-[7rem]' alt="" />
                            <div>
                                <h1 className='text-[1.85rem] text-black font-medium'>95% patients feel satisfied after booking appointment from MediHub</h1>
                                <p className='text-black'>It takes only 30 sec to book an appointment</p>
                            </div>
                        </div>

                        <DoctorReviews />

                        <div className='flex justify-between items-center mt-12'>
                            <h1 className='text-black text-[1.5rem]'>Doctors in other regions</h1>
                            <IoMdAdd className='text-black text-2xl ' />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AppointBoking
