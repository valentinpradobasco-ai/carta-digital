export interface Product {
  id: string;
  name: string;
  description: string;
  /** Precio en la unidad monetaria definida por `currency` en RestaurantConfig */
  price: number;
  image: string;
  /** Ej: "Picante", "Vegetariano", "Sin TACC", "Nuevo" */
  tags?: string[];
  /** Se destaca dentro de su categoría (borde/insignia especial) */
  featured?: boolean;
  /** Si es false, se muestra tachado como "No disponible" sin sacarlo de la carta */
  available?: boolean;
}

export interface Category {
  id: string;
  name: string;
  /** Emoji o símbolo corto para la píldora de navegación, ej: "🔥" */
  icon?: string;
  products: Product[];
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  website?: string;
}

export interface ScheduleEntry {
  days: string;
  hours: string;
}

export interface ThemeConfig {
  /** Color principal de marca (botones, acentos, precios) */
  primary: string;
  /** Variante más oscura del primario, para hover/gradientes */
  primaryDark: string;
  /** Color secundario de acento (detalles, insignias) */
  brasa: string;
  /** Fondo general del sitio */
  background: string;
  /** Fondo de tarjetas y superficies elevadas */
  surface: string;
  /** Fondo alterno para franjas/secciones */
  surfaceAlt: string;
  /** Color de texto principal */
  text: string;
  /** Color de texto secundario / descripciones */
  muted: string;
}

export interface RestaurantConfig {
  /** Nombre completo, se muestra en el hero */
  name: string;
  /** Versión corta para el header fijo (opcional, si no se define usa `name`) */
  shortName?: string;
  tagline?: string;
  description: string;
  logo: string;
  heroImage: string;
  /** Número en formato internacional sin "+" ni espacios, ej: "5492610000000" */
  whatsappNumber: string;
  /** Mensaje predeterminado al iniciar un pedido general */
  whatsappDefaultMessage?: string;
  address: string;
  mapsUrl?: string;
  schedule?: ScheduleEntry[];
  currency: string;
  social: SocialLinks;
  theme: ThemeConfig;
  categories: Category[];
}
