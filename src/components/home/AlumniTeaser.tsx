import { Link } from "react-router-dom";
import Reveal from "@/components/motion/Reveal";
import SmartImage from "@/components/media/SmartImage";
import { alumni } from "@/data/alumni";

const AlumniTeaser = () => {
  const featured = alumni.filter((a) => a.image).slice(0, 4);

  return (
    <section className="section-y bg-paper-deep">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Alumni</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Where our former pupils continue.
            </h2>
            <p className="mt-4 text-ink-soft">
              Graduates of Sahab Academy are studying at Nigerian universities and
              colleges — from Zaria and Dutse to Kano, Kafin Hausa, and Birnin Kudu.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/alumni"
              className="text-sm font-medium tracking-wide text-maroon underline-offset-[6px] hover:underline"
            >
              Meet the alumni
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.06} as="li">
              <Link
                to="/alumni"
                className="group block transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[3/4] overflow-hidden bg-stone">
                  <SmartImage
                    src={a.image}
                    alt={`Portrait of ${a.name}`}
                    imgClassName="img-ken"
                    placeholderLabel={a.name}
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {a.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{a.university}</p>
                <p className="text-sm text-muted-foreground">
                  {a.course} · {a.graduationYear}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AlumniTeaser;
