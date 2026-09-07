import CorporateTraining from "@/components/CorporateTraining";
import DevelopmentProgram from "@/components/DevelopmentProgram";
import LearningWithCEO from "@/components/LearningWithCEO";
import ManagementSystem from "@/components/ManagementSystem";
import Testimonials from "@/components/Testimonials";
import TrainingConsultant from "@/components/TrainingConsultant";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
   <div className="bg-[#F9F9F9]">
    <WhatWeDo/>
    <ManagementSystem/>
    <CorporateTraining/>
    <DevelopmentProgram/>
    <LearningWithCEO/>
    <TrainingConsultant/>
    <Testimonials/>
   </div>
  );
}
