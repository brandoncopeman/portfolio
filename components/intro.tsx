"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { time } from 'console';
import { useSectionInView } from '@/lib/hooks';



export default function Intro() {
  const {ref} =useSectionInView('Home', 0.5);
  const{
    setActiveSection,
    setTimeOfLastClick
  }=useActiveSectionContext();
 
  return (
    <section ref={ref} id="home" className='mb -28 max-w-[50rem]  text-center sm:mb-0 scroll-mt-28'>
       
               <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
               >
                <span className='font-bold '>
                    Hi I'm Brandon.{" "}
                </span>
                <span className=''>
                    I'm a{" "}
                </span>
                <span className='italic '>
                    recent grad{" "}
                </span>
                <span className=''>
                    and{" "}
                </span>
                <span className='font-bold'>
                    full-stack developer.{" "}
                </span>
                
                <span className=''>
                    I focus mainly on{"  "}
                </span>
                <span className='font-bold'>
                Java, Python, and React.{" "}
                </span>
                </motion.h1> 
                
                <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4  text-lg font-medium'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1}}
                >
                  <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                  onClick={() => {
                    setActiveSection('Contact');
                    setTimeOfLastClick(Date.now());
                  }} >
                  Contact me here
                  <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                  </Link>   
                  <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10'
                  href='/CV.pdf' download
                  >
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
                  </a>
                  <a className='group bg-white p-4  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer  dark:bg-white/10'
                  href='https://github.com/brandoncopeman'
                  target='_blank'
                  >
                    <BsGithub className='opacity-60 transition'/>
                  </a>
                </motion.div>
                
           
    </section>
  );
}
