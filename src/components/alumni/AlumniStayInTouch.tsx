import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { alumniYears } from "@/data/alumni";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  year: z.string().min(1, "Choose a class year"),
  message: z.string().optional(),
});

type Values = z.infer<typeof schema>;

const fieldClass =
  "h-12 rounded-sm border-border bg-paper text-base md:text-sm focus-visible:ring-maroon";

const AlumniStayInTouch = () => {
  const [done, setDone] = useState(false);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", year: "", message: "" },
  });

  const onSubmit = async (values: Values) => {
    void values;
    await new Promise((r) => window.setTimeout(r, 800));
    toast.success("Received. The office will follow up by email.");
    setDone(true);
  };

  if (done) {
    return (
      <div className="border border-border bg-paper px-8 py-10" role="status">
        <p className="eyebrow">Thank you</p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          Your note is with the office.
        </h3>
        <p className="mt-3 text-ink-soft">
          This form stays in the browser. Staff will reply using the address you
          gave. There is no alumni login on this website.
        </p>
      </div>
    );
  }

  const { errors, isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="al-name">Name</Label>
          <Input id="al-name" className={fieldClass} autoComplete="name" {...form.register("name")} />
          {errors.name && (
            <p role="alert" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="al-email">Email</Label>
          <Input
            id="al-email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            {...form.register("email")}
          />
          {errors.email && (
            <p role="alert" className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="al-year">Class year</Label>
        <select id="al-year" className={`${fieldClass} w-full border px-3`} {...form.register("year")}>
          <option value="">Select a year</option>
          {alumniYears.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
          <option value="other">Other / rather not say</option>
        </select>
        {errors.year && (
          <p role="alert" className="text-sm text-destructive">
            {errors.year.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="al-message">Message (optional)</Label>
        <Textarea id="al-message" rows={4} className="rounded-sm border-border bg-paper" {...form.register("message")} />
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send to the office"}
      </Button>
    </form>
  );
};

export default AlumniStayInTouch;
