import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SmartImage from "@/components/media/SmartImage";
import type { CampusFacility } from "@/data/facilities";

type FacilityDetailProps = {
  facility: CampusFacility | null;
  onClose: () => void;
  onOpenPhoto?: () => void;
};

const FacilityDetail = ({ facility, onClose, onOpenPhoto }: FacilityDetailProps) => {
  return (
    <Dialog open={!!facility} onOpenChange={(open) => !open && onClose()}>
      {facility && (
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-sm border-border bg-paper p-0 [&>button]:bg-paper [&>button]:opacity-100">
          <div className="grid md:grid-cols-5">
            <div className="aspect-[4/3] md:col-span-2 md:aspect-auto md:min-h-[18rem]">
              {facility.image && onOpenPhoto ? (
                <button
                  type="button"
                  onClick={onOpenPhoto}
                  className="h-full w-full"
                  aria-label={`View photograph of ${facility.name}`}
                >
                  <SmartImage
                    src={facility.image}
                    alt={facility.imageAlt}
                    placeholderLabel={facility.name}
                    loading="eager"
                    imgClassName="img-ken"
                  />
                </button>
              ) : (
                <SmartImage
                  src={facility.image}
                  alt={facility.imageAlt}
                  placeholderLabel={facility.name}
                  loading="eager"
                />
              )}
            </div>
            <div className="p-6 md:col-span-3 md:p-8">
              <DialogHeader className="space-y-2 text-left">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brass">
                  {facility.categoryLabel}
                </p>
                <DialogTitle className="font-display text-3xl font-semibold tracking-tight">
                  {facility.name}
                </DialogTitle>
                <DialogDescription className="text-base text-ink-soft">
                  {facility.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-8">
                <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brass">
                  On this campus
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-ink">
                  {facility.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-maroon" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 text-sm text-ink-soft">
                <span className="font-medium text-ink">Who uses it. </span>
                {facility.usedBy.join(" · ")}
              </p>
              {facility.image && onOpenPhoto && (
                <button
                  type="button"
                  onClick={onOpenPhoto}
                  className="mt-6 text-sm font-medium text-maroon underline-offset-[6px] hover:underline"
                >
                  View photograph
                </button>
              )}
              {!facility.image && (
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  A photograph of this room is not on the website yet. The branded
                  panel stands in.
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default FacilityDetail;
