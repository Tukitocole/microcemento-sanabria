import { useState } from "react";
import { whatsappHref } from "../utils/whatsapp";
import { WHATSAPP_DEFAULT_MESSAGE } from "../config/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-7 sm:right-7">
      <span
        role="tooltip"
        className={`absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-sm bg-ink-raised px-3 py-2 font-head text-xs uppercase tracking-wide text-bone shadow-lg transition-all duration-200 ${
          showTip ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
      >
        ¿Querés consultar?
      </span>

      <a
        href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        onFocus={() => setShowTip(true)}
        onBlur={() => setShowTip(false)}
        onClick={() => setShowTip(false)}
        className="animate-pulseSoft flex h-14 w-14 items-center justify-center rounded-full bg-blaze text-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-105 hover:bg-blaze-bright sm:h-16 sm:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}
