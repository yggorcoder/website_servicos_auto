// Altere o número abaixo para o WhatsApp da Lapa Customs (DDI + DDD + número, sem espaços)
export const WHATSAPP_NUMBER = "5511999999999";

export const WHATSAPP_MESSAGE =
  "Olá! Vi o site da Lapa Customs e gostaria de fazer um orçamento para o meu carro.";

export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
