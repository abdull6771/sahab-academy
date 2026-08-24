import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import SmartImage from "@/components/media/SmartImage";

type PageHeroProps = {
  overline?: string;
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  compact?: boolean;
};

const PageHero = ({
  overline,
  title,
  lede,
  image,
  imageAlt,
  compact = false,
}: PageHeroProps) => {
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-ink text-paper",
        compact ? "min-h-[42vh]" : "min-h-[52vh] md:min-h-[58vh]"
      )}
    >
      {image ? (
        <SmartImage
          src={image}
          alt={imageAlt ?? ""}
          loading="eager"
          className="absolute inset-0"
          imgClassName="scale-105 object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-maroon-deep" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
      <div className="container-site relative z-10 pb-12 pt-28 md:pb-16 md:pt-32">
        {overline && <p className="eyebrow text-brass-soft">{overline}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-xl text-base text-paper/75 md:text-lg">{lede}</p>
        )}
        <nav aria-label="Breadcrumb" className="mt-8 text-xs tracking-wide text-paper/50">
          <ol className="flex gap-2">
            <li>
              <Link to="/" className="hover:text-paper">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-paper/80">{title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageHero;
