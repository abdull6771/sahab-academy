import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SmartImage from "@/components/media/SmartImage";
import { alumniPlace, type Alumnus } from "@/data/alumni";

type AlumniProfileProps = {
  person: Alumnus | null;
  onClose: () => void;
};

const AlumniProfile = ({ person, onClose }: AlumniProfileProps) => {
  return (
    <Dialog open={!!person} onOpenChange={(open) => !open && onClose()}>
      {person && (
        <DialogContent className="max-w-2xl overflow-hidden rounded-sm border-border bg-paper p-0 [&>button]:bg-paper [&>button]:opacity-100">
          <div className="grid md:grid-cols-5">
            <div className="aspect-[3/4] md:col-span-2 md:aspect-auto md:min-h-[22rem]">
              <SmartImage
                src={person.image}
                alt={person.image ? `Portrait of ${person.name}` : `Sahab Academy — ${person.name}`}
                placeholderLabel={person.name}
                loading="eager"
              />
            </div>
            <div className="p-6 md:col-span-3 md:p-8">
              <DialogHeader className="space-y-2 text-left">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brass">
                  Class of {person.graduationYear}
                </p>
                <DialogTitle className="font-display text-3xl font-semibold tracking-tight">
                  {person.name}
                </DialogTitle>
                <DialogDescription className="text-base text-ink-soft">
                  Former pupil of Sahab Academy, now at {person.university}.
                </DialogDescription>
              </DialogHeader>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brass">
                    Field of study
                  </dt>
                  <dd className="mt-1 text-ink">{person.course}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brass">
                    Institution
                  </dt>
                  <dd className="mt-1 text-ink">{person.university}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brass">
                    Place of study
                  </dt>
                  <dd className="mt-1 text-ink">{alumniPlace(person.university)}</dd>
                </div>
              </dl>
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                This page lists destinations we know. It is not a live directory of
                employers, awards, or home addresses.
              </p>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default AlumniProfile;
