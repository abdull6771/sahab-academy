import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Seo from "@/components/layout/Seo";
import ContactForm from "@/components/forms/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { school } from "@/data/site";
import { contactFaqs } from "@/data/contact";
import { applyHref } from "@/data/nav";

const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(school.mapsQuery)}&z=13&output=embed`;

const cards = [
  {
    icon: MapPin,
    title: "Address",
    body: school.location,
    href: undefined as string | undefined,
  },
  {
    icon: Mail,
    title: "Email",
    body: school.email,
    href: `mailto:${school.email}`,
  },
  {
    icon: Phone,
    title: "Telephone",
    body: "We do not publish a number on this website. Call in at the office in Babura, or email first.",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Office hours",
    body: "Visit during term time. Exact opening hours are confirmed at the school — we do not invent a timetable here.",
    href: undefined,
  },
];

const Contact = () => {
  const reduce = useReducedMotion();

  return (
    <>
      <Seo
        title="Contact | Sahab Academy"
        description="Write to Sahab Academy in Babura Local Government, Jigawa State, or send an enquiry to the school office."
      />

      <motion.section
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative isolate overflow-hidden bg-ink text-paper"
      >
        <img
          src="/images/campus/entrance.jpg"
          alt="Entrance to Sahab Academy in Babura"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="container-site relative z-10 grid items-end gap-10 pb-16 pt-36 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-40">
          <div className="lg:col-span-8">
            <p className="eyebrow text-brass-soft">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-6xl">
              We’re glad to hear from you.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75">
              Families in Babura and nearby communities can email the office,
              visit the campus, or send a short message below. Email is the
              surest way to reach us from this website.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#write"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-paper px-8 text-sm font-medium text-ink hover:bg-paper-deep"
              >
                Write a message
              </a>
              <Link
                to={applyHref}
                className="inline-flex h-12 items-center justify-center rounded-sm px-6 text-sm font-medium text-paper underline-offset-[6px] hover:underline"
              >
                Apply for a place
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <nav
        aria-label="Contact page"
        className="sticky top-[var(--header-offset)] z-40 border-b border-border bg-paper/92 backdrop-blur-md"
      >
        <div className="container-site flex gap-1 overflow-x-auto py-3">
          {[
            { href: "#details", label: "Details" },
            { href: "#write", label: "Message" },
            { href: "#map", label: "Map" },
            { href: "#faq", label: "Questions" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 px-3 py-2 text-sm text-ink-soft hover:text-maroon"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="details" className="section-y">
        <div className="container-site">
          <p className="eyebrow">The office</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How to reach Sahab Academy
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cards.map((c, i) => (
              <motion.li
                key={c.title}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={reduce ? undefined : { y: -3 }}
                className="border border-border bg-paper p-6 md:p-8"
              >
                <c.icon className="h-5 w-5 text-maroon" aria-hidden />
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{c.title}</h3>
                {c.href ? (
                  <a
                    href={c.href}
                    className="mt-3 block text-ink-soft underline-offset-4 hover:text-maroon hover:underline"
                  >
                    {c.body}
                  </a>
                ) : (
                  <p className="mt-3 text-ink-soft">{c.body}</p>
                )}
              </motion.li>
            ))}
          </ul>
          <div className="mt-4 flex items-start gap-3 border border-dashed border-border bg-paper-deep p-6 text-sm text-ink-soft">
            <Share2 className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden />
            <p>
              Social media accounts are not listed here. We do not publish empty
              Facebook or Instagram links.
            </p>
          </div>
        </div>
      </section>

      <section id="write" className="section-y bg-paper-deep">
        <div className="container-site grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="eyebrow">Message</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Send a note to the office.
            </h2>
            <p className="mt-4 text-ink-soft">
              Choose a subject so staff know whether you are asking about a
              place, a visit, or something else. No account is created.
            </p>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border bg-paper p-6 md:p-10 lg:col-span-7 lg:col-start-6"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section id="map" className="bg-stone">
        <div className="container-site py-12 md:py-16">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Location</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                Babura, Jigawa State
              </h2>
              <p className="mt-2 text-sm text-ink-soft">{school.location}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.mapsQuery)}`}
              className="text-sm font-medium text-maroon underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden border border-border bg-sand md:aspect-[21/9]">
            <iframe
              title="Map of Babura Local Government, Jigawa State"
              src={mapsSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              Before you write
            </h2>
            <p className="mt-4 text-ink-soft">
              Short answers drawn from how this school actually works — not a
              generic help centre.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {contactFaqs.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold tracking-tight hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-ink-soft">
                    <p>{item.a}</p>
                    {"href" in item && item.href && (
                      <Link
                        to={item.href}
                        className="mt-3 inline-flex text-sm font-medium text-maroon underline-offset-4 hover:underline"
                      >
                        {item.linkLabel}
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
