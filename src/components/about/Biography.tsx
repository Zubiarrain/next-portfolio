"use client"

import Image from "next/image"
import { SignSvg } from "./SignSvg"
import { ScrollSvg } from "./ScrollSvg"

import { NameAnimation } from "./NameAnimation"

export function Biography() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <div className="md:min-w-80">
            {/* BIOGRAPHY IMAGE */}
            <Image
            src="/biography_wb.png"
            alt=""
            width={250}
            height={250}
            className="w-40 h-w-40 md:w-80 md:h-80 rounded-3xl object-contain"
            />
        </div>
        <div className="flex flex-col gap-6 justify-center">
            {/* BIOGRAPHY TITLE */}
            <NameAnimation/>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            I seek to be in constant learning and push new knowledge to the limit by applying it to ambitious projects. Do this provides me with new tools to achieve my personal mision: <span className="italic font-medium">create the best solutions, grow personally, and empower others to grow.</span>
            </p>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <SignSvg/>
            </div>
        </div>
    
    </div>
    <ScrollSvg/>
    </div>
  )
}
