import React from "react";

const DevelopmentProgram = () => {
  const programData = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];
  return (
    <section className="py-[64px] px-[20px] sm:p-[64px] ">
      <main className="bg-[#2C0922] p-[20px] sm:p-[40px] rounded-[20px] flex flex-col min-[864px]:flex-row gap-[34px]">
        <img
          src="/Images/DP.jpg"
          alt="Development Program"
          className="rounded-[8px] max-w-[592px] w-full h-auto text-white object-cover"
        />

        <section className="flex flex-col gap-[32px] w-full max-w-[592px]">
          <h1 className="text-[#FFFFFF] font-semibold text-[25px] tsm:ext-[30px] min-[1114px]:text-[40px] leading-none">
            Management Development Program
          </h1>
          <p className="text-base min-[1114px]:text-lg text-[#FFFFFF] font-normal">
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive.
          </p>
          <p className=" text-base min-[1114px]:text-lg text-[#FFFFFF] font-normal">
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>

          <div className="py-[8px] min-[1114px]:px-[16px] flex flex-col gap-[25px]">
            {programData.map((program, i) => (
              <p
                key={i}
                className="bg-[#8F6182] py-[6px] px-[8px] rounded-lg flex items-center gap-2"
              >
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 0V9.33333H18.6667L8 24V14.6667H0L10.6667 0Z"
                    fill="white"
                  />
                </svg>
                <span className="text-[#FFFFFF] text-sm sm:text-base min-[1114px]:text-lg font-semibold">
                  {program}
                </span>
              </p>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default DevelopmentProgram;
