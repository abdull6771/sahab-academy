import { cn } from "@/lib/utils";

type BrandedPlaceholderProps = {
  label?: string;
  className?: string;
};

const BrandedPlaceholder = ({
  label = "Sahab Academy",
  className,
}: BrandedPlaceholderProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-maroon-deep",
        className
      )}
      aria-hidden={label ? undefined : true}
      role="img"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-3 border border-brass/40" />
      <div className="relative px-6 text-center">
        <p className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          Sahab
        </p>
        <p className="mt-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-brass-soft">
          Academy
        </p>
        {label && label !== "Sahab Academy" && (
          <p className="mt-4 max-w-[16rem] font-sans text-xs text-paper/70">{label}</p>
        )}
      </div>
    </div>
  );
};

export default BrandedPlaceholder;
