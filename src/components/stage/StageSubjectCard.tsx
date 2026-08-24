import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StageSubject } from "@/data/stages";

type StageSubjectCardProps = StageSubject & { delay?: number };

const StageSubjectCard = ({ title, text, delay = 0 }: StageSubjectCardProps) => {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -3 }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="h-full w-full border border-border bg-paper p-6 text-left transition-shadow duration-300 hover:shadow-[0_12px_36px_-22px_rgba(28,22,18,0.35)]"
        style={{ borderRadius: "var(--stage-radius)" }}
      >
        <h3 className="font-display text-2xl font-semibold tracking-tight">{title}</h3>
        {open ? (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{text}</p>
        ) : (
          <p className="mt-3 line-clamp-2 text-sm text-ink-soft">{text}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--stage-accent))]">
          {open ? "Close" : "Read"}
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        </span>
      </button>
    </motion.article>
  );
};

export default StageSubjectCard;
