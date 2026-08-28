/** Alto aproximado del header + nav de categorías fijos, en px. */
export const STICKY_HEADER_OFFSET = 112;

/** Hace scroll suave hasta una sección, compensando el header fijo. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - STICKY_HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}
