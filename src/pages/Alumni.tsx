import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Seo from "@/components/layout/Seo";
import SmartImage from "@/components/media/SmartImage";
import {
  alumni,
  alumniStats,
  spotlightIds,
  type Alumnus,
} from "@/data/alumni";
import CountUp from "@/components/alumni/CountUp";
import AlumniDirectory from "@/components/alumni/AlumniDirectory";
import AlumniProfile from "@/components/alumni/AlumniProfile";
import AlumniStayInTouch from "@/components/alumni/AlumniStayInTouch";
import AlumniCommunity from "@/components/alumni/AlumniCommunity";

const Alumni = () => {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<number | null>(null);
  const selected = alumni.find((a) => a.id === openId) ?? null;

  const spotlight = useMemo(
    () =>
      spotlightIds
        .map((id) => alumni.find((a) => a.id === id))
        .filter((a): a is Alumnus => Boolean(a)),
    []
  );

  const heroPortraits = spotlight.filter((a) => a.image).slice(0, 3);

  return (
    <>
      <Seo
        title="Alumni | Sahab Academy"
        description="Former pupils of Sahab Academy continuing at Nigerian universities and colleges — a directory of real destinations, not invented overseas names."
      />

      <motion.section
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative isolate overflow-hidden bg-ink text-paper"
      >
        <div className="container-site grid items-center gap-12 pb-16 pt-36 lg:grid-cols-12 lg:pb-24 lg:pt-40">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brass-soft">Alumni</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Continuing in Nigerian institutions.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75">
              A record of former pupils and where they study now — universities
              and colleges in Nigeria. This is a school list, not a social network.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#directory"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-paper px-8 text-sm font-medium text-ink hover:bg-paper-deep"
              >
                Explore alumni
              </a>
              <a
                href="#connect"
                className="inline-flex h-12 items-center justify-center rounded-sm px-6 text-sm font-medium text-paper underline-offset-[6px] hover:underline"
              >
                Stay in touch
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="flex justify-center gap-3 lg:justify-end">
              {heroPortraits.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className={`w-28 overflow-hidden sm:w-36 ${i === 1 ? "mt-8" : i === 2 ? "mt-4" : ""}`}
                >
                  <div className="aspect-[3/4] bg-maroon-deep">
                    <SmartImage
                      src={p.image}
                      alt={`Portrait of ${p.name}`}
                      loading="eager"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section className="border-y border-border bg-paper-deep">
        <div className="container-site grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
          <div className="px-5 py-8 md:px-8">
            <p className="font-display text-3xl font-semibold tracking-tight">
              <CountUp value={alumniStats.listed} />
            </p>
            <p className="mt-2 text-sm text-ink-soft">Alumni listed</p>
          </div>
          <div className="px-5 py-8 md:px-8">
            <p className="font-display text-3xl font-semibold tracking-tight">
              <CountUp value={alumniStats.institutions} />
            </p>
            <p className="mt-2 text-sm text-ink-soft">Nigerian institutions</p>
          </div>
          <div className="px-5 py-8 md:px-8">
            <p className="font-display text-3xl font-semibold tracking-tight">
              <CountUp value={alumniStats.fields} />
            </p>
            <p className="mt-2 text-sm text-ink-soft">Fields of study</p>
          </div>
          <div className="px-5 py-8 md:px-8">
            <p className="font-display text-3xl font-semibold tracking-tight">
              {alumniStats.firstYear}–{alumniStats.latestYear}
            </p>
            <p className="mt-2 text-sm text-ink-soft">Class years in this list</p>
          </div>
        </div>
      </section>

      <nav
        aria-label="Alumni page"
        className="sticky top-[var(--header-offset)] z-40 border-b border-border bg-paper/92 backdrop-blur-md"
      >
        <div className="container-site flex gap-1 overflow-x-auto py-3">
          {[
            { href: "#spotlight", label: "Destinations" },
            { href: "#directory", label: "Directory" },
            { href: "#community", label: "Community" },
            { href: "#connect", label: "Stay in touch" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 px-3 py-2 text-sm text-ink-soft hover:text-maroon"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="spotlight" className="section-y">
        <div className="container-site">
          <p className="eyebrow">In focus</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Destinations, not invented prizes.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Three former pupils and the Nigerian institutions they entered. We do
            not invent awards, companies, or overseas universities.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {spotlight.map((a, i) => (
              <motion.li
                key={a.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <button type="button" onClick={() => setOpenId(a.id)} className="group w-full text-left">
                  <div className="aspect-[4/5] overflow-hidden bg-stone">
                    <SmartImage
                      src={a.image}
                      alt={`Portrait of ${a.name}`}
                      placeholderLabel={a.name}
                      imgClassName="img-ken"
                    />
                  </div>
                  <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brass">
                    Class of {a.graduationYear}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight group-hover:text-maroon">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {a.course} at {a.university}.
                  </p>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section id="directory" className="section-y bg-paper-deep">
        <div className="container-site">
          <p className="eyebrow">Directory</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse by name, year, field, or place.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Search the published list. Place of study is taken from the
            institution — we do not list home towns or current jobs.
          </p>
          <div className="mt-10">
            <AlumniDirectory onOpen={setOpenId} />
          </div>
        </div>
      </section>

      <section id="community" className="section-y">
        <div className="container-site">
          <p className="eyebrow">Community</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Events, news, and careers stay with the office.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            This website does not host reunions, a job board, or a private alumni
            feed. The panels below say so plainly.
          </p>
          <div className="mt-10">
            <AlumniCommunity />
          </div>
        </div>
      </section>

      <section id="connect" className="section-y bg-ink text-paper">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-brass-soft">Stay in touch</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Write to the school.
            </h2>
            <p className="mt-4 text-paper/70">
              Former pupils may send a note. It is an enquiry to the office — not
              an account, password, or alumni network login.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex text-sm font-medium text-brass-soft underline-offset-[6px] hover:text-paper hover:underline"
            >
              Other ways to reach us
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-white/15 bg-paper p-6 text-ink md:p-8">
              <AlumniStayInTouch />
            </div>
          </div>
        </div>
      </section>

      <AlumniProfile person={selected} onClose={() => setOpenId(null)} />
    </>
  );
};

export default Alumni;
