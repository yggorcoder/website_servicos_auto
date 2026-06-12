# Lapa Customs — Site Institucional

One-page institucional em React + Tailwind CSS + Lucide Icons, focada em branding, catálogo de serviços e conversão via WhatsApp.

## Início rápido

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Configurar WhatsApp

Edite `src/constants/whatsapp.js` e altere `WHATSAPP_NUMBER` para o número real (formato: DDI + DDD + número, ex: `5511987654321`).

## Build para produção

```bash
npm run build
npm run preview
```

Os arquivos estáticos ficam em `dist/`.

## Estrutura

```
src/
├── components/     # Seções modulares (Hero, About, Services, etc.)
├── constants/      # WhatsApp URL e mensagens
├── App.jsx
├── main.jsx
└── index.css       # Tema dark + tokens de cor
```
