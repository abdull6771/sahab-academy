import Reveal from "@/components/motion/Reveal";
import { facilityWhy } from "@/data/facilities";

const CampusWhy = () => {
  return (
    <section className="section-y bg-background">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why it matters</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            How the campus supports learning.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            The rooms and grounds exist so children can learn calmly, grow in
            character, and take part in a full school day.
          </p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {facilityWhy.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.07} as="li">
                <article className="h-full border border-border bg-paper p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="inline-flex h-11 w-11 items-center justify-center bg-stone text-maroon">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CampusWhy;
