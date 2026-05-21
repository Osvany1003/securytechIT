interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  waMessage: string;
  placeholderLabel: string;
  placeholderFile: string;
}

const PHONE_RAW = '525668071790';

const services: Service[] = [
  {
    id: 1,
    title: 'Soporte Técnico',
    description:
      'Asistencia remota y presencial para resolver problemas de equipos de cómputo y configuración de dispositivos.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Redes empresariales', 'Servidores', 'Consultoría IT'],
    waMessage:
      'Hola, me interesa el servicio de Soporte Técnico (redes, servidores o consultoría IT). ¿Pueden darme más información?',
    placeholderLabel: 'Espacio reservado para imagen del servicio Soporte Técnico',
    placeholderFile: 'servicio-soporte.jpg',
  },
  {
    id: 2,
    title: 'Mantenimiento de Hardware',
    description:
      'Reparación y optimización de equipos de cómputo para maximizar su rendimiento y vida útil.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['PC y laptops', 'Limpieza interna', 'Upgrades'],
    waMessage:
      'Hola, necesito servicio de Mantenimiento de Hardware (PC, laptop o upgrade). ¿Pueden cotizarme?',
    placeholderLabel: 'Espacio reservado para imagen del servicio Mantenimiento de Hardware',
    placeholderFile: 'servicio-hardware.jpg',
  },
  {
    id: 3,
    title: 'Seguridad / CCTV',
    description:
      'Instalación profesional de sistemas de videovigilancia para proteger tu hogar o negocio.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Cámaras IP', 'DVR/NVR', 'Monitoreo remoto'],
    waMessage:
      'Hola, me interesa la instalación de Cámaras de Seguridad / CCTV. ¿Pueden darme información y cotización?',
    placeholderLabel: 'Espacio reservado para imagen del servicio Seguridad / CCTV',
    placeholderFile: 'servicio-cctv.jpg',
  },
];

export default function ServicesSummary() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-securytech-azul mb-4 tracking-tight">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Ofrecemos servicios especializados para mantener tu tecnología funcionando al máximo rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-securytech-dorado/50 hover:shadow-lg transition-all duration-300"
            >
              {/* TODO: reemplazar por <Image src={`/img/${service.placeholderFile}`} ... /> cuando haya foto real */}
              <div
                className="relative aspect-video image-placeholder"
                aria-label={service.placeholderLabel}
                role="img"
              >
                <div className="absolute inset-0 flex items-center justify-center text-securytech-dorado-claro/40">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="absolute -bottom-6 left-6 w-14 h-14 bg-securytech-dorado text-securytech-azul rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-securytech-dorado-claro transition-colors">
                  {service.icon}
                </div>
              </div>

              <div className="p-6 md:p-7 pt-10">
                <h3 className="text-xl font-bold text-securytech-azul mb-3 group-hover:text-securytech-dorado transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                      <svg className="w-4 h-4 text-securytech-dorado flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M5 13l4 4L19 7" />
                      </svg>
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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Cotizar por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14 md:mt-20">
          <p className="text-text-muted mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-securytech-azul hover:bg-securytech-azul-destacado text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Contáctanos para una solución personalizada
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
