import { useEffect } from "react";

export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [locked]);
}
