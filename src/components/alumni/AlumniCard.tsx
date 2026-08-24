import { motion, useReducedMotion } from "framer-motion";
import SmartImage from "@/components/media/SmartImage";
import { alumniPlace, type Alumnus } from "@/data/alumni";

type AlumniCardProps = {
  person: Alumnus;
  delay?: number;
  onOpen: (id: number) => void;
};

const AlumniCard = ({ person, delay = 0, onOpen }: AlumniCardProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.li
      layout
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={() => onOpen(person.id)}
        className="group w-full text-left"
      >
        <div className="aspect-[3/4] overflow-hidden bg-stone">
          <SmartImage
            src={person.image}
            alt={person.image ? `Portrait of ${person.name}` : `Sahab Academy — ${person.name}`}
            placeholderLabel={person.name}
            imgClassName="img-ken"
          />
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight group-hover:text-maroon">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{person.university}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {person.course}
          <span className="mx-2 text-brass">·</span>
          Class of {person.graduationYear}
        </p>
        <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brass">
          {alumniPlace(person.university)}
        </p>
      </button>
    </motion.li>
  );
};

export default AlumniCard;
