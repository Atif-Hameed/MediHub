import React from 'react'
import evening from '../../Assets/evening.svg'
import { MdKeyboardArrowDown } from 'react-icons/md';


const TabsContent = (props) => {
    return (
        <>
            <div className='px-24'>

                <div className='flex items-center gap-2 mt-6'>
                    <img src={evening} className='w-[1.4rem]' alt="" />
                    <p className='text-black text-[0.82rem] ml-2'>
                        {props.state}

                    </p>
                    <MdKeyboardArrowDown className='text-black text-[0.8rem] mt-0.5' />
                </div>

                <div className='grid grid-cols-5 px-10 gap-x-14 gap-y-10 mt-10' >
                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time1}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time2}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time3}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time4}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time5}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time6}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time7}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time8}

                        </p>
                    </div>

                    <div className='group hover:border-[#FFB45E] hover:bg-[#FFB45E66] cursor-pointer flex py-3 px-6 border-2 justify-center items-center border-[#CCCCCC] rounded-lg'>
                        <p className='text-black font-medium text-center text-lg group-hover:text-[#FD9012] '>
                            {props.time9}

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabsContent