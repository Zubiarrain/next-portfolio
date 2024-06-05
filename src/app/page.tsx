"use client"

import Image from "next/image";
import { MotionPage } from "@/components/MotionPage";
import Link from "next/link";

export default function Home() {
  return (
    <MotionPage
    className=""
    >
      <div className="h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image 
        className="object-contain"
        src="/technological_build.png" 
        alt="hero image" 
        fill
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold">Building Solutions, Building the Future</h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">We work or study for at least a third of the day. I strongly believe that this should be done with great passion and enthusiasm to enjoy that part of our lives and truly be happy.
        </p>
        <span className="italic">
          Welcome to my personal page, the place to know me better.
        </span>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <Link href="/portfolio">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          </Link>
          <Link href="contact">
          <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
          </Link>
        </div>
      </div>
      </div>
    </MotionPage>
  );
}
