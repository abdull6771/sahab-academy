import { Link } from "react-router-dom";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { applyHref } from "@/data/nav";

const AdmissionsCta = () => {
  return (
    <section className="relative overflow-hidden bg-maroon text-maroon-foreground">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-brass/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-ink/20 blur-3xl" />
      <div className="container-site section-y">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-brass-soft">Admissions</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-paper sm:text-5xl">
            Begin an enrolment enquiry.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-paper/80">
            Places are considered by the school office. Complete a short form —
            parent details, the child’s name and age, and the section you have in
            mind. We will follow up with your family.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="light"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Link to={applyHref}>Apply now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost-light"
              className="underline-offset-[6px] hover:underline"
            >
              <Link to="/contact">Contact the office</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdmissionsCta;
