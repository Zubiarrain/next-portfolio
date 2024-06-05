import { MotionValue, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const items = [
{
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "AutoSoft",
    desc: "Software for information management aimed at medium and large vehicle agencies. It allows managing inventory, personnel, customer tracking, and accounting.",
    img: "/projects/concesionaria.png",
    link: "https://lama.dev",
},
{
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Construction Inspection",
    desc: "Software for data and document management aimed at inspecting Argentina's largest construction project.",
    img: "/projects/ido.png",
    link: "https://lama.dev",
},
{
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Concrete Strength Prediction",
    desc: "Prediction of concrete strength based on its composition.",
    img: "/projects/randomforest.png",
    link: "https://lama.dev",
},
{
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "University Final Project",
    desc: "Desktop application for creating reservoir models.",
    img: "/projects/finalproject.jpeg",
    link: "https://lama.dev",
},
];

type ProjectsT = {
    x: MotionValue<string>
}

export const Projects = ({x}: ProjectsT) => {
    return (
        <div className="sticky top-0 flex h-screen gap-8 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-3xl lg:text-4xl font-bold ">
                    {item.title}
                  </h1>
                  <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <div className="relative 
                                    w-80 h-80
                                    lg:w-[600px] xl:h-[300px]">
                      <Image src={item.img} alt="" fill className="rounded-md object-contain"/>
                    </div>
                    <p className="w-80 lg:w-[600px] lg:text-xl">
                      {item.desc}
                    </p>
                  </div>
                  {/* <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm lg:text-xl  bg-white text-gray-600 font-semibold m-2 rounded">See Demo</button>
                  </Link> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
    )
}