import { ArrowUpRight } from "lucide-react";
import React from "react";

const TrainingConsultant = () => {
  return (
    <section className="bg-[#C4C4C44D]">
      <section className="bg-[#5712441A] py-[64px] px-[48px]">
        <header>
          <h1 className="text-[#571244] font-semibold text-[40px]">
            Training The Consultant
          </h1>
          <small className="text-[#571244] font-semibold text-lg mt-1">
            Maximise Your Potential as a Certified Trainer:
          </small>
          <p className="text-[#151515] font-normal text-lg mt-3.5">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>
        </header>

        <main className="bg-[#571244] rounded-lg p-6 grid grid-cols-2 gap-[20px] mt-[20px]">
          <TextCard
            title="Expert-Led Learning"
            desc="Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
          />
          <TextCard
            title="Interactive Workshops"
            desc="Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
          />
          <TextCard
            title="Comprehensive Curriculum"
            desc="Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
          />
          <TextCard
            title="Global Recognition"
            desc="You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
          />
        </main>

        <button className="bg-[#571244] text-[#FFFFFF] py-[10.5px] px-[24px] flex items-center gap-[8px] font-semibold text-lg rounded-[4px] mt-[60px]">
          Learn More <ArrowUpRight strokeWidth={2} />
        </button>
      </section>

      <div className="py-[60px]">
        <section className="max-w-[1134px] mx-auto bg-[#571244] py-[32px] px-[64px] rounded-lg flex flex-col items-center gap-[32px] text-center">
          <p className="text-[#FFFFFF] text-xl font-semibold">
            Want to accelerate professional growth and development at your
            organisation?
            <br />
            See how we can help.
          </p>
          <button className="bg-[#FFFFFF] border border-[#571244] py-[12px] px-[24px] text-[#571244] font-semibold text-lg rounded-[4px]">
            Book a Consultation
          </button>
        </section>
      </div>
    </section>
  );
};

export default TrainingConsultant;

function TextCard({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="flex flex-col gap-[12px]">
      <h1 className="text-[#FFFFFF] font-bold text-lg">{title}</h1>
      <p className="text-[#FFFFFF] font-normal text-lg">{desc}</p>
    </section>
  );
}
