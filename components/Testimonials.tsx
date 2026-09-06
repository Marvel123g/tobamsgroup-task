"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface TestimonyType {
  name: string;
  role: string;
  desc: string;
  imgSrc: string;
}

const Testimonials = () => {
  const testimonies: TestimonyType[] = [
    {
      name: "Aisha Yusuf",
      role: "Founder, CraftHub NG",
      desc: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
      imgSrc: "/Avatar/avatar1.png",
    },
    {
      name: "John Davies",
      role: "Marketing Manager, E-Commerce Emporium",
      desc: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
      imgSrc: "/Avatar/avatar2.png",
    },
    {
      name: "Chinonso Nwankwo",
      role: "HR Director, FutureTech Solutions",
      desc: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
      imgSrc: "/Avatar/avatar3.png",
    },
    {
      name: "Rita Ahmed",
      role: "Creative Director, ArtInnovate Studios",
      desc: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
      imgSrc: "https://randomuser.me/api/portraits/women/89.jpg",
    },
    {
      name: "Zoe Mantis",
      role: "Founder, Alpha Group",
      desc: "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
      imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Femi Adekunle",
      role: "IT Professional",
      desc: "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable",
      imgSrc: "https://randomuser.me/api/portraits/men/83.jpg",
    },
  ];
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prev) => (prev >= testimonies.length - 3 ? prev : prev + 1));
  };
  const handlePrev = () => {
    setCurrentCard((prev) => (prev <= testimonies.length ? prev - 1 : 0));
  };

  return (
    <section className="bg-[#C4C4C44D] p-[64px] flex flex-col gap-[40px]">
      <h1 className="text-[#151515] font-bold text-[40px] text-center">
        Testimonials
      </h1>

      <main className="max-w-[1440px] overflow-hidden flex items-center gap-[31px] w-full">
        {testimonies.slice(currentCard, currentCard + 3).map((t, index) => (
          <div
            className="rounded-[16px] py-[20px] px-[24px] shrink-0 flex flex-col gap-[24px] border-l-2 border-l-[#EF4353] bg-[#FFFFFF] w-full max-w-[422px] h-fit max-h-[244px]"
            key={index}
          >
            <header className="flex items-center gap-[21px]">
              <img
                src={t.imgSrc}
                alt={t.name}
                className="w-[44px] h-[44px] rounded-full"
              />
              <p className="flex flex-col">
                <span className="font-semibold text-base text-[#151515]">
                  {t.name}
                </span>
                <span className="text-[#696969] text-sm font-normal">
                  {t.role}
                </span>
              </p>
            </header>
            <p className="text-[#151515] font-normal text-base">{t.desc}</p>
          </div>
        ))}
      </main>

      <footer className="flex justify-end gap-[12px] items-center">
        <button
          className={`bg-[#F043541A] text-[#EF4353] flex items-center justify-center w-[32px] h-[32px] rounded-lg ${currentCard === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={handlePrev}
          disabled={currentCard === 0}
          aria-label="Previous testimony"
        >
          <ChevronLeft />
        </button>
        <button
          className={`bg-[#F043541A] text-[#EF4353] flex items-center justify-center w-[32px] h-[32px] rounded-lg ${currentCard === testimonies.length -3 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={handleNext}
          disabled={currentCard === testimonies.length -3}
          aria-label="Next testimony"
        >
          <ChevronRight />
        </button>
      </footer>
    </section>
  );
};

export default Testimonials;
