import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SmartImage from "@/components/media/SmartImage";
import {
  galleryFilters,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";

type Filter = "all" | GalleryCategory;

const CampusGallery = () => {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((i) => i.category === filter);
  }, [filter]);

  useLockBody(active !== null);

  const close = useCallback(() => setActive(null), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((i) => {
        if (i === null) return i;
        return (i + dir + items.length) % items.length;
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  useEffect(() => {
    setActive(null);
  }, [filter]);

  const current = active !== null ? items[active] : undefined;

  return (
    <section id="gallery" className="section-y bg-paper-deep">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A visual record of school life.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Photographs of the campus, pupils, prefects, and the rooms they use.
          </p>
        </Reveal>

        <div
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
          role="group"
          aria-label="Gallery filters"
        >
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "shrink-0 rounded-sm px-4 py-2 text-sm tracking-wide transition-colors duration-300",
                filter === f.id
                  ? "bg-ink text-paper"
                  : "bg-paper text-ink-soft hover:bg-sand"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <GalleryCard key={item.id} item={item} onOpen={() => setActive(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            onClick={close}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-paper transition-opacity hover:opacity-80"
              onClick={close}
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-paper md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <figure
              className="max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "mx-auto overflow-hidden bg-maroon-deep",
                  current.aspect === "portrait" ? "max-h-[70vh] max-w-md" : "aspect-[4/3]"
                )}
              >
                <SmartImage
                  src={current.src}
                  alt={current.caption}
                  loading="eager"
                  imgClassName="max-h-[70vh] w-full object-contain"
                  placeholderLabel={current.title}
                />
              </div>
              <figcaption id="lightbox-title" className="mt-4 text-center text-paper">
                <span className="font-display text-xl">{current.title}</span>
                <span className="mt-1 block text-sm text-paper/65">{current.caption}</span>
              </figcaption>
            </figure>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-paper md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GalleryCard = ({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) => (
  <button
    type="button"
    onClick={onOpen}
    className="group w-full overflow-hidden bg-paper text-left transition-transform duration-300 hover:-translate-y-1"
  >
    <div className={item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}>
      <SmartImage
        src={item.src}
        alt={item.caption}
        imgClassName="img-ken"
        placeholderLabel={item.title}
      />
    </div>
    <div className="px-4 py-4">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brass">
        {item.category}
      </p>
      <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">{item.title}</h3>
    </div>
  </button>
);

export default CampusGallery;
