import { BookOpen, Heart, Shield, Sparkles, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  book: BookOpen,
  heart: Heart,
  shield: Shield,
};

const tones: Record<string, string> = {
  peach: "bg-[hsl(var(--nursery-peach))] text-[hsl(var(--nursery-coral))]",
  sky: "bg-[hsl(var(--nursery-sky))] text-[hsl(var(--nursery-teal))]",
  lilac: "bg-[hsl(var(--nursery-lilac))] text-maroon",
  leaf: "bg-[hsl(var(--nursery-leaf))] text-[hsl(var(--nursery-teal))]",
  sun: "bg-[hsl(var(--nursery-sun))] text-ink",
};

type NurseryIconProps = {
  name: string;
  tone?: keyof typeof tones;
  className?: string;
  float?: boolean;
};

const NurseryIcon = ({ name, tone = "peach", className, float = false }: NurseryIconProps) => {
  const Icon = icons[name] ?? Sparkles;
  return (
    <span
      className={cn(
        "inline-flex h-14 w-14 items-center justify-center rounded-2xl",
        tones[tone],
        float && "nursery-float",
        className
      )}
      aria-hidden
    >
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </span>
  );
};

export default NurseryIcon;
