import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion";
import Link from "next/link";
import { LiaMousePointerSolid } from "react-icons/lia";

type LifeTimeExperienceT = {
    side: "left" | "right",
    title:string,
    company:string,
    description:string[],
    importantLinks?:{name:string, link:string}[] | undefined,
    period:string,
    skills:string[]
}

export const LifeTimeExperience = (
    {side,title, company, description,importantLinks, period, skills}: LifeTimeExperienceT
) => {

    const experience = () => (
        <>
        {/* JOB TITLE */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
            {title}
        </div>
        {/* JOB DESC */}
        <div className="p-3 text-sm italic">
            {description.map((des, index) => (
                <li key={index}>{des}</li>
            ))}
        </div>
        {/* JOB important links */}
        <div className="mb-2">
            {importantLinks?.map((importantLink, index) => (
                <a 
                key={index} 
                target="_blank"
                href={importantLink.link}
                className="bg-orange-400 text-gray-50 rounded-md p-1 mb-5"
                >
                    {importantLink.name}
                </a>
            ))}
        </div>
        {/* JOB skills */}
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <div className="w-fit flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 p-1 rounded-md text-gray-50">
                    <div>Skills used</div>
                    <motion.div
                    initial={{opacity:0.5}}
                    animate={{opacity:1}}
                    transition={{ repeat: Infinity, duration: 5}}
                    >

                    <LiaMousePointerSolid/>
                    </motion.div>
                </div>
                </TooltipTrigger>
                <TooltipContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-blue-500 p-1 rounded-md text-gray-50">
                            {skill}
                        </div>
                    ))}
                </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        {/* JOB DATE */}
        <div className="p-3 text-blue-500 text-sm font-semibold">
            {period}
        </div>
        {/* JOB COMPANY */}
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
            {company}
        </div>
        </>
    )
    return (
        <div className="flex justify-between">
            {/* LEFT */}
            <div className="w-5/12 ">
                {side === "left" && experience()}
            </div>

            {/* CENTER */}
            <div className="w-2/12 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-500 bg-white -left-2"></div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-5/12 ">
                {side === "right" && experience()}
            </div>
        </div>
    )
}