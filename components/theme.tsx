"use client";
import { useTheme } from '@/context/theme-context';
import React, {use, useEffect, useState} from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'


type Theme= 'dark' | 'light'


export default function Theme() {
  const {theme, toggleTheme} = useTheme();


  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.5] active:scale-105 transition-all dark:bg-gray-950'
    onClick={toggleTheme}
    >
      {
        theme === 'dark' ? (
          <BsMoon  />
        ) : (
          <BsSun />
        )
      }
       
    </button>
  )
}

