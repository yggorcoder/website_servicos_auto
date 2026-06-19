import { FULL_ADDRESS, ADDRESS } from "../constants/location";
import {
  INSTAGRAM_URL,
  PHONE_E164,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../constants/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  telephone: PHONE_E164,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "João Pessoa",
  },
  sameAs: [INSTAGRAM_URL],
  hasMap: "https://www.google.com/maps/search/?api=1&query=R.+Abelardo+Pereira+dos+Santos,+10,+Bancários,+João+Pessoa,+PB",
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
