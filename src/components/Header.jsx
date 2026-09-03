import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../config/site";
import { whatsappHref } from "../utils/whatsapp";
import { COPY } from "../config/site";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear el scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Ir al inicio">
          <Logo variant="full" className="h-9 w-auto sm:h-11" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-link font-head text-sm uppercase tracking-wider text-cement-light hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref(COPY.hero.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 font-head text-sm font-semibold uppercase tracking-wider text-blaze transition-colors hover:text-blaze-bright lg:flex"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-bone lg:hidden"
          aria-label="Abrir menú"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Menú mobile */}
      <div
        className={`fixed inset-0 z-[60] bg-ink transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between sm:h-20">
          <Logo variant="full" className="h-9 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-bone"
            aria-label="Cerrar menú"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="container-page mt-8 flex flex-col gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-head text-3xl uppercase tracking-wide text-bone"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref(COPY.hero.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-fit"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
