import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { getWhatsAppUrl } from "../constants/whatsapp";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite-border/60 bg-graphite/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="group flex shrink-0 items-center" aria-label="Lapa Customs - Página inicial">
          <img
            src={logo}
            alt="Lapa Customs - Customização e Acessórios Automotivos em João Pessoa"
            className="logo-header h-9 w-auto max-w-[140px] object-contain object-left transition-opacity group-hover:opacity-90 sm:h-11 sm:max-w-[170px]"
            width={170}
            height={52}
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-95"
          >
            Fale com um Especialista
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-text-muted transition-colors hover:bg-graphite-card hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-graphite-border bg-graphite-light px-4 py-4 md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-text-muted transition-colors hover:bg-graphite-card hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-95"
                onClick={() => setOpen(false)}
              >
                Fale com um Especialista
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
