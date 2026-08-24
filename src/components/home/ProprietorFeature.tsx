import { Link } from "react-router-dom";
import Reveal from "@/components/motion/Reveal";
import { proprietorQuote } from "@/data/copy";
import { school } from "@/data/site";

const ProprietorFeature = () => {
  return (
    <section className="section-y bg-ink text-paper">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={school.proprietor.image}
                alt={`${school.proprietor.name}, ${school.proprietor.title} of Sahab Academy`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm text-paper/60">
              {school.proprietor.name}
              <span className="mx-2 text-brass-soft">·</span>
              {school.proprietor.title}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="eyebrow text-brass-soft">From the proprietor</p>
          <span className="mt-4 block h-px w-16 bg-brass/50" aria-hidden />
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            A message from {school.proprietor.name}
          </h2>
          <blockquote className="mt-8 max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-paper/90 md:text-2xl">
            “{proprietorQuote.excerpt}”
          </blockquote>
          <Link
            to="/about#leadership"
            className="mt-8 inline-flex text-sm font-medium tracking-wide text-brass-soft underline-offset-[6px] hover:text-paper hover:underline"
          >
            Read the full message
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ProprietorFeature;
