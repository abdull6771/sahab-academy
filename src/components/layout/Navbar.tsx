import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { applyHref, primaryNav, type NavItem } from "@/data/nav";
import { useLockBody } from "@/hooks/use-lock-body";
import { useScrolled } from "@/hooks/use-scrolled";
import Wordmark from "@/components/brand/Wordmark";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type NavbarProps = {
  overlay: boolean;
};

const Navbar = ({ overlay }: NavbarProps) => {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const solid = !overlay || scrolled || open;
  const inverted = overlay && !scrolled && !open;

  useLockBody(open);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "relative z-50 transition-[background,box-shadow,backdrop-filter,color] duration-300",
        solid
          ? "border-b border-border/80 bg-paper/92 text-ink shadow-[0_1px_0_hsl(var(--border))] backdrop-blur-md"
          : "bg-gradient-to-b from-ink/55 to-transparent text-paper"
      )}
    >
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-4 lg:h-[4.75rem]">
        <Wordmark inverted={inverted} className="min-w-0 shrink" />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavItemLink key={item.label} item={item} inverted={inverted} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={applyHref}
            className={cn(
              "inline-flex rounded-sm px-3 py-2 text-xs font-medium tracking-wide transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-sm",
              inverted
                ? "bg-paper text-ink hover:bg-paper-deep"
                : "bg-maroon text-maroon-foreground hover:bg-maroon-deep"
            )}
          >
            Apply now
          </Link>
          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-sm xl:hidden",
              inverted ? "text-paper" : "text-ink"
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 flex h-[calc(100dvh-4.25rem)] flex-col bg-paper lg:h-[calc(100dvh-7rem)] xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            <Accordion type="single" collapsible className="w-full">
              {primaryNav.map((item) =>
                item.children ? (
                  <AccordionItem key={item.label} value={item.label} className="border-border">
                    <AccordionTrigger className="py-4 font-display text-2xl font-medium tracking-tight hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1 pb-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              to={child.href}
                              className="block py-3 text-base text-ink-soft"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <div key={item.label} className="border-b border-border">
                    <Link
                      to={item.href}
                      className="block py-4 font-display text-2xl font-medium tracking-tight"
                    >
                      {item.label}
                    </Link>
                  </div>
                )
              )}
            </Accordion>
          </div>
          <div className="border-t border-border p-5">
            <Link
              to={applyHref}
              className="flex h-14 items-center justify-center rounded-sm bg-maroon text-base font-medium text-maroon-foreground"
            >
              Apply now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItemLink = ({ item, inverted }: { item: NavItem; inverted: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = cn(
    "inline-flex items-center gap-1 px-3 py-2 text-[0.82rem] font-medium tracking-wide transition-colors",
    inverted ? "text-paper/85 hover:text-paper" : "text-ink-soft hover:text-ink"
  );

  if (!item.children) {
    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          cn(linkClass, isActive && (inverted ? "text-paper" : "text-maroon"))
        }
        end={item.href === "/"}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link to={item.href} className={linkClass}>
          {item.label}
        </Link>
        <button
          type="button"
          className={cn("p-1", inverted ? "text-paper/70" : "text-ink-soft")}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={id}
          aria-label={`${item.label} menu`}
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        </button>
      </div>
      {open && (
        <div
          id={id}
          role="menu"
          className="absolute left-0 top-full z-50 min-w-[16rem] border border-border bg-paper py-3 shadow-[0_12px_40px_-20px_rgba(28,22,18,0.35)]"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              role="menuitem"
              className="block px-4 py-2.5 hover:bg-stone"
              onClick={() => setOpen(false)}
            >
              <span className="block text-sm font-medium text-ink">{child.label}</span>
              {child.description && (
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
