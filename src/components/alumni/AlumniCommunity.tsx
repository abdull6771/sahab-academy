import { Calendar, Briefcase, Newspaper, Megaphone, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    icon: Calendar,
    title: "Events and reunions",
    text: "No reunion dates are published on this website. Ask the office if a gathering is planned.",
  },
  {
    icon: Newspaper,
    title: "Alumni news",
    text: "We do not run a news feed here. Updates, when they exist, come from the school office.",
  },
  {
    icon: Briefcase,
    title: "Careers and mentorship",
    text: "There is no job board or mentor matching on this site. Introductions, if any, are made by staff.",
  },
  {
    icon: Megaphone,
    title: "Announcements",
    text: "Community notices are not listed online. Email the school if you need to reach former classmates through official channels.",
  },
];

const AlumniCommunity = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="border border-border bg-paper p-6">
            <Icon className="h-5 w-5 text-maroon" aria-hidden />
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
        <Handshake className="h-4 w-4 text-brass" aria-hidden />
        <span>
          Write to{" "}
          <a className="text-maroon underline-offset-4 hover:underline" href="mailto:info@sahabacademy.edu.ng">
            info@sahabacademy.edu.ng
          </a>
          {" "}or use the{" "}
          <Link to="/contact" className="text-maroon underline-offset-4 hover:underline">
            contact page
          </Link>
          .
        </span>
      </p>
    </div>
  );
};

export default AlumniCommunity;
