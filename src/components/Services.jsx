import { COPY, SERVICES } from "../config/site";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="nosotros" className="relative bg-ink py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{COPY.about.eyebrow}</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 font-head text-3xl uppercase text-bone sm:text-4xl lg:text-5xl">
              {COPY.about.title}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-cement-light sm:text-lg">
              {COPY.about.text}
            </p>
          </Reveal>
        </div>

        <div
          id="servicios"
          className="mt-16 grid scroll-mt-24 grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
        >
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <article className="card-cement group relative h-full overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={`${s.title} - Microcemento Sanabria`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90"
                    />
                  ) : (
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                      <PlaceholderImage
                        tag="Aplicación"
                        label={s.title}
                        seed={i}
                      />
                    </div>
                  )}
                </div>

                <div className="p-4 transition-transform duration-500 group-hover:-translate-y-0.5">
                  <h3 className="font-head text-base uppercase tracking-wide text-bone">
                    {s.title}
                  </h3>

                  <p className="mt-1 text-sm text-cement-light">
                    {s.desc}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-blaze transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
