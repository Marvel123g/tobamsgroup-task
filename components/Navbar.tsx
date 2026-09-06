"use client";
import useWindowSize from "@/hook/useWindowSize";
import { MenuBar } from "@/utils/SVGs";
import { ChevronDown, User, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  // @ts-ignore
  const isMobile = width <= 860;
  return (
    <nav className="">
      {!isMobile ? (
        <>
          <header className="flex justify-between px-[64px] border-b border-b-[#DDD0DA]">
            <img
              src="/logo.png"
              alt="Tobams Group"
              className="w-full h-full max-w-[165.71px]"
            />
            <section className="flex items-center gap-[24px]">
              <button className="bg-[#571244] border border-[#571244] py-2 px-4 rounded-sm flex items-center gap-[12px]">
                <div className="bg-[#DDD0DA] rounded-full w-8 h-8 p-2 flex justify-center items-center">
                  <User className="text-[#571244]" />
                </div>

                <div className="text-[#FFFFFF] flex items-center gap-1">
                  <p>Account</p>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <button className="bg-[#EF4353] text-[#FFFFFF] py-[10.5px] px-[20px] rounded-sm">
                Take Assessment
              </button>
            </section>
          </header>
          {/* links */}
          <div className="flex gap-[20px] justify-between text-sm lg:text-base px-[30px] lg:px-[64px] py-[20px]">
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
          </div>
        </>
      ) : (
        <section className="relative flex items-center justify-between px-[24px]">
          <img
            src="/logo.png"
            alt="Tobams Group"
            className="w-full h-full max-w-[120.71px]"
          />

          <button onClick={() => setIsOpen(true)} className="cursor-pointer">
            <MenuBar />
          </button>
          {isOpen && (
            <aside className="fixed right-0 inset-y-0 z-50 w-full max-w-[350px] text-white h-full min-h-screen bg-[#2C0922] flex flex-col gap-[20px] p-[30px] text-lg">
              <button className="relative">
                <X  className="absolute right-0 cursor-pointer" onClick={() => setIsOpen(false)}/>
              </button>
                <a href="/" className="flex items-center mt-10">
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
            </aside>
          )}
        </section>
      )}
    </nav>
  );
};

export default Navbar;
