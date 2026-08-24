import { Link } from "react-router-dom";
import { ClipboardList, CalendarCheck, LineChart, Bell } from "lucide-react";
import { applyHref } from "@/data/nav";

const items = [
  {
    icon: ClipboardList,
    title: "Assignments and assessments",
    text: "Set and marked by teachers. They are not listed on this website.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance",
    text: "Taken in school. Families should ask the office, not this page.",
  },
  {
    icon: LineChart,
    title: "Academic performance",
    text: "Reports stay with the school. We do not publish live results here.",
  },
  {
    icon: Bell,
    title: "Announcements",
    text: "Notices go through the office and class teachers — there is no pupil inbox on this site.",
  },
];

const StageRecords = () => {
  return (
    <div className="border border-border bg-paper p-6 md:p-10" style={{ borderRadius: "var(--stage-radius)" }}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--stage-accent))]">
        School records
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
        Held by the office, not this site.
      </h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        There is no student login, mark book, or attendance register here. If you
        need a report or a notice, write to the school or visit in Babura.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex gap-4 border border-border bg-[hsl(var(--stage-soft))] p-5"
            style={{ borderRadius: "var(--stage-radius)" }}
          >
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--stage-accent))]" aria-hidden />
            <div>
              <h3 className="font-medium text-ink">{title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/contact"
          className="inline-flex h-11 items-center justify-center bg-[hsl(var(--stage-accent))] px-6 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          style={{ borderRadius: "var(--stage-radius)" }}
        >
          Contact the office
        </Link>
        <Link
          to={applyHref}
          className="inline-flex h-11 items-center justify-center px-4 text-sm font-medium text-[hsl(var(--stage-accent))] underline-offset-[6px] hover:underline"
        >
          Enrolment enquiry
        </Link>
      </div>
    </div>
  );
};

export default StageRecords;
