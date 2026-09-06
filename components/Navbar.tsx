import { ChevronDown, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <header className="flex justify-between  px-[64px] border-b border-b-[#DDD0DA]">
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
      <div className="flex justify-between px-[64px] py-[20px]">
        <p className="flex items-center">
          About <ChevronDown />
        </p>
        <p className="flex items-center">
          What We Do <ChevronDown />
        </p>
        <p className="flex items-center">
          Jobs <ChevronDown />
        </p>
        <p>Projects</p>
        <p>TG Academy</p>
        <p> Strategic Partnership</p>
        <p>Pricing</p>
        <p>Book a Consultation</p>
      </div>
    </nav>
  );
};

export default Navbar;
