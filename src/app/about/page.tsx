"use client"

import { MotionPage } from "@/components/MotionPage";
import { Biography } from "@/components/about/Biography";
import { Experience } from "@/components/about/Experience";
import { Skills } from "@/components/about/Skills";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {

  const skillRef = useRef(null);
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <MotionPage
    >
      {/* CONTAINER */}
      <div className="h-full lg:flex justify-center">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-36 xl:pt-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0">

          <Biography/>
          <Skills  skillRef={skillRef} isSkillRefInView={isSkillRefInView}/>
          <Experience experienceRef={experienceRef} isExperienceRefInView={isExperienceRefInView} />
          
        </div>
      </div>
    </MotionPage>
  );
};

export default AboutPage;