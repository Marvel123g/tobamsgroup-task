import { ArrowUpRight } from "lucide-react";
import React from "react";

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
      <main className="bg-[#571244]/10 py-[48px] px-[64px] flex h-full max-h-[664px] gap-[80px]">
        <img
          src="/management.png"
          alt="Management System"
          className="w-full"
        />

        <section className="flex flex-col items-start gap-5 max-w-[675px]">
          <h1 className="text-[#571244] text-[40px] font-semibold">
            Learning Management System
          </h1>
          <div className="bg-[#571244]/10 p-[24px] rounded-[8px] flex flex-col gap-[20px]">
            <p className="text-[#151515] text-lg font-normal">
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

            <section>
              <h3 className="text-[#571244] font-bold text-lg">
                Some of our courses include:{" "}
              </h3>
              <ul className="grid grid-cols-3 max-w-[627px] gap-[8px] px-5 mt-2">
                {courses.map((c, index) => (
                  <li
                    key={index}
                    className="list-disc text-[#151515] text-base font-normal"
                  >
                    {c.course}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <button className="bg-[#571244] text-[#FFFFFF] py-[10.5px] px-[24px] flex items-center gap-[8px] font-semibold text-lg mt-4">
            Learn More <ArrowUpRight strokeWidth={2} />
          </button>
        </section>
      </main>
    </section>
  );
};

export default ManagementSystem;
