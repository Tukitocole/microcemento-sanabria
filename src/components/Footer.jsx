import Logo from "./Logo";
import { COMPANY, NAV_LINKS } from "../config/site";
import { MailIcon, PinIcon, InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "./icons";
import { whatsappHref } from "../utils/whatsapp";

const socialLinks = [
  { href: COMPANY.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: COMPANY.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: COMPANY.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="full" className="h-10 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cement-light">
            Terminaciones en microcemento para pisos, paredes y superficies. Diseño moderno, resistente y a medida.
          </p>
        </div>

        <div>
          <h4 className="font-head text-xs uppercase tracking-widest text-cement-light">Navegación</h4>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="footer-link text-sm text-bone/80 hover:text-blaze">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-head text-xs uppercase tracking-widest text-cement-light">Contacto</h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-bone/80 transition-colors hover:text-blaze"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-bone/80 transition-colors hover:text-blaze"
              >
                <MailIcon className="h-4 w-4 shrink-0" /> {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-bone/80">
              <PinIcon className="h-4 w-4 shrink-0" /> {COMPANY.location}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-head text-xs uppercase tracking-widest text-cement-light">Seguinos</h4>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-link flex h-10 w-10 items-center justify-center border border-white/10 text-bone/80 hover:border-blaze hover:text-blaze"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="container-page text-center text-xs text-cement">
          © {year} {COMPANY.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
