import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Monogram from "./Monogram";

type WordmarkProps = {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

const Wordmark = ({ inverted = false, compact = false, className }: WordmarkProps) => {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-3 rounded-sm focus-visible:outline-none",
        className
      )}
      aria-label="Sahab Academy home"
    >
      <Monogram inverted={inverted} className={compact ? "h-8 w-8" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] font-semibold tracking-[-0.03em] sm:text-[1.25rem]",
            inverted ? "text-paper" : "text-ink"
          )}
        >
          Sahab
        </span>
        <span
          className={cn(
            "mt-0.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
            inverted ? "text-brass-soft" : "text-brass"
          )}
        >
          Academy
        </span>
      </span>
    </Link>
  );
};

export default Wordmark;
