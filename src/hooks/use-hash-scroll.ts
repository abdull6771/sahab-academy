import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");
    const run = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const t = window.setTimeout(run, 50);
    return () => window.clearTimeout(t);
  }, [hash, pathname]);
}
