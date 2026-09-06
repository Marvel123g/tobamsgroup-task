import React from "react";

const WhatWeDo = () => {
  return (
    <section className="relative">
      <img
        src="/Hero.jpg"
        alt="Training and Development"
        className="w-full h-full max-h-[511px] object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]" />
      <div className="absolute z-10 inset-0 max-w-[1312px] mx-auto flex flex-col justify-center items-center text-[#FFFFFF]">
        <p className="bg-white/10 rounded-full px-[48px] py-[12px]  font-semibold text-sm">
          WHAT WE DO
        </p>
        <h1 className=" font-bold text-[56px] mt-2">Training and Development</h1>
        <p className="font-semibold text-lg max-w-[1077px] text-center mt-[15px]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <button className="bg-[#571244] py-[12px] px-[24px] text-[#FFFFFF] font-semibold mt-10">Book a Consultation</button>
      </div>
    </section>
  );
};

export default WhatWeDo;
