"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Themechanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  return (
    <>
      {light ? (
        <button onClick={() => setTheme("dark")} size={27}>
          Dark
        </button>
      ) : (
        <button onClick={() => setTheme("light")} size={27}>
          Light
        </button>
      )}
      </>
  );
};

export default Themechanger;
