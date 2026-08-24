import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { applyHref } from "@/data/nav";
import type { StagePageData } from "@/data/stages";
import StagePhoto from "./StagePhoto";

type StageHeroProps = {
  data: StagePageData;
};

const StageHero = ({ data }: StageHeroProps) => {
  const reduce = useReducedMotion();
  const isSecondary = data.slug === "secondary";

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="relative isolate overflow-hidden bg-[hsl(var(--stage-hero))] text-paper"
    >
      <div className="absolute inset-0">
        <StagePhoto
          src={data.heroImage}
          alt={data.imageAlt}
          loading="eager"
          className="h-full w-full"
          imgClassName={isSecondary ? "scale-105 object-cover opacity-40" : "scale-105 object-cover opacity-50"}
        />
        <div className="absolute inset-0 bg-[hsl(var(--stage-hero))]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--stage-hero))] via-[hsl(var(--stage-hero))]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--stage-hero))] via-transparent to-[hsl(var(--stage-hero))]/40" />
      </div>

      <div className="container-site relative z-10 grid min-h-[88svh] items-end gap-10 pb-16 pt-36 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-40">
        <div className={isSecondary ? "lg:col-span-8" : "lg:col-span-7"}>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--stage-accent-2))]">
            {data.overline}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-[3.75rem]">
            {data.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75">{data.lede}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to={applyHref}
              className="inline-flex h-12 items-center justify-center bg-[hsl(var(--stage-accent))] px-8 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              style={{ borderRadius: "var(--stage-radius)" }}
            >
              Apply for {data.title}
            </Link>
            <a
              href="#overview"
              className="inline-flex h-12 items-center justify-center px-4 text-sm font-medium text-paper underline-offset-[6px] hover:underline"
            >
              Explore the section
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StageHero;
