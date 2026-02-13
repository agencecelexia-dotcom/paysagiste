import type { CompanyInfo } from "@/types";

export const company: CompanyInfo = {
  name: "Jardins de Prestige",
  legalName: "Jardins de Prestige SARL",
  siret: "123 456 789 00012",
  address: {
    street: "45 Avenue des Jardins",
    city: "Lyon",
    postalCode: "69003",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
  },
  phone: "+33 4 78 12 34 56",
  email: "contact@jardins-de-prestige.fr",
  hours: "Lun-Ven: 8h00-18h00, Sam: 9h00-13h00",
  socialLinks: {
    facebook: "https://facebook.com/jardinsdeprestige",
    instagram: "https://instagram.com/jardinsdeprestige",
    linkedin: "https://linkedin.com/company/jardinsdeprestige",
    pinterest: "https://pinterest.com/jardinsdeprestige",
  },
  coordinates: {
    lat: 45.7578,
    lng: 4.832,
  },
};
