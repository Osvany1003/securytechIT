interface ExpertiseItem {
  role: string;
  icon: React.ReactNode;
}

const expertise: ExpertiseItem[] = [
  {
    role: 'Ingeniería en Sistemas',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    role: 'Informática',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    role: 'Electrónica',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    role: 'Seguridad Electrónica',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: 'Compromiso',
    description: 'Nos dedicamos a resolver tus problemas técnicos de manera eficiente.',
  },
  {
    title: 'Profesionalismo',
    description: 'Formación académica y experiencia práctica respaldan nuestro trabajo.',
  },
  {
    title: 'Innovación',
    description: 'Nos mantenemos actualizados con las últimas tecnologías del mercado.',
  },
];

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-surface-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div>
            <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-securytech-azul mb-6 tracking-tight">
              Ingenieros comprometidos con tu{' '}
              <span className="text-securytech-dorado">tranquilidad tecnológica</span>
            </h2>

            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Somos un equipo de profesionales con formación en{' '}
              <strong className="text-securytech-azul">Ingeniería en Sistemas e Informática</strong>,
              especializados en brindar soluciones tecnológicas integrales para hogares y empresas.
            </p>

            <p className="text-text-muted leading-relaxed mb-8">
              Nuestra experiencia nos permite abordar desde problemas técnicos complejos
              hasta implementaciones de infraestructura completa, siempre con un enfoque
              en la optimización de recursos y la satisfacción del cliente.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {expertise.map((item) => (
                <div
                  key={item.role}
                  className="inline-flex items-center gap-2.5 bg-surface text-securytech-azul px-4 py-3 rounded-xl text-sm font-medium border border-securytech-dorado/30"
                >
                  <span className="text-securytech-dorado flex-shrink-0">{item.icon}</span>
                  {item.role}
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-securytech-azul hover:bg-securytech-azul-destacado text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              Conoce más sobre nosotros
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-securytech-azul to-securytech-azul-destacado rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-securytech-dorado-claro">
                  Nuestros Valores
                </h3>

                <div className="space-y-5">
                  {values.map((value) => (
                    <div key={value.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-securytech-dorado/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-securytech-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-securytech-dorado/30">
                  <p className="text-white/80 italic leading-relaxed">
                    &ldquo;Nuestro objetivo es que te olvides de los problemas técnicos
                    y te concentres en lo que realmente importa.&rdquo;
                  </p>
                  <p className="text-securytech-dorado-claro text-sm mt-2">— Equipo SecurytechIT</p>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-securytech-dorado/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            </div>

            {/* TODO: reemplazar por <Image src="/img/equipo.jpg" alt="..." width={800} height={600} /> cuando esté lista */}
            <div
              className="relative aspect-[4/3] image-placeholder rounded-3xl border border-securytech-dorado/15 overflow-hidden"
              aria-label="Espacio reservado para foto del equipo"
              role="img"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-securytech-dorado-claro/60">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-xs uppercase tracking-widest font-medium">Conoce a nuestro equipo</span>
                <span className="text-[10px] text-securytech-dorado-claro/40">Foto próximamente</span>
              </div>
            </div>

            {/* TODO: reemplazar por <Image src="/img/instalaciones.jpg" alt="..." width={800} height={600} /> cuando esté disponible */}
            <div
              className="relative aspect-[4/3] image-placeholder rounded-3xl border border-securytech-dorado/15 overflow-hidden"
              aria-label="Espacio reservado para foto de instalaciones o trabajo de campo"
              role="img"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-securytech-dorado-claro/60">
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-xs uppercase tracking-widest font-medium">Nuestras instalaciones</span>
                <span className="text-[10px] text-securytech-dorado-claro/40">Foto próximamente</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
