"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from 'next/image';
import lightThemeIcon from '../../../public/lightThemeIcon.svg'
import darkThemeIcon from '../../../public/darkThemeIcon.svg'

const Themechanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLightTheme = theme === "light";

  return (
    <>
      {isLightTheme ? (
        <button type="button" className="h-6" onClick={() => setTheme("dark")} >
          <Image
            priority
            src={lightThemeIcon}
            alt="light-theme"
            height={24}
            width={24}
          />
        </button>
        ) : (
        <button type="button" className="h-6" onClick={() => setTheme("light")} >
          <Image
            priority
            src={darkThemeIcon}
            alt="dark-theme"
            height={24}
            width={24}
          />
        </button>)}
      </>
  );
};

export default Themechanger;
