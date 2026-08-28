# Carta Digital — Plantilla para restaurantes

Carta digital web, mobile-first, construida con Next.js 14 (App Router), React y
Tailwind CSS. Pensada para reutilizarse con distintos clientes cambiando **un
solo archivo**.

## Correr en local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Cómo reutilizar la plantilla para un cliente nuevo

Todo lo que cambia de un restaurante a otro vive en:

```
config/restaurant.config.ts
```

Ahí se edita: nombre, logo, imagen de portada, descripción, número de
WhatsApp, dirección, horarios, redes sociales, colores de marca (`theme`) y
las categorías con sus productos (nombre, descripción, precio, foto, tags).
Ningún componente tiene datos escritos a mano — todos leen de este archivo,
tipado en `types/restaurant.ts`.

Para un cliente nuevo:

1. Duplicar el proyecto (o crear una rama/branch).
2. Reemplazar los valores de `restaurantConfig` en `config/restaurant.config.ts`.
3. Reemplazar las imágenes por las reales del cliente (URLs propias, de su
   Instagram/Drive, o alojadas en `/public`).
4. Deploy a Vercel (ver abajo).

No hace falta tocar ningún componente de `components/`.

## Estructura del proyecto

```
app/                    Rutas de Next.js (App Router)
  layout.tsx            Fuentes, metadata SEO, variables de tema
  page.tsx              Ensambla la página con la config del restaurante
  globals.css           Estilos base
components/             UI, sin datos hardcodeados
  MenuExperience.tsx    Orquesta scrollspy entre header, categorías y secciones
  Header.tsx            Encabezado fijo (logo + nombre + nav de categorías)
  CategoryNav.tsx        Navegación horizontal de categorías
  Hero.tsx              Pantalla principal
  MenuSection.tsx        Sección de una categoría
  ProductCard.tsx        Tarjeta de producto
  WhatsAppButton.tsx     Botón de WhatsApp (variantes: hero, flotante, tarjeta)
  Footer.tsx             Dirección, horarios y redes
  EmberMark.tsx           Firma visual (trazo tipo brasa)
config/
  restaurant.config.ts   ⭐ Único archivo a editar por cliente
lib/
  whatsapp.ts            Arma los links de wa.me (con nota de extensión a carrito)
  theme.ts               Convierte el theme del config en variables CSS
  format.ts              Formateo de precios (Intl.NumberFormat)
  scroll.ts              Scroll suave con offset del header fijo
types/
  restaurant.ts           Tipos TypeScript de toda la data
```

## Diseño

- Paleta cálida "brasa/ember", 100% configurable vía `theme` en el config
  (los componentes usan clases Tailwind como `bg-primary` o `text-muted`,
  nunca colores fijos).
- Tipografía: Fraunces (display, con cursiva) para nombre y títulos, Inter
  para texto de lectura — cargadas con `next/font` (sin llamadas externas
  en runtime, óptimo para performance y Vercel).
- Scrollspy real: la categoría activa en el nav se resalta según qué
  sección está en pantalla, y tocar una categoría hace scroll suave con el
  offset correcto del header fijo.
- Animaciones sutiles (fade-up escalonado en las tarjetas, sin exagerar) y
  se respeta `prefers-reduced-motion`.

## Próximos pasos ya contemplados en la arquitectura

- **Carrito de compras**: `lib/whatsapp.ts` tiene comentado el punto exacto
  de extensión (`buildCartOrderLink`) para armar el mensaje de WhatsApp a
  partir de un array de ítems en vez de un producto suelto.
- **Código QR**: al ser un sitio Next.js normal, cualquier generador de QR
  puede apuntar directo a la URL de producción (o a `/?mesa=5`, etc., si más
  adelante se quiere diferenciar por mesa).
- **Dominio propio**: se configura desde el dashboard de Vercel del proyecto
  (Settings → Domains), sin cambios de código.
- **Nuevo cliente**: duplicar el repo y editar `config/restaurant.config.ts`.

## Deploy en Vercel

1. Subir el proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. En [vercel.com](https://vercel.com), "Add New Project" → importar el repo.
3. Vercel detecta Next.js automáticamente, no requiere configuración extra.
4. Deploy. Cada push a la rama principal genera un nuevo deploy automático.

## Notas técnicas

- Las imágenes de producto usan `<img>` nativo (no `next/image`) a propósito:
  cada cliente sube fotos desde dominios distintos, y así se evita tener que
  mantener una lista de dominios permitidos por cada nuevo restaurante. Si
  para un cliente puntual conviene la optimización de `next/image`, se puede
  activar agregando su dominio en `next.config.mjs`.
- Los datos de "Fuego & Sal" (nombre, productos, precios, fotos) son
  ficticios, a modo de ejemplo.
