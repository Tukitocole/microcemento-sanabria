import { useEffect, useState } from "react";

export function useCountUp(target, active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setValue(target);
    let current = 0;
    const timer = window.setInterval(() => {
      current += 1;
      setValue(current);
      if (current >= target) window.clearInterval(timer);
    }, 90);
    return () => window.clearInterval(timer);
  }, [active, target]);
  return String(value).padStart(2, "0");
}
