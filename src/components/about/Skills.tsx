"use client"
import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MutableRefObject } from "react"
import { ScrollSvg } from "./ScrollSvg"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

type Skills = {
    skillRef:MutableRefObject<null>,
    isSkillRefInView: boolean
}

const skills = ["Python","Django", "Django Rest Framework", "Celery", "PostgreSQL", "Jupyter Notebooks","JavaScript", "TypeScript", "Tailwind", "React.js", "Next.js", "Vite", "Git", "Github"]

export const Skills = ({skillRef, isSkillRefInView}:Skills) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

    return (
        <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ opacity:0 }}
              animate={isSkillRefInView ? { opacity:1 } : {}}
              transition={{ duration:1 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ opacity:0 }}
              animate={isSkillRefInView ? { opacity:1 } : {}}
              transition={{ duration:1 }}
              className="flex gap-4 flex-wrap mb-10"
            >
            {skills.map((skill, index) => (
                <div key={index} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    {skill}
                </div>
            ))}
            </motion.div>
            <div>
              <div className="flex w-full  justify-center items-center">
              <Carousel setApi={setApi} className="
                                                  w-[17rem] h-[13rem] 
                                                  md:w-[30rem] md:h-[20rem]">
                <CarouselContent>
                  <CarouselItem 
                    className="
                    w-[17rem] h-[13rem] 
                    md:w-[30rem] md:h-[20rem]
                    flex justify-center items-center
                    ">
                        <Image
                        src={`/diplomas/civil.png`}
                        alt='diploma'
                        height={500}
                        width={500}
                        className="object-contain w-[17rem] h-[13rem] 
                        md:w-[30rem] md:h-[20rem]"
                        />
                  </CarouselItem>
                  <CarouselItem 
                    className="
                    w-[17rem] h-[13rem] 
                    md:w-[30rem] md:h-[20rem]
                    flex justify-center items-center
                    ">
                        <Image
                        src={`/diplomas/hidraulico.png`}
                        alt='diploma'
                        height={500}
                        width={500}
                        className="object-contain w-[17rem] h-[13rem] 
                        md:w-[30rem] md:h-[20rem]"
                        />
                  </CarouselItem>

                  {Array.from({ length: 37 }).map((_, index) => (
                      <CarouselItem 
                      key={index} 
                      className="
                      w-[17rem] h-[13rem] 
                      md:w-[30rem] md:h-[20rem]
                      flex justify-center items-center
                      ">
                          <Image
                          src={`/diplomas/${index+1}.jpg`}
                          alt='diploma'
                          height={500}
                          width={500}
                          className="object-contain w-[17rem] h-[13rem] 
                          md:w-[30rem] md:h-[20rem]"
                          />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext />
              </Carousel>
            </div>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </div>

            <ScrollSvg/>
        </div>
    )
}
