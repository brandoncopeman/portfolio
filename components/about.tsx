"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} =useSectionInView('About', 0.5);


  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >
        <SectionHeading>
            About me
        </SectionHeading>
        <p className='mb-3'>
            Alot of random text about me and my life. Alot of random text about me and my life. Alot of random text about me and my life.
        </p>
        <p>
            More stuff to say about me and my life. More stuff to say about me and my life. More stuff to say about me and my life. 
        </p>
    </motion.section>
  )
}
