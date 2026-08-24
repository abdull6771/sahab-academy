import { motion, useReducedMotion } from "framer-motion";
import NurseryPhoto from "./NurseryPhoto";

type FacilityCardProps = {
  title: string;
  text: string;
  src?: string;
  alt: string;
  delay?: number;
};

const FacilityCard = ({ title, text, src, alt, delay = 0 }: FacilityCardProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={reduce ? undefined : { y: -4 }}
      className="overflow-hidden rounded-[1.5rem] bg-paper shadow-[0_8px_28px_-18px_rgba(40,28,20,0.35)]"
    >
      <div className="aspect-[4/3]">
        <NurseryPhoto src={src} alt={alt} />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
      </div>
    </motion.article>
  );
};

export default FacilityCard;
