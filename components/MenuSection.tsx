import { forwardRef } from "react";
import type { Category, RestaurantConfig } from "@/types/restaurant";
import { ProductCard } from "./ProductCard";
import { EmberMark } from "./EmberMark";

interface MenuSectionProps {
  category: Category;
  config: RestaurantConfig;
}

export const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(function MenuSection(
  { category, config },
  ref
) {
  return (
    <section id={category.id} ref={ref} className="scroll-mt-28 px-4 py-8 sm:px-8">
      <div className="mb-4 flex items-center gap-2.5">
        {category.icon && <span className="text-xl">{category.icon}</span>}
        <h2 className="font-display text-2xl font-semibold text-text">{category.name}</h2>
      </div>
      <EmberMark className="mb-5 h-2.5 w-10 text-primary/60" />

      <div className="flex flex-col gap-3">
        {category.products.map((product, index) => (
          <ProductCard key={product.id} product={product} config={config} index={index} />
        ))}
      </div>
    </section>
  );
});
