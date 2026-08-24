import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import NurseryIcon from "./NurseryIcon";

type ActivityCardProps = {
  title: string;
  feature: string;
  detail: string;
  tone: "peach" | "sky" | "lilac" | "leaf";
  icon: string;
  delay?: number;
};

const ActivityCard = ({ title, feature, detail, tone, icon, delay = 0 }: ActivityCardProps) => {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="h-full"
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-full w-full flex-col rounded-[1.5rem] border border-transparent p-6 text-left transition-shadow duration-300",
          "bg-paper shadow-[0_8px_30px_-18px_rgba(40,28,20,0.35)]",
          "hover:shadow-[0_16px_40px_-20px_rgba(40,28,20,0.4)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nursery-teal))] focus-visible:ring-offset-2"
        )}
      >
        <NurseryIcon name={icon} tone={tone} float />
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm font-medium text-ink-soft">{feature}</p>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          className="overflow-hidden"
        >
          <p className="pt-3 text-sm leading-relaxed text-ink-soft">{detail}</p>
        </motion.div>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nursery-teal))]">
          {open ? "Close" : "More"}
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        </span>
      </button>
    </motion.article>
  );
};

export default ActivityCard;
