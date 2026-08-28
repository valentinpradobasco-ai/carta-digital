import type { Product, RestaurantConfig } from "@/types/restaurant";
import { formatPrice } from "@/lib/format";
import { buildProductOrderLink } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  config: RestaurantConfig;
  /** Índice dentro de la categoría, usado solo para escalonar la animación de entrada */
  index: number;
}

export function ProductCard({ product, config, index }: ProductCardProps) {
  const isAvailable = product.available !== false;
  const orderLink = buildProductOrderLink(config, product);
  const delay = `${Math.min(index, 6) * 60}ms`;

  return (
    <article
      style={{ animationDelay: delay }}
      className={`group motion-safe:animate-fade-up flex gap-4 rounded-2xl border p-3 transition-colors duration-200 sm:p-4 ${
        product.featured
          ? "border-primary/25 bg-primary/[0.06]"
          : "border-white/5 bg-surface hover:border-white/10"
      } ${!isAvailable ? "opacity-50" : ""}`}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && isAvailable && (
          <span className="absolute left-1 top-1 rounded-full bg-brasa px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-text">
            Top
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold leading-tight text-text sm:text-lg">
            {product.name}
          </h3>
          <span className="shrink-0 tabular-nums font-display text-base font-semibold text-primary sm:text-lg">
            {formatPrice(product.price, config.currency)}
          </span>
        </div>

        <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted">{product.description}</p>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-alt px-2 py-0.5 text-[11px] font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {isAvailable ? (
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
            >
              Pedir
            </a>
          ) : (
            <span className="text-xs font-medium text-muted">No disponible</span>
          )}
        </div>
      </div>
    </article>
  );
}
