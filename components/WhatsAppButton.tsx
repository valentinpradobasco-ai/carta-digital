interface WhatsAppButtonProps {
  href: string;
  label: string;
  variant?: "solid" | "outline" | "compact" | "floating";
  className?: string;
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.876.52 3.632 1.42 5.13L2 22l4.998-1.393A9.94 9.94 0 0 0 12.001 22C17.524 22 22 17.522 22 12S17.524 2 12.001 2zm0 18.06a8.03 8.03 0 0 1-4.318-1.257l-.31-.184-3.05.85.834-2.98-.202-.32A8.02 8.02 0 1 1 20.02 12a8.03 8.03 0 0 1-8.019 8.06z" />
    </svg>
  );
}

const variantStyles: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  solid:
    "bg-primary hover:bg-primary-dark text-background font-semibold shadow-lg shadow-primary/20",
  outline: "border border-primary/40 text-primary hover:bg-primary/10 font-medium",
  compact: "bg-primary/15 text-primary hover:bg-primary/25 font-medium text-sm",
  floating:
    "bg-primary hover:bg-primary-dark text-background shadow-xl shadow-black/40",
};

export function WhatsAppButton({
  href,
  label,
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const isFloating = variant === "floating";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 active:scale-95 ${
        isFloating ? "h-14 w-14" : "px-5 py-3"
      } ${variantStyles[variant]} ${className}`}
    >
      <WhatsAppIcon className={isFloating ? "h-7 w-7" : "h-5 w-5"} />
      {!isFloating && <span>{label}</span>}
    </a>
  );
}
