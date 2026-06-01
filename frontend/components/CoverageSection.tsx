import { MapPin, Map } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

const PHONE_RAW = '525668071790';
const WA_MESSAGE =
  'Hola, no veo mi colonia en la lista. ¿Dan servicio en mi zona de Chilpancingo?';
const WA_LINK = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(WA_MESSAGE)}`;

const colonias: string[] = [
  'Chilpancingo Centro',
  'Col. Zapata',
  'Col. Burócratas',
  'Col. Moctezuma',
  'Col. El Palmar',
  'Col. del Sur',
  'Frac. Bugambilias',
  'Col. El Pino',
  'Petaquillas',
  'Chilpancingo Oriente',
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CoverageSection() {
  return (
    <Section id="cobertura" tone="light">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <Reveal>
          <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Cobertura
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-securytech-azul mb-4 tracking-tight leading-tight">
            ¿Llegamos a tu colonia?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Servicio a domicilio en toda la ciudad de Chilpancingo, Guerrero.
          </p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {colonias.map((colonia) => (
              <li key={colonia} className="flex items-center gap-2.5 text-text-muted">
                <MapPin className="w-5 h-5 text-securytech-dorado flex-shrink-0" aria-hidden="true" />
                {colonia}
              </li>
            ))}
          </ul>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            <WhatsAppGlyph className="w-5 h-5" />
            ¿No ves tu colonia? Escríbenos
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] rounded-3xl border border-securytech-dorado/20 overflow-hidden bg-gradient-to-br from-securytech-azul to-securytech-azul-destacado shadow-lg">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent 0, transparent 14px, #D4AF37 14px, #D4AF37 15px)',
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-securytech-dorado/15 flex items-center justify-center">
                <Map className="w-9 h-9 text-securytech-dorado" aria-hidden="true" />
              </div>
              <span className="text-white font-display text-lg font-semibold tracking-tight">
                Mapa de cobertura
              </span>
              <span className="text-slate-300 text-sm">Chilpancingo, Guerrero · Servicio a domicilio</span>
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
