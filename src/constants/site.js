import { WHATSAPP_NUMBER } from "./whatsapp";

export const SITE_NAME = "Lapa Customs";

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? "https://lapacustoms.com.br"
).replace(/\/$/, "");

export const PHONE_E164 = `+${WHATSAPP_NUMBER}`;
export const PHONE_DISPLAY = "(83) 99135-3860";

export const INSTAGRAM_URL = "https://instagram.com/lapa_customs";

export const SITE_DESCRIPTION =
  "Lapa Customs em João Pessoa, PB. PPF, películas automotivas e residenciais, envelopamento, fumê, estética premium automotiva, detailing, som, LED e acessórios. Orçamento via WhatsApp.";
