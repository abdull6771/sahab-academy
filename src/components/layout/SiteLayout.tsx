import { Outlet, useLocation } from "react-router-dom";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { cn } from "@/lib/utils";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SOLID_NAV = new Set(["/privacy", "/terms"]);

const SiteLayout = () => {
  const { pathname } = useLocation();
  useHashScroll();
  const overlay = !SOLID_NAV.has(pathname);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="fixed inset-x-0 top-0 z-50">
        <TopBar />
        <Navbar overlay={overlay} />
      </div>
      <main id="main" className={cn("flex-1", !overlay && "pt-[var(--header-offset)]")}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
