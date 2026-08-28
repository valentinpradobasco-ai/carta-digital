import type { Category } from "@/types/restaurant";
import { EmberMark } from "./EmberMark";

interface CategoryNavProps {
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryNav({ categories, activeId, onSelect }: CategoryNavProps) {
  return (
    <nav
      aria-label="Categorías de la carta"
      className="scrollbar-hide flex gap-2 overflow-x-auto px-4 py-3 sm:px-8"
    >
      {categories.map((category) => {
        const isActive = category.id === activeId;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            aria-current={isActive}
            className={`group relative flex shrink-0 snap-start items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-primary/15 text-primary"
                : "text-muted hover:bg-white/5 hover:text-text"
            }`}
          >
            {category.icon && <span aria-hidden="true">{category.icon}</span>}
            {category.name}
            <EmberMark
              className={`absolute -bottom-1 left-1/2 h-2 w-8 -translate-x-1/2 text-primary transition-opacity duration-200 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
