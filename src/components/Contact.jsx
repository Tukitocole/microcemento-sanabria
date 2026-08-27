import { useState } from "react";
import { COPY, SERVICES } from "../config/site";
import { openWhatsApp } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

const initialForm = { name: "", phone: "", projectType: SERVICES[0]?.title || "", message: "" };

/**
 * El formulario NO requiere backend para funcionar: arma un mensaje
 * de WhatsApp con los datos cargados y abre la conversación directamente.
 *
 * Si en el futuro querés sumar un backend (guardar leads, mandar un
 * email, etc.), el lugar indicado es la función `sendToBackend` de
 * abajo: hoy no hace nada (comentada a propósito, ver sección API/
 * backend del README), pero la llamada ya está integrada en el flujo
 * de envío para que sea un solo punto a conectar.
 */
async function sendToBackend(payload) {
  // Ejemplo de integración futura:
  // await fetch("https://tu-api.com/leads", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  return Promise.resolve();
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setSending(true);
    const message = [
      `Hola ${COPY.hero.eyebrow ? "" : ""}Microcemento Sanabria.`,
      "",
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone || "-"}`,
      `Proyecto: ${form.projectType}`,
      `Mensaje: ${form.message}`,
    ].join("\n");

    try {
      await sendToBackend({ ...form, source: "landing-contact-form" });
    } finally {
      openWhatsApp(message);
      setForm(initialForm);
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="relative scroll-mt-20 bg-ink-soft py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">{COPY.contact.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-head text-3xl uppercase text-bone sm:text-4xl lg:text-5xl">
              {COPY.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cement-light">
              {COPY.contact.text}
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="card-cement p-6 sm:p-8">
            <div className="grid gap-5">
              <Field label="Nombre" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Tu nombre"
                  className="field"
                />
              </Field>

              <Field label="Teléfono">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Tu teléfono (opcional)"
                  className="field"
                />
              </Field>

              <Field label="Tipo de proyecto">
                <select value={form.projectType} onChange={update("projectType")} className="field">
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </Field>

              <Field label="Mensaje" required>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Contanos brevemente tu proyecto"
                  className="field resize-none"
                />
              </Field>

              <button type="submit" disabled={sending} className="btn-primary mt-2 w-full disabled:opacity-60">
                <WhatsAppIcon className="h-5 w-5" />
                {sending ? "Abriendo WhatsApp..." : COPY.contact.button}
              </button>

              <p className="text-center text-xs text-cement">
                Al enviar, se abre WhatsApp con tu consulta ya escrita.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-head text-xs uppercase tracking-widest text-cement-light">
        {label} {required && <span className="text-blaze">*</span>}
      </span>
      {children}
    </label>
  );
}
