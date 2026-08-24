import { Link } from "react-router-dom";
import { school } from "@/data/site";
import { applyHref } from "@/data/nav";

const TopBar = () => {
  return (
    <div className="hidden border-b border-white/10 bg-ink text-paper/80 lg:block">
      <div className="container-site flex h-9 items-center justify-between text-[0.7rem] font-medium tracking-wide">
        <p>{school.location}</p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${school.email}`}
            className="transition-colors hover:text-paper"
          >
            {school.email}
          </a>
          <Link
            to={applyHref}
            className="text-brass-soft transition-colors hover:text-paper"
          >
            Apply now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
