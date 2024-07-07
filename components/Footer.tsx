import Image from 'next/image';
import React from 'react';
import { GrInstagram } from "react-icons/gr";
import { IoGlobeSharp } from "react-icons/io5";
import { LuTwitter } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-[100vw] h-[auto] m-0 p-0 bg-black flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center'>
            <div className='xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-full w-full h-[100%] flex flex-col justify-start items-center pt-10'>
                <div className='w-full h-[50px] flex flex-row justify-center items-center my-2'>
                    <div className='w-[40px] h-[40px] flex justify-center items-center'>
                        <Image src={'/icon.png'} alt='logo' width={35} height={24} />
                    </div>
                    <div className='w-[100px] h-[40px] flex justify-center items-start'><h1 className='font-semibold text-xl ml-1 text-white'>Nexcent</h1></div>
                </div>
                <div className='w-full h-[50px] flex justify-center items-center flex-col my-2'>
                    <p className='text-sm font-normal text-white xl:pl-24 lg:pl-24 md:pl-24 sm:px-2 px-2'>Copyright © 2020 Landify UI Kit.</p>
                    <p className='text-sm font-normal text-white px-2'>All rights reserved</p>
                </div>
                <div className='w-full h-[50px] flex flex-row justify-center items-center my-2'>
                    <GrInstagram className='mx-2 text-white w-[17px] h-[17px]'/>
                    <IoGlobeSharp className='mx-2 text-white w-[17px] h-[17px]'/>
                    <LuTwitter className='mx-2 text-white w-[17px] h-[17px]'/>
                    <CiYoutube className='mx-2 text-white w-[17px] h-[17px]'/>
                </div>
            </div>

            <div className='xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-full w-full h-[100%] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center items-center pt-10'>
                <div className='xl:w-1/3 lg;w-1/3 md:w-1/3 sm:w-full w-full h-[auto] mx-5 my-5 flex flex-col xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center  xl:items-start lg:items-start md:items-start sm:items-center items-center'>
                    <span className='text-base text-white font-semibold mb-2'>Company</span>
                    <span className='text-sm text-white font-normal my-1'>About us</span>
                    <span className='text-sm text-white font-normal my-1'>Blog</span>
                    <span className='text-sm text-white font-normal my-1'>Contact us</span>
                    <span className='text-sm text-white font-normal my-1'>Pricing</span>
                    <span className='text-sm text-white font-normal my-1'>Testimonials</span>
                </div>

                <div className='xl:w-1/3 lg;w-1/3 md:w-1/3 sm:w-full w-full h-[auto] mx-5 my-5 flex flex-col xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center  xl:items-start lg:items-start md:items-start sm:items-center items-center'>
                    <span className='text-base text-white font-semibold mb-2'>Support</span>
                    <span className='text-sm text-white font-normal my-1'>Help center</span>
                    <span className='text-sm text-white font-normal my-1'>Terms of service</span>
                    <span className='text-sm text-white font-normal my-1'>Legal</span>
                    <span className='text-sm text-white font-normal my-1'>Privacy policy</span>
                    <span className='text-sm text-white font-normal my-1'>Status</span>
                </div>

                <div className='xl:w-1/3 lg;w-1/3 md:w-1/3 sm:w-full w-full h-[auto] mx-5 my-5 flex flex-col xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center  xl:items-start lg:items-start md:items-start sm:items-center items-center'>
                    <span className='text-base text-white font-semibold mb-2'>Stay up to date</span>
                    <span className='flex justify-center items-center my-1 w-[250px] h-[30px] bg-slate-700 rounded-sm'>
                        <input placeholder='Your email address' className=' placeholder:text-white bg-transparent text-white opacity-100' type='text'/>
                        <FaTelegramPlane className='w-[17px] h-[17px] text-white'/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;