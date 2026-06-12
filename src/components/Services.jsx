import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "../constants/whatsapp";

const services = [
  {
    title: "Instalação de Acessórios",
    description:
      "Multimídia, sensores, câmeras, frisos, spoilers e acessórios selecionados com instalação impecável.",
    category: "Acessórios",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format&fit=crop",
    alt: "Veículo premium com acessórios automotivos instalados - Lapa Customs",
  },
  {
    title: "Customização Estética",
    description:
      "Envelopamento, pintura personalizada, rodas, suspensão e modificações visuais que destacam seu estilo.",
    category: "Customização",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format&fit=crop",
    alt: "Serviço de customização estética automotiva - Lapa Customs",
  },
  {
    title: "Estética Automotiva / Detailing",
    description:
      "Polimento técnico, vitrificação, higienização interna e tratamentos que devolvem o brilho de fábrica.",
    category: "Detailing",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80&auto=format&fit=crop",
    alt: "Estética automotiva e detailing profissional - Lapa Customs",
  },
  {
    title: "Iluminação em LED",
    description:
      "Faróis, DRL, interior, teto e underglow com LEDs de alta qualidade e acabamento profissional.",
    category: "Iluminação",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80&auto=format&fit=crop",
    alt: "Instalação de iluminação LED automotiva - Lapa Customs",
  },
  {
    title: "Upgrades de Performance",
    description:
      "Escapamentos, filtros, reprogramações e melhorias que elevam desempenho com segurança e confiabilidade.",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format&fit=crop",
    alt: "Upgrades de performance automotiva - Lapa Customs",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="border-t border-graphite-border py-20 sm:py-28"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="services-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Serviços e <span className="text-accent">Produtos</span>
          </h2>
          <p className="mt-4 text-base text-text-muted sm:text-lg">
            Conheça nosso portfólio de serviços automotivos. Cada projeto é desenvolvido
            sob medida para o seu veículo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-graphite-border bg-graphite-card transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-graphite/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-shine backdrop-blur-sm">
                  {service.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted sm:text-base">
                  {service.description}
                </p>
                <a
                  href={getWhatsAppUrl(
                    `Olá! Vi o site da Lapa Customs e gostaria de solicitar um orçamento para: ${service.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Solicitar Orçamento
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
