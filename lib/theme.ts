import type { ThemeConfig } from "@/types/restaurant";

/** "#E07A3F" → "224 122 63" (formato que espera Tailwind para rgb(var(--x) / <alpha>)) */
function hexToChannels(hex: string): string {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
}

/**
 * Convierte el theme del restaurante en variables CSS (custom properties)
 * para inyectar en <html style={...}>. Así, cambiar colores en
 * config/restaurant.config.ts alcanza para re-temizar todo el sitio.
 */
export function themeToCssVars(theme: ThemeConfig): Record<string, string> {
  return {
    "--color-primary": hexToChannels(theme.primary),
    "--color-primary-dark": hexToChannels(theme.primaryDark),
    "--color-brasa": hexToChannels(theme.brasa),
    "--color-background": hexToChannels(theme.background),
    "--color-surface": hexToChannels(theme.surface),
    "--color-surface-alt": hexToChannels(theme.surfaceAlt),
    "--color-text": hexToChannels(theme.text),
    "--color-muted": hexToChannels(theme.muted),
  } as Record<string, string>;
}
