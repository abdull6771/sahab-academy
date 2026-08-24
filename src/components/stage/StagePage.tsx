import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import Seo from "@/components/layout/Seo";
import { applyHref } from "@/data/nav";
import { alumni } from "@/data/alumni";
import {
  stagePrefects,
  stagePupils,
  type StagePageData,
} from "@/data/stages";
import StageHero from "./StageHero";
import StageJourney from "./StageJourney";
import StageSubjectCard from "./StageSubjectCard";
import StageRecords from "./StageRecords";
import StagePhoto from "./StagePhoto";
import SmartImage from "@/components/media/SmartImage";

type StagePageProps = {
  data: StagePageData;
};

const StagePage = ({ data }: StagePageProps) => {
  const reduce = useReducedMotion();
  const featuredAlumni = alumni.filter((a) => a.image).slice(0, 3);

  return (
    <div className={`stage-${data.slug}`}>
      <Seo
        title={`${data.title} | Sahab Academy`}
        description={`${data.description} Sahab Academy, Babura, Jigawa State.`}
      />
      <StageHero data={data} />

      <nav
        aria-label={`${data.title} page`}
        className="sticky top-[var(--header-offset)] z-40 border-b border-border bg-paper/92 backdrop-blur-md"
      >
        <div className="container-site flex gap-1 overflow-x-auto py-3">
          {data.nav.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.id}
                to={item.href}
                className="shrink-0 px-3 py-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className="shrink-0 px-3 py-2 text-sm text-ink-soft transition-colors hover:text-[hsl(var(--stage-accent))]"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </nav>

      <section className="border-y border-border bg-[hsl(var(--stage-soft))]">
        <div className="container-site grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {data.stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="px-6 py-8"
            >
              <p className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="overview" className="section-y">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[hsl(var(--stage-soft))] p-8 md:p-10"
            style={{ borderRadius: "var(--stage-radius)" }}
          >
            <Users className="h-6 w-6 text-[hsl(var(--stage-accent))]" aria-hidden />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              Who it is for
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{data.whoFor}</p>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border bg-paper p-8 md:p-10"
            style={{ borderRadius: "var(--stage-radius)" }}
          >
            <GraduationCap className="h-6 w-6 text-[hsl(var(--stage-accent))]" aria-hidden />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              How we teach
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{data.approach}</p>
          </motion.div>
        </div>

        <div className="container-site mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--stage-accent))]">
            In this section
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {data.features.map((f, i) => (
              <motion.li
                key={f}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 border-b border-border py-4"
              >
                <span className="mt-2 h-px w-8 shrink-0 bg-[hsl(var(--stage-accent))]" aria-hidden />
                <span className="text-ink-soft">{f}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section id="subjects" className="section-y bg-[hsl(var(--stage-soft))]">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--stage-accent))]">
                Learning
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                How the work is organised
              </h2>
              <p className="mt-3 text-ink-soft">
                Drawn from the published {data.title.toLowerCase()} programme — not a downloadable
                timetable or homework feed.
              </p>
            </div>
            <BookOpen className="hidden h-8 w-8 text-[hsl(var(--stage-accent))] md:block" aria-hidden />
          </div>
          {data.subjects.length ? (
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.subjects.map((s, i) => (
                <StageSubjectCard key={s.id} {...s} delay={i * 0.05} />
              ))}
            </div>
          ) : (
            <p className="mt-10 border border-border bg-paper px-6 py-12 text-center text-ink-soft" style={{ borderRadius: "var(--stage-radius)" }}>
              Subject notes will appear here when published.
            </p>
          )}
        </div>
      </section>

      <section id="journey" className="section-y">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--stage-accent))]">
            Progression
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {data.journeyTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{data.journeyLede}</p>
          <div className="mt-10">
            <StageJourney steps={data.journey} label={data.journeyTitle} />
          </div>
        </div>
      </section>

      <section id="records" className="section-y bg-[hsl(var(--stage-soft))]">
        <div className="container-site">
          <StageRecords />
        </div>
      </section>

      <section id="life" className="section-y">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--stage-accent))]">
            School life
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Pupils of Sahab Academy
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Photographs of school life. This is not a class register for {data.title.toLowerCase()}{" "}
            only.
          </p>
          {stagePupils.length ? (
            <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {stagePupils.map((p, i) => (
                <motion.li
                  key={p.id}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={reduce ? undefined : { y: -4 }}
                >
                  <div
                    className="overflow-hidden bg-paper"
                    style={{ borderRadius: "var(--stage-radius)" }}
                  >
                    <div className="aspect-[3/4]">
                      <StagePhoto
                        src={p.src}
                        alt={`Portrait of ${p.name}, a pupil of Sahab Academy`}
                      />
                    </div>
                    <div className="px-3 py-3">
                      <h3 className="font-display text-base font-semibold tracking-tight">{p.name}</h3>
                      <p className="text-xs text-ink-soft">{p.caption}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 border border-border bg-paper px-6 py-12 text-center text-ink-soft">
              Pupil photographs will appear here when the office shares them.
            </p>
          )}
        </div>
      </section>

      {data.showPrefects && (
        <section className="section-y bg-ink text-paper">
          <div className="container-site">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-soft">
              Student leadership
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Prefects
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {stagePrefects.map((p, i) => (
                <motion.li
                  key={p.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-maroon-deep">
                    <StagePhoto src={p.image} alt={`${p.name}, ${p.role}`} />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-paper">{p.name}</h3>
                  <p className="text-sm text-paper/60">{p.role}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {data.showAlumni && (
        <section className="section-y bg-[hsl(var(--stage-soft))]">
          <div className="container-site">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--stage-accent))]">
              After secondary
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Alumni in Nigerian institutions
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredAlumni.map((a) => (
                <li key={a.id}>
                  <div className="aspect-[3/4] overflow-hidden bg-stone" style={{ borderRadius: "var(--stage-radius)" }}>
                    <SmartImage src={a.image} alt={`Portrait of ${a.name}`} placeholderLabel={a.name} />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{a.name}</h3>
                  <p className="text-sm text-ink-soft">{a.university}</p>
                  <p className="text-sm text-muted-foreground">
                    {a.course} · {a.graduationYear}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              to="/alumni"
              className="mt-8 inline-flex text-sm font-medium text-[hsl(var(--stage-accent))] underline-offset-[6px] hover:underline"
            >
              All alumni
            </Link>
          </div>
        </section>
      )}

      <section id="campus" className="section-y">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--stage-accent))]">
            Campus
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Rooms that serve {data.title.toLowerCase()}
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {data.facilities.map((f, i) => (
              <motion.li
                key={f.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={reduce ? undefined : { y: -4 }}
                className="overflow-hidden border border-border bg-paper"
                style={{ borderRadius: "var(--stage-radius)" }}
              >
                <div className="aspect-[4/3]">
                  <StagePhoto src={f.src} alt={f.alt} />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{f.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              to={applyHref}
              className="inline-flex h-12 items-center justify-center bg-[hsl(var(--stage-accent))] px-8 text-sm font-medium text-paper"
              style={{ borderRadius: "var(--stage-radius)" }}
            >
              Apply for {data.title}
            </Link>
            <Link
              to="/campus"
              className="inline-flex h-12 items-center justify-center px-4 text-sm font-medium text-[hsl(var(--stage-accent))] underline-offset-[6px] hover:underline"
            >
              Campus gallery
            </Link>
            <Link
              to="/academics/nursery"
              className="inline-flex h-12 items-center justify-center px-4 text-sm font-medium text-ink-soft underline-offset-[6px] hover:underline"
            >
              Nursery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StagePage;
