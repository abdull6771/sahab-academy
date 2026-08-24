import { Link } from "react-router-dom";
import Reveal from "@/components/motion/Reveal";
import { story } from "@/data/copy";

const Introduction = () => {
  return (
    <section className="section-y bg-background">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative pb-10 lg:col-span-6 lg:pb-0">
          <div className="group relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
            <img
              src="/images/campus/entrance.jpg"
              alt="Entrance to Sahab Academy"
              className="img-ken h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 hidden w-48 overflow-hidden border-[6px] border-paper shadow-[0_16px_40px_-24px_rgba(28,22,18,0.45)] md:block lg:-right-8">
            <img
              src="/images/campus/classrooms.jpg"
              alt="A classroom at Sahab Academy"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:pl-4">
          <p className="eyebrow">The school</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A school for Babura, held to a high standard.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{story.lead}</p>
          <p className="mt-4 leading-relaxed text-ink-soft">{story.body}</p>
          <p className="mt-6 border-l-2 border-maroon pl-5 font-display text-xl font-medium leading-snug tracking-tight text-ink">
            {story.continuity}
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center text-sm font-medium tracking-wide text-maroon underline-offset-[6px] hover:underline"
          >
            Read our story
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Introduction;
