"use client";

import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
// @ts-ignore
import "aos/dist/aos.css";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return null;
};

export default AOSProvider;