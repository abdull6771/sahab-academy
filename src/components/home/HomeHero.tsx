import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { school } from "@/data/site";
import { applyHref } from "@/data/nav";

const HomeHero = () => {
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
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <motion.img
          src="/images/campus/main_building.jpg"
          alt="The main building of Sahab Academy in Babura"
          className="h-full w-full object-cover opacity-45"
          fetchPriority="high"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/55" />
      </div>

      <div className="container-site relative z-10 grid min-h-[100svh] items-end gap-10 pb-20 pt-36 md:items-center md:pb-24 md:pt-40 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p className="eyebrow text-brass-soft" {...fade(0.05)}>
            {school.locationShort}
          </motion.p>
          <motion.h1
            className="mt-5 max-w-4xl font-display text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.04em] text-paper sm:text-6xl lg:text-[4.4rem]"
            {...fade(0.12)}
          >
            Nursery, Primary
            <br />
            and Secondary
            <br />
            in Babura.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-paper/78 md:text-lg"
            {...fade(0.22)}
          >
            Sahab Academy is a respected local school — careful teaching, a calm
            campus, and a clear path from the first years through secondary study.
          </motion.p>
          <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" {...fade(0.32)}>
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link to={applyHref}>Apply now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-paper/35 bg-transparent text-paper hover:border-paper hover:bg-paper/10 hover:text-paper"
            >
              <a href="#pathways">View programmes</a>
            </Button>
          </motion.div>
          <motion.div className="mt-10 flex gap-2" aria-hidden {...fade(0.4)}>
            <span className="h-1 w-10 rounded-full bg-[hsl(var(--nursery-teal))]" />
            <span className="h-1 w-10 rounded-full bg-[hsl(156,28%,36%)]" />
            <span className="h-1 w-10 rounded-full bg-maroon" />
          </motion.div>

          <motion.div className="relative mt-10 aspect-[16/10] overflow-hidden border border-white/15 lg:hidden" {...fade(0.35)}>
            <img
              src="/images/students/aliyu.jpg"
              alt="A pupil of Sahab Academy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div className="hidden lg:col-span-5 lg:block" {...fade(0.28)}>
          <div className="relative ml-auto max-w-sm">
            <div className="aspect-[3/4] overflow-hidden border border-white/15">
              <img
                src="/images/students/aliyu.jpg"
                alt="A pupil of Sahab Academy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-8 hidden w-36 overflow-hidden border-[4px] border-ink md:block">
              <img
                src="/images/campus/playground.jpg"
                alt="Playing ground at Sahab Academy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <p className="mt-8 text-xs tracking-wide text-paper/55">
              School life on the Babura campus
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#trust"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.65rem] uppercase tracking-[0.22em] text-paper/50 md:flex"
        animate={reduce ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <ChevronDown className="h-4 w-4" aria-hidden />
      </motion.a>
    </section>
  );
};

export default HomeHero;
