import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const groups = [
  {
    title: "Families",
    text: "Enquire about a place, visit Babura, or write to the office. Enrolment is considered by staff — not by an account on this website.",
    href: "/admissions",
    label: "Start an enquiry",
    image: "/images/campus/entrance.jpg",
    alt: "Entrance to Sahab Academy",
  },
  {
    title: "Pupils",
    text: "Nursery, primary, and secondary under one name: play and first letters, core subjects and character, then senior study and leadership.",
    href: "/campus",
    label: "See school life",
    image: "/images/students/maryam.jpg",
    alt: "A pupil of Sahab Academy",
  },
  {
    title: "Teachers",
    text: "Qualified, specialised teaching as children grow — from a watchful nursery to subject teachers in secondary.",
    href: "/about#leadership",
    label: "Read the school’s direction",
    image: "/images/campus/classrooms.jpg",
    alt: "A classroom at Sahab Academy",
  },
  {
    title: "The office",
    text: "Administrators keep the school’s records and answer families during term time. Day-to-day marks and attendance stay with them, not on this site.",
    href: "/contact",
    label: "Contact the office",
    image: "/images/campus/library.jpg",
    alt: "The school library at Sahab Academy",
  },
];

const HomeExperience = () => {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="section-y bg-paper-deep">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">School life</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            For parents, pupils, teachers, and the office.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            This website introduces the school so each family can find the right
            door — then the campus and the staff take over.
          </p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07} as="li">
              <Link to={g.href} className="group block h-full">
                <motion.article
                  whileHover={reduce ? undefined : { y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col overflow-hidden bg-paper sm:flex-row"
                >
                  <div className="aspect-[16/10] overflow-hidden sm:aspect-auto sm:w-[42%] sm:shrink-0">
                    <img
                      src={g.image}
                      alt={g.alt}
                      className="img-ken h-full w-full object-cover sm:min-h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{g.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{g.text}</p>
                    <span className="mt-5 text-sm font-medium text-maroon underline-offset-[6px] group-hover:underline">
                      {g.label}
                    </span>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeExperience;
