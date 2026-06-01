import type { ReactNode } from 'react';

export type HeadingTone = 'light' | 'dark';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** light = sobre fondo claro (título azul), dark = sobre fondo oscuro (título blanco). */
  tone?: HeadingTone;
  align?: 'center' | 'left';
  className?: string;
  /** id opcional para el <h2>, útil para aria-labelledby. */
  titleId?: string;
}

/**
 * Encabezado de sección consistente: eyebrow dorado en mayúsculas, título display
 * y subtítulo. El color del título y subtítulo respeta el contrato de contraste
 * según `tone` (nunca texto oscuro sobre oscuro ni claro sobre claro).
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
  className = '',
  titleId,
}: SectionHeadingProps) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-securytech-azul';
  const subtitleColor = tone === 'dark' ? 'text-slate-300' : 'text-text-muted';
  const layout = align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left';

  return (
    <div className={`${layout} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-[0.15em] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        id={titleId}
        className={`font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
