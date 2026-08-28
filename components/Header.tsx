import type { Category, RestaurantConfig } from "@/types/restaurant";
import { CategoryNav } from "./CategoryNav";
import { Logo } from "./Logo";

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
        <Logo
          src={config.logo}
          alt={`Logo de ${config.name}`}
          shape={config.logoShape ?? "circle"}
          variant="header"
        />
        {(config.logoShape ?? "circle") === "circle" && (
          <span className="truncate font-display text-lg font-semibold text-text">
            {config.shortName ?? config.name}
          </span>
        )}
      </div>
      <CategoryNav categories={categories} activeId={activeId} onSelect={onSelect} />
    </header>
  );
}
