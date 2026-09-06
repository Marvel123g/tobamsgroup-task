import { ArrowUpRight } from "lucide-react";
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
    <section className="bg-[#FFFFFF] p-[64px]">
      <main className="bg-[#EF4353]/20 rounded-2xl p-[40px]">
        <span className="text-[#1671D9] text-xl italic font-semibold">
          Learning With Our CEO:
        </span>
        <h1 className="text-[#571244] italic text-[32px] font-semibold mt-2">
          Transformation Hub With Jite Newton
        </h1>
        <p className="text-[#151515] text-lg font-normal mt-4">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you're seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>

        <section className="flex gap-[32px] mt-9">
          <img
            src="/Images/Transformation.jpg"
            alt="Transformation Hub With Jite"
            className="max-w-[560px] max-h-[340px] rounded-lg"
          />
          <div className="bg-[#FFFFFF4D] flex flex-col gap-[24px] justify-center items-start py-[32px] px-[20px] rounded-lg">
            <section className="grid grid-cols-2 gap-[12px]">
              {transformationData.map((transform, i) => (
                <p
                  key={i}
                  className="bg-[#FFFFFF] flex items-center gap-[10px] rounded-xl p-[16px]"
                >
                  <svg
                    width="19"
                    height="23"
                    viewBox="0 0 19 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                  <span>{transform}</span>
                </p>
              ))}
            </section>
            <button className="bg-[#571244] text-[#FFFFFF] py-[10.5px] px-[24px] flex items-center gap-[8px] font-semibold text-lg rounded-[4px]">
              Learn More <ArrowUpRight strokeWidth={2} />
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default LearningWithCEO;
