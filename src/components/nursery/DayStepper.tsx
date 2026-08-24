import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Step = {
  n: string;
  title: string;
  text: string;
};

type DayStepperProps = {
  steps: Step[];
};

const DayStepper = ({ steps }: DayStepperProps) => {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  if (!steps.length) {
    return (
      <p className="rounded-[1.5rem] bg-paper px-6 py-10 text-center text-ink-soft">
        A typical nursery day will be described here when the office publishes it.
      </p>
    );
  }

  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div>
      <div
        className="h-2 overflow-hidden rounded-full bg-[hsl(var(--nursery-sky))]"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={active + 1}
        aria-label={`Nursery day step ${active + 1} of ${steps.length}`}
      >
        <motion.div
          className="h-full rounded-full bg-[hsl(var(--nursery-teal))]"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={reduce ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <ol className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {steps.map((step, i) => {
          const selected = i === active;
          return (
            <li key={step.n}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "h-full w-full rounded-[1.25rem] px-4 py-4 text-left transition-colors duration-300",
                  selected
                    ? "bg-[hsl(var(--nursery-teal))] text-paper"
                    : "bg-paper text-ink hover:bg-[hsl(var(--nursery-sun))]"
                )}
                aria-current={selected ? "step" : undefined}
              >
                <span className={cn("font-display text-2xl", selected ? "text-paper" : "text-[hsl(var(--nursery-teal))]")}>
                  {step.n}
                </span>
                <span className="mt-1 block font-display text-lg font-semibold tracking-tight">
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

export default DayStepper;
