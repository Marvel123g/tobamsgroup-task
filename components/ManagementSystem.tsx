"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ManagementSystem = () => {
  const courses = [
    { course: "Business Analysis" },
    { course: "Design Thinking" },
    { course: "Effective Communication" },
    { course: "Entrepreneurship" },
    { course: "Career Development" },
    { course: "Business Model" },
  ];
  return (
    <section className="py-[40px]">
      <main
        className="bg-[#571244]/10 py-[48px] px-[20px] sm:px-[60px] min-[1400px]:px-[64px] flex flex-col justify-center min-[838px]:flex-row h-full gap-[40px] min-[1250px]:gap-[80px]"
        data-aos="fade-up"
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
        >
          <Image
            src="/management.png"
            alt="Management System"
            width={600}
            height={420}
            className="w-full h-full"
          />
        </motion.div>

        <motion.section
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
          className="flex flex-col items-start gap-5 w-full max-w-[675px]"
        >
          <h1 className="text-[#571244] text-[25px] sm:text-[30px] min-[1250px]:text-[40px] font-nunito font-semibold">
            Learning Management System
          </h1>
          <div className="font-nunito-sans bg-[#571244]/10 p-[24px] rounded-[8px] flex flex-col gap-[20px]">
            <p className="text-[#151515] text-base sm:text-lg font-normal">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today's competitive tech
              landscape.
            </p>

            <section className="font-nunito-sans">
              <h3 className="text-[#571244] font-bold text-lg">
                Some of our courses include:{" "}
              </h3>
              <ul className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[1194px]:grid-cols-3 gap-[8px] px-3 mt-2">
                {courses.map((c, index) => (
                  <li
                    key={index}
                    className="list-disc text-[#151515] text-sm min-[1400px]:text-base font-normal"
                  >
                    {c.course}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <button className="bg-[#571244] text-[#FFFFFF] py-[10.5px] px-[24px] flex items-center gap-[8px] font-semibold text-lg mt-4 hover:-translate-y-1 duration-300 cursor-pointer">
            Learn More <ArrowUpRight strokeWidth={2} />
          </button>
        </motion.section>
      </main>
    </section>
  );
};

export default ManagementSystem;
