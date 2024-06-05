"use client"

import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Navbar"
import { usePathname } from "next/navigation"

type TransitionProvider = {
    children: React.ReactNode
}



const TransitionProvider = ({children}:TransitionProvider) => {
    const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
        <div key={pathName} 
        className="bg-gradient-to-b from-gray-50 to-blue-200 text-black">
            <motion.div
            className="h-full w-full fixed bg-black rounded-b-[100px] z-40"
            animate={{ height: "0vh"}}
            exit={{ height: "140vh", transitionEnd:{display:"none"} }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transitionEnd:{display:"none"} }}
            exit={{ opacity: 0, transitionEnd:{display:"none"} }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {pathName == '/'
              ? "home"
              : pathName.substring(1)
            }
            </motion.div>
            <motion.div
            className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh", transition: { delay: 0.5 } }}
            exit={{ transitionEnd:{display:"none"} }}
            />
            <div className="h-24">
              <Navbar />
            </div>
              <div className="">{children}</div>
            </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
