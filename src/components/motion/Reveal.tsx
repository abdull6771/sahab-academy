import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const reduce = useReducedMotion();
  const components = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    li: motion.li,
  };
  const Comp = components[as];

  return (
    <Comp
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
