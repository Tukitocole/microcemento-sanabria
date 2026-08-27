import { COPY, BENEFITS } from "../config/site";
import Reveal from "./Reveal";
import { ShieldIcon, LayersIcon, SparkIcon, UserIcon, CalcIcon } from "./icons";

const icons = [ShieldIcon, LayersIcon, SparkIcon, UserIcon, CalcIcon];

export default function Benefits() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{COPY.benefits.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-head text-3xl uppercase text-bone sm:text-4xl lg:text-5xl">
              {COPY.benefits.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={b.title} delay={i * 70} className="h-full">
                <div className="group h-full bg-ink-soft p-6 transition-colors duration-300 hover:bg-ink-raised sm:p-7">
                  <Icon className="h-7 w-7 text-blaze transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <h3 className="mt-5 font-head text-lg uppercase tracking-wide text-bone">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cement-light">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
