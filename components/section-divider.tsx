"use client";
import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div className='   my-28 md:my-32 h-16 w-1 rounded-full  sm:block'
    initial={{opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
    >

    </motion.div>
  )
}
