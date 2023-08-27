import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"  }}
        onClick={onClick}
      />
    );
  }

const AppointBoking = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <GrNext />,
        prevArrow: <GrPrevious />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow/>,
                    prevArrow: <SamplePrevArrow/>,
                }
            }
        ]
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

                <div className='w-full h-full md:px-24 px-4'>

                    <div className='bg-[#D9D9D9] md:px-8 px-4 md:py-10 py-4 md:pb-36 pb-16 rounded-t-2xl mt-10' >

                        <div className='bg-[#E7E7E7] md:px-14 px-3 md:py-5 py-3 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>
                            <div className='flex justify-between items-start'>
                                <div className='flex md:gap-3 gap-2 items-center'>
                                    <div>
                                        <img src={profilePhoto} className='md:w-[9rem] w-[5.6rem]' alt="" />
                                    </div>
                                    <div>
                                        <h1 className='md:text-[1.3rem] text-[0.98rem] text-black md:font-medium font-semibold'>Assist. Prof. Dr. Jane Doe</h1>

                                        <div className='flex items-center gap-2'>
                                            <p className='mt-1 md:text-[0.8rem] text-[0.75rem] text-black'>Clinic Name Here</p>
                                            <p className='mt-1 md:text-[0.85rem] text-[0.7rem] font-medium text-black underline'>Change Clinic</p>
                                        </div>

                                        <p className='mt-2 text-[0.95rem] font-medium text-black'>Fee: Rs. 3,000 PKR</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='relative w-full '>

                            <div className='h-px w-full bg-[#CCCCCC] z-30 md:top-[4.92rem] top-[4.7rem] absolute' ></div>

                            <div className='relative bg-[#E7E7E7] md:px-12 px-4 py-5 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>

                                <Slider {...settings} className='w-full md:px-20 z-50'>
                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(1) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-1 py-4 ${activeTab === 1 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 1 ? 'text-[#FFB45E]' : 'text-black'}`} >Today, 18</p>
                                        </div>
                                    </div>

                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(2) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-3 py-4 ${activeTab === 2 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 2 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 15</p>
                                        </div>
                                    </div>

                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(3) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-3 py-4 ${activeTab === 3 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 3 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 16</p>
                                        </div>
                                    </div>

                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(4) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-3 py-4 ${activeTab === 4 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 4 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 17</p>
                                        </div>
                                    </div>

                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(1) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-3 py-4 ${activeTab === 1 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 1 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 18</p>
                                        </div>
                                    </div>
                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(2) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-3 py-4 ${activeTab === 2 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 2 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 19</p>
                                        </div>
                                    </div>
                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(3) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-3 py-4 ${activeTab === 3 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 3 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 20</p>
                                        </div>
                                    </div>
                                    <div className='md:px-16'>
                                        <div onClick={() => { handleTabClick(4) }} className={`w-fit flex justify-center items-center cursor-pointer md:px-5 px-3 py-4 ${activeTab === 4 ? 'md:border-b-4 border-b-[3px]   border-[#FFB45E]' : 'border-0'} `}>
                                            <p className={`text-black font-medium text-center md:text-md text-[0.8rem] ${activeTab === 4 ? 'text-[#FFB45E]' : 'text-black'}`} >Jan, 21</p>
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


                        <div className='flex md:flex-row flex-col items-center md:gap-10 gap-5 md:px-10 px-0 md:my-20 my-12'>
                            <img src={greenTick} className='md:w-[7rem] w-[9rem]' alt="" />
                            <div>
                                <h1 className='md:text-[1.85rem] text-2xl text-black font-medium'>95% patients feel satisfied after booking appointment from MediHub</h1>
                                <p className='text-black md:text-md text-sm'>It takes only 30 sec to book an appointment</p>
                            </div>
                        </div>

                        <DoctorReviews />

                        <div className='flex justify-between items-center mt-12'>
                            <h1 className='text-black md:text-[1.5rem] text-lg'>Doctors in other regions</h1>
                            <IoMdAdd className='text-black md:text-2xl text-xl ' />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AppointBoking
