import { useRef } from "react";
import { useInView } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { alumniStats } from "@/data/alumni";

const TrustStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="trust" ref={ref} className="border-y border-border bg-paper-deep">
      <div className="container-site grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        <Reveal className="px-6 py-10 lg:px-8">
          <p className="font-display text-4xl font-semibold tracking-tight text-maroon">
            <CountUp value={3} active={inView} />
          </p>
          <p className="mt-2 text-sm text-ink-soft">Sections · Nursery, Primary, Secondary</p>
        </Reveal>
        <Reveal delay={0.06} className="px-6 py-10 lg:px-8">
          <p className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
            Babura, Jigawa
          </p>
          <p className="mt-2 text-sm text-ink-soft">A school of this community</p>
        </Reveal>
        <Reveal delay={0.12} className="px-6 py-10 lg:px-8">
          <p className="font-display text-4xl font-semibold tracking-tight text-maroon">
            <CountUp value={alumniStats.listed} active={inView} />
          </p>
          <p className="mt-2 text-sm text-ink-soft">Alumni listed on this site</p>
        </Reveal>
        <Reveal delay={0.18} className="px-6 py-10 lg:px-8">
          <p className="font-display text-4xl font-semibold tracking-tight text-maroon">
            <CountUp value={alumniStats.institutions} active={inView} />
          </p>
          <p className="mt-2 text-sm text-ink-soft">Nigerian institutions they entered</p>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustStrip;
