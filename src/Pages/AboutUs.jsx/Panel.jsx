import React from 'react'
import shades from '../../Assets/aboutShade.svg'

const Panel = () => {
    return (
        <>
            <div className='mt-24'>
                <h1 className='text-[3.5rem] text-center font-medium'>Our Panel</h1>

                <div className='grid grid-cols-4 gap-x-32 gap-y-12 px-32 mt-16'>
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
