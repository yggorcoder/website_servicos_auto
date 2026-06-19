import {
  Armchair,
  ArrowUpRight,
  Car,
  Circle,
  Diamond,
  Gem,
  LayoutDashboard,
  Lightbulb,
  Sparkles,
  SprayCan,
  Wind,
  Zap,
} from "lucide-react";
import { getWhatsAppUrl } from "../constants/whatsapp";

const mainServices = [
  {
    title: "Películas Automotivas",
    description: "Proteção solar, conforto térmico e privacidade.",
    category: "Películas",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80&auto=format&fit=crop",
    alt: "Instalação de película automotiva - Lapa Customs",
  },
  {
    title: "Películas Residenciais e Comerciais",
    description: "Mais conforto, redução de calor e elegância.",
    category: "Películas",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop",
    alt: "Película residencial e comercial - Lapa Customs",
  },
  {
    title: "PPF",
    description: "Proteção inteligente para a pintura do veículo.",
    category: "Proteção",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80&auto=format&fit=crop",
    alt: "Aplicação de PPF automotivo - Lapa Customs",
  },
  {
    title: "Envelopamento",
    description: "Mudança de visual com acabamento premium.",
    category: "Customização",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format&fit=crop",
    alt: "Envelopamento automotivo premium - Lapa Customs",
  },
  {
    title: "Som e Iluminação",
    description: "Alto-falantes, LED e muito mais.",
    category: "Som & LED",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80&auto=format&fit=crop",
    alt: "Som automotivo e iluminação LED - Lapa Customs",
  },
  {
    title: "Acessórios para Caminhonetes",
    description: "Capotas, Santo Antônio, estribos e muito mais.",
    category: "Caminhonetes",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80&auto=format&fit=crop",
    alt: "Acessórios para caminhonetes - Lapa Customs",
  },
  {
    title: "Acessórios Automotivos",
    description: "Personalização, proteção e funcionalidade.",
    category: "Acessórios",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format&fit=crop",
    alt: "Acessórios automotivos - Lapa Customs",
  },
];

const detailingServices = [
  {
    title: "Lavagem Detalhada",
    description: "Limpeza minuciosa por etapas, preservando pintura e acabamentos.",
    icon: Car,
  },
  {
    title: "Limpeza de Bancos",
    description: "Higienização profunda de estofados com produtos adequados ao material.",
    icon: Armchair,
  },
  {
    title: "Limpeza Técnica de Motor",
    description: "Desengorduramento seguro que valoriza o compartimento do motor.",
    icon: Zap,
  },
  {
    title: "Revitalização de Faróis",
    description: "Recuperação de transparência e proteção contra amarelamento.",
    icon: Lightbulb,
  },
  {
    title: "Lavagem Técnica",
    description: "Método seguro com produtos específicos para cada superfície.",
    icon: SprayCan,
  },
  {
    title: "Hidratação de Couro",
    description: "Nutrição e proteção do couro para evitar ressecamento e rachaduras.",
    icon: Armchair,
  },
  {
    title: "Polimento Técnico",
    description: "Correção de micro-riscos e restauração do brilho da pintura.",
    icon: Sparkles,
  },
  {
    title: "Cristalização da Pintura",
    description: "Proteção e brilho intenso com acabamento espelhado duradouro.",
    icon: Gem,
  },
  {
    title: "Higienização Interna Completa",
    description: "Sanitização do interior, eliminando odores e acúmulo de sujeira.",
    icon: Wind,
  },
  {
    title: "Limpeza e Revitalização de Plásticos",
    description: "Renovação de painéis e plásticos internos com acabamento de fábrica.",
    icon: LayoutDashboard,
  },
  {
    title: "Vitrificação de Pintura",
    description: "Revestimento cerâmico de alta durabilidade contra agentes externos.",
    icon: Diamond,
  },
  {
    title: "Limpeza e Proteção de Rodas e Pneus",
    description: "Descontaminação, brilho e selante para rodas e pneus.",
    icon: Circle,
  },
];

function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-graphite-border bg-graphite-card transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-black/20">
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
        <h3 className="text-lg font-semibold leading-snug sm:text-xl">{service.title}</h3>
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
  );
}

function DetailingCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group flex items-start gap-4 rounded-xl border border-graphite-border bg-graphite-card p-4 transition-colors hover:border-accent/30 sm:p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
        <Icon size={22} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold leading-snug sm:text-base">{service.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
          {service.description}
        </p>
        <a
          href={getWhatsAppUrl(
            `Olá! Vi o site da Lapa Customs e gostaria de solicitar um orçamento para: ${service.title}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-hover sm:text-sm"
        >
          Solicitar Orçamento
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

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
            Tudo o que você precisa para{" "}
            <span className="font-medium text-accent">proteger</span>,{" "}
            <span className="font-medium text-accent">personalizar</span> e{" "}
            <span className="font-medium text-accent">valorizar</span> seu veículo.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
            Principais <span className="text-accent">Serviços</span>
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
              Estética <span className="text-accent">Automotiva</span>
            </h3>
            <p className="mt-3 text-sm text-text-muted sm:text-base">
              Cuidado que valoriza. Resultado que impressiona.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detailingServices.map((service) => (
              <DetailingCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
