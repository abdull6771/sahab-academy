import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
};

const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    const set = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    set("description", description);
    set("og:title", title, "property");
    set("og:description", description, "property");
    set("og:image", "/og-image.png", "property");
    set("twitter:title", title);
    set("twitter:description", description);
  }, [title, description]);

  return null;
};

export default Seo;
