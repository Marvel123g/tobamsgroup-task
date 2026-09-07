"use client";
import useWindowSize from "@/hook/useWindowSize";
import { MenuBar } from "@/utils/SVGs";
import { ChevronDown, User, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  // @ts-ignore
  const isMobile = width <= 860;

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, isMobile]);

  return (
    <nav>
      {!isMobile ? (
        <section>
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "linear" }}
            className="flex justify-between px-[64px] border-b border-b-[#DDD0DA]"
          >
            <Image
              src="/logo.png"
              alt="Tobams Group Logo"
              width={165.71}
              height={64}
              className="w-full h-full max-w-[165.71px]"
            />
            <section className="flex items-center gap-[24px] font-nunito-sans">
              <button
                className="bg-[#571244] border border-[#571244] py-2 px-4 rounded-sm flex items-center gap-[12px] hover:-translate-y-1 duration-300 cursor-pointer
              "
              >
                <div className="bg-[#DDD0DA] rounded-full w-8 h-8 p-2 flex justify-center items-center">
                  <User className="text-[#571244]" />
                </div>

                <div className="text-[#FFFFFF] flex items-center gap-1 font-semibold">
                  <p>Account</p>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <button className="bg-[#EF4353] text-[#FFFFFF] py-[10.5px] px-[20px] rounded-sm hover:-translate-y-1 duration-300 cursor-pointer font-semibold">
                Take Assessment
              </button>
            </section>
          </motion.header>
          {/* links */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "linear", delay: 0.5 }}
            className="flex gap-[20px] justify-between font-nunito-sans font-normal text-sm lg:text-base px-[30px] lg:px-[64px] py-[20px]"
          >
            <a href="/" className="flex items-center">
              About <ChevronDown />
            </a>
            <a href="/" className="flex items-center">
              What We Do <ChevronDown />
            </a>
            <a href="/" className="flex items-center">
              Jobs <ChevronDown />
            </a>
            <a href="/">Projects</a>
            <a href="/">TG Academy</a>
            <a href="/"> Strategic Partnership</a>
            <a href="/">Pricing</a>
            <a href="/">Book a Consultation</a>
          </motion.div>
        </section>
      ) : (
        <section className="fixed z-30 bg-[#F9F9F9] inset-x-0 flex items-center justify-between px-[24px]">
          <Image
            src="/logo.png"
            alt="Tobams Group Logo"
            width={120.71}
            height={64}
            className="w-full h-full max-w-[120.71px]"
          />

          <button onClick={() => setIsOpen(true)} className="cursor-pointer">
            <MenuBar />
          </button>
          {isOpen && (
            <aside className="fixed right-0 inset-y-0 z-50 w-full max-w-[350px] text-white h-full min-h-screen bg-[#2C0922] flex flex-col gap-[20px] p-[30px] text-lg font-nunito-sans font-normal">
              <button className="relative">
                <X
                  className="absolute right-0 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </button>
              <section className="flex flex-col gap-[20px] items-start">
                <a href="/" className="flex items-center mt-1">
                  About <ChevronDown />
                </a>
                <a href="/" className="flex items-center">
                  What We Do <ChevronDown />
                </a>
                <a href="/" className="flex items-center">
                  Jobs <ChevronDown />
                </a>
                <a href="/">Projects</a>
                <a href="/">TG Academy</a>
                <a href="/"> Strategic Partnership</a>
                <a href="/">Pricing</a>
                <a href="/">Book a Consultation</a>
                <button
                  className="bg-[#571244] border border-[#571244] py-2 px-4 rounded-sm flex items-center gap-[12px] hover:-translate-y-1 duration-300 cursor-pointer
              "
                >
                  <div className="bg-[#DDD0DA] rounded-full w-8 h-8 p-2 flex justify-center items-center">
                    <User className="text-[#571244]" />
                  </div>

                  <div className="text-[#FFFFFF] flex items-center gap-1 font-semibold">
                    <p>Account</p>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <button className="bg-[#EF4353] text-[#FFFFFF] py-[10.5px] px-[20px] rounded-sm hover:-translate-y-1 duration-300 cursor-pointer font-semibold">
                  Take Assessment
                </button>
              </section>
            </aside>
          )}
        </section>
      )}
    </nav>
  );
};

export default Navbar;
