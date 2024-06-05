import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type MotionPage = {
    children: React.ReactNode
    className?:string
}

export function MotionPage({children, className}:MotionPage) {
  return (
    <motion.main
    className={cn(
      "h-full",
      className
    )}
    initial={{y:"-200vh", opacity:-1}}
    animate={{y:"0%", opacity:1}}
    transition={{duration:1}}
    >
      {children}
    </motion.main>
  )
}

