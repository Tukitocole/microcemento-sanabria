import logoFull from "../assets/logo-full.png";
import logoIcon from "../assets/logo-icon.png";
import { COMPANY } from "../config/site";

/**
 * variant="full"  -> isotipo + texto (footer, hero)
 * variant="icon"  -> solo el ícono "M/S" (header en mobile / espacios chicos)
 */
export default function Logo({ variant = "full", className = "" }) {
  const src = variant === "icon" ? logoIcon : logoFull;
  return (
    <img
      src={src}
      alt={`${COMPANY.name} - logo`}
      className={className}
      draggable={false}
    />
  );
}
