import { Link } from "react-router-dom";
import { BookOpen, Compass, HeartHandshake, Shield, Sparkles, Users } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { values } from "@/data/copy";

const icons = [Sparkles, HeartHandshake, Shield, BookOpen, Users, Compass];

const HomeFeatures = () => {
  return (
    <section className="section-y bg-background">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            What families can expect.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            These are the habits of the school — the same values on our story
            page — kept in sight from nursery through secondary.
          </p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={v.title} delay={i * 0.05} as="li">
                <article className="group h-full border border-border bg-paper p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-maroon/25 hover:shadow-[0_16px_40px_-28px_rgba(28,22,18,0.4)]">
                  <div className="inline-flex h-11 w-11 items-center justify-center bg-stone text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-maroon-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
        <Reveal>
          <Link
            to="/about#vision"
            className="mt-10 inline-flex text-sm font-medium text-maroon underline-offset-[6px] hover:underline"
          >
            Vision, mission, and the full story
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeFeatures;
