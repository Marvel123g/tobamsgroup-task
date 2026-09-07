"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CorporateTraining = () => {
  return (
    <section className="bg-[#FFFFFF] py-[60px] px-[20px] sm:p-[60px] flex flex-col items-center mx-auto max-w-[1440px] gap-[24px] min-[986px]:gap-[120px]">
      <section
        className="flex flex-col min-[986px]:flex-row gap-[24px] min-[986px]:gap-[64px]"
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
          <Card
            title="Corporate Trainings "
            description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
            benefit={[
              "Leadership Training",
              "Strategic Planning and Implementation",
              "Project Management",
              "Sustainability Training",
              "Customised Training",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
          className="w-full max-w-[602px]"
        >
          <Image
            src="/Images/TR1.jpg"
            alt="Corporate Trainings"
            width={602}
            height={400}
            className="w-full h-auto rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]"
          />
        </motion.div>
      </section>

      <section
        className="flex flex-col-reverse min-[986px]:flex-row gap-[24px] min-[986px]:gap-[64px]"
        data-aos="fade-up"
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
          className="w-full max-w-[602px]"
        >
          <Image
            src="/Images/TR2.jpg"
            alt="Personalised Individual Training"
            width={602}
            height={346}
            className="w-full h-auto rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]"
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
        >
          <Card
            title="Personalised Individual Training"
            description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
            benefit={[
              "Leadership Development",
              "Soft Skills Development",
              "Industry Specific Knowledge",
              "Technical Skills Enhancement",
              "Time Management and Productivity",
              "Career Development",
            ]}
          />
        </motion.div>
      </section>

      <section
        className="flex flex-col min-[986px]:flex-row gap-[24px] min-[986px]:gap-[64px]"
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
          <Card
            title="Capacity Development"
            description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
            benefit={[
              "Tailored Training Programs",
              "Expert-Led Workshops",
              "Personalized Mentorship",
              "Technical Skills Enhancement",
              "Collaborative Learning Environment",
              "Ongoing Support and Resources",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
          className="w-full max-w-[602px]"
        >
          <Image
            src="/Images/TR3.jpg"
            alt="Capacity Development"
            width={602}
            height={400}
            className="w-full h-auto rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]"
          />
        </motion.div>
      </section>
    </section>
  );
};

export default CorporateTraining;

function Card({
  title,
  description,
  benefit,
}: {
  title: string;
  description: string;
  benefit: string[];
}) {
  return (
    <section className="max-w-[646px] w-full flex flex-col gap-3">
      <h1 className="text-[#151515] font-nunito font-semibold text-[30px] xl:text-[35px]">
        {title}
      </h1>
      <p className="text-[#696969] font-nunito-sans text-base xl:text-lg font-normal">
        {description}
      </p>

      <ul className="px-[20px] font-nunito-sans flex flex-col gap-[10px]">
        {benefit.map((b, i) => (
          <li key={i} className="flex items-center gap-[14px]">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87302 0.761963V6.98419H13.2064L6.09524 16.762V10.5397H0.761909L7.87302 0.761963Z"
                fill="#1D0617"
                stroke="#480F39"
                strokeWidth="1.52381"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#696969]">{b}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
