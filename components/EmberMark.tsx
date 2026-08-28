/**
 * Firma visual de la plantilla: un trazo irregular que evoca una brasa /
 * chispa, en vez del típico subrayado recto o ícono genérico. Se usa como
 * indicador de categoría activa y como acento junto a los títulos de sección.
 */
export function EmberMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 8.5C10 8.5 10 3 18 3C24 3 24 9.5 30 9.5C36 9.5 36 2 44 2C50 2 50 7.5 58 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
