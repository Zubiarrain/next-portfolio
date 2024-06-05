"use client"

import { MotionPage } from "@/components/MotionPage";
import { CallToAction } from "@/components/portfolio/CallToAction";
import { Projects } from "@/components/portfolio/Projects";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PortfolioPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <MotionPage >
      <div className="h-[calc(600vh-6rem)] relative" ref={ref}>
        <div className="h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <Projects x={x}/>
      </div>
      <CallToAction/>
    </MotionPage>
  );
};

export default PortfolioPage;