interface LogoProps {
  src: string;
  alt: string;
  shape: "circle" | "wide";
  variant: "header" | "hero";
}

const circleSizes: Record<LogoProps["variant"], string> = {
  header: "h-9 w-9",
  hero: "h-20 w-20 sm:h-24 sm:w-24",
};

const wideHeights: Record<LogoProps["variant"], string> = {
  header: "h-7",
  hero: "h-16 sm:h-20",
};

/** Isotipo/ícono: se recorta en un círculo. Pensado para logos cuadrados. */
function CircleLogo({ src, alt, variant }: Omit<LogoProps, "shape">) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${circleSizes[variant]} rounded-full object-cover ${
        variant === "hero"
          ? "border-2 border-primary/40 shadow-2xl shadow-black/50"
          : "ring-1 ring-white/10"
      }`}
    />
  );
}

/** Isologo/wordmark: se muestra completo, sin recortar, respetando su proporción. */
function WideLogo({ src, alt, variant }: Omit<LogoProps, "shape">) {
  return <img src={src} alt={alt} className={`${wideHeights[variant]} w-auto object-contain`} />;
}

export function Logo({ src, alt, shape, variant }: LogoProps) {
  return shape === "wide" ? (
    <WideLogo src={src} alt={alt} variant={variant} />
  ) : (
    <CircleLogo src={src} alt={alt} variant={variant} />
  );
}
