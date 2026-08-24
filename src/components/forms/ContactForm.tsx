import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { school } from "@/data/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  subject: z.enum(["admissions", "visit", "alumni", "other"], {
    required_error: "Please choose a subject",
  }),
  message: z.string().min(8, "Please write a short message"),
});

type Values = z.infer<typeof schema>;

const fieldClass =
  "h-12 rounded-sm border-border bg-paper text-base transition-shadow md:text-sm focus-visible:ring-maroon";

const ContactForm = () => {
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "admissions",
      message: "",
    },
  });

  const onSubmit = async (values: Values) => {
    void values;
    setSubmitError(null);
    try {
      await new Promise((r) => window.setTimeout(r, 900));
      toast.success("Message received. We will reply by email.");
      setDone(true);
    } catch {
      setSubmitError("The message could not be sent. Please email the office instead.");
    }
  };

  if (done) {
    return (
      <div className="border border-border bg-paper px-8 py-10" role="status">
        <p className="eyebrow">Sent</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          Thank you for writing.
        </h2>
        <p className="mt-3 text-ink-soft">
          This form stays on your device. The office will follow up using the
          address you gave. You may also email{" "}
          <a className="text-maroon underline-offset-4 hover:underline" href={`mailto:${school.email}`}>
            {school.email}
          </a>
          .
        </p>
        <Link
          to="/admissions"
          className="mt-6 inline-flex text-sm font-medium text-maroon underline-offset-4 hover:underline"
        >
          Or begin an enrolment enquiry
        </Link>
      </div>
    );
  }

  const { errors, isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field id="c-name" label="Full name" error={errors.name?.message}>
          <Input id="c-name" className={fieldClass} autoComplete="name" {...form.register("name")} />
        </Field>
        <Field id="c-email" label="Email address" error={errors.email?.message}>
          <Input
            id="c-email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            {...form.register("email")}
          />
        </Field>
        <Field id="c-phone" label="Phone number (optional)" error={errors.phone?.message}>
          <Input id="c-phone" type="tel" className={fieldClass} autoComplete="tel" {...form.register("phone")} />
        </Field>
        <Field id="c-subject" label="Subject" error={errors.subject?.message}>
          <select
            id="c-subject"
            className={cn(fieldClass, "w-full border px-3")}
            {...form.register("subject")}
          >
            <option value="admissions">Enrolment / admissions</option>
            <option value="visit">Visit the campus</option>
            <option value="alumni">Alumni</option>
            <option value="other">Other</option>
          </select>
        </Field>
      </div>
      <Field id="c-message" label="Message" error={errors.message?.message}>
        <Textarea
          id="c-message"
          rows={6}
          className="rounded-sm border-border bg-paper focus-visible:ring-maroon"
          {...form.register("message")}
        />
      </Field>
      {submitError && (
        <p role="alert" className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {submitError}
        </p>
      )}
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
};

const Field = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    {children}
    {error && (
      <p role="alert" className="text-sm text-destructive">
        {error}
      </p>
    )}
  </div>
);

export default ContactForm;
