import React from 'react'
import footerBg from '../Assets/footerBg.svg'
import mainLogo from '../Assets/mainLogoSvg.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='h-[25.5rem] w-full mt-40'>
                <div className='flex justify-around items-center'
                    style={{
                        backgroundImage: `url(${footerBg})`,
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>

                    <div className='flex justify-around w-full'>
                        <Link to="/">
                            <img src={mainLogo} className='w-[24rem]' alt="" />
                        </Link>

                        <div className='flex gap-48'>

                            <ul className='gap-5 flex flex-col'>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Ask a doctor online</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Chat with a doctor</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Phone a doctor</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Video Conversation</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Physician Directory</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Articles</li>
                            </ul>

                            <ul className='gap-5 flex flex-col'>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Tools</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Blogs</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>About Us</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Terms</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Privacy</li>
                                <li className='cursor-pointer text-[1.2rem] font-thin hover:text-[#d79949]'>Get MediHub App</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
