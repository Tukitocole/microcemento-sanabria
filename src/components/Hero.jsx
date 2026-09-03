import { COPY } from "../config/site";
import { whatsappHref } from "../utils/whatsapp";
import { WhatsAppIcon, ArrowDown } from "./icons";
import Reveal from "./Reveal";
import { useParallax } from "../hooks/useParallax";

/**
 * Fondo del Hero: generado 100% con CSS (gradientes + textura de
 * grano) para no depender de un banco de fotos externo y mantener
 * el peso de la página bajo. Para producción, se puede reemplazar
 * fácilmente por una foto o video real de una obra terminada:
 * agregá el archivo a src/assets/ y reemplazá el <div className="hero-bg">
 * por un <img> o <video> absolutamente posicionado con las mismas clases.
 */
export default function Hero() {
  const backgroundRef = useParallax();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-16 sm:pt-20"
    >
      {/* Fondo: textura de cemento con viñeta + haz diagonal rojo (motivo del isotipo) */}
      <div ref={backgroundRef} className="texture-noise absolute -inset-y-16 inset-x-0 will-change-transform">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, #171717 0%, #0a0a0a 55%, #050505 100%)",
          }}
        />
        <div
          className="hero-blaze absolute -left-1/4 top-0 h-full w-1/2 opacity-[0.18]"
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, #E50914 48%, #E50914 50%, transparent 58%)",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="container-page relative z-10 py-20">
        <Reveal>
          <span className="eyebrow">{COPY.hero.eyebrow}</span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero-title mt-6 max-w-full font-display text-[9vw] leading-[0.92] tracking-[-0.02em] text-bone sm:text-[8vw] lg:text-[6vw]">
            {COPY.hero.titleLine1}
            <br />
            <span className="text-blaze">{COPY.hero.titleLine2}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl font-body text-base text-cement-light sm:text-lg">
            {COPY.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="hero-actions mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappHref(COPY.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {COPY.hero.ctaPrimary}
            </a>
            <a href="#trabajos" className="btn-secondary">
              {COPY.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#nosotros"
        aria-label="Continuar scrolleando"
        className="hero-scroll absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cement-light/70 transition-colors hover:text-bone sm:flex"
      >
        <span className="font-head text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="hero-scroll-arrow h-4 w-4" />
      </a>
    </section>
  );
}
