"use client";
import React from "react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "linear" }}
      className="relative max-[861px]:mt-10"
    >
      <img
        src="/Hero.jpg"
        alt="Training and Development"
        className="w-full h-full min-h-[511px] min-[702px]:max-h-[511px] object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]" />
      <div className="absolute z-10 inset-0 max-w-[1312px] mx-auto flex flex-col text-center justify-center items-center text-[#FFFFFF]">
        <p className="bg-white/10 rounded-full px-[48px] py-[12px] font-nunito-sans font-semibold text-sm">
          WHAT WE DO
        </p>
        <h1 className="font-nunito font-bold text-[24px] min-[440px]:text-[35px] min-[702px]:text-[56px] mt-2">
          Training and Development
        </h1>
        <p className="font-nunito-sans font-semibold text-[13px] min-[440px]:text-sm min-[702px]:text-lg max-w-[1077px] text-center mt-[15px]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="font-nunito-sans bg-[#571244] py-[12px] px-[24px] cursor-pointer text-[#FFFFFF] font-semibold mt-10"
        >
          Book a Consultation
        </motion.button>
      </div>
    </motion.section>
  );
};

export default WhatWeDo;
