import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { StageStep } from "@/data/stages";

type StageJourneyProps = {
  steps: StageStep[];
  label: string;
};

const StageJourney = ({ steps, label }: StageJourneyProps) => {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  if (!steps.length) {
    return (
      <p className="border border-border bg-paper px-6 py-10 text-center text-ink-soft" style={{ borderRadius: "var(--stage-radius)" }}>
        Progression notes will appear here when the office publishes them.
      </p>
    );
  }

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div>
      <div
        className="h-1.5 overflow-hidden bg-[hsl(var(--stage-soft))]"
        style={{ borderRadius: "var(--stage-radius)" }}
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={active + 1}
        aria-label={`${label}, step ${active + 1} of ${steps.length}`}
      >
        <motion.div
          className="h-full bg-[hsl(var(--stage-accent))]"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={reduce ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const selected = i === active;
          return (
            <li key={step.n}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "h-full w-full px-5 py-5 text-left transition-colors duration-300",
                  selected
                    ? "bg-[hsl(var(--stage-accent))] text-paper"
                    : "bg-paper text-ink hover:bg-[hsl(var(--stage-soft))]"
                )}
                style={{ borderRadius: "var(--stage-radius)" }}
                aria-current={selected ? "step" : undefined}
              >
                <span
                  className={cn(
                    "font-display text-sm tracking-wide",
                    selected ? "text-paper/70" : "text-[hsl(var(--stage-accent))]"
                  )}
                >
                  {step.n}
                </span>
                <span className="mt-2 block font-display text-xl font-semibold tracking-tight">
                  {step.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <motion.p
        key={active}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
      >
        {steps[active].text}
      </motion.p>
    </div>
  );
};

export default StageJourney;
