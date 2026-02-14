import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "preparer-jardin-printemps",
    title: "Comment Préparer Votre Jardin pour le Printemps",
    excerpt:
      "Le printemps approche et il est temps de préparer votre jardin. Découvrez nos conseils d'experts pour un jardin resplendissant dès les premiers beaux jours.",
    content: [
      {
        type: "paragraph",
        content:
          "Le printemps est la saison du renouveau au jardin. Après les mois d'hiver, vos espaces extérieurs ont besoin d'attention pour retrouver toute leur splendeur. Voici notre guide complet pour préparer votre jardin et profiter pleinement de la belle saison.",
      },
      {
        type: "heading",
        content: "Nettoyer et évaluer",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Commencez par un grand nettoyage : ramassez les feuilles mortes, taillez les branches sèches et désherbez les massifs. Profitez-en pour évaluer l'état général de votre jardin et identifier les zones nécessitant une attention particulière.",
      },
      {
        type: "heading",
        content: "Préparer le sol",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un sol bien préparé est la clé d'un jardin en bonne santé. Aérez la terre avec une grelinette, apportez du compost ou du terreau de qualité, et paillez vos massifs pour conserver l'humidité et limiter les mauvaises herbes.",
      },
      {
        type: "list",
        content: "Les étapes clés de la préparation du sol :",
        items: [
          "Aérer le sol sans le retourner",
          "Apporter du compost mûr (3-5 cm)",
          "Pailler les massifs avec du BRF ou des écorces",
          "Vérifier le pH du sol et ajuster si nécessaire",
        ],
      },
      {
        type: "heading",
        content: "Planifier les plantations",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Mars et avril sont les mois idéaux pour planter arbustes, vivaces et bulbes d'été. Pensez à varier les espèces pour assurer un jardin fleuri du printemps à l'automne. Privilégiez les plantes adaptées à votre sol et à votre exposition.",
      },
      {
        type: "quote",
        content:
          "Un jardin bien planifié au printemps, c'est la garantie de moments de bonheur tout au long de l'année.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=450&fit=crop",
    category: "saisons",
    author: "Antoine Leroy",
    publishDate: "2025-02-15",
    readingTime: 5,
    tags: ["printemps", "entretien", "plantation", "sol"],
  },
  {
    id: "2",
    slug: "tendances-jardins-2025",
    title: "Les Tendances Jardins 2025 : Nature et Élégance",
    excerpt:
      "Jardins naturalistes, matériaux durables, espaces de bien-être... Découvrez les grandes tendances qui façonneront les jardins de demain.",
    content: [
      {
        type: "paragraph",
        content:
          "L'année 2025 marque un tournant dans l'art des jardins. Plus que jamais, les tendances s'orientent vers un retour à la nature, alliant esthétisme et respect de l'environnement. Voici les tendances majeures à connaître.",
      },
      {
        type: "heading",
        content: "Le jardin naturaliste",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Inspiré des prairies sauvages, le jardin naturaliste privilégie les graminées, les vivaces et les plantes locales dans des compositions qui imitent la nature. Un style à la fois poétique et écologique qui séduit de plus en plus de propriétaires.",
      },
      {
        type: "heading",
        content: "Les espaces de bien-être extérieurs",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le jardin devient un véritable lieu de ressourcement avec l'intégration de spas, saunas extérieurs, bassins de baignade naturels et espaces de méditation. L'objectif : créer une bulle de sérénité chez soi.",
      },
      {
        type: "heading",
        content: "Matériaux nobles et durables",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Pierre naturelle locale, bois certifié, acier corten, gabions... Les matériaux durables et nobles sont au cœur des aménagements paysagers contemporains, alliant esthétique premium et responsabilité environnementale.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1598902108854-d1446c07c44d?w=800&h=450&fit=crop",
    category: "tendances",
    author: "Sophie Blanchard",
    publishDate: "2025-01-20",
    readingTime: 7,
    tags: ["tendances", "design", "naturaliste", "bien-être"],
  },
  {
    id: "3",
    slug: "entretenir-gazon-parfait",
    title: "Les Secrets d'un Gazon Parfait Toute l'Année",
    excerpt:
      "Tonte, arrosage, fertilisation... Tous les secrets de nos experts pour obtenir et maintenir un gazon digne des plus beaux jardins anglais.",
    content: [
      {
        type: "paragraph",
        content:
          "Un gazon impeccable est la signature d'un jardin soigné. Mais obtenir ce tapis vert parfait demande des soins réguliers et des techniques adaptées à chaque saison. Nos paysagistes partagent leurs secrets.",
      },
      {
        type: "heading",
        content: "La tonte : l'art du détail",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Tondez régulièrement (une fois par semaine au printemps) en ne coupant jamais plus d'un tiers de la hauteur du brin. Variez le sens de tonte à chaque passage pour éviter le couchage de l'herbe. En été, relevez la hauteur de coupe pour protéger le gazon de la sécheresse.",
      },
      {
        type: "heading",
        content: "L'arrosage intelligent",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Arrosez tôt le matin, en profondeur et moins fréquemment. Un arrosage de 20-30 minutes deux fois par semaine est préférable à un arrosage léger quotidien. Un système d'arrosage automatique avec sonde d'humidité optimise la consommation d'eau.",
      },
      {
        type: "list",
        content: "Le calendrier de fertilisation :",
        items: [
          "Mars : engrais riche en azote pour la reprise",
          "Juin : engrais équilibré pour le maintien",
          "Septembre : engrais potassique pour renforcer avant l'hiver",
          "Novembre : chaulage si le sol est acide",
        ],
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=450&fit=crop",
    category: "entretien",
    author: "Antoine Leroy",
    publishDate: "2024-11-10",
    readingTime: 6,
    tags: ["gazon", "entretien", "tonte", "arrosage"],
  },
  {
    id: "4",
    slug: "choisir-arbres-jardin",
    title: "Bien Choisir ses Arbres : Guide Complet",
    excerpt:
      "Choisir le bon arbre au bon endroit est essentiel. Notre guide vous aide à sélectionner les essences idéales pour votre jardin et votre climat.",
    content: [
      {
        type: "paragraph",
        content:
          "Un arbre est un investissement sur le long terme. Bien choisi et bien planté, il embellira votre jardin pendant des décennies. Voici nos conseils pour faire le bon choix.",
      },
      {
        type: "heading",
        content: "Évaluer votre espace",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Avant de choisir un arbre, évaluez précisément l'espace disponible. Mesurez la distance aux bâtiments, aux clôtures et aux autres arbres. Pensez à la taille adulte de l'arbre, tant en hauteur qu'en envergure.",
      },
      {
        type: "heading",
        content: "Adapter l'essence au terrain",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le type de sol, l'exposition et le climat de votre région sont déterminants. Un érable du Japon ne s'épanouira pas dans un sol calcaire, tout comme un olivier ne résistera pas aux hivers rigoureux du nord de la France.",
      },
      {
        type: "heading",
        content: "Nos essences favorites pour la région lyonnaise",
        level: 2,
      },
      {
        type: "list",
        content: "",
        items: [
          "Magnolia grandiflora : persistant, floraison spectaculaire",
          "Érable champêtre : rustique, superbes couleurs d'automne",
          "Olivier : résistant une fois établi, symbole méditerranéen",
          "Chêne vert : persistant, majestueux, longévité exceptionnelle",
          "Cerisier du Japon : floraison printanière remarquable",
        ],
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=450&fit=crop",
    category: "conseils",
    author: "Sophie Blanchard",
    publishDate: "2024-09-05",
    readingTime: 8,
    tags: ["arbres", "plantation", "essences", "conseil"],
  },
  {
    id: "5",
    slug: "amenager-terrasse-bois-lyon",
    title: "Aménager une Terrasse en Bois à Lyon : Guide Complet",
    excerpt:
      "Bois exotique, douglas, composite... Découvrez comment choisir les bons matériaux et concevoir une terrasse en bois durable et élégante adaptée au climat lyonnais.",
    content: [
      {
        type: "paragraph",
        content:
          "La terrasse en bois est l'une des extensions les plus prisées des jardins lyonnais. Elle crée un lien naturel entre l'intérieur de la maison et le jardin, offrant un espace de vie extérieur chaleureux et esthétique. Mais réussir une terrasse en bois demande de bien choisir ses matériaux, de soigner la pose et d'assurer un entretien régulier. Voici notre guide complet pour vous accompagner dans ce projet.",
      },
      {
        type: "heading",
        content: "Choisir le bon bois pour votre terrasse",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le choix du bois est primordial car il conditionne la durabilité, l'esthétique et l'entretien de votre terrasse. À Lyon, le climat semi-continental avec des étés chauds et secs et des hivers parfois rigoureux impose des contraintes particulières. Le bois doit résister aux variations hygrométriques importantes et aux rayons UV intenses de l'été.",
      },
      {
        type: "list",
        content: "Les essences les plus adaptées pour une terrasse à Lyon :",
        items: [
          "Ipé (Tabebuia) : bois exotique extrêmement dense, durabilité classe 1, aspect très esthétique",
          "Cumaru : excellente résistance aux intempéries, teinte brun-dorée chaleureuse",
          "Douglas traité : bois français, bon rapport qualité-prix, classe 3 minimum requis",
          "Mélèze : bois européen naturellement résistant, belle patine grise avec le temps",
          "Composite bois-plastique : zéro entretien, longévité maximale, idéal pour les expositions difficiles",
        ],
      },
      {
        type: "heading",
        content: "La conception et les dimensions",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Avant de commencer les travaux, il est indispensable de définir précisément la surface, la forme et le niveau de la terrasse. Une terrasse de plain-pied sera ancrée directement au sol, tandis qu'une terrasse surélevée nécessitera une structure porteuse robuste. Prévoyez une légère pente de 1 à 2 % pour l'évacuation des eaux de pluie, en vous éloignant de la maison. La largeur des lames – généralement entre 14 et 21 cm – influe sur le rendu visuel : des lames larges agrandissent visuellement l'espace.",
      },
      {
        type: "heading",
        content: "La pose : clés cachées ou visibles ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La technique de pose par clips cachés est la plus esthétique : aucune vis n'est visible en surface, le bois présente un aspect lisse et soigné. Elle est également préférable pour éviter les points d'entrée d'humidité. La pose vissée reste plus économique et facilite le remplacement d'une lame endommagée. Dans les deux cas, veillez à laisser un joint de dilatation de 5 à 8 mm entre chaque lame pour permettre les mouvements naturels du bois sans déformation.",
      },
      {
        type: "quote",
        content:
          "Une terrasse en bois bien conçue et bien entretenue prend de la valeur avec le temps. C'est un investissement qui transforme radicalement la qualité de vie à l'extérieur.",
      },
      {
        type: "heading",
        content: "Entretien et préservation dans le temps",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un nettoyage annuel au nettoyeur haute pression (basse pression pour les bois tendres) suivi d'une application d'huile ou de lasure spéciale terrasse suffit à maintenir votre bois en parfait état pendant des années. Évitez les produits trop agressifs qui ouvrent les fibres du bois. Si vous souhaitez laisser votre terrasse griser naturellement – tendance très appréciée actuellement –, un simple nettoyage annuel et une application de produit anti-UV suffisent. Nos paysagistes Jardins de Prestige assurent ce type d'entretien dans toute la métropole lyonnaise.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=450&fit=crop",
    category: "conseils",
    author: "Antoine Leroy",
    publishDate: "2025-01-10",
    readingTime: 7,
    tags: ["terrasse", "bois", "aménagement", "lyon"],
  },
  {
    id: "6",
    slug: "entretien-jardin-automne",
    title: "Entretien du Jardin en Automne : les Gestes Indispensables",
    excerpt:
      "L'automne est une saison charnière pour le jardin. Découvrez tous les gestes essentiels pour protéger vos plantes et préparer votre jardin à traverser l'hiver dans les meilleures conditions.",
    content: [
      {
        type: "paragraph",
        content:
          "L'automne est souvent négligé au jardin, à tort. C'est pourtant la saison où se joue l'avenir de vos massifs, de votre gazon et de vos arbustes. À Lyon, les premiers froids arrivent généralement en novembre, mais les gelées précoces peuvent survenir dès mi-octobre. Voici un tour complet des gestes à effectuer pour aborder l'hiver sereinement.",
      },
      {
        type: "heading",
        content: "La taille des arbustes et des vivaces",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'automne est le moment idéal pour tailler les arbustes à floraison estivale qui ont terminé leur cycle. Rosiers, buddléias, spirées d'été peuvent être rabattus à deux tiers de leur hauteur. En revanche, attendez le printemps pour les arbustes à floraison printanière comme les forsythias et les lilas. Les vivaces peuvent être laissées en place jusqu'en mars : leurs tiges offrent un abri précieux aux insectes auxiliaires et apportent une structure intéressante au jardin en hiver.",
      },
      {
        type: "heading",
        content: "Ramassage et valorisation des feuilles mortes",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Les feuilles mortes ne sont pas des déchets mais une ressource précieuse. Ramassez-les régulièrement sur la pelouse (elles étouffent le gazon si elles s'accumulent), mais utilisez-les pour pailler vos massifs ou créer un tas de feuilles. En se décomposant sur 12 à 18 mois, elles produiront un terreau noir et riche que vous pourrez utiliser comme amendement au printemps.",
      },
      {
        type: "list",
        content: "Le programme d'entretien automnal mois par mois :",
        items: [
          "Septembre : plantation des bulbes de printemps (tulipes, narcisses, jacinthes)",
          "Octobre : taille des haies persistantes, dernière fertilisation du gazon",
          "Octobre : division des touffes de vivaces et replantation",
          "Novembre : protection des plantes frileuses, paillage épais des pieds sensibles",
          "Novembre : vidange et hivernage du système d'arrosage automatique",
          "Novembre-Décembre : plantation des arbres et arbustes à racines nues",
        ],
      },
      {
        type: "heading",
        content: "La plantation d'automne, une opportunité à saisir",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Contrairement aux idées reçues, l'automne est l'une des meilleures saisons pour planter arbres, arbustes et rosiers. Le sol est encore chaud en profondeur, ce qui favorise le développement racinaire avant l'hiver. Les plantes auront ainsi 6 mois pour s'installer avant les chaleurs de l'été suivant. C'est notamment le moment idéal pour planter les haies : charmille, laurier-palme, photinia bénéficieront d'une reprise optimale.",
      },
      {
        type: "quote",
        content:
          "Le jardinier qui travaille en automne récolte les fruits de son travail au printemps. La patience et l'anticipation sont les premières vertus du paysagiste.",
      },
      {
        type: "heading",
        content: "Entretien du gazon et des allées",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Profitez de l'automne pour régénérer votre gazon : scarification, aération au croc et sur-semis permettent de combler les zones dégarnies et de renforcer le gazon avant l'hiver. Appliquez un engrais d'automne riche en phosphore et en potasse pour renforcer les racines. Curez également les allées et les bordures pour éviter la formation de mousse et d'algues glissantes qui deviennent dangereuses avec les premières gelées.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&h=450&fit=crop",
    category: "saisons",
    author: "Sophie Blanchard",
    publishDate: "2024-10-05",
    readingTime: 6,
    tags: ["automne", "entretien", "taille", "préparation"],
  },
  {
    id: "7",
    slug: "choisir-haie-jardin",
    title: "Quelle Haie pour Votre Jardin ? Plantes et Conseils d'Expert",
    excerpt:
      "Haie persistante, champêtre ou fleurie ? Nos experts paysagistes vous guident pour choisir les meilleures plantes et créer une haie belle, fonctionnelle et adaptée à votre jardin lyonnais.",
    content: [
      {
        type: "paragraph",
        content:
          "La haie est bien plus qu'une simple clôture végétale : c'est un écosystème vivant qui protège votre intimité, abrite la faune, filtre les bruits et les vents, et structure le jardin avec une touche naturelle irremplaçable. Mais face à la multitude d'espèces disponibles, choisir la bonne haie pour son jardin à Lyon n'est pas une décision à prendre à la légère. Voici le guide complet de nos paysagistes experts.",
      },
      {
        type: "heading",
        content: "Haie persistante ou caduque : quelle différence ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Une haie persistante (laurier-palme, photinia, troène, charmille taillée) conserve son feuillage toute l'année et assure une intimité constante. C'est le choix privilégié pour les limites de propriété en zone urbaine. La haie caduque (charmille libre, cornouiller, viorne) perd ses feuilles en hiver mais offre une biodiversité exceptionnelle et un spectacle de floraisons et de baies colorées tout au long de l'année. Les deux approches peuvent aussi être combinées en une haie mixte, solution idéale pour de nombreux jardins.",
      },
      {
        type: "heading",
        content: "Les meilleures espèces pour Lyon et sa région",
        level: 2,
      },
      {
        type: "list",
        content: "Sélection d'espèces adaptées au climat lyonnais :",
        items: [
          "Photinia x fraseri 'Red Robin' : pousse rapide, feuillage rouge vif au débourrement, persistant",
          "Laurier-palme (Prunus laurocerasus) : robuste, pousse dense, idéal pour les haies hautes",
          "Charmille (Carpinus betulus) : haie champêtre par excellence, rustique et économique",
          "Pyracantha : baies orangées décoratives, excellente haie défensive, résistant à la sécheresse",
          "Eleagnus ebbingei : persistant, résistant aux vents, parfumé en automne",
          "Miscanthus sinensis : graminée architecturale, écran estival léger et poétique",
        ],
      },
      {
        type: "heading",
        content: "Espacement et plantation : les règles à respecter",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La densité de plantation dépend de l'effet recherché et de la vitesse de croissance de l'espèce. Pour une haie taillée dense, comptez 2 à 4 plants par mètre linéaire. Pour une haie libre ou champêtre, 1 à 2 plants par mètre suffisent. Respectez les distances légales : en France, une haie de plus de 2 mètres doit être plantée à 2 mètres de la limite de propriété, et une haie plus basse à 50 cm minimum. L'automne et le début du printemps sont les meilleures périodes pour planter.",
      },
      {
        type: "quote",
        content:
          "Une haie biodiversifiée, c'est un refuge pour les hérissons, les oiseaux et les insectes pollinisateurs. C'est la façon la plus simple de rendre son jardin vivant et connecté à la nature.",
      },
      {
        type: "heading",
        content: "Entretien et taille : quelques règles simples",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La plupart des haies demandent une à deux tailles par an. Pour les haies persistantes taillées, prévoyez une première intervention en juin après le débourrement et une deuxième en août-septembre. Évitez absolument de tailler entre mars et juillet pour préserver les nids d'oiseaux – c'est aussi une obligation légale en France. Jardins de Prestige propose des contrats d'entretien annuels pour assurer la taille et le soin de vos haies dans toute la région lyonnaise.",
      },
      {
        type: "heading",
        content: "Haie et réglementation : ce qu'il faut savoir",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Au-delà des distances de plantation, vérifiez le PLU (Plan Local d'Urbanisme) de votre commune. Certaines communes de la métropole lyonnaise imposent des essences locales ou interdisent certaines espèces invasives comme le Laurier du Portugal. En cas de litige avec votre voisin, c'est l'article 671 du Code civil qui s'applique. N'hésitez pas à nous consulter pour un bilan réglementaire avant votre projet.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    category: "conseils",
    author: "Antoine Leroy",
    publishDate: "2024-12-01",
    readingTime: 8,
    tags: ["haie", "clôture", "plantes", "intimité"],
  },
  {
    id: "8",
    slug: "arrosage-automatique-installation",
    title: "Arrosage Automatique : Économisez l'Eau et Simplifiez l'Entretien",
    excerpt:
      "Un système d'arrosage automatique bien conçu peut réduire votre consommation d'eau de 40 %. Découvrez comment fonctionne une installation professionnelle et quels équipements choisir.",
    content: [
      {
        type: "paragraph",
        content:
          "À Lyon, les étés de plus en plus chauds et secs rendent l'arrosage du jardin à la fois indispensable et contraignant. Un système d'arrosage automatique bien dimensionné résout ce problème de façon élégante : il arrose au bon moment, en bonne quantité, sans que vous ayez à y penser. Mieux encore, un tel système consomme en moyenne 30 à 40 % d'eau de moins qu'un arrosage manuel mal maîtrisé.",
      },
      {
        type: "heading",
        content: "Les différents types d'arrosage automatique",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Il existe trois grandes familles d'arrosage automatique : les asperseurs escamotables pour les pelouses, qui arrosent par aspersion sur une surface délimitée ; les goutte-à-goutte pour les massifs, potagers et haies, qui délivrent l'eau directement à la base des plantes ; et les micro-asperseurs pour les plates-bandes ou les jardinières. Un système complet combine généralement ces trois approches selon les zones du jardin.",
      },
      {
        type: "list",
        content: "Les composants essentiels d'une installation professionnelle :",
        items: [
          "Programmateur multizone avec connexion Wi-Fi et application smartphone",
          "Sonde pluviométrique pour suspendre l'arrosage lors des pluies",
          "Sonde d'humidité du sol pour un arrosage vraiment intelligent",
          "Vanne de secteur par zone pour un réglage indépendant",
          "Filtre et réducteur de pression en tête de réseau",
          "Asperseurs escamotables de qualité (portée de 4 à 12 mètres selon les zones)",
        ],
      },
      {
        type: "heading",
        content: "Conception et dimensionnement : une étape clé",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La réussite d'un système d'arrosage automatique repose avant tout sur une étude préalable rigoureuse. Nos techniciens réalisent un plan de votre jardin, calculent la pression et le débit disponibles sur votre réseau, et définissent le nombre de zones d'arrosage. Chaque zone doit regrouper des plantes aux besoins hydriques similaires. Un massif de plantes méditerranéennes n'aura pas les mêmes besoins qu'une pelouse ou des hortensias.",
      },
      {
        type: "quote",
        content:
          "L'arrosage automatique n'est pas un luxe, c'est un investissement qui se rentabilise en deux ou trois saisons grâce aux économies d'eau et au temps libéré pour profiter du jardin.",
      },
      {
        type: "heading",
        content: "Entretien et hivernage : les bons réflexes",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un système d'arrosage automatique demande peu d'entretien mais quelques gestes essentiels. En fin de saison (octobre-novembre à Lyon), il est indispensable de purger l'ensemble du réseau à l'air comprimé pour éviter le gel dans les canalisations. Au printemps, un contrôle complet vérifie que tous les asperseurs fonctionnent correctement et que la couverture est optimale. Jardins de Prestige assure ces interventions dans le cadre de contrats d'entretien annuels.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=450&fit=crop",
    category: "entretien",
    author: "Sophie Blanchard",
    publishDate: "2025-03-01",
    readingTime: 5,
    tags: ["arrosage", "automatique", "eau", "technologie"],
  },
  {
    id: "9",
    slug: "jardin-mediterraneen-lyon",
    title: "Créer un Jardin Méditerranéen à Lyon : Plantes et Inspiration",
    excerpt:
      "Olivier, lavande, romarin, graminées dorées... Le style méditerranéen s'adapte parfaitement au climat lyonnais. Découvrez comment créer un jardin ensoleillé, économe en eau et plein de caractère.",
    content: [
      {
        type: "paragraph",
        content:
          "Avec ses étés chauds et de plus en plus secs, Lyon se prête admirablement à l'installation d'un jardin d'inspiration méditerranéenne. Ce style, très en vogue dans les jardins de prestige, allie robustesse et esthétique raffinée. Des plantes argentées, des graminées souples, des aromatiques parfumées et des pierres naturelles chaudes composent un tableau vivant qui supporte sans broncher les canicules de la Vallée du Rhône.",
      },
      {
        type: "heading",
        content: "Les plantes emblématiques du style méditerranéen",
        level: 2,
      },
      {
        type: "list",
        content: "Les incontournables pour un jardin méditerranéen à Lyon :",
        items: [
          "Olivier (Olea europaea) : résiste jusqu'à -12°C une fois bien établi, port sculpté remarquable",
          "Lavande (Lavandula angustifolia) : parfum envoûtant, floraison longue, attire les pollinisateurs",
          "Romarin (Rosmarinus officinalis) : persistant, feuillage aromatique, fleurs bleues au printemps",
          "Stipa tenuissima : graminée fine et dorée, ondule au moindre souffle de vent",
          "Agapanthe : floraison bleue ou blanche spectaculaire de juin à août",
          "Phormium tenax : plante architecturale aux feuilles rubanées, pousse en touffes imposantes",
          "Ciste (Cistus) : floraison printanière généreuse, résistance extrême à la sécheresse",
        ],
      },
      {
        type: "heading",
        content: "Concevoir les volumes et la structure",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le jardin méditerranéen se construit par strates : des arbres ou grands arbustes en arrière-plan (olivier, laurier sauce, chêne vert), des arbustes de taille moyenne au milieu (lavandes, santolinas, cistes), et en premier plan des plantes basses et tapissantes (thym, sédum, armeria). Cette stratification crée des jeux de volumes et de textures très dynamiques. L'utilisation de pierres calcaires locales pour les murets, escaliers et dallages ancre le jardin dans l'identité régionale.",
      },
      {
        type: "heading",
        content: "Adapter le sol et l'arrosage",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La grande majorité des plantes méditerranéennes détestent les sols lourds et les excès d'eau. Si votre sol est argileux – fréquent dans la plaine lyonnaise –, il faudra l'amender significativement avec du sable grossier et du gravier pour améliorer le drainage. Un paillage minéral (graviers, galets) remplace avantageusement le paillage organique : il retient la chaleur, empêche l'évaporation et donne un aspect très authentique. Un arrosage goutte-à-goutte, uniquement les deux premières années d'installation, suffira ensuite.",
      },
      {
        type: "quote",
        content:
          "Le jardin méditerranéen est le jardin de la résilience. Il nous rappelle que la beauté peut naître de la sobriété, et que les plantes les plus résistantes sont souvent les plus généreuses.",
      },
      {
        type: "heading",
        content: "L'accent décoratif : poterie, pierre et bois flotté",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le style méditerranéen se joue aussi dans les détails décoratifs. Des grands pots en terre cuite plantés d'oliviers ou d'agaves ponctueront votre terrasse. Des dalles en travertin ou en pierre calcaire claire créeront des allées lumineuses. Un mur en pierres sèches habillé de rosmarins rampants apportera une touche très provençale. Jardins de Prestige réalise ces aménagements complets, de la conception à la livraison clé en main, pour les propriétés lyonnaises qui souhaitent ce style.",
      },
      {
        type: "heading",
        content: "Quel entretien pour un jardin méditerranéen ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "C'est l'un des grands atouts de ce style : une fois les plantes bien établies (après 2 à 3 ans), l'entretien se réduit considérablement. Une taille légère des lavandes et des santolinas après la floraison, un rabattage des graminées en mars, et c'est à peu près tout. Pas de désherbage intensif grâce au paillage, pas d'arrosage estival pour la majorité des espèces. Un jardin qui se libère de lui-même pour vous laisser en profiter.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&h=450&fit=crop",
    category: "tendances",
    author: "Sophie Blanchard",
    publishDate: "2024-08-15",
    readingTime: 7,
    tags: ["méditerranéen", "plantes", "chaleur", "lyon"],
  },
  {
    id: "10",
    slug: "preparer-jardin-hiver",
    title: "Préparer son Jardin pour l'Hiver : le Guide Complet",
    excerpt:
      "Paillage, protection, taille et rangement : découvrez toutes les étapes pour protéger votre jardin des rigueurs de l'hiver lyonnais et le retrouver en pleine forme au printemps.",
    content: [
      {
        type: "paragraph",
        content:
          "L'hiver arrive et avec lui les gelées, les vents froids et parfois la neige sur les hauteurs lyonnaises. C'est le moment d'agir pour mettre votre jardin à l'abri et vous assurer que vos plantes passeront cette période difficile sans dommages. Loin d'être une saison morte, l'hiver est une période de repos végétatif qui se prépare activement dès l'automne.",
      },
      {
        type: "heading",
        content: "Protéger les plantes frileuses",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Certaines plantes souffrent dès que les températures descendent sous -5°C. À Lyon, où les hivers peuvent occasionnellement apporter des pointes à -10°C voire moins, il est prudent de protéger les espèces sensibles. Les plantes en pot sont les plus vulnérables : regroupez-les contre un mur exposé sud, enveloppez les pots dans du voile d'hivernage ou du carton, et placez-les sur des pieds pour éviter le gel par le bas.",
      },
      {
        type: "list",
        content: "Les protections adaptées selon les espèces :",
        items: [
          "Voile d'hivernage P30 : pour les plantes frileuses en pleine terre (palmiers, bananiers, daturas)",
          "Paillage épais (15-20 cm) : pour les plantes herbacées sensibles, les rosiers greffés",
          "Rentrée en intérieur hors-gel : pour les agrumes, lauriers-roses, bougainvilliers en pot",
          "Voile double épaisseur + feuilles sèches : pour les hortensias tardifs et les dahlias laissés en terre",
          "Rien ou presque : oliviers, lavandes, santolinas, une fois bien établis résistent aux hivers lyonnais",
        ],
      },
      {
        type: "heading",
        content: "Le paillage hivernal : protection et nourriture",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le paillage est l'opération la plus importante de la préparation hivernale. Appliqué en couche de 8 à 15 cm au pied des plantes, il protège les racines du gel, limite les fluctuations thermiques et nourrit le sol en se décomposant progressivement. Utilisez des matières grossières : BRF (Bois Raméal Fragmenté), écorces de pin, feuilles mortes tassées, paille. Évitez le paillage au pied des troncs d'arbres pour ne pas favoriser les maladies cryptogamiques.",
      },
      {
        type: "heading",
        content: "Les travaux de structure à réaliser en hiver",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'hiver est paradoxalement la meilleure saison pour certains travaux : la végétation au repos permet de mieux visualiser la structure du jardin et d'intervenir sans risquer d'abîmer les nouvelles pousses. C'est le moment idéal pour tailler les arbres fruitiers (décembre à février), restructurer les haies anciennes, créer de nouveaux massifs, poser des dalles ou des murets. La plantation d'arbres à racines nues est également optimale de novembre à mars.",
      },
      {
        type: "quote",
        content:
          "Un jardin bien préparé pour l'hiver, c'est un jardin qui explose de vitalité au printemps. Chaque heure investie en novembre en économise trois en avril.",
      },
      {
        type: "heading",
        content: "Prendre soin des outils et du matériel",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'hivernage du jardin, c'est aussi celui des outils et équipements. Nettoyez et huilez vos outils manuels, vérifiez les lames de tondeuse et faites-les affûter si nécessaire. Vidangez et hivernez les moteurs (tondeuse, taille-haie thermique). Stockez les tuyaux d'arrosage à l'abri du gel, et si vous avez un système d'arrosage automatique, procédez impérativement à sa purge à l'air comprimé. Ces gestes simples prolongent considérablement la durée de vie de votre matériel.",
      },
      {
        type: "heading",
        content: "Planifier le jardin de demain",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'hiver est aussi le moment de la réflexion et de la planification. Feuilletez des catalogues de plantes, étudiez de nouvelles idées d'aménagement, prenez le temps d'observer votre jardin sous la neige ou dans la lumière rase de décembre. C'est souvent en hiver que naissent les plus beaux projets de jardins. Notre équipe Jardins de Prestige est disponible pour des consultations de conception pendant la saison froide, afin de préparer ensemble votre jardin de printemps.",
      },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&h=450&fit=crop",
    category: "saisons",
    author: "Antoine Leroy",
    publishDate: "2024-11-25",
    readingTime: 6,
    tags: ["hiver", "protection", "plantes", "saison"],
  },
];
