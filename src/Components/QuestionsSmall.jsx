import React from 'react'

const QuestionsSmall = (props) => {
    return (
        <>
            <div className='md:px-[15rem] px-8 flex flex-col md:gap-16 gap-10 items-center w-full md:mt-28 mt-16'>

                <div className=' w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-between'>
                    <h1 className='md:text-3xl text-2xl font-semibold md:w-[36.5%]'>
                        {props.question1}
                    </h1>
                    <p className='font-thin md:text-md text-[0.8rem] md:w-[35%]'>
                        {props.des1}
                    </p>
                </div>

                <div className='w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-between'>
                    <h1 className='md:text-3xl text-2xl font-semibold md:w-[36.5%]'>
                        {props.question2}
                    </h1>
                    <p className='font-thin md:text-md text-[0.8rem] md:w-[35%]'>
                        {props.des2}
                    </p>
                </div>

                <div className='w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-between'>
                    <h1 className='md:text-3xl text-2xl font-semibold md:w-[36.5%]'>
                        {props.question3}
                    </h1>
                    <p className='font-thin md:text-md text-[0.8rem] md:w-[35%]'>
                        {props.des3}
                    </p>
                </div>

                <div className='w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-between'>
                    <h1 className='md:text-3xl text-2xl font-semibold md:w-[36.5%]'>
                        {props.question4}
                    </h1>
                    <p className='font-thin md:text-md text-[0.8rem] md:w-[35%]'>
                        {props.des4}
                    </p>
                </div>

            </div>
        </>
    )
}

export default QuestionsSmall
