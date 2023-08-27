import React from 'react'
import shades from '../../Assets/aboutShade.svg'

const Panel = () => {
    return (
        <>
            <div className='md:mt-24 mt-16'>
                <h1 className='md:text-[3.5rem] text-4xl text-center font-medium'>Our Panel</h1>

                <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-32 gap-6 md:gap-y-12 md:px-32 px-6 md:mt-16 mt-8'>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                    <div>
                        <img src={shades} className='w-full' alt="" />
                        <h1 className='mt-4 text-lg text-center font-medium leading-4'>Name</h1>
                        <p className='text-center'>Profession</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Panel
