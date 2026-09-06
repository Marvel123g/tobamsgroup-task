import React from "react";

const CorporateTraining = () => {
  return (
    <section className="bg-[#FFFFFF] p-[60px] grid grid-cols-2 gap-x-[64px] gap-y-[120px]">
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

      <img src="/Images/TR1.jpg" alt="Corporate Trainings " className="max-w-[602px] rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]" />

      <img src="/Images/TR2.jpg" alt="Personalised Individual Training" className="max-w-[602px] rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]" />

      <Card
        title="Personalised Individual Training"
        description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
        benefit={[
          "Leadership Development",
          "Soft Skills Development",
          "Industry Specific Knowledge",
          "Technical Skills Enhancement",
          "Time Management and Productivity",
          "Career Development"
        ]}
      />


      <Card
        title="Capacity Development"
        description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
        benefit={[
          "Tailored Training Programs",
          "Expert-Led Workshops",
          "Personalized Mentorship",
          "Technical Skills Enhancement",
          "Collaborative Learning Environment",
          "Ongoing Support and Resources"
        ]}
      />

      <img src="/Images/TR3.jpg" alt="Capacity Development" className="max-w-[602px] rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]" />

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
    <section className="max-w-[646px] flex flex-col gap-4">
      <h1 className="text-[#151515] font-semibold text-[38px]">{title}</h1>
      <p className="text-[#696969] text-lg font-normal">{description}</p>

      <ul className="px-[20px] flex flex-col gap-[10px]">
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
