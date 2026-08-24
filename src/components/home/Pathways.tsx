import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { academics } from "@/data/academics";

const accents: Record<string, string> = {
  nursery: "bg-[hsl(var(--nursery-teal))]",
  primary: "bg-[hsl(156,28%,28%)]",
  secondary: "bg-maroon",
};

const radii: Record<string, string> = {
  nursery: "1.5rem",
  primary: "1rem",
  secondary: "0.25rem",
};

const Pathways = () => {
  const reduce = useReducedMotion();

  return (
    <section id="pathways" className="section-y bg-stone">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Academics</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Three pathways, one school.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Families stay with us from the first years through secondary. Each
            section has its own rooms, rhythm, and teachers — and its own page.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {academics.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link to={`/academics/${s.slug}`} className="group block h-full">
                <motion.article
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col overflow-hidden bg-paper shadow-[0_10px_40px_-24px_rgba(28,22,18,0.35)]"
                  style={{ borderRadius: radii[s.slug] }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className="img-ken h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-paper">
                      {s.overline}
                    </span>
                    <span className={`absolute inset-x-0 bottom-0 h-1.5 ${accents[s.slug]}`} />
                  </div>
                  <div className="flex flex-1 flex-col px-6 py-7">
                    <h3 className="font-display text-3xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {s.description}
                    </p>
                    <span className="mt-6 text-sm font-medium tracking-wide text-maroon underline-offset-[6px] group-hover:underline">
                      View {s.title.toLowerCase()}
                    </span>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pathways;
