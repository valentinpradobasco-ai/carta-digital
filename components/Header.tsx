import type { Category, RestaurantConfig } from "@/types/restaurant";
import { CategoryNav } from "./CategoryNav";

interface HeaderProps {
  config: RestaurantConfig;
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function Header({ config, categories, activeId, onSelect }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/85 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4 py-2.5 sm:px-8">
        <img
          src={config.logo}
          alt={`Logo de ${config.name}`}
          className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
        />
        <span className="truncate font-display text-lg font-semibold italic text-text">
          {config.shortName ?? config.name}
        </span>
      </div>
      <CategoryNav categories={categories} activeId={activeId} onSelect={onSelect} />
    </header>
  );
}
