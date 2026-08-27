import { useEffect, useState } from "react";
import { COPY, GALLERY_ITEMS } from "../config/site";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";
import { whatsappHref } from "../utils/whatsapp";
import { WhatsAppIcon, CloseIcon, ArrowUpRight } from "./icons";

const sizeToSpan = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [active, setActive] = useState(null);

  // Cerrar el lightbox con la tecla Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section id="trabajos" className="relative scroll-mt-20 bg-ink-soft py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">{COPY.gallery.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-head text-3xl uppercase text-bone sm:text-4xl lg:text-5xl">
                {COPY.gallery.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <a
              href={whatsappHref(COPY.gallery.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-fit"
            >
              Consultar por un proyecto
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 4) * 60}
              className={`${sizeToSpan[item.size]} h-full`}
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="card-cement group block h-full w-full text-left"
                aria-label={`Ver proyecto ${item.project}`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                    <PlaceholderImage tag={item.room} label={item.project} seed={item.id} />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="w-full p-4">
                      <p className="font-head text-sm uppercase tracking-wide text-bone">{item.project}</p>
                      <p className="text-xs text-cement-light">{item.room} · {item.finish}</p>
                    </div>
                  </div>
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="card-cement w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <PlaceholderImage tag={active.room} label={active.project} seed={active.id} />
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-bone"
                aria-label="Cerrar"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-head text-xl uppercase text-bone">{active.project}</h3>
                <p className="text-sm text-cement-light">{active.room} · {active.finish}</p>
              </div>
              <a
                href={whatsappHref(`Hola, vi el proyecto "${active.project}" y quisiera consultar por algo similar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit shrink-0"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
