import Seo from "@/components/layout/Seo";
import { school } from "@/data/site";

const Terms = () => {
  return (
    <>
      <Seo
        title="Terms | Sahab Academy"
        description="Terms of use for the Sahab Academy website."
      />
      <article className="container-site max-w-3xl py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">Terms of use</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
          <p>
            This website describes {school.legalName} in {school.location}. It
            is not an online enrolment system. Completing a form does not
            guarantee a place.
          </p>
          <p>
            Photographs and names of pupils, prefects, alumni, and staff appear
            with the school’s permission for this site. Please do not reuse them
            without asking the office.
          </p>
          <p>
            Information is offered in good faith. For current fees, term dates,
            and available places, contact {school.email}.
          </p>
        </div>
      </article>
    </>
  );
};

export default Terms;
