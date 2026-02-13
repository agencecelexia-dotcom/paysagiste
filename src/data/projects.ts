import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "jardin-contemporain-lyon-6",
    slug: "jardin-contemporain-lyon-6",
    title: "Jardin Contemporain à Lyon 6ème",
    category: "jardin",
    shortDescription:
      "Création d'un jardin contemporain de 400m² mêlant lignes épurées et végétation luxuriante.",
    fullDescription:
      "Ce projet ambitieux consistait à transformer un terrain en friche en un jardin contemporain d'exception. Le design joue sur les contrastes entre les lignes géométriques des structures en acier corten et la douceur des massifs de graminées. Un bassin miroir central reflète le ciel et apporte une touche de sérénité à l'ensemble.",
    challenge:
      "Le terrain présentait un dénivelé important de 3 mètres et un sol argileux difficile à travailler. La proximité des voisins imposait également de créer des écrans végétaux pour préserver l'intimité.",
    solution:
      "Nous avons aménagé le dénivelé en trois terrasses successives reliées par des escaliers en pierre naturelle. Un système de drainage performant a été installé pour gérer les eaux pluviales. Des haies mixtes de bambous et de photinias assurent l'intimité tout au long de l'année.",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598902108854-d1446c07c44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&h=600&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
    surface: "400 m²",
    duration: "8 semaines",
    location: "Lyon 6ème",
    year: 2024,
    featured: true,
    services: ["creation-jardins"],
  },
  {
    id: "terrasse-bois-villeurbanne",
    slug: "terrasse-bois-villeurbanne",
    title: "Terrasse en Bois Exotique à Villeurbanne",
    category: "terrasse",
    shortDescription:
      "Aménagement d'une terrasse en ipé avec pergola bioclimatique et éclairage d'ambiance.",
    fullDescription:
      "Cette terrasse de 60m² en bois d'ipé a été conçue comme un véritable salon d'extérieur. Une pergola bioclimatique à lames orientables permet de profiter de l'espace par tous les temps. L'éclairage LED intégré crée une ambiance chaleureuse pour les soirées d'été.",
    challenge:
      "L'espace disponible était limité et devait intégrer une zone repas, un coin détente et un accès vers le jardin, le tout en maintenant une circulation fluide.",
    solution:
      "Nous avons optimisé chaque mètre carré grâce à un plan d'aménagement astucieux. La terrasse surélevée crée une transition naturelle entre l'intérieur et le jardin. Des jardinières intégrées apportent de la verdure sans empiéter sur l'espace de vie.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    surface: "60 m²",
    duration: "4 semaines",
    location: "Villeurbanne",
    year: 2024,
    featured: true,
    services: ["amenagement-terrasses"],
  },
  {
    id: "abords-piscine-ecully",
    slug: "abords-piscine-ecully",
    title: "Abords de Piscine à Écully",
    category: "piscine",
    shortDescription:
      "Aménagement des abords d'une piscine avec plage en travertin et jardins méditerranéens.",
    fullDescription:
      "Ce projet a consisté à créer un véritable écrin méditerranéen autour d'une piscine existante. La plage en travertin ivoire apporte élégance et fraîcheur, tandis que les massifs de lavande, romarin et oliviers évoquent les plus beaux jardins du Sud.",
    challenge:
      "Les abords de la piscine étaient en béton vieillissant et la végétation existante inadaptée. Le client souhaitait un espace haut de gamme évoquant les villas de la Côte d'Azur.",
    solution:
      "Nous avons entièrement repensé les abords avec du travertin premium, créé des massifs méditerranéens résistants à la sécheresse et installé un éclairage subaquatique et paysager pour magnifier l'ensemble en soirée.",
    images: [
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop",
    ],
    featuredImage: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&h=600&fit=crop",
    surface: "200 m²",
    duration: "6 semaines",
    location: "Écully",
    year: 2023,
    featured: true,
    services: ["creation-jardins", "amenagement-terrasses"],
  },
  {
    id: "cloture-pierre-caluire",
    slug: "cloture-pierre-caluire",
    title: "Clôture en Pierre Sèche à Caluire",
    category: "cloture",
    shortDescription:
      "Construction d'un muret en pierre sèche traditionnelle pour délimiter un parc arboré de caractère.",
    fullDescription:
      "Ce muret de 45 mètres linéaires en pierre dorée de Villebois a été construit selon les techniques traditionnelles de la pierre sèche. Il s'intègre parfaitement dans le paysage du parc arboré et apporte un charme authentique à la propriété.",
    challenge:
      "Le terrain en pente nécessitait une construction en paliers et les fondations devaient être adaptées au sol calcaire local.",
    solution:
      "Nos maçons paysagistes ont réalisé le muret en respectant les règles de l'art de la pierre sèche, avec un drainage soigné en pied de mur et une intégration de plantes de rocaille dans les interstices.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    ],
    featuredImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop",
    surface: "45 ml",
    duration: "3 semaines",
    location: "Caluire-et-Cuire",
    year: 2024,
    featured: false,
    services: ["clotures-murets"],
  },
  {
    id: "elagage-parc-tassin",
    slug: "elagage-parc-tassin",
    title: "Élagage d'un Parc Centenaire à Tassin",
    category: "elagage",
    shortDescription:
      "Élagage et mise en valeur d'arbres centenaires dans un parc historique classé.",
    fullDescription:
      "Intervention délicate sur un parc classé comprenant des chênes et des cèdres centenaires. Notre équipe d'arboristes certifiés a réalisé un élagage raisonné pour préserver la santé des arbres tout en sécurisant le site et en révélant la majesté de ces spécimens exceptionnels.",
    challenge:
      "Les arbres centenaires nécessitaient une approche très respectueuse, avec des contraintes liées au classement du site et à la proximité de bâtiments historiques.",
    solution:
      "Nous avons fait appel à nos arboristes grimpeurs les plus expérimentés, utilisant des techniques de taille douce et de haubanage pour préserver l'intégrité de chaque arbre. Un expert forestier a supervisé l'ensemble du chantier.",
    images: [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=600&fit=crop",
    ],
    featuredImage: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=600&fit=crop",
    surface: "2 hectares",
    duration: "2 semaines",
    location: "Tassin-la-Demi-Lune",
    year: 2023,
    featured: false,
    services: ["elagage"],
  },
  {
    id: "amenagement-complet-saint-cyr",
    slug: "amenagement-complet-saint-cyr",
    title: "Aménagement Complet à Saint-Cyr-au-Mont-d'Or",
    category: "amenagement-complet",
    shortDescription:
      "Transformation totale d'une propriété : jardin, terrasse, clôtures et arrosage automatique.",
    fullDescription:
      "Ce projet d'envergure a consisté à repenser entièrement les 1200m² d'espaces extérieurs d'une propriété familiale. Jardin paysager, terrasse en pierre naturelle, clôtures en aluminium, système d'arrosage intelligent — chaque élément a été pensé pour créer un ensemble cohérent et luxueux.",
    challenge:
      "Coordonner l'ensemble des corps de métier et respecter un planning serré de 12 semaines pour livrer le projet avant l'été.",
    solution:
      "Une gestion de projet rigoureuse avec un chef de chantier dédié a permis d'orchestrer les différentes phases de travaux. La planification minutieuse a permis de livrer le projet dans les temps, avec un résultat qui a dépassé les attentes du client.",
    images: [
      "https://images.unsplash.com/photo-1598902108854-d1446c07c44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1598902108854-d1446c07c44d?w=800&h=600&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1598902108854-d1446c07c44d?w=800&h=600&fit=crop",
    surface: "1200 m²",
    duration: "12 semaines",
    location: "Saint-Cyr-au-Mont-d'Or",
    year: 2024,
    featured: true,
    services: ["creation-jardins", "amenagement-terrasses", "clotures-murets", "arrosage-automatique"],
  },
];
