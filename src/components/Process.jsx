import { COPY, PROCESS_STEPS } from "../config/site";
import Reveal from "./Reveal";
import { whatsappHref } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function Process() {
  return (
    <section id="proceso" className="relative scroll-mt-20 bg-ink-soft py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">{COPY.process.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-head text-3xl uppercase text-bone sm:text-4xl lg:text-5xl">
                {COPY.process.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <a
              href={whatsappHref(COPY.process.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir presupuesto
            </a>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* línea conectora, solo desktop */}
          <div className="section-divider absolute left-0 right-0 top-6 hidden lg:block" />

          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} className="relative">
              <div className="relative z-10 flex items-center gap-3 lg:block">
                <span className="font-display text-4xl leading-none text-blaze/25 sm:text-5xl">
                  {step.n}
                </span>
                <span className="h-px w-8 bg-blaze lg:mt-4 lg:block" />
              </div>
              <h3 className="relative z-10 mt-3 font-head text-lg uppercase tracking-wide text-bone">
                {step.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-cement-light">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
