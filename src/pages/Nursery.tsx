import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Baby, GraduationCap, Users } from "lucide-react";
import Seo from "@/components/layout/Seo";
import { nurseryPage } from "@/data/nursery";
import { applyHref } from "@/data/nav";
import NurseryIcon from "@/components/nursery/NurseryIcon";
import NurseryPhoto from "@/components/nursery/NurseryPhoto";
import ActivityCard from "@/components/nursery/ActivityCard";
import StudentCard from "@/components/nursery/StudentCard";
import DayStepper from "@/components/nursery/DayStepper";
import FacilityCard from "@/components/nursery/FacilityCard";

const Nursery = () => {
  const reduce = useReducedMotion();
  const { pupils, activities, facilityCards } = nurseryPage;

  return (
    <div className="nursery">
      <Seo
        title="Nursery | Sahab Academy"
        description="A calm, child-centred nursery in Babura — play, story, and the first steps of literacy and belonging at Sahab Academy."
      />

      <motion.section
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative isolate overflow-hidden bg-[hsl(var(--nursery-teal))] text-paper"
      >
        <div className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-[hsl(var(--nursery-sun))]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-48 w-48 rounded-full bg-[hsl(var(--nursery-peach))]/30 blur-3xl" />

        <div className="container-site grid items-center gap-10 pb-16 pt-36 lg:grid-cols-12 lg:pb-20 lg:pt-40">
          <div className="relative z-10 lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--nursery-sun))]">
              <Baby className="h-3.5 w-3.5" aria-hidden />
              Early years
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
              A calm start
              <br />
              to school.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-paper/80">
              {nurseryPage.description} For young children in Babura taking first
              steps: listen, play, speak, and belong.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={applyHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[hsl(var(--nursery-sun))] px-7 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.02]"
              >
                Apply for Nursery
              </Link>
              <a
                href="#teach"
                className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium text-paper underline-offset-[6px] hover:underline"
              >
                See how we teach
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto max-w-md"
            >
              <div className="nursery-float absolute -left-4 -top-4 h-16 w-16 rounded-3xl bg-[hsl(var(--nursery-sun))]" aria-hidden />
              <div className="overflow-hidden rounded-[2rem] border-4 border-white/40 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
                <div className="aspect-[4/5]">
                  <NurseryPhoto
                    src={nurseryPage.heroImage}
                    alt={nurseryPage.imageAlt}
                    loading="eager"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-paper px-4 py-3 text-ink shadow-lg sm:-right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nursery-teal))]">
                  Babura
                </p>
                <p className="font-display text-lg font-semibold">Nursery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <nav
        aria-label="Nursery page"
        className="sticky top-[var(--header-offset)] z-40 border-b border-[hsl(var(--nursery-sky))] bg-[hsl(var(--nursery-sky))]/90 backdrop-blur-md"
      >
        <div className="container-site flex gap-2 overflow-x-auto py-3">
          {nurseryPage.audiences.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="shrink-0 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-[hsl(var(--nursery-sun))]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="families" className="section-y">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[hsl(var(--nursery-peach))] p-8 md:p-10"
          >
            <Users className="h-8 w-8 text-[hsl(var(--nursery-coral))]" aria-hidden />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              For families
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{nurseryPage.whoFor}</p>
          </motion.div>
          <motion.div
            id="teach"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[hsl(var(--nursery-leaf))] p-8 md:p-10"
          >
            <GraduationCap className="h-8 w-8 text-[hsl(var(--nursery-teal))]" aria-hidden />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              For teachers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{nurseryPage.approach}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-[clamp(4rem,8vw,7.5rem)]">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nursery-teal))]">
              Learning
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What nursery days are made of
            </h2>
            <p className="mt-3 text-ink-soft">
              Tap a card to read more. These are the same foundations listed for
              our nursery — shown as the work of a young classroom.
            </p>
          </div>
          {activities.length ? (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {activities.map((a, i) => (
                <ActivityCard key={a.id} {...a} delay={i * 0.06} />
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-[1.5rem] bg-paper px-6 py-12 text-center text-ink-soft">
              Nursery activities will appear here once published.
            </p>
          )}
        </div>
      </section>

      <section id="day" className="section-y bg-[hsl(var(--nursery-sky))]">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nursery-teal))]">
            A nursery day
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Gentle structure, room to explore
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Days are structured enough to feel safe, and gentle enough for small
            children to explore. Choose a step to follow the shape of the day.
          </p>
          <div className="mt-10">
            <DayStepper steps={nurseryPage.day} />
          </div>
        </div>
      </section>

      <section id="children" className="section-y">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nursery-teal))]">
            Children
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Faces of school life
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Pupils of Sahab Academy. Photographs of school life — not a class
            roll for nursery only.
          </p>
          {pupils.length ? (
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {pupils.map((p, i) => (
                <StudentCard key={p.id} name={p.name} caption={p.caption} src={p.src} delay={i * 0.05} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] bg-[hsl(var(--nursery-peach))] px-6 py-16 text-center">
              <NurseryIcon name="heart" tone="peach" className="mx-auto" float />
              <p className="mt-4 font-display text-2xl">Photographs coming soon</p>
              <p className="mt-2 text-ink-soft">The office will share nursery pictures here when they are ready.</p>
            </div>
          )}
        </div>
      </section>

      <section id="campus" className="section-y bg-[hsl(var(--nursery-peach))]/60">
        <div className="container-site">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nursery-coral))]">
            Play and rooms
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Spaces that suit small children
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {facilityCards.map((f, i) => (
              <FacilityCard key={f.title} {...f} delay={i * 0.07} />
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              to={applyHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[hsl(var(--nursery-teal))] px-8 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.02]"
            >
              Apply for Nursery
            </Link>
            <Link
              to="/campus"
              className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium text-ink underline-offset-[6px] hover:underline"
            >
              See more of campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nursery;
