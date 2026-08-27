import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from "../config/site";

/**
 * Abre WhatsApp con un mensaje predeterminado.
 * wa.me detecta automáticamente el dispositivo:
 * en celular abre la app de WhatsApp, en desktop abre WhatsApp Web.
 *
 * @param {string} [message] - Mensaje a precargar. Si no se pasa, usa el mensaje por defecto.
 */
export function openWhatsApp(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Devuelve el href de WhatsApp (útil para <a href> en vez de onClick,
 * lo que ayuda a SEO/accesibilidad y al "abrir en nueva pestaña" nativo del navegador).
 */
export function whatsappHref(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
