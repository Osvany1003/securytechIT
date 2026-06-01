import Image from 'next/image';
import { Headset, Wrench, Video, Check, type LucideIcon } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  waMessage: string;
  /** Foto real opcional; si no hay, se usa un bloque de marca con el ícono. */
  image?: { src: string; alt: string };
}

const PHONE_RAW = '525668071790';

const services: Service[] = [
  {
    id: 1,
    title: 'Soporte Técnico',
    description:
      'Asistencia remota y presencial para resolver problemas de equipos de cómputo y configuración de dispositivos.',
    icon: Headset,
    features: ['Redes empresariales', 'Servidores', 'Consultoría IT'],
    waMessage:
      'Hola, me interesa el servicio de Soporte Técnico (redes, servidores o consultoría IT). ¿Pueden darme más información?',
  },
  {
    id: 2,
    title: 'Mantenimiento de Hardware',
    description:
      'Reparación y optimización de equipos de cómputo para maximizar su rendimiento y vida útil.',
    icon: Wrench,
    features: ['PC y laptops', 'Limpieza interna', 'Upgrades'],
    waMessage:
      'Hola, necesito servicio de Mantenimiento de Hardware (PC, laptop o upgrade). ¿Pueden cotizarme?',
  },
  {
    id: 3,
    title: 'Seguridad / CCTV',
    description:
      'Instalación profesional de sistemas de videovigilancia para proteger tu hogar o negocio.',
    icon: Video,
    features: ['Cámaras IP', 'DVR/NVR', 'Monitoreo remoto'],
    waMessage:
      'Hola, me interesa la instalación de Cámaras de Seguridad / CCTV. ¿Pueden darme información y cotización?',
    image: {
      src: '/img/hero-instalacion.jpeg',
      alt: 'Instalación profesional de cámara de seguridad WiFi Hikvision en negocio local — SECURITECH Chilpancingo',
    },
  },
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ServicesSummary() {
  return (
    <Section id="servicios" tone="light">
      <SectionHeading
        eyebrow="Nuestros Servicios"
        title="Soluciones Tecnológicas Integrales"
        subtitle="Ofrecemos servicios especializados para mantener tu tecnología funcionando al máximo rendimiento."
        className="mb-14 md:mb-20"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.id} delay={i * 0.1}>
              <article className="group relative h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-securytech-dorado/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 image-placeholder flex items-center justify-center">
                      <Icon className="w-16 h-16 text-securytech-dorado relative z-10" aria-hidden="true" />
                    </div>
                  )}

                  <div className="absolute -bottom-6 left-6 w-14 h-14 bg-securytech-dorado text-securytech-azul rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-securytech-dorado-claro transition-colors z-10">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                </div>

                <div className="p-6 md:p-7 pt-10">
                  <h3 className="font-display text-xl font-bold text-securytech-azul mb-3 group-hover:text-securytech-dorado transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                        <Check className="w-4 h-4 text-securytech-dorado flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(service.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm hover:gap-3 transition-all duration-300"
                    aria-label={`Cotizar ${service.title} por WhatsApp`}
                  >
                    <WhatsAppGlyph className="w-4 h-4" />
                    Cotizar por WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="text-center mt-14 md:mt-20">
        <p className="text-text-muted mb-4">¿No encuentras lo que buscas?</p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-securytech-azul hover:bg-securytech-azul-destacado text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Contáctanos para una solución personalizada
        </a>
      </div>
    </Section>
  );
}
