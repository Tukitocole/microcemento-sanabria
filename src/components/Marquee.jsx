const items = ["Microcemento", "Pisos", "Paredes", "Baños", "Cocinas", "Locales"];

function MarqueeGroup() {
  return (
    <span className="marquee-group" aria-hidden="true">
      {items.map((item) => (
        <span key={item} className="marquee-item">
          {item}<span className="marquee-dot">•</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Aplicaciones de microcemento">
      <div className="marquee-track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
