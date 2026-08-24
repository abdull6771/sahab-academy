import Seo from "@/components/layout/Seo";
import { school } from "@/data/site";

const Privacy = () => {
  return (
    <>
      <Seo
        title="Privacy | Sahab Academy"
        description="How Sahab Academy treats information you send through this website."
      />
      <article className="container-site max-w-3xl py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">Privacy</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
          <p>
            This website is a public introduction to {school.legalName}. Enquiry
            and contact forms run in your browser only. They do not send data to
            a school server from this site.
          </p>
          <p>
            If you email {school.email}, the office will use that correspondence
            to reply about admissions or school life. We do not sell personal
            information.
          </p>
          <p>
            The site may use a map embed from Google to show Babura. That
            service has its own privacy practices.
          </p>
        </div>
      </article>
    </>
  );
};

export default Privacy;
