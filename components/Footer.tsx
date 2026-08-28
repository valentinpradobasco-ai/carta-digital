import type { RestaurantConfig } from "@/types/restaurant";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.918 8.437-9.94z" />
    </svg>
  );
}

export function Footer({ config }: { config: RestaurantConfig }) {
  return (
    <footer className="border-t border-white/5 bg-surface px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <span className="font-display text-xl font-semibold italic text-text">
          {config.name}
        </span>

        <p className="text-sm text-muted">{config.address}</p>

        {config.schedule && config.schedule.length > 0 && (
          <ul className="flex flex-col gap-0.5 text-sm text-muted">
            {config.schedule.map((entry) => (
              <li key={entry.days}>
                <span className="text-text/80">{entry.days}:</span> {entry.hours}
              </li>
            ))}
          </ul>
        )}

        {(config.social.instagram || config.social.facebook) && (
          <div className="mt-2 flex gap-4">
            {config.social.instagram && (
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-primary"
              >
                <InstagramIcon />
              </a>
            )}
            {config.social.facebook && (
              <a
                href={config.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted transition-colors hover:text-primary"
              >
                <FacebookIcon />
              </a>
            )}
          </div>
        )}

        <p className="mt-6 text-xs text-muted/60">
          Carta digital de {config.name} · Plantilla desarrollada por Estudio Brujo
        </p>
      </div>
    </footer>
  );
}
