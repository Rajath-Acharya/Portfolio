"use client";

import React, { useEffect, useState } from 'react'
import Themechanger from './ThemeChanger'
import Image from 'next/image';
import logoLight from '../../../public/logoLight.svg'
import logoDark from '../../../public/logoDark.svg'
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
      <Image
        priority
        src={theme === 'light' ? logoLight : logoDark}
        alt="logo"
      />
      </div>
      <div className='flex items-center gap-8'>
        <Link className='h-6 flex items-center' href="/about">About</Link>
        <Link className='h-6 flex items-center' href="/contact">Contact</Link>
        <Link className='h-6 flex items-center' href="/resume">Resume</Link>
      <Themechanger />
      </div>
    </header>
  )
}

export default Header