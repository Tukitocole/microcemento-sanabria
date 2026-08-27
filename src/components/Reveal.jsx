import { useReveal } from "../hooks/useReveal";

/**
 * Envuelve cualquier contenido y lo anima con un fade + slide-up
 * suave cuando entra al viewport. Uso:
 *   <Reveal><h2>Título</h2></Reveal>
 *   <Reveal delay={150} as="li">...</Reveal>
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
