/**
 * PlaceholderImage
 * ------------------------------------------------------------
 * Mientras no haya fotos reales de obras, esta pieza genera una
 * textura de cemento 100% con CSS (sin depender de bancos de
 * imágenes externos, lo que además ayuda a la performance).
 *
 * CÓMO REEMPLAZAR POR UNA FOTO REAL:
 * 1) Agregá el archivo a src/assets/gallery/tu-foto.jpg
 * 2) Importalo donde se use este componente:
 *      import foto1 from "../assets/gallery/tu-foto.jpg";
 * 3) Pasale la prop `image={foto1}` a <PlaceholderImage />.
 *    Si `image` viene definido, se muestra la foto real y se
 *    descarta automáticamente la textura generada.
 */
export default function PlaceholderImage({
  image,
  label,
  tag,
  className = "",
  seed = 0,
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={label || tag || "Trabajo de microcemento"}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  // Variación sutil del tono según "seed" para que la grilla no se
  // vea repetida cuando hay varias placeholders juntas.
  const tones = [
    ["#2a2a2a", "#1a1a1a"],
    ["#242424", "#151515"],
    ["#2c2c2c", "#181818"],
    ["#272727", "#141414"],
  ];
  const [c1, c2] = tones[seed % tones.length];

  return (
    <div
      className={`texture-noise relative flex h-full w-full items-end overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${c1} 0%, ${c2} 60%, #0d0d0d 100%)`,
      }}
      role="img"
      aria-label={label || tag || "Textura de microcemento"}
    >
      {/* Línea diagonal roja, eco del corte del isotipo */}
      <div
        className="pointer-events-none absolute -right-6 -top-10 h-32 w-32 opacity-70"
        style={{
          background:
            "linear-gradient(135deg, transparent 46%, rgba(229,9,20,0.55) 47%, rgba(229,9,20,0.55) 49%, transparent 50%)",
        }}
      />
      {tag && (
        <span className="absolute left-3 top-3 rounded-sm bg-black/50 px-2 py-1 font-head text-[10px] uppercase tracking-widest text-cement-light">
          {tag}
        </span>
      )}
      {label && (
        <span className="relative z-10 w-full bg-gradient-to-t from-black/70 to-transparent p-3 font-head text-xs uppercase tracking-wider text-bone/80">
          {label}
        </span>
      )}
    </div>
  );
}
