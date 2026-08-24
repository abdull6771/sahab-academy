import Seo from "@/components/layout/Seo";
import CampusHero from "@/components/campus/CampusHero";
import CampusOverview from "@/components/campus/CampusOverview";
import FacilityShowcase from "@/components/campus/FacilityShowcase";
import CampusWhy from "@/components/campus/CampusWhy";
import CampusGallery from "@/components/campus/CampusGallery";
import CampusCta from "@/components/campus/CampusCta";

const campusNav = [
  { href: "#overview", label: "Overview" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
];

const Campus = () => {
  return (
    <>
      <Seo
        title="Facilities & Campus Life | Sahab Academy"
        description="Classrooms, library, science laboratory, computer lab, and playing ground at Sahab Academy in Babura — plus photographs of school life."
      />
      <CampusHero />

      <nav
        aria-label="Campus page"
        className="sticky top-[var(--header-offset)] z-40 border-b border-border bg-paper/92 backdrop-blur-md"
      >
        <div className="container-site flex gap-1 overflow-x-auto py-3">
          {campusNav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 px-3 py-2 text-sm text-ink-soft transition-colors hover:text-maroon"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <CampusOverview />
      <FacilityShowcase />
      <CampusWhy />
      <CampusGallery />
      <CampusCta />
    </>
  );
};

export default Campus;
