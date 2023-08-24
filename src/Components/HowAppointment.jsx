import React from 'react'
import mobile from '../Assets/mobilePhoto.svg'

const HowAppointment = () => {
    return (
        <>
            <div className='flex px-40 justify-between items-start mt-24'>
                <div className='w-1/2  flex justify-center'>
                    <div className=' w-1/2 flex flex-col justify-center items-center gap-8 '>
                        <h1 className='text-[3rem] font-semibold'>Here’s how to book an appointment:</h1>
                        <img src={mobile} className='w-full mr-10' alt="" />
                    </div>
                </div>

                <div className='w-1/2 flex justify-center'>
                    <div className='w-[58%] border border-white rounded-lg flex flex-col justify-center gap-10 p-8'>

                        <h1 className='text-3xl font-semibold'>Step 1</h1>
                        <p className='text-sm font-light'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru.</p>

                        <h1 className='text-3xl font-semibold'>Step 2</h1>
                        <p className='text-sm font-light'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru.</p>

                        <h1 className='text-3xl font-semibold'>Step 3</h1>
                        <p className='text-sm font-light'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru.</p>

                        <button className='bg-[#C09B4F] hover:bg-[#947335] text-[#181818] hover:text-white transition-all font-medium py-2 px-8 w-fit rounded-xl'>Book Now</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-20'>
                <div className='h-px w-[40%] bg-white'></div>
            </div>
        </>
    )
}

export default HowAppointment
