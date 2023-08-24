import React from 'react'

const QuestionsSmall = (props) => {
    return (
        <>
            <div className='px-[15rem] flex flex-col gap-16 items-center w-full mt-28'>

                <div className=' w-full flex justify-between'>
                    <h1 className='text-3xl font-semibold w-[36.5%]'>
                        {props.question1}
                    </h1>
                    <p className='font-thin w-[35%]'>
                        {props.des1}
                    </p>
                </div>

                <div className=' w-full flex justify-between'>
                    <h1 className='text-3xl font-semibold w-[36.5%]'>
                        {props.question2}
                    </h1>
                    <p className='font-thin w-[35%]'>
                        {props.des2}
                    </p>
                </div>

                <div className=' w-full flex justify-between'>
                    <h1 className='text-3xl font-semibold w-[36.5%]'>
                        {props.question3}
                    </h1>
                    <p className='font-thin w-[35%]'>
                        {props.des3}
                    </p>
                </div>

                <div className=' w-full flex justify-between'>
                    <h1 className='text-3xl font-semibold w-[36.5%]'>
                        {props.question4}
                    </h1>
                    <p className='font-thin w-[35%]'>
                        {props.des4}
                    </p>
                </div>

            </div>
        </>
    )
}

export default QuestionsSmall
