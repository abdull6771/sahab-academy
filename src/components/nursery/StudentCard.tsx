import { motion, useReducedMotion } from "framer-motion";
import NurseryPhoto from "./NurseryPhoto";

type StudentCardProps = {
  name: string;
  caption: string;
  src?: string;
  delay?: number;
};

const StudentCard = ({ name, caption, src, delay = 0 }: StudentCardProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 20, scale: 0.97 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      className="group"
    >
      <div className="overflow-hidden rounded-[1.5rem] bg-paper p-2 shadow-[0_8px_28px_-18px_rgba(40,28,20,0.35)] transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-20px_rgba(40,28,20,0.4)]">
        <div className="aspect-[3/4] overflow-hidden rounded-[1.15rem]">
          <NurseryPhoto
            src={src}
            alt={`Portrait of ${name}, a pupil of Sahab Academy`}
            imgClassName="motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.04]"
          />
        </div>
        <div className="px-3 py-4">
          <h3 className="font-display text-xl font-semibold tracking-tight">{name}</h3>
          <p className="mt-1 text-sm text-ink-soft">{caption}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default StudentCard;
