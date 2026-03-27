import type { Region, Destination, RegionId } from "@/types";

export const regions: Region[] = [
  {
    id: "south-america",
    name: "America do Sul",
    countries: ["Chile", "Argentina"],
    icon: "🏔️",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "usa",
    name: "Estados Unidos",
    countries: ["Estados Unidos"],
    icon: "🗽",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "canada",
    name: "Canada",
    countries: ["Canada"],
    icon: "🍁",
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: "europe",
    name: "Europa",
    countries: ["Franca", "Suica", "Austria"],
    icon: "🏰",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "japan",
    name: "Japao",
    countries: ["Japao"],
    icon: "🗾",
    gradient: "from-pink-500 to-fuchsia-600",
  },
];

export const destinations: Destination[] = [
  {
    slug: "valle-nevado",
    name: "Valle Nevado",
    country: "Chile",
    countryFlag: "🇨🇱",
    region: "south-america",
    description:
      "Valle Nevado e o maior e mais moderno centro de ski da America do Sul, localizado a apenas 60 km de Santiago. Com mais de 40 pistas e uma infraestrutura de primeiro mundo, o resort oferece experiencias incriveis tanto para iniciantes quanto para esquiadores avancados. A neve de qualidade e as vistas deslumbrantes da Cordilheira dos Andes tornam este destino imperdivel para quem busca aventura e conforto em um so lugar.",
    shortDescription:
      "O maior centro de ski da America do Sul, com infraestrutura de classe mundial nos Andes chilenos.",
    heroImage: "/images/destinations/south-america/valle-nevado.jpg",
    images: [
      "/images/destinations/south-america/valle-nevado-1.jpg",
      "/images/destinations/south-america/valle-nevado-2.jpg",
      "/images/destinations/south-america/valle-nevado-3.jpg",
    ],
    altitude: { base: 2860, peak: 3670 },
    season: { start: "Junho", end: "Outubro", hemisphere: "sul" },
    highlights: [
      "Mais de 40 pistas para todos os niveis",
      "Snowpark com halfpipe e obstaculos",
      "Heliski disponivel",
      "Spa e gastronomia de alto nivel",
      "A 60 km de Santiago",
    ],
    featured: true,
    priceRange: {
      economic: { min: 4500, max: 6500 },
      moderate: { min: 7000, max: 10000 },
      luxury: { min: 12000, max: 18000 },
    },
    checkInRules: [
      "Check-in a partir das 15h",
      "Check-out ate as 11h",
      "Documento de identidade ou passaporte obrigatorio",
      "Menores de 18 anos devem estar acompanhados por responsavel",
      "Reserva de ski pass pode ser feita antecipadamente com desconto",
    ],
  },
  {
    slug: "portillo",
    name: "Portillo",
    country: "Chile",
    countryFlag: "🇨🇱",
    region: "south-america",
    description:
      "Portillo e um resort lendario com mais de 70 anos de historia, famoso por sediar o Campeonato Mundial de Ski em 1966. Situado as margens da deslumbrante Laguna del Inca, o resort oferece uma experiencia exclusiva e intimista com capacidade limitada de hospedes, garantindo pistas vazias e atendimento personalizado.",
    shortDescription:
      "Resort historico e exclusivo as margens da Laguna del Inca, com pistas lendarias.",
    heroImage: "/images/destinations/south-america/portillo.jpg",
    images: [
      "/images/destinations/south-america/portillo-1.jpg",
      "/images/destinations/south-america/portillo-2.jpg",
      "/images/destinations/south-america/portillo-3.jpg",
    ],
    altitude: { base: 2590, peak: 3333 },
    season: { start: "Junho", end: "Outubro", hemisphere: "sul" },
    highlights: [
      "Resort historico desde 1949",
      "Laguna del Inca ao fundo",
      "Capacidade limitada — pistas exclusivas",
      "Pensao completa inclusa",
      "Piscina aquecida com vista para os Andes",
    ],
    featured: true,
    priceRange: {
      economic: { min: 5000, max: 7000 },
      moderate: { min: 8000, max: 12000 },
      luxury: { min: 14000, max: 22000 },
    },
  },
  {
    slug: "cerro-catedral",
    name: "Cerro Catedral",
    country: "Argentina",
    countryFlag: "🇦🇷",
    region: "south-america",
    description:
      "Cerro Catedral e o maior e mais importante centro de ski da Argentina, localizado em Bariloche, na Patagonia. Com mais de 120 km de pistas e uma vibrante vida noturna, e o destino perfeito para quem quer combinar esportes de inverno com a charmosa cultura patagonica. A cidade de Bariloche, conhecida como a Suica argentina, complementa a experiencia com chocolates artesanais e cervejarias.",
    shortDescription:
      "O maior centro de ski da Argentina, em Bariloche, com mais de 120 km de pistas.",
    heroImage: "/images/destinations/south-america/cerro-catedral.jpg",
    images: [
      "/images/destinations/south-america/cerro-catedral-1.jpg",
      "/images/destinations/south-america/cerro-catedral-2.jpg",
      "/images/destinations/south-america/cerro-catedral-3.jpg",
    ],
    altitude: { base: 1030, peak: 2100 },
    season: { start: "Junho", end: "Outubro", hemisphere: "sul" },
    highlights: [
      "Mais de 120 km de pistas",
      "Vida noturna vibrante em Bariloche",
      "Chocolates e cervejarias artesanais",
      "Paisagens patagonicas deslumbrantes",
      "Excelente custo-beneficio",
    ],
    featured: true,
    priceRange: {
      economic: { min: 3500, max: 5500 },
      moderate: { min: 6000, max: 9000 },
      luxury: { min: 10000, max: 15000 },
    },
  },
  {
    slug: "chapelco",
    name: "Chapelco",
    country: "Argentina",
    countryFlag: "🇦🇷",
    region: "south-america",
    description:
      "Chapelco e um resort charmoso e familiar em San Martin de los Andes, na Patagonia argentina. Com pistas variadas e uma atmosfera acolhedora, e ideal para familias e iniciantes que buscam uma experiencia tranquila e autentica nos Andes. A cidade de San Martin de los Andes e considerada uma das mais bonitas da Argentina.",
    shortDescription:
      "Resort familiar em San Martin de los Andes, ideal para iniciantes e familias.",
    heroImage: "/images/destinations/south-america/chapelco.jpg",
    images: [
      "/images/destinations/south-america/chapelco-1.jpg",
      "/images/destinations/south-america/chapelco-2.jpg",
      "/images/destinations/south-america/chapelco-3.jpg",
    ],
    altitude: { base: 1250, peak: 1980 },
    season: { start: "Junho", end: "Outubro", hemisphere: "sul" },
    highlights: [
      "Ideal para familias e iniciantes",
      "San Martin de los Andes encantadora",
      "Pistas bem cuidadas",
      "Gastronomia patagonica",
      "Atmosfera acolhedora e tranquila",
    ],
    featured: false,
    priceRange: {
      economic: { min: 3000, max: 5000 },
      moderate: { min: 5500, max: 8000 },
      luxury: { min: 9000, max: 13000 },
    },
  },
  {
    slug: "vail",
    name: "Vail",
    country: "Estados Unidos",
    countryFlag: "🇺🇸",
    region: "usa",
    description:
      "Vail e um dos resorts mais famosos e prestigiados do mundo, localizado no Colorado. Com mais de 2.140 hectares de terreno esquiavel e os lendarios Back Bowls, Vail oferece uma experiencia incomparavel para esquiadores de todos os niveis. A vila em estilo alpino bavarese encanta com restaurantes premiados, lojas de grife e uma vida apres-ski agitada.",
    shortDescription:
      "Um dos maiores e mais prestigiados resorts do mundo, no coracao do Colorado.",
    heroImage: "/images/destinations/usa/vail.jpg",
    images: [
      "/images/destinations/usa/vail-1.jpg",
      "/images/destinations/usa/vail-2.jpg",
      "/images/destinations/usa/vail-3.jpg",
    ],
    altitude: { base: 2475, peak: 3527 },
    season: { start: "Novembro", end: "Abril", hemisphere: "norte" },
    highlights: [
      "Mais de 2.140 hectares esquiaveis",
      "Lendarios Back Bowls",
      "Vila alpina com lojas e restaurantes",
      "Epic Pass disponivel",
      "Neve powder de qualidade",
    ],
    featured: true,
    priceRange: {
      economic: { min: 8000, max: 12000 },
      moderate: { min: 13000, max: 18000 },
      luxury: { min: 20000, max: 35000 },
    },
  },
  {
    slug: "aspen",
    name: "Aspen",
    country: "Estados Unidos",
    countryFlag: "🇺🇸",
    region: "usa",
    description:
      "Aspen e sinonimo de glamour e sofisticacao no mundo do ski. Com quatro montanhas distintas — Aspen Mountain, Aspen Highlands, Buttermilk e Snowmass — o resort oferece terreno variado para todos os estilos. A cidade historica de mineracao se transformou em um polo cultural com festivais, galerias de arte e gastronomia de classe mundial.",
    shortDescription:
      "Glamour e sofisticacao com quatro montanhas distintas e cultura vibrante.",
    heroImage: "/images/destinations/usa/aspen.jpg",
    images: [
      "/images/destinations/usa/aspen-1.jpg",
      "/images/destinations/usa/aspen-2.jpg",
      "/images/destinations/usa/aspen-3.jpg",
    ],
    altitude: { base: 2422, peak: 3813 },
    season: { start: "Novembro", end: "Abril", hemisphere: "norte" },
    highlights: [
      "Quatro montanhas para explorar",
      "Cultura e vida noturna sofisticadas",
      "Pistas para todos os niveis",
      "Festivais e eventos culturais",
      "Gastronomia premiada",
    ],
    featured: true,
    priceRange: {
      economic: { min: 9000, max: 14000 },
      moderate: { min: 15000, max: 22000 },
      luxury: { min: 25000, max: 45000 },
    },
  },
  {
    slug: "park-city",
    name: "Park City",
    country: "Estados Unidos",
    countryFlag: "🇺🇸",
    region: "usa",
    description:
      "Park City, em Utah, e o lar do maior resort de ski dos Estados Unidos apos a fusao de Park City Mountain e Canyons Resort. Com mais de 3.300 hectares de terreno e a famosa neve champagne powder de Utah, o destino tambem sedia o Festival de Cinema de Sundance. A apenas 45 minutos do aeroporto de Salt Lake City, e um dos resorts mais acessiveis.",
    shortDescription:
      "O maior resort dos EUA, com a famosa neve champagne powder de Utah.",
    heroImage: "/images/destinations/usa/park-city.jpg",
    images: [
      "/images/destinations/usa/park-city-1.jpg",
      "/images/destinations/usa/park-city-2.jpg",
      "/images/destinations/usa/park-city-3.jpg",
    ],
    altitude: { base: 2080, peak: 3049 },
    season: { start: "Novembro", end: "Abril", hemisphere: "norte" },
    highlights: [
      "Maior resort dos EUA",
      "Neve champagne powder",
      "45 min do aeroporto de Salt Lake City",
      "Festival de Sundance",
      "Historic Main Street charmosa",
    ],
    featured: false,
    priceRange: {
      economic: { min: 7000, max: 11000 },
      moderate: { min: 12000, max: 17000 },
      luxury: { min: 19000, max: 30000 },
    },
  },
  {
    slug: "whistler-blackcomb",
    name: "Whistler Blackcomb",
    country: "Canada",
    countryFlag: "🇨🇦",
    region: "canada",
    description:
      "Whistler Blackcomb e o maior resort de ski da America do Norte, localizado na British Columbia. Com duas montanhas interligadas pelo espetacular Peak 2 Peak Gondola, oferece mais de 3.300 hectares de terreno variado. A vila pedestre de Whistler e mundialmente famosa por sua vibrante vida apres-ski, restaurantes e lojas. Sediou os Jogos Olimpicos de Inverno de 2010.",
    shortDescription:
      "O maior resort da America do Norte, sede dos Jogos Olimpicos de Inverno 2010.",
    heroImage: "/images/destinations/canada/whistler-blackcomb.jpg",
    images: [
      "/images/destinations/canada/whistler-blackcomb-1.jpg",
      "/images/destinations/canada/whistler-blackcomb-2.jpg",
      "/images/destinations/canada/whistler-blackcomb-3.jpg",
    ],
    altitude: { base: 675, peak: 2284 },
    season: { start: "Novembro", end: "Maio", hemisphere: "norte" },
    highlights: [
      "Maior resort da America do Norte",
      "Peak 2 Peak Gondola espetacular",
      "Sede dos Jogos Olimpicos 2010",
      "Vila pedestre vibrante",
      "Temporada longa ate maio",
    ],
    featured: true,
    priceRange: {
      economic: { min: 7500, max: 11000 },
      moderate: { min: 12000, max: 17000 },
      luxury: { min: 19000, max: 32000 },
    },
  },
  {
    slug: "banff-lake-louise",
    name: "Banff & Lake Louise",
    country: "Canada",
    countryFlag: "🇨🇦",
    region: "canada",
    description:
      "Banff e Lake Louise estao no coracao das Montanhas Rochosas canadenses, dentro do Parque Nacional de Banff, Patrimonio da UNESCO. O destino oferece tres areas de ski — Lake Louise, Sunshine Village e Mt. Norquay — com cenarios de tirar o folego. As aguas turquesa do Lake Louise congelado e a fauna selvagem tornam esta experiencia unica no mundo.",
    shortDescription:
      "Ski nas Montanhas Rochosas, Patrimonio UNESCO, com cenarios de tirar o folego.",
    heroImage: "/images/destinations/canada/banff-lake-louise.jpg",
    images: [
      "/images/destinations/canada/banff-lake-louise-1.jpg",
      "/images/destinations/canada/banff-lake-louise-2.jpg",
      "/images/destinations/canada/banff-lake-louise-3.jpg",
    ],
    altitude: { base: 1635, peak: 2637 },
    season: { start: "Novembro", end: "Maio", hemisphere: "norte" },
    highlights: [
      "Parque Nacional de Banff — UNESCO",
      "Tres areas de ski incriveis",
      "Cenarios de montanhas rochosas",
      "Fauna selvagem — alces e ursos",
      "Aguas termais naturais",
    ],
    featured: false,
    priceRange: {
      economic: { min: 7000, max: 10000 },
      moderate: { min: 11000, max: 16000 },
      luxury: { min: 18000, max: 28000 },
    },
  },
  {
    slug: "chamonix",
    name: "Chamonix Mont-Blanc",
    country: "Franca",
    countryFlag: "🇫🇷",
    region: "europe",
    description:
      "Chamonix, aos pes do Mont Blanc, e o berco do alpinismo e do ski moderno. Com a lendaria descida da Vallee Blanche e o teleforico Aiguille du Midi que sobe ate 3.842m, Chamonix e um destino obrigatorio para esquiadores avancados. A cidade preserva o charme alpino frances com excelentes restaurantes, bares animados e uma energia unica.",
    shortDescription:
      "O berco do alpinismo, aos pes do Mont Blanc, com a lendaria Vallee Blanche.",
    heroImage: "/images/destinations/europe/chamonix.jpg",
    images: [
      "/images/destinations/europe/chamonix-1.jpg",
      "/images/destinations/europe/chamonix-2.jpg",
      "/images/destinations/europe/chamonix-3.jpg",
    ],
    altitude: { base: 1035, peak: 3842 },
    season: { start: "Dezembro", end: "Abril", hemisphere: "norte" },
    highlights: [
      "Vallee Blanche — descida lendaria de 20 km",
      "Aiguille du Midi a 3.842m",
      "Berco do alpinismo e ski",
      "Charme alpino frances",
      "Freeride de classe mundial",
    ],
    featured: true,
    priceRange: {
      economic: { min: 8000, max: 12000 },
      moderate: { min: 13000, max: 19000 },
      luxury: { min: 22000, max: 38000 },
    },
  },
  {
    slug: "zermatt",
    name: "Zermatt",
    country: "Suica",
    countryFlag: "🇨🇭",
    region: "europe",
    description:
      "Zermatt e um destino magico aos pes do icone Matterhorn, uma das montanhas mais fotografadas do mundo. A vila livre de carros preserva uma atmosfera encantadora com chalets tradicionais e gastronomia sofisticada. Com mais de 360 km de pistas conectadas ao resort italiano de Cervinia, e possivel esquiar em dois paises no mesmo dia. Ski glaciar disponivel o ano todo.",
    shortDescription:
      "Vila magica aos pes do Matterhorn, com ski em dois paises e pistas glaciares.",
    heroImage: "/images/destinations/europe/zermatt.jpg",
    images: [
      "/images/destinations/europe/zermatt-1.jpg",
      "/images/destinations/europe/zermatt-2.jpg",
      "/images/destinations/europe/zermatt-3.jpg",
    ],
    altitude: { base: 1620, peak: 3883 },
    season: { start: "Novembro", end: "Abril", hemisphere: "norte" },
    highlights: [
      "Vista iconica do Matterhorn",
      "360 km de pistas — ski em dois paises",
      "Vila livre de carros",
      "Ski glaciar o ano todo",
      "Gastronomia suica sofisticada",
    ],
    featured: true,
    priceRange: {
      economic: { min: 10000, max: 15000 },
      moderate: { min: 16000, max: 24000 },
      luxury: { min: 28000, max: 50000 },
    },
  },
  {
    slug: "st-anton",
    name: "St. Anton am Arlberg",
    country: "Austria",
    countryFlag: "🇦🇹",
    region: "europe",
    description:
      "St. Anton am Arlberg e o berco do ski alpino, com uma historia que remonta a 1901. Parte da regiao Ski Arlberg, oferece mais de 300 km de pistas e e famoso por suas descidas desafiadoras e neve abundante. A vida apres-ski em St. Anton e lendaria, com bares icones como o MooserWirt e o Krazy Kanguruh atraindo esquiadores de todo o mundo.",
    shortDescription:
      "Berco do ski alpino, com pistas desafiadoras e a melhor apres-ski da Austria.",
    heroImage: "/images/destinations/europe/st-anton.jpg",
    images: [
      "/images/destinations/europe/st-anton-1.jpg",
      "/images/destinations/europe/st-anton-2.jpg",
      "/images/destinations/europe/st-anton-3.jpg",
    ],
    altitude: { base: 1304, peak: 2811 },
    season: { start: "Dezembro", end: "Abril", hemisphere: "norte" },
    highlights: [
      "Berco do ski alpino desde 1901",
      "Mais de 300 km de pistas — Ski Arlberg",
      "Apres-ski lendario",
      "Neve abundante e freeride",
      "Cultura tirolesa autentica",
    ],
    featured: false,
    priceRange: {
      economic: { min: 7500, max: 11000 },
      moderate: { min: 12000, max: 18000 },
      luxury: { min: 20000, max: 35000 },
    },
  },
  {
    slug: "niseko",
    name: "Niseko",
    country: "Japao",
    countryFlag: "🇯🇵",
    region: "japan",
    description:
      "Niseko, em Hokkaido, e mundialmente famoso por ter a melhor neve powder do planeta. Com uma media de 15 metros de neve por temporada, as condicoes sao absolutamente extraordinarias. Alem do ski incrivel, Niseko oferece a experiencia unica de combinar esportes de inverno com a cultura japonesa — onsens (aguas termais), gastronomia excepcional e hospitalidade impecavel.",
    shortDescription:
      "A melhor neve powder do mundo em Hokkaido, com cultura japonesa unica.",
    heroImage: "/images/destinations/japan/niseko.jpg",
    images: [
      "/images/destinations/japan/niseko-1.jpg",
      "/images/destinations/japan/niseko-2.jpg",
      "/images/destinations/japan/niseko-3.jpg",
    ],
    altitude: { base: 260, peak: 1308 },
    season: { start: "Dezembro", end: "Abril", hemisphere: "norte" },
    highlights: [
      "Melhor neve powder do mundo",
      "15 metros de neve por temporada",
      "Onsens — aguas termais japonesas",
      "Gastronomia japonesa excepcional",
      "Night skiing disponivel",
    ],
    featured: true,
    priceRange: {
      economic: { min: 9000, max: 13000 },
      moderate: { min: 14000, max: 20000 },
      luxury: { min: 23000, max: 40000 },
    },
  },
  {
    slug: "hakuba",
    name: "Hakuba Valley",
    country: "Japao",
    countryFlag: "🇯🇵",
    region: "japan",
    description:
      "Hakuba Valley e um complexo de 10 resorts interligados nos Alpes Japoneses, que sediou os Jogos Olimpicos de Inverno de 1998. Com terreno variado e neve powder abundante, e uma alternativa mais acessivel a Niseko com uma atmosfera mais autentica e tradicional japonesa. A proximidade com Toquio torna o acesso conveniente.",
    shortDescription:
      "10 resorts nos Alpes Japoneses, sede dos Jogos Olimpicos de 1998.",
    heroImage: "/images/destinations/japan/hakuba.jpg",
    images: [
      "/images/destinations/japan/hakuba-1.jpg",
      "/images/destinations/japan/hakuba-2.jpg",
      "/images/destinations/japan/hakuba-3.jpg",
    ],
    altitude: { base: 760, peak: 1831 },
    season: { start: "Dezembro", end: "Marco", hemisphere: "norte" },
    highlights: [
      "10 resorts interligados",
      "Sede dos Jogos Olimpicos 1998",
      "Neve powder abundante",
      "Cultura japonesa autentica",
      "Facil acesso a partir de Toquio",
    ],
    featured: false,
    priceRange: {
      economic: { min: 8000, max: 12000 },
      moderate: { min: 13000, max: 18000 },
      luxury: { min: 20000, max: 35000 },
    },
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByRegion(regionId: RegionId): Destination[] {
  return destinations.filter((d) => d.region === regionId);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}

export function getAllSlugs(): string[] {
  return destinations.map((d) => d.slug);
}

export function getRegionById(id: RegionId): Region | undefined {
  return regions.find((r) => r.id === id);
}
