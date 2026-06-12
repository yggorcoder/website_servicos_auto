const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite-border bg-graphite-light">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold">
              Lapa <span className="text-accent">Customs</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              Especialistas em acessórios automotivos, customização de carros e serviços
              de alta performance em João Pessoa, PB. Seu veículo, sua identidade.
            </p>
          </div>

          <nav aria-label="Links rápidos">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Links Rápidos
            </h2>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Serviços
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>Acessórios Premium</li>
              <li>Customização Estética</li>
              <li>Detailing Automotivo</li>
              <li>Iluminação LED</li>
              <li>Upgrades de Performance</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-graphite-border pt-8 sm:flex-row">
          <p className="text-center text-sm text-text-muted sm:text-left">
            &copy; {year} Lapa Customs. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs text-text-muted/70 sm:text-right">
            João Pessoa, Paraíba — Customização e Acessórios Automotivos
          </p>
        </div>
      </div>
    </footer>
  );
}
