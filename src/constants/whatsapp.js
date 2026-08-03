// Altere o número abaixo para o WhatsApp da Lapa Customs (DDI + DDD + número, sem espaços)
export const WHATSAPP_NUMBER = "5583991353860";

/** WhatsApp específico da seção Estética Automotiva (+55 83 9981-8533). */
export const WHATSAPP_NUMBER_DETAILING = "558399818533";

export const WHATSAPP_MESSAGE =
  "Olá! Vi o site da Lapa Customs e gostaria de fazer um orçamento para o meu carro.";

export const getWhatsAppUrl = (
  message = WHATSAPP_MESSAGE,
  number = WHATSAPP_NUMBER
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** Dispara o evento de Contato do Meta Pixel ao clicar em links de WhatsApp. */
export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contato");
  }
}
