import { useState } from "react";
import { cn } from "@/lib/utils";
import BrandedPlaceholder from "@/components/brand/BrandedPlaceholder";

type SmartImageProps = {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  placeholderLabel?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
};

const SmartImage = ({
  src,
  alt,
  className,
  imgClassName,
  placeholderLabel,
  loading = "lazy",
  sizes,
}: SmartImageProps) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={cn("h-full w-full", className)}>
        <BrandedPlaceholder label={placeholderLabel ?? alt} />
      </div>
    );
  }

  return (
    <div className={cn("h-full w-full overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        sizes={sizes}
        onError={() => setFailed(true)}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
};

export default SmartImage;
