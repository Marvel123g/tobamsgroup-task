import React from "react";
import { LinkedIn, Instagram, Twitter, Mail, Phone } from "@/utils/SVGs";

const Footer = () => {
  const Icon = [LinkedIn, Instagram, Twitter];
  return (
    <footer>
      <section className="px-[64px] py-[40px] flex justify-between items-center bg-[#1D0617] border-b-2 border-b-[#C4C4C4] ">
        <div>
          <p className="text-[#FFFFFF] text-lg font-normal">
            Ready to be a part of something extraordinary?
          </p>
          <h1 className="text-[#FFFFFF] font-semibold text-[32px]">
            Let’s work together to create a difference
          </h1>
        </div>
        <button className="bg-[#571244] py-[12px] px-[24px] rounded-sm text-[#FFFFFF] font-semibold text-lg">
          Get In Touch
        </button>
      </section>

      <section className="bg-[#11040E] py-[32px] px-[64px]">
        <div className="py-[20px] flex justify-between">
          <section className="max-w-[356px] -mt-8">
            <img src="/logo.png" alt="" className="w-[188px] h-fit" />
            <p className="text-[#F8F8F8] text-base font-normal">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="flex gap-[20px] items-center mt-[15px]">
              {Icon.map((IconComponent, index) => (
                <div
                  className="bg-[#FFFFFF] w-[40px] h-[40px] rounded-full p-[10px] flex items-center justify-center"
                  key={index}
                >
                  <IconComponent />
                </div>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-[16px]">
            <p className="text-[#FFFFFF] font-bold text-xl">What We Do</p>
            <ul className="text-[#FFFFFF] text-base font-normal flex flex-col gap-[16px]">
              <li>Sustainability Services</li>
              <li>Strategy Planning and Implementation</li>
              <li>Tech Talent Solutions</li>
              <li>Training and Development</li>
              <li>IT Consulting Services</li>
              <li>Social Impact</li>
              <li>Talent Recruitment</li>
            </ul>
          </section>
          <section className="flex flex-col gap-[16px]">
            <p className="text-[#FFFFFF] font-bold text-xl">Company</p>
            <ul className="text-[#FFFFFF] text-base font-normal flex flex-col gap-[16px]">
              <li>About</li>
              <li>Jobs</li>
              <li>Projects</li>
              <li>Our Founder</li>
              <li>Business Model</li>
              <li>The Team</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Testimonials</li>
            </ul>
          </section>
          <section className="flex flex-col gap-[16px]">
            <p className="text-[#FFFFFF] font-bold text-xl">Solution</p>
            <ul className="text-[#FFFFFF] text-base font-normal flex flex-col gap-[16px]">
              <li>Tobams Group Academy</li>
              <li>Help a Tech Talent</li>
              <li>Campus Ambassadors Program</li>
              <li>Join Our Platform</li>
              <li>Pricing</li>
              <li>Book a Consultation</li>
              <li>Join Our Slack Community</li>
            </ul>
          </section>
        </div>

        <section className="py-[20px]">
          <div className="flex gap-[24px] w-full p-[24px] rounded-lg bg-[#FFFFFF0F]">
            <section className="text-[#FFFFFF] w-full flex flex-col gap-[10px]">
              <h1 className="text-xl font-bold">Registered Offices</h1>
              <div className="grid grid-cols-[2fr_0.01fr_1.5fr] gap-[24px] text-base font-normal">
                <section>
                  <h2 className="text-[#EF4353] ">United Kingdom</h2>
                  <p>
                    07451196 (Registered by Company House) Vine Cottages, 215
                    North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </section>
                <div className="bg-[#DDD0DA] w-px" />
                <section>
                  <h2 className="text-[#EF4353]">Nigeria</h2>
                  <p>
                    RC 1048722 (Registered by the Corporate Affairs
                    Commission) 4, Muaz Close, Angwar-Rimi
                  </p>
                </section>
              </div>
            </section>

            <div className="bg-[#DDD0DA] w-px" />

            <section className="flex flex-col gap-[10px]">
              <h1 className="text-[#FFFFFF] font-bold text-xl">
                Contact Information
              </h1>
              <ul className="space-y-[10px]">
                <li className="flex items-center gap-[16px]">
                  <Mail />
                  <span className="text-base font-normal text-[#FFFFFF]">
                    theteam@tobamsgroup.com
                  </span>
                </li>
                <li className="flex items-center gap-[16px]">
                  <Phone />
                  <span className="text-base font-normal text-[#FFFFFF]">
                    +447886600748
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </section>

        <hr className="bg-[#DDD0DA] h-px my-[32px]" />

        <section className="flex justify-between items-center">
          <p className="text-[#FFFFFF] text-base font-light">Copyright &copy; Tobams Group, 2024. All rights reserved.</p>

          <ul className="flex items-center gap-[40px] text-[#FFFFFF] text-base font-light">
            <li className="underline">Terms and Conditions</li>
            <li className="underline">Privacy Policy</li>
            <li className="underline">Cookies Policy</li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
