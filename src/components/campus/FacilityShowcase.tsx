import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  campusFacilities,
  facilityCategories,
  facilityMosaicSpan,
  photographedFacilities,
  type FacilityCategoryId,
} from "@/data/facilities";
import FacilityCard from "./FacilityCard";
import FacilityDetail from "./FacilityDetail";
import FacilityLightbox from "./FacilityLightbox";

const FacilityShowcase = () => {
  const [category, setCategory] = useState<FacilityCategoryId>("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const selected = campusFacilities.find((f) => f.id === openId) ?? null;
  const mosaic = category === "all" && !query.trim();

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return campusFacilities.filter((f) => {
      const matchCat = category === "all" || f.category === category;
      const hay = `${f.name} ${f.description} ${f.categoryLabel} ${f.features.join(" ")}`.toLowerCase();
      return matchCat && (!q || hay.includes(q));
    });
  }, [category, query]);

  const openPhoto = (id: string) => {
    const i = photographedFacilities.findIndex((f) => f.id === id);
    if (i >= 0) setPhotoIndex(i);
  };

  return (
    <section id="facilities" className="section-y bg-stone">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Facilities</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Classrooms, library, laboratory, and grounds.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            The learning environment on the Babura campus — rooms for teaching,
            a library, a science laboratory, a computer lab, and a playing ground.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
            role="group"
            aria-label="Facility categories"
          >
            {facilityCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={category === c.id}
                onClick={() => setCategory(c.id)}
                className={cn(
                  "shrink-0 rounded-sm px-4 py-2 text-sm tracking-wide transition-colors duration-300",
                  category === c.id
                    ? "bg-ink text-paper"
                    : "bg-paper text-ink-soft hover:bg-sand"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="w-full lg:max-w-xs">
            <Label htmlFor="facility-search" className="sr-only">
              Search facilities
            </Label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                id="facility-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search rooms and grounds"
                className="h-11 rounded-sm bg-paper pl-9"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
          {items.length === campusFacilities.length
            ? `${items.length} spaces`
            : `${items.length} of ${campusFacilities.length} spaces`}
        </p>

        {items.length === 0 ? (
          <div className="mt-8 border border-dashed border-border bg-paper px-6 py-16 text-center">
            <p className="font-display text-2xl font-semibold tracking-tight">No match</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
              Nothing in this list matches that search. Try another category, or
              clear the field.
            </p>
            <button
              type="button"
              className="mt-6 text-sm font-medium text-maroon underline-offset-[6px] hover:underline"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <ul
            className={cn(
              "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2",
              mosaic ? "lg:grid-cols-4 lg:auto-rows-[minmax(12.5rem,auto)]" : "xl:grid-cols-3"
            )}
          >
            <AnimatePresence mode="popLayout">
              {items.map((facility, i) => (
                <FacilityCard
                  key={facility.id}
                  facility={facility}
                  delay={i * 0.04}
                  featured={mosaic && facility.id === "classrooms"}
                  className={mosaic ? facilityMosaicSpan[facility.id] : undefined}
                  onOpen={() => setOpenId(facility.id)}
                  onOpenPhoto={facility.image ? () => openPhoto(facility.id) : undefined}
                />
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>

      <FacilityDetail
        facility={selected}
        onClose={() => setOpenId(null)}
        onOpenPhoto={
          selected?.image
            ? () => {
                openPhoto(selected.id);
                setOpenId(null);
              }
            : undefined
        }
      />
      <FacilityLightbox
        items={photographedFacilities}
        index={photoIndex}
        onClose={() => setPhotoIndex(null)}
        onStep={(dir) =>
          setPhotoIndex((i) => {
            if (i === null) return i;
            return (i + dir + photographedFacilities.length) % photographedFacilities.length;
          })
        }
      />
    </section>
  );
};

export default FacilityShowcase;
