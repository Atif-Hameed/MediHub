import React from 'react'

const Questions = (props) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center md:mt-20 px-4 mt-16 md:gap-14 gap-12'>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='md:text-[3.3rem] text-4xl text-center md:w-[60%] md:leading-[4rem]'>
                        {props.question1}

                    </h1>
                    <p className='mt-4 text-center font-thin md:w-[52%] w-[85%] md:text-lg text-[0.7rem]'>
                        {props.des1}

                    </p>
                </div>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='md:text-[3.3rem] text-4xl text-center md:w-[60%] md:leading-[4rem]'>
                        {props.question2}
                    </h1>
                    <p className='mt-4 text-center font-thin md:w-[52%] w-[85%] md:text-lg text-[0.7rem]'>
                        {props.des2}
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='md:text-[3.3rem] text-4xl text-center md:w-[60%] md:leading-[4rem]'>
                        {props.question3}
                    </h1>
                    <p className='mt-4 text-center font-thin md:w-[52%] w-[85%] md:text-lg text-[0.7rem]'>
                        {props.des3}
                    </p>
                </div>


                <button className='md:mt-8 mt-4 md:py-4 py-3 md:px-32 px-16 bg-[#C09B4F] hover:bg-[#947335] rounded-lg text-[#181818] hover:text-white transition-all font-medium text-lg'>Book Now</button>

                <div className='md:mt-4 mt-2 h-px md:w-[34%] w-3/4 bg-white '></div>
            </div>
        </>
    )
}

export default Questions
