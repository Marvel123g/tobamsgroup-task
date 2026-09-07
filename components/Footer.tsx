import React from "react";
import Image from "next/image";
import { LinkedIn, Instagram, Twitter, Mail, Phone } from "@/utils/SVGs";

const Footer = () => {
  const Icon = [LinkedIn, Instagram, Twitter];

  return (
    <footer>
      <section
        className="px-[20px] xl:px-[64px] py-[40px] flex flex-col min-[1000px]:flex-row justify-between items-start gap-[24px] min-[1000px]:items-center bg-[#1D0617] border-b-2 border-b-[#C4C4C4] "
        data-aos="zoom-in"
      >
        <div className="space-y-3">
          <p className="text-[#FFFFFF] text-sm sm:text-lg font-normal font-nunito-sans">
            Ready to be a part of something extraordinary?
          </p>
          <h1 className="text-[#FFFFFF] font-nunito font-semibold text-xl sm:text-[32px]">
            Let’s work together to create a difference
          </h1>
        </div>
        <button className="font-nunito bg-[#571244] py-[12px] px-[24px] rounded-sm text-[#FFFFFF] font-semibold text-sm sm:text-lg">
          Get In Touch
        </button>
      </section>

      <section
        className="bg-[#11040E] py-[32px] px-[20px] xl:px-[64px]"
        data-aos="zoom-in"
      >
        <div className="py-[20px] flex flex-col min-[1000px]:flex-row justify-between gap-[30px] min-[1000px]:gap-[20px]">
          <section className="max-w-[356px] -mt-8">
            <Image
              src="/logo.png"
              alt="Tobams Group logo"
              width={188}
              height={60}
              className="w-[188px] h-auto"
            />
            <p className="text-[#F8F8F8] text-base font-normal font-nunito">
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
            <p className="text-[#FFFFFF] font-bold text-xl font-nunito">What We Do</p>
            <ul className="text-[#FFFFFF] font-nunito text-sm xl:text-base font-normal flex flex-col gap-[16px]">
              <li>Sustainability Services</li>
              <li>Strategy Planning and Implementation</li>
              <li>Tech Talent Solutions</li>
              <li>Training and Development</li>
              <li>IT Consulting Services</li>
              <li>Social Impact</li>
              <li>Talent Recruitment</li>
            </ul>
          </section>
          <section className="flex flex-col font-nunito gap-[16px]">
            <p className="text-[#FFFFFF] font-bold text-xl">Company</p>
            <ul className="text-[#FFFFFF] text-sm xl:text-base font-normal flex flex-col gap-[16px]">
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
          <section className="flex font-nunito flex-col gap-[16px]">
            <p className="text-[#FFFFFF] font-bold text-xl">Solution</p>
            <ul className="text-[#FFFFFF] text-sm xl:text-base font-normal flex flex-col gap-[16px]">
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
          <div className="flex flex-col-reverse min-[1000px]:flex-row gap-[24px] w-full p-[24px] rounded-lg bg-[#FFFFFF0F]">
            <section className="text-[#FFFFFF] w-full flex flex-col gap-[10px]">
              <h1 className="text-xl font-nunito font-bold">Registered Offices</h1>
              <div className="grid grid-cols-1 font-nunito-sans min-[1000px]:grid-cols-[2fr_0.01fr_1.5fr] gap-[24px] text-base font-normal">
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
                    Commission)4, Muaz Close, Angwar-Rimi
                  </p>
                </section>
              </div>
            </section>

            <div className="bg-[#DDD0DA] w-px min-[1000px]:block hidden" />

            <section className="flex flex-col gap-[10px]">
              <h1 className="text-[#FFFFFF] font-bold font-nunito text-xl">
                Contact Information
              </h1>
              <ul className="space-y-[10px] font-nunito-sans">
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

        <section className="flex font-nunito gap-4 text-center flex-col-reverse min-[1000px]:flex-row min-[1000px]:justify-between items-center">
          <p className="text-[#FFFFFF] text-base font-light">
            Copyright &copy; Tobams Group, 2024. All rights reserved.
          </p>

          <ul className="flex flex-wrap justify-center items-center gap-y-[12px] gap-x-[40px] min-[508px]:gap-[40px] text-[#FFFFFF] text-base font-light">
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
