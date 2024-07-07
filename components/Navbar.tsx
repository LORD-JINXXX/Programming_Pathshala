"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './Mode';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [state, setState] = useState(false);
    const theme = localStorage.getItem('theme');
    return (
        <nav className='m-0 p-0 w-[100vw] h-[50px] flex flex-row xl:justify-start lg:justify-start md:justify-between items-center'>
            <div className='xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 h-[50px] flex flex-row xl:justify-center lg:justify-center md:justify-start sm:justify-start justify-start md:pl-20 sm:pl-10 pl-5 items-center'>
                <Image src={'/icon.png'} alt='logo' width={35} height={24} />
                <h1 className='font-semibold text-xl ml-1'>Nexcent</h1>
            </div>
            <div className='w-2/4 h-[50px] xl:flex lg:flex md:hidden sm:hidden hidden flex-row justify-center items-center list-none '>
                <li className='font-normal text-sm mx-2'>Home</li>
                <li className='font-normal text-sm mx-2'>Service</li>
                <li className='font-normal text-sm mx-2'>Feature</li>
                <li className='font-normal text-sm mx-2'>Product</li>
                <li className='font-normal text-sm mx-2'>Testimonial</li>
                <li className='font-normal text-sm mx-2'>FAQ</li>
            </div>
            <div className='xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 h-[50px] flex xl:justify-center lg:justify-center md:justify-end sm:justify-end justify-end md:pr-20 sm:pr-10 pr-5 items-center'>
                <div className="xl:hidden lg:hidden md:block sm:block block border-2 shadow-sm rounded-md p-1 cursor-pointer">
                    <IoIosMenu onClick={() => setState(!state)} className='w-[27px] h-[27px]' />
                    {
                        state && <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-10 bg-opacity-10 bg-black backdrop-blur-sm flex justify-end items-end">
                            
                            <ul className="md:w-[300px] sm:w-[100vw] w-[100vw] h-[100%] bg-white">
                                <li className="w-[100%] flex justify-end px-3 py-2"><IoMdClose className="w-[25px] h-[25px] text-red-500" onClick={() => setState(false)} /></li>
                                <li className={`w-[100%] pl-5 my-2 py-2 ${theme === 'dark'? 'text-green-600': 'text-black'}`}>Home</li>
                                <li className={`w-[100%] pl-5 my-2 py-2 ${theme === 'dark'? 'text-green-600': 'text-black'}`}>Service</li>
                                <li className={`w-[100%] pl-5 my-2 py-2 ${theme === 'dark'? 'text-green-600': 'text-black'}`}>Feature</li>
                                <li className={`w-[100%] pl-5 my-2 py-2 ${theme === 'dark'? 'text-green-600': 'text-black'}`}>Product</li>
                                <li className={`w-[100%] pl-5 my-2 py-2 ${theme === 'dark'? 'text-green-600': 'text-black'}`}>Testimonial</li>
                                <li className={`w-[100%] pl-5 my-2 py-2 ${theme === 'dark'? 'text-green-600': 'text-black'}`}>FAQ</li>
                                <li className="w-[100%] pl-5 my-2 py-2 flex flex-col justify-center items-center">
                                <Button className='bg-white text-green-500 text-sm my-2 w-[100px]'>Login</Button>
                                <Button className='bg-green-500 text-white text-sm my-2 w-[100px]'>Sign up</Button>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
                <Button className='bg-white text-green-500 text-sm mx-2 xl:block lg:block md:hidden sm:hidden hidden'>Login</Button>
                <Button className='bg-green-500 text-white text-sm mx-2 xl:block lg:block md:hidden sm:hidden hidden'>Sign up</Button>
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar;