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
import { cn } from "@/lib/utils";

const enquirySchema = z.object({
  parentName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a phone number we can reach"),
  section: z.enum(["nursery", "primary", "secondary"], {
    required_error: "Choose a school section",
  }),
  childName: z.string().min(2, "Enter the child’s name"),
  childAge: z.string().min(1, "Enter the child’s age"),
  message: z.string().optional(),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

const fieldClass =
  "h-12 rounded-sm border-border bg-paper text-base md:text-sm focus-visible:ring-maroon";

const EnquiryForm = () => {
  const [done, setDone] = useState(false);
  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      section: "primary",
      childName: "",
      childAge: "",
      message: "",
    },
  });

  const onSubmit = async (values: EnquiryValues) => {
    void values;
    await new Promise((r) => window.setTimeout(r, 900));
    toast.success("Enquiry received. The school office will follow up.");
    setDone(true);
  };

  if (done) {
    return (
      <div className="border border-border bg-paper px-8 py-12 text-center">
        <p className="eyebrow">Thank you</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          Your enquiry is with the office.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          This website does not enrol pupils automatically. A member of staff
          will contact you using the email or phone you provided.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-11 items-center rounded-sm bg-maroon px-6 text-sm font-medium text-maroon-foreground"
          >
            Back to home
          </Link>
          <Link to="/contact" className="text-sm font-medium text-maroon underline-offset-4 hover:underline">
            Other ways to reach us
          </Link>
        </div>
      </div>
    );
  }

  const { errors, isSubmitting } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field
          id="parentName"
          label="Parent or guardian full name"
          error={errors.parentName?.message}
        >
          <Input
            id="parentName"
            autoComplete="name"
            className={fieldClass}
            {...form.register("parentName")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            {...form.register("email")}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            {...form.register("phone")}
          />
        </Field>
        <Field id="section" label="School section" error={errors.section?.message}>
            <select
            id="section"
            className={cn(fieldClass, "w-full border px-3")}
            {...form.register("section")}
          >
            <option value="nursery">Nursery</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
          </select>
        </Field>
        <Field id="childName" label="Child’s name" error={errors.childName?.message}>
          <Input id="childName" className={fieldClass} {...form.register("childName")} />
        </Field>
        <Field id="childAge" label="Child’s age" error={errors.childAge?.message}>
          <Input id="childAge" className={fieldClass} {...form.register("childAge")} />
        </Field>
      </div>
      <Field id="message" label="Message (optional)" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={4}
          className="rounded-sm border-border bg-paper"
          {...form.register("message")}
        />
      </Field>
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Submit enquiry"}
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
    <Label htmlFor={id} className="text-sm font-medium text-ink">
      {label}
    </Label>
    {children}
    {error && (
      <p role="alert" className="text-sm text-destructive">
        {error}
      </p>
    )}
  </div>
);

export default EnquiryForm;
