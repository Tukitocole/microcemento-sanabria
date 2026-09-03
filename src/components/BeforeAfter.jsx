import { useState } from "react";
import { BEFORE_AFTER } from "../config/site";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  return (
    <section id="antes-despues" className="relative scroll-mt-20 bg-ink py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">Transformaciones reales</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-head text-3xl uppercase text-bone sm:text-4xl lg:text-5xl">
            Deslizá para ver el cambio
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cement-light">
            Compará el estado original con la terminación final de cada proyecto.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {BEFORE_AFTER.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <Comparison project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison({ project }) {
  const [position, setPosition] = useState(50);

  return (
    <article className="card-cement group">
      <div className="before-after" style={{ "--position": `${position}%` }}>
        <Surface image={project.after} label="Después" tone="after" />
        <div className="before-after-clip">
          <Surface image={project.before} label="Antes" tone="before" />
        </div>
        <div className="before-after-divider" aria-hidden="true">
          <span className="before-after-handle"><span>‹</span><span>›</span></span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="before-after-range"
          aria-label={`Comparar antes y después de ${project.title}`}
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-head text-xl uppercase text-bone">{project.title}</h3>
        <p className="mt-1 text-sm text-cement-light">{project.detail}</p>
      </div>
    </article>
  );
}

function Surface({ image, label, tone }) {
  return (
    <div className={`before-after-surface before-after-${tone}`}>
      {image && <img src={image} alt={`${label} del proyecto`} loading="lazy" />}
      <span className="before-after-label">{label}</span>
    </div>
  );
}
