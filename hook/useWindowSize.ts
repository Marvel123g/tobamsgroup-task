"use client"
import React, { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        // @ts-ignore
        width: window.innerWidth,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
