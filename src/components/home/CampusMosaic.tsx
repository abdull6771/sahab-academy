import { Link } from "react-router-dom";
import Reveal from "@/components/motion/Reveal";
import { campusImages } from "@/data/gallery";

const mosaic = [
  { img: campusImages[0], className: "md:col-span-2 md:row-span-2" },
  { img: campusImages[1], className: "" },
  { img: campusImages[4], className: "" },
  { img: campusImages[3], className: "md:col-span-2" },
];

const CampusMosaic = () => {
  return (
    <section className="section-y bg-background">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Campus</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Life on the grounds.
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              The Babura campus: classrooms, library, laboratory, and playing ground.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/campus"
              className="text-sm font-medium tracking-wide text-maroon underline-offset-[6px] hover:underline"
            >
              Open the gallery
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:h-[540px] md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {mosaic.map(({ img, className }, i) => (
            <Reveal key={img.id} delay={i * 0.06} className={`min-h-[220px] md:min-h-0 ${className}`}>
              <Link to="/campus" className="group relative block h-full overflow-hidden">
                <img
                  src={img.src ?? ""}
                  alt={img.caption}
                  className="img-ken h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 font-display text-lg text-paper">{img.title}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusMosaic;
