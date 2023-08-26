import React from 'react'
import whyDoc from '../../Assets/whyDoctor.svg'

const WhyMediHub = () => {
    return (
        <>
            <div className='md:py-36 py-6'>
                <div className='flex md:flex-row flex-col w-full justify-between items-center md:px-16 px-8'>
                    <img src={whyDoc} className='md:w-[250rem] w-full' alt="" />
                    <div className='md:px-20 flex md:mt-0 mt-8 flex-col justify-center items-center'>
                        <h1 className='md:text-8xl text-4xl font-semibold text-center'>Why MediHub</h1>
                        <p className='md:text-xl md:mt-0 mt-4 text-sm md:w-[90%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyMediHub
