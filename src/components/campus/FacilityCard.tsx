import { motion, useReducedMotion } from "framer-motion";
import SmartImage from "@/components/media/SmartImage";
import { cn } from "@/lib/utils";
import type { CampusFacility } from "@/data/facilities";

type FacilityCardProps = {
  facility: CampusFacility;
  onOpen: () => void;
  onOpenPhoto?: () => void;
  delay?: number;
  featured?: boolean;
  className?: string;
};

const FacilityCard = ({
  facility,
  onOpen,
  onOpenPhoto,
  delay = 0,
  featured = false,
  className,
}: FacilityCardProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.li
      layout
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -5 }}
      className={cn(
        "group flex h-full min-h-0 flex-col overflow-hidden bg-paper shadow-[0_12px_40px_-28px_rgba(28,22,18,0.4)]",
        className
      )}
    >
      <div className="flex h-full min-h-0 flex-col">
        <button
          type="button"
          onClick={facility.image && onOpenPhoto ? onOpenPhoto : onOpen}
          aria-haspopup="dialog"
          className={cn(
            "relative overflow-hidden bg-stone",
            featured ? "aspect-[4/3] min-h-[14rem] lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-[4/3]"
          )}
        >
          <SmartImage
            src={facility.image}
            alt={facility.imageAlt}
            imgClassName="img-ken"
            placeholderLabel={facility.name}
          />
          <span className="absolute left-4 top-4 bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-paper">
            {facility.categoryLabel}
          </span>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="text-sm font-medium text-paper">
              {facility.image ? "View photograph" : "View details"}
            </span>
          </div>
        </button>
        <div className="flex flex-1 flex-col px-5 py-6">
          <h3
            className={cn(
              "font-display font-semibold tracking-tight",
              featured ? "text-3xl lg:text-4xl" : "text-2xl"
            )}
          >
            {facility.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
            {facility.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {facility.features.slice(0, featured ? 3 : 2).map((f) => (
              <li
                key={f}
                className="max-w-full truncate bg-stone px-2.5 py-1 text-[0.7rem] tracking-wide text-ink-soft"
              >
                {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onOpen}
            className="mt-5 self-start text-sm font-medium tracking-wide text-maroon underline-offset-[6px] hover:underline"
          >
            View details
          </button>
        </div>
      </div>
    </motion.li>
  );
};

export default FacilityCard;
