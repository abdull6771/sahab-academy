import { useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SmartImage from "@/components/media/SmartImage";
import { useLockBody } from "@/hooks/use-lock-body";
import type { CampusFacility } from "@/data/facilities";

type FacilityLightboxProps = {
  items: CampusFacility[];
  index: number | null;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
};

const FacilityLightbox = ({ items, index, onClose, onStep }: FacilityLightboxProps) => {
  const reduce = useReducedMotion();
  const current = index !== null ? items[index] : undefined;
  const open = Boolean(current);

  useLockBody(open);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    },
    [open, onClose, onStep]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="facility-lightbox-title"
          onClick={onClose}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-paper transition-opacity hover:opacity-80"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-paper md:left-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onStep(-1);
                }}
                aria-label="Previous photograph"
              >
                <ChevronLeft className="h-9 w-9" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-paper md:right-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onStep(1);
                }}
                aria-label="Next photograph"
              >
                <ChevronRight className="h-9 w-9" />
              </button>
            </>
          )}
          <motion.figure
            className="max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto aspect-[4/3] overflow-hidden bg-maroon-deep">
              <SmartImage
                src={current.image}
                alt={current.imageAlt}
                loading="eager"
                imgClassName="h-full w-full object-cover"
                placeholderLabel={current.name}
              />
            </div>
            <figcaption id="facility-lightbox-title" className="mt-4 text-center text-paper">
              <span className="font-display text-xl">{current.name}</span>
              <span className="mt-1 block text-sm text-paper/65">{current.categoryLabel}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FacilityLightbox;
