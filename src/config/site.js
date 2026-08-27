/**
 * ============================================================
 *  CONFIGURACIÓN CENTRAL — MICROCEMENTO SANABRIA
 * ============================================================
 *  Este es EL ÚNICO archivo que necesitás tocar para:
 *   - Cambiar el número de WhatsApp
 *   - Cambiar redes sociales
 *   - Cambiar textos principales
 *   - Cambiar datos de contacto
 *
 *  No hace falta buscar estos datos en ningún otro archivo.
 * ============================================================
 */

// ------------------------------------------------------------
// WHATSAPP
// ------------------------------------------------------------
// Formato: código de país + código de área SIN el "0" + número, sin
// espacios, sin "+" y sin guiones.
// Ejemplo Buenos Aires (011): 5491122334455
// Podés sobreescribirlo sin tocar el código creando un archivo .env
// con VITE_WHATSAPP_NUMBER=5491122334455 (ver .env.example)
import banoms from "../assets/images/banoms.jpg";
import living from "../assets/images/livingms.jpg";
import escalera from "../assets/images/escalerams.jfif";
import balcon from "../assets/images/balconms.jpeg";
import comedor from "../assets/images/comedorms.jpg";
import mesa from "../assets/images/mesams.jpeg";
import piso from "../assets/images/pisoms.jpeg";
import bano2 from "../assets/images/bano2ms.jfif";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5491162772727";

// Mensaje que se usa si un botón no define uno propio
export const WHATSAPP_DEFAULT_MESSAGE =`Hola. Vi la página de Microcemento Sanabria y quiero consultar por un presupuesto de microcemento.

Ubicación:
Ambiente a realizar:
Superficie aproximada:

Quedo atento/a. ¡Gracias!`;
// ------------------------------------------------------------
// DATOS DE LA EMPRESA
// ------------------------------------------------------------
export const COMPANY = {
  name: "Microcemento Sanabria",
  shortName: "Sanabria",
  email: "contacto@microcementosanabria.com",
  location: "Buenos Aires, Argentina",
  // Placeholders: reemplazar por las URLs reales de las redes.
  social: {
    instagram: "https://instagram.com/microcementosanabria",
    facebook: "https://facebook.com/microcementosanabria",
    tiktok: "https://tiktok.com/@microcementosanabria",
  },
};

// ------------------------------------------------------------
// TEXTOS PRINCIPALES
// ------------------------------------------------------------
export const COPY = {
  hero: {
    eyebrow: "Microcemento premium",
    titleLine1: "MICROCEMENTO",
    titleLine2: "QUE TRANSFORMA ESPACIOS.",
    subtitle:
      "Terminaciones modernas, resistentes y elegantes para transformar tus espacios.",
    ctaPrimary: "Consultar por WhatsApp",
    ctaSecondary: "Ver trabajos",
    whatsappMessage:  `Hola  Vi la página de Microcemento Sanabria y quiero consultar por un presupuesto de microcemento.

 Ubicación:
 Ambiente a realizar:
 Superficie aproximada:

Quedo atento/a. ¡Gracias!`,
  },
  about: {
    eyebrow: "Qué hacemos",
    title: "Superficies con terminación profesional",
    text:
      "Aplicamos microcemento en pisos, paredes y superficies con foco en el detalle y la durabilidad. Trabajamos con materiales de calidad y atención personalizada en cada proyecto, para hogares y comercios que buscan un resultado moderno y sin fisuras.",
  },
  gallery: {
    eyebrow: "Trabajos realizados",
    title: "Proyectos que hablan por nosotros",
    whatsappMessage: `Hola. Vi la página de Microcemento Sanabria y quiero consultar por un presupuesto de microcemento.

Ubicación:
Ambiente a realizar:
Superficie aproximada:

Quedo atento/a. ¡Gracias!`,
  },
  benefits: {
    eyebrow: "Por qué elegirnos",
    title: "Terminaciones que resisten el uso diario",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso simple, de punta a punta",
    whatsappMessage: `Hola. Vi la página de Microcemento Sanabria y quiero consultar por un presupuesto de microcemento.

Ubicación:
Ambiente a realizar:
Superficie aproximada:

Quedo atento/a. ¡Gracias!`,
  },
  ctaSection: {
    title: "¿TENÉS UN PROYECTO EN MENTE?",
    text: "Contanos qué querés transformar y te asesoramos.",
    button: "Consultar por WhatsApp",
    whatsappMessage: `Hola. Vi la página de Microcemento Sanabria y quiero consultar por un presupuesto de microcemento.

Ubicación:
Ambiente a realizar:
Superficie aproximada:

Quedo atento/a. ¡Gracias!`,
  },
  contact: {
    eyebrow: "Contacto",
    title: "Pedí tu presupuesto",
    text: "Completá el formulario y se abre WhatsApp automáticamente con tu consulta ya armada.",
    button: "Enviar consulta",
  },
};

