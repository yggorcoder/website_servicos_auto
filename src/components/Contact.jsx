import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppUrl, trackWhatsAppClick } from "../constants/whatsapp";

export default function Contact() {
  return (
    <section
      id="contato"
      className="border-t border-graphite-border py-20 sm:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-graphite-border">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80&auto=format&fit=crop"
              alt="Oficina automotiva premium - atendimento personalizado Lapa Customs"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/90 to-graphite/70" />
          </div>

          <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-shine">
                <Phone size={14} aria-hidden="true" />
                Atendimento Personalizado
              </span>

              <h2 id="contact-title" className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Pronto para transformar seu carro?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                Fale diretamente com nossos especialistas. Tire dúvidas, envie fotos do
                seu veículo e receba um orçamento personalizado — rápido, sem burocracia.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-lg shadow-whatsapp/25 transition-all hover:bg-whatsapp-hover hover:shadow-whatsapp/40 active:scale-95"
              >
                <MessageCircle size={22} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
