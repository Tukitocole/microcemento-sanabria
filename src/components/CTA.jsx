import { COPY } from "../config/site";
import { whatsappHref } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="texture-noise relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Acento diagonal, eco del isotipo */}
      <div
        className="pointer-events-none absolute -right-1/3 top-0 h-full w-2/3 opacity-[0.14]"
        style={{
          background:
            "linear-gradient(115deg, transparent 44%, #E50914 49%, #E50914 51%, transparent 56%)",
        }}
      />
      <div className="container-page relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[0.95] text-bone sm:text-5xl lg:text-6xl">
            {COPY.ctaSection.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-md text-base text-cement-light sm:text-lg">
            {COPY.ctaSection.text}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href={whatsappHref(COPY.ctaSection.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 inline-flex px-10 py-5 text-base sm:text-lg"
          >
            <WhatsAppIcon className="h-6 w-6" />
            {COPY.ctaSection.button}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
