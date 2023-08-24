import React from 'react'

const Questions = (props) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-20 gap-14'>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-[3.3rem] text-center w-[60%] leading-[4rem]'>
                        {props.question1}

                    </h1>
                    <p className='mt-4 text-center font-thin w-[52%] text-lg'>
                        {props.des1}

                    </p>
                </div>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-[3.3rem] text-center w-[60%] leading-[4rem]'>
                        {props.question2}
                    </h1>
                    <p className='mt-4 text-center font-thin w-[52%] text-lg'>
                        {props.des2}
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-[3.3rem] text-center w-[60%] leading-[4rem]'>
                        {props.question3}
                    </h1>
                    <p className='mt-4 text-center font-thin w-[52%] text-lg'>
                        {props.des3}
                    </p>
                </div>


                <button className='mt-8 py-4 px-32 bg-[#C09B4F] hover:bg-[#947335] rounded-lg text-[#181818] hover:text-white transition-all font-medium text-lg'>Book Now</button>

                <div className='mt-4 h-px w-[34%] bg-white '></div>
            </div>
        </>
    )
}

export default Questions
