import { cn } from "@/lib/utils";

type MonogramProps = {
  className?: string;
  inverted?: boolean;
};

const Monogram = ({ className, inverted = false }: MonogramProps) => {
  const fill = inverted ? "hsl(var(--paper))" : "hsl(var(--maroon))";
  const stroke = inverted ? "hsl(var(--brass-soft))" : "hsl(var(--brass))";
  const letter = inverted ? "hsl(var(--paper))" : "hsl(var(--paper))";

  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="48" height="48" fill={fill} />
      <rect
        x="5"
        y="5"
        width="38"
        height="38"
        fill="none"
        stroke={stroke}
        strokeWidth="1"
      />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fill={letter}
        style={{
          fontFamily: "Fraunces, Georgia, serif",
          fontSize: "22px",
          fontWeight: 600,
        }}
      >
        S
      </text>
    </svg>
  );
};

export default Monogram;
