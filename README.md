# Microcemento Sanabria — Landing Page

Landing page de una sola página para **Microcemento Sanabria**, orientada a generar consultas por WhatsApp. Construida con **React + Vite + Tailwind CSS**.

---

## 1. Requisitos

- [Node.js](https://nodejs.org/) 18 o superior (incluye `npm`).
- Un editor de código (recomendado: [VS Code](https://code.visualstudio.com/)).

Para verificar que tenés Node instalado, abrí una terminal y corré:

```bash
node -v
npm -v
```

---

## 2. Instalación

Descomprimí el proyecto, abrí una terminal dentro de la carpeta `microcemento-sanabria` y corré:

```bash
npm install
```

Esto descarga las dependencias (React, Vite, Tailwind) en la carpeta `node_modules`.

---

## 3. Ejecutar en local

```bash
npm run dev
```

Va a abrir un servidor en algo como `http://localhost:5173`. Cada vez que guardes un cambio, la página se actualiza sola.

Para generar la versión final optimizada (la que se sube al hosting):

```bash
npm run build
```

Esto crea la carpeta `dist/` con todo listo para producción. Para previsualizar exactamente ese resultado final antes de publicarlo:

```bash
npm run preview
```

---

## 4. Cómo cambiar el número de WhatsApp

Todo el proyecto usa **un solo archivo central** para esto, así no hay que buscar el número en 20 lugares distintos:

```
src/config/site.js
```

Abrilo y editá esta línea:

```js
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5491122334455";
```

Reemplazá `"5491122334455"` por tu número real, con este formato:

- Código de país (`54` para Argentina)
- Código de área **sin el 0** (ej: `11` para CABA/GBA)
- Número **sin el 15**
- Todo junto, sin espacios, sin `+` y sin guiones

Ejemplo: para el número `011 15-2233-4455` → `5491122334455`.

**Alternativa por variable de entorno:** si preferís no tocar el código, copiá `.env.example` a `.env` y completá `VITE_WHATSAPP_NUMBER=tu_numero`. Sirve, por ejemplo, para tener un número distinto en producción sin modificar el archivo de configuración.

Los **mensajes predeterminados** que se envían desde cada botón (Hero, Galería, Proceso, CTA final, botón flotante) también se editan en `src/config/site.js`, dentro del objeto `COPY`.

---

## 5. Cómo cambiar las imágenes

### Logo
El logo real ya está integrado en:
```
src/assets/logo-full.png   (isotipo + texto — header, footer, hero)
src/assets/logo-icon.png   (solo el ícono "M/S" — usos chicos)
```
Para reemplazarlo, sobrescribí esos archivos por una versión nueva con el mismo nombre (o actualizá las rutas en `src/components/Logo.jsx`).

### Favicon
Los íconos de pestaña/celular ya están generados a partir del logo, en `public/` (`favicon.png`, `favicon-192.png`, `apple-touch-icon.png`, `og-image-logo.png`). Si cambiás el logo, regenerá estos archivos con cualquier herramienta online de favicon.

### Fotos de trabajos (galería) y servicios
Mientras no haya fotos reales, cada tarjeta muestra una **textura de cemento generada por CSS** con el nombre del proyecto — así no depende de bancos de imágenes externos y la página carga rápido.

Para poner una foto real:

1. Guardá la imagen en `src/assets/gallery/` (creá la carpeta), por ejemplo `bano-palermo.jpg`.
2. En `src/config/site.js`, importá y asigná la imagen al proyecto correspondiente dentro de `GALLERY_ITEMS`:

```js
import banoPalermo from "../assets/gallery/bano-palermo.jpg";

export const GALLERY_ITEMS = [
  { id: 1, project: "Depto Palermo", room: "Baño", finish: "Microcemento gris cemento", size: "tall", image: banoPalermo },
  // ...
];
```

Listo — la card usa automáticamente la foto real en vez de la textura placeholder, tanto en la grilla como en el lightbox.

---

## 6. Cómo cambiar las redes sociales y otros datos

Todo en `src/config/site.js`, objeto `COMPANY`:

```js
export const COMPANY = {
  name: "Microcemento Sanabria",
  email: "contacto@microcementosanabria.com",
  location: "Buenos Aires, Argentina",
  social: {
    instagram: "https://instagram.com/tu_usuario",
    facebook: "https://facebook.com/tu_pagina",
    tiktok: "https://tiktok.com/@tu_usuario",
  },
};
```

---

## 7. Formulario de contacto y backend

El formulario **no necesita backend** para funcionar: arma el mensaje con los datos cargados y abre WhatsApp directamente. Para una primera versión de landing esto es lo más simple y confiable — no hay servidor que mantener ni costos extra, y el lead llega igual, por el canal que más se usa.

Si más adelante querés guardar los leads en una base de datos, mandarlos por email o conectar un CRM, el único lugar a tocar es la función `sendToBackend` en `src/components/Contact.jsx`. Ya está integrada en el flujo de envío (se llama antes de abrir WhatsApp), así que alcanza con completarla con tu llamada a la API:

```js
async function sendToBackend(payload) {
  await fetch("https://tu-api.com/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
```

Lo mismo aplica si más adelante sumás Google Analytics o Meta Pixel: se agregan como scripts en `index.html`, sin tocar el resto del proyecto.

---

## 8. Estructura del proyecto

```
microcemento-sanabria/
├── index.html                 # HTML base, SEO, Open Graph, favicon
├── public/                    # Favicons, robots.txt, imagen de Open Graph
├── src/
│   ├── main.jsx                # Punto de entrada
│   ├── App.jsx                 # Ensambla todas las secciones
│   ├── index.css               # Tailwind + estilos globales de marca
│   ├── config/
│   │   └── site.js             # ⭐ CONFIGURACIÓN CENTRAL (editar acá)
│   ├── utils/
│   │   └── whatsapp.js         # Lógica para abrir WhatsApp
│   ├── hooks/
│   │   └── useReveal.js        # Animaciones al hacer scroll
│   ├── assets/
│   │   ├── logo-full.png
│   │   └── logo-icon.png
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Services.jsx        # "Qué hacemos"
│       ├── Gallery.jsx         # Trabajos realizados + lightbox
│       ├── Benefits.jsx        # "Por qué elegirnos"
│       ├── Process.jsx         # Proceso de trabajo
│       ├── CTA.jsx             # Llamada a la acción final
│       ├── Contact.jsx         # Formulario
│       ├── Footer.jsx
│       ├── WhatsAppButton.jsx  # Botón flotante
│       ├── PlaceholderImage.jsx
│       ├── Logo.jsx
│       ├── Reveal.jsx          # Wrapper de animación
│       └── icons.jsx           # Íconos SVG propios
```

---

## 9. Deploy (publicar la página)

La opción más simple y gratuita es **Vercel**:

1. Subí el proyecto a un repositorio en GitHub (o GitLab/Bitbucket).
2. Entrá a [vercel.com](https://vercel.com), creá una cuenta gratis e importá el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite. Dejá la configuración por defecto:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Si usás el archivo `.env` para el número de WhatsApp, cargá `VITE_WHATSAPP_NUMBER` en Vercel → *Settings → Environment Variables*.
5. Deploy. En 1-2 minutos tenés la URL pública (`tu-proyecto.vercel.app`), y después podés conectar tu dominio propio gratis desde el mismo panel.

**Alternativas igual de válidas y gratuitas:** Netlify (mismo flujo que Vercel) o Cloudflare Pages (mejor si ya usás Cloudflare para el dominio/DNS). Cualquiera de las tres sirve perfecto para esta landing; Vercel se recomienda simplemente por ser la más simple para un proyecto Vite sin backend propio.

---

## 10. Notas de performance y tecnología

- **Sin librerías innecesarias:** los íconos, la galería con lightbox y las animaciones de scroll están hechos a mano (sin lucide-react, sin librerías de carousel/lightbox), para mantener el bundle liviano.
- **Lazy loading** en las imágenes reales que se agreguen a la galería (`loading="lazy"` ya incluido en `PlaceholderImage.jsx`).
- **Fuentes:** Anton (títulos de impacto), Oswald (subtítulos/labels), Inter (texto de cuerpo), cargadas desde Google Fonts con `preconnect` para no bloquear el render.
- **Accesibilidad:** foco visible por teclado, `prefers-reduced-motion` respetado (si el usuario desactivó animaciones en su sistema, la página no anima).
