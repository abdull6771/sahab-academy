import { useState } from "react";
import { cn } from "@/lib/utils";

type NurseryPhotoProps = {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
};

const NurseryPhoto = ({
  src,
  alt,
  className,
  imgClassName,
  loading = "lazy",
}: NurseryPhotoProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center rounded-[1.5rem] bg-[hsl(var(--nursery-peach))] px-4 text-center",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <p className="font-display text-lg text-ink/70">{alt}</p>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-[hsl(var(--nursery-sky))]"
          aria-hidden
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
      />
    </div>
  );
};

export default NurseryPhoto;
