import React, { useState } from 'react'
import greenThumb from '../../Assets/greenThumb.svg'

const Reviews = (props) => {
    return (
        <>
            <div className='px-6 py-4 border-2 border-[#CCCCCC] rounded-lg mt-8 ml-1'>
                <div className='flex items-start gap-4'>
                    <img src={greenThumb} alt="" />
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col'>
                            <h1 className='text-black text-2xl font-medium'>I recommend the doctor</h1>
                            <p className='text-black text-lg mt-2'>
                                {props.des}
                            </p>
                        </div>
                        <p className='text-[#C2C2C2]'>Verified Patient U** ***i . 6 months ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const DoctorReviews = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow( (prev) => !prev )
    }

    return (
        <>
            <div className='relative bg-[#E7E7E7] px-12 py-5 mt-8 rounded-lg' style={{ boxShadow: '0px 4px 8px 0px #00000040' }}>
                <h1 className='text-black text-[1.5rem] font-medium mt-4 mb-14'>Reviews About Dr. John Doe</h1>

                <Reviews
                    des="“I was so doubtful about my issue but Dr. John Doe gave me the best advice. I am really grateful”"
                />
                <Reviews
                    des="“I recommend this doctor awesome”"
                />
                <Reviews
                    des="“Best doctor i check-up myself he explains so well and i will recommend to everyone and i thanks to MediHub
                    who give good doctor to peoples excellent experience and i recommend to all”"
                />

                <div className={`${show ? 'block' : 'hidden'}`}>
                    <Reviews
                        des="“I was so doubtful about my issue but Dr. John Doe gave me the best advice. I am really grateful”"
                    />
                    <Reviews
                        des="“I recommend this doctor awesome”"
                    />
                    <Reviews
                        des="“Best doctor i check-up myself he explains so well and i will recommend to everyone and i thanks to MediHub
                    who give good doctor to peoples excellent experience and i recommend to all”"
                    />
                </div>

                <button onClick={handleShow} className={`py-3 mt-8 px-12 bg-transparent text-black border-2 border-black ml-1 rounded-lg font-medium text-lg ${show ? 'hidden' : 'block'} `}>Load more reviews</button>

            </div>
        </>
    )
}

export default DoctorReviews
