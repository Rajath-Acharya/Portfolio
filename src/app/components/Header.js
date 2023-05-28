"use client";

import React, { useEffect, useState } from 'react'
import Themechanger from './ThemeChanger'
import Image from 'next/image';
import logoLight from '../../../public/logoLight.svg'
import logoDark from '../../../public/logoDark.svg'
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null;

  return (
    <header>
      <Image
        priority
        src={theme === 'light' ? logoLight : logoDark}
        alt="logo"
      />
      <Themechanger />
    </header>
  )
}

export default Header