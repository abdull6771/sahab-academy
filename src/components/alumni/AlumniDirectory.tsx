import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  alumni,
  alumniCourses,
  alumniPlaces,
  alumniPlace,
  alumniYears,
  type Alumnus,
} from "@/data/alumni";
import AlumniCard from "./AlumniCard";

type AlumniDirectoryProps = {
  onOpen: (id: number) => void;
};

const selectClass =
  "h-11 w-full rounded-sm border border-border bg-paper px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon";

const AlumniDirectory = ({ onOpen }: AlumniDirectoryProps) => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [course, setCourse] = useState("all");
  const [place, setPlace] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return alumni.filter((a) => {
      const hay = `${a.name} ${a.university} ${a.course}`.toLowerCase();
      const matchQ = !q || hay.includes(q);
      const matchY = year === "all" || a.graduationYear === year;
      const matchC = course === "all" || a.course === course;
      const matchP = place === "all" || alumniPlace(a.university) === place;
      return matchQ && matchY && matchC && matchP;
    });
  }, [query, year, course, place]);

  const clear = () => {
    setQuery("");
    setYear("all");
    setCourse("all");
    setPlace("all");
  };

  const active = query || year !== "all" || course !== "all" || place !== "all";

  return (
    <div>
      <div className="border border-border bg-paper p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2 lg:col-span-1">
            <Label htmlFor="alumni-search">Name or institution</Label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <Input
                id="alumni-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search alumni"
                className="h-11 rounded-sm pl-9"
              />
            </div>
          </div>
          <FieldSelect
            id="alumni-year"
            label="Class year"
            value={year}
            onChange={setYear}
            options={alumniYears}
          />
          <FieldSelect
            id="alumni-course"
            label="Field of study"
            value={course}
            onChange={setCourse}
            options={alumniCourses}
          />
          <FieldSelect
            id="alumni-place"
            label="Place of study"
            value={place}
            onChange={setPlace}
            options={alumniPlaces}
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <p className="text-ink-soft" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "person" : "people"}
          </p>
          {active && (
            <button type="button" onClick={clear} className="text-maroon underline-offset-4 hover:underline">
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filtered.length ? (
        <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((person: Alumnus, i) => (
            <AlumniCard key={person.id} person={person} delay={(i % 6) * 0.04} onOpen={onOpen} />
          ))}
        </ul>
      ) : (
        <div className="mt-10 border border-border bg-paper px-6 py-16 text-center">
          <p className="font-display text-2xl font-semibold tracking-tight">No matches</p>
          <p className="mt-2 text-ink-soft">
            Try another name, year, field, or place of study.
          </p>
          <button
            type="button"
            onClick={clear}
            className="mt-6 text-sm font-medium text-maroon underline-offset-4 hover:underline"
          >
            Reset directory
          </button>
        </div>
      )}
    </div>
  );
};

const FieldSelect = ({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <select id={id} className={selectClass} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="all">All</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

export default AlumniDirectory;
