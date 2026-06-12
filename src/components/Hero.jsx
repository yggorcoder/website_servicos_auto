import { ArrowRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "../constants/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80&auto=format&fit=crop"
          alt="Carro esportivo customizado em ambiente premium - Lapa Customs"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/90 via-graphite/75 to-graphite" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-shine sm:text-sm">
            <Sparkles size={14} aria-hidden="true" />
            João Pessoa, Paraíba
          </span>

          <h1
            id="hero-title"
            className="text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-accent via-accent-shine to-white bg-clip-text text-transparent">
              Fumês, PPFs, Envelopamento
            </span>
            , Estética Premium e Acessórios Automotivos
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg md:text-xl">
            Transformamos seu veículo com customização estética, acessórios premium e
            upgrades de performance. Cada projeto é único — feito com paixão, técnica e
            atendimento exclusivo em João Pessoa.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-accent/40 active:scale-95"
            >
              Fale com um Especialista
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-graphite-border bg-graphite-card/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-graphite-card active:scale-95"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
