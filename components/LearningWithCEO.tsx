import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LearningWithCEO = () => {
  const transformationData = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="bg-[#FFFFFF] px-4 py-8 sm:px-6 lg:px-[40px] xl:px-[64px]" data-aos='fade-up'>
      <main className="bg-[#EF4353]/20 rounded-2xl p-5 sm:p-8 lg:p-[40px]" >
        <span className="text-[#1671D9] text-lg sm:text-xl italic font-nunito font-semibold">
          Learning With Our CEO:
        </span>

        <h1 className="text-[#571244] italic text-[24px] sm:text-[28px] lg:text-[32px] font-nunito font-semibold mt-2 leading-tight">
          Transformation Hub With Jite Newton
        </h1>

        <p className="text-[#151515] text-sm sm:text-base lg:text-lg font-nunito-sans font-normal mt-4 leading-relaxed">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you're seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>

        <section className="mt-9 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[32px]">
          <Image
            src="/Images/Transformation.jpg"
            alt="Transformation Hub With Jite"
            width={560}
            height={340}
            className="w-full max-w-[560px] h-auto rounded-lg object-cover mx-auto lg:max-h-[340px]"
          />

          <div className="bg-[#FFFFFF4D] w-full flex flex-col gap-4 sm:gap-[24px] justify-center items-start py-5 px-4 sm:py-[32px] sm:px-[20px] rounded-lg lg:max-w-[640px]">
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {transformationData.map((transform, i) => (
                <p
                  key={i}
                  className="bg-[#FFFFFF] flex items-center gap-[10px] rounded-xl p-3 sm:p-[16px]"
                >
                  <svg
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M10.3333 1V9.16667H17.3333L8 22V13.8333H1L10.3333 1Z"
                      fill="#DDD0DA"
                      stroke="#571244"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm sm:text-base lg:text-[18px] font-nunito-sans font-normal text-[#151515] leading-snug">
                    {transform}
                  </span>
                </p>
              ))}
            </section>

            <button className="bg-[#571244] text-[#FFFFFF] py-[10.5px] px-[24px] flex items-center gap-[8px] font-semibold text-base sm:text-lg rounded-[4px] hover:-translate-y-1 duration-300 cursor-pointer">
              Learn More <ArrowUpRight strokeWidth={2} />
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default LearningWithCEO;
