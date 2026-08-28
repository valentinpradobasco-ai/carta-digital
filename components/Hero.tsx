import type { RestaurantConfig } from "@/types/restaurant";
import { buildGeneralOrderLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";
import { EmberMark } from "./EmberMark";

export function Hero({ config }: { config: RestaurantConfig }) {
  const orderLink = buildGeneralOrderLink(config);

  return (
    <section className="relative">
      <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden sm:h-[68vh]">
        <img
          src={config.heroImage}
          alt={`Ambiente de ${config.name}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
      </div>

      <div className="relative -mt-24 px-5 pb-8 sm:-mt-28 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <img
            src={config.logo}
            alt={`Logo de ${config.name}`}
            className="h-20 w-20 rounded-full border-2 border-primary/40 object-cover shadow-2xl shadow-black/50 sm:h-24 sm:w-24"
          />

          <h1 className="mt-4 font-display text-4xl font-semibold italic tracking-tight text-text sm:text-5xl">
            {config.name}
          </h1>

          {config.tagline && (
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {config.tagline}
            </p>
          )}

          <EmberMark className="mt-4 h-3 w-14 text-brasa animate-flicker motion-reduce:animate-none" />

          <p className="mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-muted sm:text-base">
            {config.description}
          </p>

          <div className="mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <WhatsAppButton
              href={orderLink}
              label="Pedir por WhatsApp"
              variant="solid"
              className="w-full sm:w-auto"
            />
            {config.mapsUrl && (
              <a
                href={config.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-white/10 px-5 py-3 text-center text-sm font-medium text-muted transition-colors hover:border-white/20 hover:text-text sm:w-auto"
              >
                Ver ubicación
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
