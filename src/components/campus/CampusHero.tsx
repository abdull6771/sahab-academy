import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

const collage = [
  { src: "/images/campus/library.jpg", alt: "The school library at Sahab Academy", className: "col-span-2 aspect-[16/9]" },
  { src: "/images/campus/classrooms.jpg", alt: "A classroom at Sahab Academy", className: "aspect-[4/3]" },
  { src: "/images/campus/science_lab.jpg", alt: "Science laboratory at Sahab Academy", className: "aspect-[4/3]" },
  { src: "/images/campus/playground.jpg", alt: "Playing ground at Sahab Academy", className: "col-span-2 aspect-[16/10]" },
];

const CampusHero = () => {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <motion.img
          src="/images/campus/main_building.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      <div className="container-site relative z-10 grid items-end gap-10 pb-16 pt-36 md:items-center md:pb-20 md:pt-40 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.p className="eyebrow text-brass-soft" {...fade(0.05)}>
            Facilities
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            {...fade(0.12)}
          >
            A campus prepared for careful teaching.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75"
            {...fade(0.22)}
          >
            Classrooms, a library, a science laboratory, and a playing ground on
            one site in Babura — serving nursery, primary, and secondary together.
          </motion.p>
          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" {...fade(0.32)}>
            <Button asChild size="lg" variant="light" className="transition-transform duration-300 hover:scale-105">
              <a href="#facilities">Explore our facilities</a>
            </Button>
            <Button asChild size="lg" variant="ghost-light" className="underline-offset-[6px] hover:underline">
              <a href="#gallery">Open the gallery</a>
            </Button>
          </motion.div>
        </div>

        <motion.div className="lg:col-span-6" {...fade(0.28)}>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {collage.map((img) => (
              <div key={img.src} className={`overflow-hidden border border-white/15 ${img.className}`}>
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusHero;
