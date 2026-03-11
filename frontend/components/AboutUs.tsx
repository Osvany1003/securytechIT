interface TeamMember {
  role: string;
  icon: React.ReactNode;
}

const expertise: TeamMember[] = [
  {
    role: 'Ingeniería en Sistemas',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    role: 'Informática',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    role: 'Electrónica',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    role: 'Seguridad Electrónica',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ingenieros comprometidos con tu{' '}
              <span className="text-blue-600">tranquilidad tecnológica</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Somos un equipo de profesionales con formación en{' '}
              <strong className="text-slate-900">Ingeniería en Sistemas e Informática</strong>,
              especializados en brindar soluciones tecnológicas integrales para hogares y empresas.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Nuestra experiencia nos permite abordar desde problemas técnicos complejos
              hasta implementaciones de infraestructura completa, siempre con un enfoque
              en la optimización de recursos y la satisfacción del cliente.
            </p>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {item.icon}
                  {item.role}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Conoce más sobre nosotros
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Nuestros Valores</h3>

                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-white/70 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/80 italic">
                    "Nuestro objetivo es que te olvides de los problemas técnicos
                    y te concentres en lo que realmente importa."
                  </p>
                  <p className="text-white/60 text-sm mt-2">— Equipo SecurytechIT</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}

