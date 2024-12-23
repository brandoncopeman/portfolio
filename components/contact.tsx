"use client";
import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {sendEmail} from '@/actions/sendEmail';

export default function Contact() {
    const {ref} =useSectionInView('Contact', 0.5);

   
    
  return (
    <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28 text-center'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once:true}}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 dark:text-white/80 -mt-6'>
            Please contact me directly at <a className='underline' href='mailto:bcopeman@yahoo.com'> bcopeman@yahoo.com </a>
            {" "}or use this form.
        </p>
        <form className='mt-10 flex flex-col dark:text-black'
         action={async (formData) => {
            await sendEmail(formData);
        }}
    
        >
           <input className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="email "
            name="senderEmail"
            required
            maxLength={500}
            placeholder='Your email'/>
           <textarea className="h-52 my-3 rounded-lg borderBlack p-4  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder='Your message'
            required
            maxLength={5000}
            />
           <button type= 'submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 active:scale-105 hover:bg-gray-950  dark:bg-white dark:bg-opacity-10'>
            Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-110 '/>{" "}</button> 
        </form>
    </motion.section>
  )
}
