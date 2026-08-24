import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: number;
  active?: boolean;
};

const CountUp = ({ value, active = true }: CountUpProps) => {
  const reduce = useReducedMotion();
  const [n, setN] = useState(() => (reduce && active ? value : 0));

  useEffect(() => {
    if (!active) {
      setN(0);
      return;
    }
    if (reduce) {
      setN(value);
      return;
    }
    let start: number | undefined;
    const duration = 800;
    let frame = 0;
    const tick = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(value * p));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, reduce, active]);

  return <span>{n}</span>;
};

export default CountUp;