// ------------------------------------------------------------
// SERVICIOS / APLICACIONES (sección "Qué hacemos")
// ------------------------------------------------------------
export const SERVICES = [
  { id: "pisos", title: "Pisos", desc: "Superficies continuas, cálidas y sin juntas." },
  { id: "paredes", title: "Paredes", desc: "Revestimientos con textura y carácter." },
  { id: "banos", title: "Baños", desc: "Impermeable, moderno y fácil de mantener." },
  { id: "cocinas", title: "Cocinas", desc: "Resistencia diaria con estética minimalista." },
  { id: "locales", title: "Locales comerciales", desc: "Identidad de marca desde el piso." },
  { id: "exteriores", title: "Espacios exteriores", desc: "Terminaciones preparadas para la intemperie." },
  { id: "renovacion", title: "Renovación de superficies", desc: "Cubrimos lo existente, sin obra pesada." },
];


// ------------------------------------------------------------
// GALERÍA DE TRABAJOS
// ------------------------------------------------------------
// "image" queda en null a propósito: mientras no haya fotos reales,
// se muestra una textura de cemento generada por CSS con el nombre
// del proyecto. Para usar una foto real, agregá el archivo a
// src/assets/gallery/ y poné, por ejemplo: image: "/src/assets/gallery/bano-01.jpg"
export const GALLERY_ITEMS = [
  { id: 1, project: "Depto Palermo", room: "Baño", finish: "Microcemento gris cemento", size: "tall", image: banoms },
  { id: 2, project: "Casa Nordelta", room: "Living", finish: "Piso continuo gris claro", size: "wide", image: living },
  { id: 3, project: "Casa Belgrano", room: "Patio", finish: "Piso blanco + relieve", size: "normal", image: balcon },
  { id: 4, project: "Depto Recoleta", room: "Cocina", finish: "Piso Gris claro", size: "normal", image: comedor },
  { id: 5, project: "Casa Pilar", room: "Escalera", finish: "Microcemento antideslizante", size: "tall", image: escalera },
  { id: 6, project: "Mesas Microcementadas ", room: "renovacion de mesas", finish: "texturada negra/gris/blanca", size: "tall", image: mesa },
  { id: 7, project: "Depto Caballito", room: "Dormitorio", finish: "Piso Color rojo vino", size: "normal", image: piso },
  { id: 8, project: "Depto Tigre", room: "baño", finish: "Piso gris + mesada ", size: "normal", image: bano2 },
];

// ------------------------------------------------------------
// BENEFICIOS ("Por qué elegirnos")
// ------------------------------------------------------------
export const BENEFITS = [
  {
    title: "Terminaciones premium",
    text: "Cuidamos cada detalle para conseguir un resultado limpio y profesional.",
  },
  {
    title: "Alta resistencia",
    text: "Soluciones pensadas para el uso diario y el paso del tiempo.",
  },
  {
    title: "Diseño moderno",
    text: "El microcemento permite crear espacios modernos, minimalistas y elegantes.",
  },
  {
    title: "Atención personalizada",
    text: "Te asesoramos para encontrar la mejor solución para tu espacio.",
  },
  {
    title: "Presupuesto a medida",
    text: "Analizamos tu proyecto y te ofrecemos una propuesta acorde a tus necesidades.",
  },
];

// ------------------------------------------------------------
// PROCESO DE TRABAJO
// ------------------------------------------------------------
export const PROCESS_STEPS = [
  { n: "01", title: "Consulta", text: "Nos contás qué espacio querés transformar." },
  { n: "02", title: "Asesoramiento", text: "Analizamos el proyecto y recomendamos la mejor solución." },
  { n: "03", title: "Presupuesto", text: "Te presentamos una propuesta clara, sin letra chica." },
  { n: "04", title: "Aplicación", text: "Realizamos el trabajo cuidando cada detalle." },
  { n: "05", title: "Resultado", text: "Disfrutás un espacio completamente renovado." },
];

// ------------------------------------------------------------
// NAVEGACIÓN
// ------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];
