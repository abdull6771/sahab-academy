import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/layout/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no page for", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page not found | Sahab Academy"
        description="This page does not exist on the Sahab Academy website."
      />
      <section className="relative flex min-h-[80vh] items-center bg-ink text-paper">
        <div className="container-site py-32">
          <p className="eyebrow text-brass-soft">404</p>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-6xl">
            This page is not on the map.
          </h1>
          <p className="mt-5 max-w-md text-paper/70">
            The address may have changed, or the link may be mistyped. Return to
            the school home page to continue.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex h-12 items-center rounded-sm bg-paper px-8 text-sm font-medium text-ink"
          >
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
