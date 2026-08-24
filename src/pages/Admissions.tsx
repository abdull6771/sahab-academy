import PageHero from "@/components/layout/PageHero";
import Seo from "@/components/layout/Seo";
import Reveal from "@/components/motion/Reveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { admissionsSteps } from "@/data/copy";

const Admissions = () => {
  return (
    <>
      <Seo
        title="Admissions | Sahab Academy"
        description="Enquire about nursery, primary, or secondary enrolment at Sahab Academy in Babura, Jigawa State."
      />
      <PageHero
        overline="Admissions"
        title="A place for your child."
        lede="Nursery, primary, and secondary enrolment is considered by the school office. Begin with an enquiry — not an online account."
        image="/images/campus/classrooms.jpg"
        imageAlt="A classroom at Sahab Academy"
      />

      <section className="section-y">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Who can apply</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Families in Babura and nearby communities.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              We welcome children into nursery, primary, or secondary. Term dates
              and available places are confirmed by the office — we do not publish
              invented calendars here. Write, visit, or send the form below.
            </p>
          </Reveal>

          <ol className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {admissionsSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} as="li">
                <p className="font-display text-3xl text-brass">{s.n}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="enquire" className="section-y bg-stone">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              Tell us about your child.
            </h2>
            <p className="mt-4 text-ink-soft">
              This form does not create a user account. There is no password.
              Staff will reply using the contact details you provide.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <div className="border border-border bg-paper p-6 md:p-10">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Admissions;
