import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";

const places = [
  {
    title: "About",
    text: "How the school serves Babura — story, leadership, vision.",
    href: "/about",
    image: "/images/campus/entrance.jpg",
    alt: "Entrance to Sahab Academy",
  },
  {
    title: "Campus",
    text: "Buildings, library, grounds, and photographs of school life.",
    href: "/campus",
    image: "/images/campus/library.jpg",
    alt: "The school library at Sahab Academy",
  },
  {
    title: "Alumni",
    text: "Former pupils continuing at Nigerian universities and colleges.",
    href: "/alumni",
    image: "/images/alumni/Abdullahi_Ahmad.jpeg",
    alt: "Portrait of an alumnus of Sahab Academy",
  },
  {
    title: "Contact",
    text: "Write to the office. Visits are welcome during term time.",
    href: "/contact",
    image: "/images/campus/main_building.jpg",
    alt: "The main building of Sahab Academy",
  },
] as const;

const HomeDestinations = () => {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-border bg-paper-deep py-16 md:py-20">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Explore</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Every major door of the school.
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {places.map((p, i) => (
            <Reveal key={p.href} delay={i * 0.06} as="li">
              <Link to={p.href} className="group block h-full">
                <motion.article
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col overflow-hidden bg-paper"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="img-ken h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">{p.text}</p>
                    <span className="mt-4 text-sm font-medium text-maroon underline-offset-[6px] group-hover:underline">
                      Open {p.title.toLowerCase()}
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

export default HomeDestinations;
