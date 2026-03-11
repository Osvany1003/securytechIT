interface Brand {
  name: string;
  logo: React.ReactNode;
}

const brands: Brand[] = [
  {
    name: 'Microsoft',
    logo: (
      <svg className="h-8 w-auto" viewBox="0 0 23 23" fill="currentColor">
        <rect x="0" y="0" width="10.5" height="10.5" />
        <rect x="12.5" y="0" width="10.5" height="10.5" />
        <rect x="0" y="12.5" width="10.5" height="10.5" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" />
      </svg>
    ),
  },
  {
    name: 'HP',
    logo: (
      <span className="text-2xl font-bold tracking-tighter">hp</span>
    ),
  },
  {
    name: 'Dell',
    logo: (
      <span className="text-2xl font-bold">DELL</span>
    ),
  },
  {
    name: 'Lenovo',
    logo: (
      <span className="text-xl font-semibold tracking-wide">Lenovo</span>
    ),
  },
  {
    name: 'Hikvision',
    logo: (
      <span className="text-xl font-bold">HIKVISION</span>
    ),
  },
  {
    name: 'Dahua',
    logo: (
      <span className="text-xl font-bold">dahua</span>
    ),
  },
];

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    value: '500+',
    label: 'Equipos reparados',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: '150+',
    label: 'Cámaras instaladas',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: '98%',
    label: 'Clientes satisfechos',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '5+',
    label: 'Años de experiencia',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function TrustBadge() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Resultados que nos respaldan
            </h2>
            <p className="text-gray-600">
              Números que reflejan nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Marcas con las que trabajamos
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Expertos en las principales marcas del mercado
            </h3>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 text-gray-400 hover:text-blue-600 transition-colors duration-300 opacity-70 hover:opacity-100"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </div>

          {/* Trust Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-slate-700 font-medium">
                Garantía en todos nuestros servicios
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

