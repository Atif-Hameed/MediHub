import React from 'react'
import whyDoc from '../../Assets/whyDoctor.svg'

const WhyMediHub = () => {
    return (
        <>
            <div className='py-36'>
                <div className='flex w-full justify-between items-center px-16'>
                    <img src={whyDoc} className='w-[250rem]' alt="" />
                    <div className='px-20 flex flex-col justify-center items-center'>
                        <h1 className='text-[6rem] font-semibold text-center'>Why MediHub</h1>
                        <p className='text-[1.2rem] w-[90%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyMediHub
