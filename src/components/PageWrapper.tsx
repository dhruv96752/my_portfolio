import { motion } from "motion/react";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1], // Apple-style fluid expo easeOut curve
      }}
      className="w-full min-h-[calc(100vh-140px)] flex flex-col justify-start"
    >
      {children}
    </motion.div>
  );
}
