import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import Wordmark from "@/components/brand/Wordmark";
import { school } from "@/data/site";
import { footerAcademics, footerExplore } from "@/data/nav";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/80">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm space-y-5">
            <Wordmark inverted />
            <p className="text-sm font-medium text-paper/70">{school.legalName}</p>
            <p className="text-sm leading-relaxed text-paper/65">
              A nursery, primary, and secondary school in Babura Local Government,
              serving families across Jigawa State with careful teaching and a
              calm, ambitious school culture.
            </p>
            <p className="text-sm text-paper/55">
              {school.proprietor.name} · {school.proprietor.title}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brass-soft">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5">
              {footerExplore.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brass-soft">
              Academics
            </h2>
            <ul className="mt-5 space-y-2.5">
              {footerAcademics.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brass-soft">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-soft" aria-hidden />
                <span>{school.location}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass-soft" aria-hidden />
                <a href={`mailto:${school.email}`} className="hover:text-paper">
                  {school.email}
                </a>
              </li>
              <li className="text-paper/55">
                Call or visit the school office during term time. Notices and
                term dates are confirmed there.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {school.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-paper/80">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-paper/80">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
