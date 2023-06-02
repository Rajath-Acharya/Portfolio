"use client";

import React, { useEffect, useState } from 'react';
import Themechanger from './ThemeChanger';
import Image from 'next/image';
import logoLight from '../../../public/logoLight.svg';
import logoDark from '../../../public/logoDark.svg';
import { useTheme } from "next-themes";
import Link from 'next/link';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null;

  return (
    <header className='py-12 px-32 flex justify-between items-center'>
      <div>
       <Link href="/">
        <Image
          priority
          src={theme === 'light' ? logoLight : logoDark}
          alt="logo"
        />
      </Link>
      </div>
      <div className='flex items-center gap-8'>
        <Link className='h-6 flex items-center' href="/experience">Experience</Link>
        <Link className='h-6 flex items-center' href="/contact">Contact</Link>
        <a
          className='h-6 flex items-center'
          href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Resume Page"
        >
          Resume
        </a>
      <Themechanger />
      </div> 
    </header>
  )
}

export default Header