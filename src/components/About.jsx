import { Award, Heart, MapPin, Wrench } from "lucide-react";
import { FULL_ADDRESS, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from "../constants/location";

const highlights = [
  {
    icon: Heart,
    title: "Paixão por Carros",
    description: "Cada projeto nasce do amor genuíno pela cultura automotiva e pelos detalhes que fazem a diferença.",
  },
  {
    icon: Wrench,
    title: "Qualidade Técnica",
    description: "Instalação profissional, materiais premium e processos rigorosos para resultados duradouros.",
  },
  {
    icon: Award,
    title: "Atendimento Exclusivo",
    description: "Consultoria personalizada do orçamento à entrega — seu carro merece um tratamento único.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="border-t border-graphite-border bg-graphite-light py-20 sm:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="about-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre a <span className="text-accent">Lapa Customs</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            Somos especialistas em serviços automotivos, customização e acessórios de alta
            performance em João Pessoa, Paraíba. Combinamos técnica apurada, produtos
            selecionados e um olhar exclusivo para cada veículo que passa pela nossa oficina.
            Nossa missão é transformar carros em verdadeiras extensões da personalidade de
            quem dirige — com qualidade, estética impecável e atendimento que faz você se
            sentir único.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-graphite-border bg-graphite-card p-6 transition-colors hover:border-accent/30 sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Nossa <span className="text-accent">Localização</span>
            </h3>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 text-sm text-text-muted transition-colors hover:text-accent sm:text-base"
            >
              <MapPin size={18} aria-hidden="true" />
              {FULL_ADDRESS}
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-graphite-border shadow-xl shadow-black/20">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Mapa interativo — Localização da Lapa Customs em João Pessoa, PB"
              className="h-72 w-full sm:h-96 lg:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
