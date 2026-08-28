"use client";

import { useEffect, useRef, useState } from "react";
import type { RestaurantConfig } from "@/types/restaurant";
import { scrollToSection } from "@/lib/scroll";
import { buildGeneralOrderLink } from "@/lib/whatsapp";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MenuSection } from "./MenuSection";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function MenuExperience({ config }: { config: RestaurantConfig }) {
  const { categories } = config;
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Entre todas las secciones visibles, tomamos la más cercana al tope
        // del viewport (debajo del header) como la categoría "activa".
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
        );
        const id = topMost.target.id;
        if (id) setActiveId(id);
      },
      {
        rootMargin: "-120px 0px -55% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        config={config}
        categories={categories}
        activeId={activeId}
        onSelect={handleSelect}
      />

      <main>
        <Hero config={config} />

        {categories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            config={config}
            ref={(el) => {
              sectionRefs.current[category.id] = el;
            }}
          />
        ))}
      </main>

      <Footer config={config} />

      <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
        <WhatsAppButton
          href={buildGeneralOrderLink(config)}
          label="Pedir por WhatsApp"
          variant="floating"
        />
      </div>
    </div>
  );
}
