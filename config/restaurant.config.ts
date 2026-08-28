import type { RestaurantConfig } from "@/types/restaurant";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * CONFIGURACIÓN DEL RESTAURANTE
 * ─────────────────────────────────────────────────────────────────────────
 * Este es el ÚNICO archivo que hay que tocar para reutilizar la plantilla
 * con un cliente nuevo: nombre, logo, colores, contacto, redes, categorías,
 * productos y precios. Ningún componente tiene datos escritos a mano.
 *
 * Los datos de este archivo son ficticios, a modo de ejemplo.
 * ─────────────────────────────────────────────────────────────────────────
 */
export const restaurantConfig: RestaurantConfig = {
  name: "Fuego & Sal",
  shortName: "Fuego & Sal",
  tagline: "Cocina de fuego, brasa y buena mesa",
  description:
    "Parrilla y cocina de autor en el corazón de Mendoza. Producto de estación, brasa lenta y una carta pensada para compartir.",
  logo: "https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=200&h=200&fit=crop&q=80",
  heroImage:
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&h=2000&fit=crop&q=80",

  whatsappNumber: "5492610000000",
  whatsappDefaultMessage: "¡Hola! Quiero hacer un pedido en Fuego & Sal 🔥",

  address: "Av. San Martín 1234, Ciudad de Mendoza",
  mapsUrl: "https://maps.google.com/?q=Av.+San+Martin+1234+Mendoza",
  schedule: [
    { days: "Martes a Domingo", hours: "12:00 – 15:30" },
    { days: "Martes a Sábado", hours: "20:00 – 00:30" },
  ],

  currency: "ARS",

  social: {
    instagram: "https://instagram.com/fuegoysal",
    facebook: "https://facebook.com/fuegoysal",
  },

  // Paleta cálida de brasa/ember. Cambiando estos 7 valores cambia
  // el look completo del sitio (botones, insignias, fondos).
  theme: {
    primary: "#E07A3F", // ámbar/ember — acento principal
    primaryDark: "#B85C2A",
    brasa: "#9A3324", // rojo brasa — insignias y detalles
    background: "#15110D", // carbón cálido, no negro puro
    surface: "#1F1812",
    surfaceAlt: "#261D15",
    text: "#F4ECE0",
    muted: "#A99A89",
  },

  categories: [
    {
      id: "entradas",
      name: "Entradas",
      icon: "🥖",
      products: [
        {
          id: "provoleta",
          name: "Provoleta a la parrilla",
          description:
            "Queso provolone dorado a la brasa, orégano y un hilo de aceite de oliva.",
          price: 6800,
          image:
            "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=800&h=800&fit=crop&q=80",
          featured: true,
        },
        {
          id: "empanadas",
          name: "Empanadas mendocinas (x3)",
          description: "Carne cortada a cuchillo, cebolla y comino, horneadas al momento.",
          price: 5200,
          image:
            "https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=800&h=800&fit=crop&q=80",
        },
        {
          id: "tabla-fiambres",
          name: "Tabla de fiambres y quesos",
          description: "Selección de embutidos y quesos regionales, frutos secos y membrillo.",
          price: 12500,
          image:
            "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=800&fit=crop&q=80",
        },
        {
          id: "humita",
          name: "Humita en olla",
          description: "Choclo cremoso, albahaca y un toque de queso de cabra.",
          price: 5800,
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=800&fit=crop&q=80",
          tags: ["Vegetariano"],
        },
      ],
    },
    {
      id: "principales",
      name: "Platos Principales",
      icon: "🔥",
      products: [
        {
          id: "bife-chorizo",
          name: "Bife de chorizo",
          description:
            "400g a la parrilla, punto a elección. Acompaña papas rústicas y chimichurri de la casa.",
          price: 17800,
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop&q=80",
          featured: true,
        },
        {
          id: "asado-tira",
          name: "Asado de tira",
          description: "Cocción lenta a las brasas durante 5 horas, con salsa criolla.",
          price: 16500,
          image:
            "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=800&fit=crop&q=80",
        },
        {
          id: "pollo-brasa",
          name: "Pollo al disco",
          description: "Pollo de campo cocido a fuego lento con vegetales de estación.",
          price: 13200,
          image:
            "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=800&fit=crop&q=80",
        },
        {
          id: "trucha-andina",
          name: "Trucha andina",
          description: "A la plancha con manteca de hierbas y puré de zapallo asado.",
          price: 15400,
          image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop&q=80",
          tags: ["Sin TACC"],
        },
      ],
    },
    {
      id: "pastas",
      name: "Pastas Caseras",
      icon: "🍝",
      products: [
        {
          id: "sorrentinos",
          name: "Sorrentinos de jamón y muzzarella",
          description: "Pasta rellena casera con salsa fileto y albahaca fresca.",
          price: 9800,
          image:
            "https://images.unsplash.com/photo-1587740908075-9e245311cb08?w=800&h=800&fit=crop&q=80",
        },
        {
          id: "malfatti",
          name: "Malfatti de espinaca y ricota",
          description: "Con salsa de manteca salvia y parmesano gratinado.",
          price: 9200,
          image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=800&fit=crop&q=80",
          tags: ["Vegetariano"],
        },
        {
          id: "ravioles-osobuco",
          name: "Ravioles de osobuco",
          description: "Relleno de osobuco braseado 6 horas, jugo reducido al malbec.",
          price: 11400,
          image:
            "https://images.unsplash.com/photo-1621996659490-3f0a86e9f6bf?w=800&h=800&fit=crop&q=80",
          featured: true,
        },
      ],
    },
    {
      id: "postres",
      name: "Postres",
      icon: "🍮",
      products: [
        {
          id: "flan-casero",
          name: "Flan casero",
          description: "Con dulce de leche y crema chantilly de la casa.",
          price: 4800,
          image:
            "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&h=800&fit=crop&q=80",
        },
        {
          id: "brownie",
          name: "Brownie con helado",
          description: "Brownie tibio de chocolate 70%, helado de crema y nueces.",
          price: 5600,
          image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=800&fit=crop&q=80",
          featured: true,
        },
        {
          id: "ensalada-frutas",
          name: "Ensalada de frutas de estación",
          description: "Frutas frescas de estación con un toque de menta y miel.",
          price: 4200,
          image:
            "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&h=800&fit=crop&q=80",
          tags: ["Sin TACC", "Vegano"],
        },
      ],
    },
    {
      id: "bebidas",
      name: "Bebidas",
      icon: "🍷",
      products: [
        {
          id: "malbec-copa",
          name: "Malbec mendocino (copa)",
          description: "Selección de bodegas locales, cambia según cosecha disponible.",
          price: 4500,
          image:
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=800&fit=crop&q=80",
        },
        {
          id: "limonada",
          name: "Limonada de jengibre",
          description: "Limón, jengibre fresco y un toque de menta.",
          price: 3200,
          image:
            "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&h=800&fit=crop&q=80",
          tags: ["Sin alcohol"],
        },
        {
          id: "agua",
          name: "Agua mineral 500ml",
          description: "Con o sin gas.",
          price: 1800,
          image:
            "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=800&h=800&fit=crop&q=80",
        },
      ],
    },
  ],
};
