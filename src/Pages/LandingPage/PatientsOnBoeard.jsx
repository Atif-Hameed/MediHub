import React from 'react'
import moreBig from '../../Assets/moreBig.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import doctor1 from '../../Assets/doctor1.svg'
import doctor2 from '../../Assets/doctor2.svg'
import doctor3 from '../../Assets/doctor3.svg'
import doctor4 from '../../Assets/doctor4.svg'
// import borderHalf from '../../Assets/borderHalf.svg'
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const PatientsOnBoeard = () => {

    var settings = {
        dots: true,
        infinite: true,
        centerPadding: '0',
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false
                },
            },
        ]
    };

    const dotStyle = {
        color: 'white', // Change dot color here
    };

    const activeDotStyle = {
        color: 'white', // Change active dot color here
    };

    return (
        <>
            <style>
                {`
                
                .slick-dots li button:before {
                    color: transparent;
                    margin-top:40px;
                  }
                  
                  .slick-dots li button:before {
                    content: '';=
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background-color: ${dotStyle.color};
                    border-radius: 50%;
                  }
        
                  .slick-dots li.slick-active button:before {
                    background-color: ${activeDotStyle.color};
                   opacity:1;
                  }
            `}
            </style>
            <div>

                <div className='flex md:flex-row flex-col w-full justify-between md:gap-0 gap-6 md:px-36 px-6 md:my-32 my-16 items-center  '>
                    <h1 className='md:text-[5rem] text-[2.7rem] font-semibold md:leading-[6rem]'>Number Of<br className='md:block hidden' /> Patients Onboard</h1>
                    <div className='md:p-16 p-6 bg-custom-gradient rounded-[20%]'>
                        <div className='relative'>
                            <div className=' p-4 bg-gradient-to-b from-[#1E1E1E] to-[#D3AF83] rounded-full'>
                                <div className='md:px-10 px-6 md:py-14 py-10  bg-white rounded-full block'>
                                    <h1 className='text-[3rem] text-center text-black font-semibold'>180</h1>
                                    <p className='text-[0.4rem] text-center text-black'>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <img src={moreBig} className='md:w-[8rem] w-[6rem]' alt="" />
                </div>

                <div className='w-full flex justify-center my-24'>
                    <div className='w-[90%] mx-auto'>
                        <Slider {...settings}>

                            <div className='flex flex-col px-6'>
                                <img src={doctor1} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Consultancy</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor2} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Ophthalmologist</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor3} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Vaccination</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor4} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Physical</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor1} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Consultancy</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor2} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Ophthalmologist</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor3} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Vaccination</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor4} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Physical</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor1} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Consultancy</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor2} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Ophthalmologist</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor3} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Vaccination</h1>
                            </div>
                            <div className='flex flex-col px-6'>
                                <img src={doctor4} className='w-full' alt="" />
                                <h1 className='text-4xl mt-4 text-center'>Physical</h1>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientsOnBoeard
