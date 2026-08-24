import { Link } from "react-router-dom";
import Seo from "@/components/layout/Seo";
import Reveal from "@/components/motion/Reveal";
import { mission, proprietorQuote, story, values, vision } from "@/data/copy";
import { school } from "@/data/site";
import { academics } from "@/data/academics";
import { applyHref } from "@/data/nav";

const chapters = [
  { href: "#story", label: "The story" },
  { href: "#place", label: "This place" },
  { href: "#vision", label: "Vision" },
  { href: "#leadership", label: "Leadership" },
];

const About = () => {
  return (
    <>
      <Seo
        title="Our Story | Sahab Academy, Babura"
        description="How Sahab Academy serves children in Babura Local Government, Jigawa State — nursery, primary, and secondary under one trusted name."
      />

      <section
        id="story"
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-paper"
      >
        <img
          src="/images/campus/entrance.jpg"
          alt="Entrance to Sahab Academy in Babura"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

        <div className="container-site relative z-10 grid w-full gap-10 pb-16 pt-36 lg:grid-cols-12 lg:pb-20 lg:pt-40">
          <div className="lg:col-span-8">
            <p className="eyebrow text-brass-soft">Our story</p>
            <h1 className="mt-5 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.04em] text-paper sm:text-6xl lg:text-[4.4rem]">
              Built for the children
              <br />
              of this place.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper/75">{story.lead}</p>
          </div>
          <nav
            aria-label="On this page"
            className="flex flex-wrap content-end gap-x-6 gap-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-paper/55 lg:col-span-4 lg:justify-end"
          >
            {chapters.map((c) => (
              <a key={c.href} href={c.href} className="hover:text-paper">
                {c.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <nav
        aria-label="Story chapters"
        className="sticky top-[var(--header-offset)] z-40 border-b border-border bg-paper/90 backdrop-blur-md"
      >
        <div className="container-site flex gap-1 overflow-x-auto py-3">
          {chapters.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="shrink-0 px-3 py-1.5 text-xs font-medium tracking-wide text-ink-soft hover:text-maroon"
            >
              {c.label}
            </a>
          ))}
        </div>
      </nav>

      <article>
        <section className="section-y">
          <div className="container-site grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="font-display text-[5rem] leading-none text-brass/40" aria-hidden>
                “
              </p>
              <p className="-mt-8 font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
                {story.lead}
              </p>
            </Reveal>
            <Reveal delay={0.08} className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
              <p>{story.body}</p>
              <p>{story.promise}</p>
              <p>
                We teach three sections under one name: nursery, primary, and
                secondary. The campus sits in {school.location}.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="place" className="bg-stone">
          <div className="container-site section-y">
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <p className="eyebrow">This place</p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Babura.
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                  Local Government · Jigawa State · Nigeria
                </p>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{story.place}</p>
              </Reveal>
              <Reveal delay={0.08} className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="group aspect-[3/4] overflow-hidden">
                    <img
                      src="/images/campus/main_building.jpg"
                      alt="The main building of Sahab Academy"
                      className="img-ken h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="group mt-10 aspect-[3/4] overflow-hidden md:mt-16">
                    <img
                      src="/images/campus/playground.jpg"
                      alt="Playing ground at Sahab Academy"
                      className="img-ken h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-site">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Growing here</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                One school, three ages.
              </h2>
              <p className="mt-5 text-lg text-ink-soft">{story.continuity}</p>
            </Reveal>

            <ol className="mt-14 divide-y divide-border border-y border-border">
              {academics.map((s, i) => (
                <li key={s.slug}>
                  <Reveal delay={i * 0.05}>
                    <Link
                      to={`/academics/${s.slug}`}
                      className="group grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-12 md:gap-8"
                    >
                      <span className="font-display text-sm text-brass md:col-span-1">
                        0{i + 1}
                      </span>
                      <span className="font-display text-3xl font-semibold tracking-tight md:col-span-3">
                        {s.title}
                      </span>
                      <span className="text-ink-soft md:col-span-6">{s.description}</span>
                      <span className="text-sm font-medium tracking-wide text-maroon underline-offset-[6px] group-hover:underline md:col-span-2 md:text-right">
                        Read more
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="vision" className="bg-ink text-paper">
          <div className="container-site section-y">
            <Reveal>
              <p className="eyebrow text-brass-soft">Vision</p>
              <blockquote className="mt-6 max-w-4xl font-display text-3xl font-medium leading-snug tracking-tight text-paper sm:text-4xl lg:text-[2.75rem]">
                {vision}
              </blockquote>
            </Reveal>
            <Reveal delay={0.08} className="mt-14 max-w-2xl border-t border-white/15 pt-10">
              <p className="eyebrow text-brass-soft">Mission</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-paper">
                How we teach
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-paper/70">{mission}</p>
            </Reveal>
          </div>
        </section>

        <section className="section-y bg-paper-deep">
          <div className="container-site">
            <Reveal className="max-w-xl">
              <p className="eyebrow">What we hold to</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Six measures of the school.
              </h2>
            </Reveal>
            <ol className="mt-14 divide-y divide-border border-t border-border">
              {values.map((v, i) => (
                <li key={v.title} className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                  <span className="font-display text-brass sm:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:col-span-4">
                    {v.title}
                  </h3>
                  <p className="text-ink-soft sm:col-span-6">{v.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="leadership" className="section-y">
          <div className="container-site">
            <div className="grid items-start gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden bg-stone">
                    <img
                      src={school.proprietor.image}
                      alt={`${school.proprietor.name}, proprietor of Sahab Academy`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 text-sm text-ink-soft">
                    {school.proprietor.name}
                    <span className="mx-2 text-brass">·</span>
                    {school.proprietor.title}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
                <p className="eyebrow">Leadership</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  A letter from the proprietor
                </h2>
                <div className="relative mt-10">
                  <span
                    className="pointer-events-none absolute -left-2 -top-8 font-display text-8xl leading-none text-maroon/15"
                    aria-hidden
                  >
                    “
                  </span>
                  <blockquote className="relative space-y-5 text-lg leading-relaxed text-ink-soft">
                    {proprietorQuote.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </blockquote>
                </div>
                <footer className="mt-10 border-t border-border pt-6">
                  <p className="font-display text-xl font-semibold tracking-tight">
                    {school.proprietor.name}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-brass">
                    {school.proprietor.title}, {school.name}
                  </p>
                </footer>
                <Link
                  to={applyHref}
                  className="mt-8 inline-flex text-sm font-medium tracking-wide text-maroon underline-offset-[6px] hover:underline"
                >
                  Enquire about a place
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default About;
