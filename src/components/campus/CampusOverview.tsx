import { useRef } from "react";
import { useInView } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { facilityStats } from "@/data/facilities";
import { story } from "@/data/copy";

const CampusOverview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section id="overview" className="section-y bg-background">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">Learning environment</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            One campus in Babura.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{story.place}</p>
          <p className="mt-4 leading-relaxed text-ink-soft">{story.continuity}</p>
        </Reveal>
        <div ref={ref} className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border lg:col-span-6">
          {facilityStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-paper px-5 py-8 md:px-7">
              <p className="font-display text-4xl font-semibold tracking-tight text-maroon">
                <CountUp value={s.value} active={inView} />
              </p>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusOverview;
