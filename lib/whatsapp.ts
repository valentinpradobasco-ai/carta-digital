import type { Product, RestaurantConfig } from "@/types/restaurant";
import { formatPrice } from "@/lib/format";

/**
 * Arma el link de wa.me con un mensaje pre-cargado.
 * `phone` debe estar en formato internacional sin "+" (ej: "5492610000000").
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/** Link genérico para el botón flotante y el CTA del hero. */
export function buildGeneralOrderLink(config: RestaurantConfig): string {
  const message = config.whatsappDefaultMessage ?? `¡Hola! Quiero hacer un pedido en ${config.name}`;
  return buildWhatsAppLink(config.whatsappNumber, message);
}

/**
 * Link para consultar/pedir un producto puntual desde su tarjeta.
 * Pensado como paso intermedio hasta que se sume un carrito real:
 * cuando eso pase, reemplazar este mensaje por `buildCartOrderLink`
 * (ver nota más abajo) sin tocar los componentes que lo usan.
 */
export function buildProductOrderLink(config: RestaurantConfig, product: Product): string {
  const message = `¡Hola! Quiero pedir *${product.name}* (${formatPrice(
    product.price,
    config.currency
  )}) de ${config.name}.`;
  return buildWhatsAppLink(config.whatsappNumber, message);
}

/**
 * ─────────────────────────────────────────────────────────────────────────
 * Punto de extensión para el carrito de compras (roadmap):
 * cuando se agregue estado de carrito (ej: Zustand, Context o similar),
 * esta función reemplaza a `buildProductOrderLink` en el flujo de "Pedir":
 *
 *   interface CartItem { product: Product; quantity: number }
 *
 *   export function buildCartOrderLink(config: RestaurantConfig, items: CartItem[]) {
 *     const lines = items.map(
 *       (i) => `• ${i.quantity}x ${i.product.name} — ${formatPrice(i.product.price * i.quantity, config.currency)}`
 *     );
 *     const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
 *     const message = [
 *       `¡Hola! Quiero hacer este pedido en ${config.name}:`,
 *       "",
 *       ...lines,
 *       "",
 *       `Total: ${formatPrice(total, config.currency)}`,
 *     ].join("\n");
 *     return buildWhatsAppLink(config.whatsappNumber, message);
 *   }
 * ─────────────────────────────────────────────────────────────────────────
 */
