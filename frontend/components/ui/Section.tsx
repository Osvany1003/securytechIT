import type { ReactNode } from 'react';

export type SectionTone = 'light' | 'muted' | 'dark';

const toneBackground: Record<SectionTone, string> = {
  light: 'bg-surface',
  muted: 'bg-surface-muted',
  dark: 'bg-securytech-azul',
};

interface SectionProps {
  id?: string;
  /** light = blanco, muted = gris muy claro, dark = azul marino de marca. */
  tone?: SectionTone;
  /** Padding vertical; por defecto el ritmo estándar de sección. */
  paddingClassName?: string;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
  children: ReactNode;
}

/**
 * Banda de sección: fondo según `tone`, padding vertical estándar y contenedor centrado.
 * Es la base del ritmo de bandas claro/oscuro de la landing.
 */
export default function Section({
  id,
  tone = 'light',
  paddingClassName = 'py-20 md:py-28',
  className = '',
  containerClassName = '',
  ariaLabel,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${toneBackground[tone]} ${paddingClassName} ${className}`}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
