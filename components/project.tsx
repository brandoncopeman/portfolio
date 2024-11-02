"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, imageUrl } :
    ProjectProps) {
        const ref = useRef<HTMLDivElement>(null);
        const {scrollYProgress} = useScroll({
            target: ref,
            offset: ["0 1","1.33 1"],
        })
        const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    return <motion.div 
    ref={ref} 
    style={{
        scale: scaleProgress,
        opacity: scaleProgress
    }}
    className="group mb-3 sm:mb-8 last:mb-0 "
    >
        <section 
    className=' bg-grey-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] h-[20rem]  hover:bg-gray-200 transition group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
       <div className='pt-4 pb-4 px-40 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[50%]   flex flex-col h-full group-even:ml-[50%] '>
        <h3 className='text-2xl font-semibold'>
            {title}
        </h3>
        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70 '>
            {description}
        </p>
        <ul className='flex flex-wrap justify-center mt-4 gap-2 sm:mt-auto '>
            {tags.map((tag, index) => (
                <li className= 'bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full  dark:text-white/70 ' key={index}>
                    {tag}
                </li>
            ))}
        </ul>
        </div>
        <Image src={imageUrl} alt='Project I worked on' quality={95} className='absolute top-8 -right-80  width-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-80  
        group-hover:-translate-y-1 
        group-hover:-translate-x-1 
        group-hover:-rotate-1 transition 
        group-hover:scale-[1.04]

        group-even:group-hover:scale-[1.04]
        group-even:group-hover:translate-x-1 
        group-even:group-hover:translate-y-1 
        group-even:group-hover:rotate-1 
        
       '
        />
    </section>
    </motion.div>
}
