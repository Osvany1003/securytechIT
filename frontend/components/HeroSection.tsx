'use client';

import Image from 'next/image';

export default function HeroSection() {
  const handleRequestReview = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-securytech-azul overflow-hidden">
      {/* Logo gigante de fondo */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 60%, transparent 90%)',
          maskImage:
            'radial-gradient(ellipse at center, black 60%, transparent 90%)',
        }}
      >
        <Image
          src="/Logo.jpeg"
          alt=""
          width={1800}
          height={1800}
          priority
          aria-hidden="true"
          className="w-[110%] max-w-[1400px] h-auto opacity-55 select-none"
        />
      </div>

      {/* Resplandor sutil dorado de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-securytech-dorado/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <div className="max-w-4xl mx-auto">

          {/* Insignia superior */}
          <div className="inline-flex items-center gap-2 bg-securytech-dorado/10 border border-securytech-dorado/30 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-securytech-dorado rounded-full animate-pulse" />
            <span className="text-securytech-dorado-claro text-sm font-medium tracking-wide">
              Servicio técnico disponible en Chilpancingo
            </span>
          </div>

          {/* Título principal con degradado dorado */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Soporte tecnológico <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-securytech-dorado to-securytech-dorado-claro">
              rápido, seguro y confiable
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Reparamos tus equipos, instalamos cámaras de seguridad y optimizamos tu red.
            Soluciones prácticas para que la tecnología trabaje para ti, sin complicaciones.
          </p>

          {/* Etiquetas rápidas de servicios */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 bg-securytech-azul-destacado/80 text-slate-200 rounded-lg text-sm font-medium border border-securytech-dorado/20 flex items-center gap-2 backdrop-blur-sm shadow-sm">
              💻 Reparación de PC y Laptops
            </span>
            <span className="px-4 py-2 bg-securytech-azul-destacado/80 text-slate-200 rounded-lg text-sm font-medium border border-securytech-dorado/20 flex items-center gap-2 backdrop-blur-sm shadow-sm">
              📹 Instalación de Cámaras de Seguridad
            </span>
            <span className="px-4 py-2 bg-securytech-azul-destacado/80 text-slate-200 rounded-lg text-sm font-medium border border-securytech-dorado/20 flex items-center gap-2 backdrop-blur-sm shadow-sm">
              🔧 Mantenimiento Preventivo
            </span>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRequestReview}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-securytech-dorado hover:bg-securytech-dorado-claro text-securytech-azul font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-securytech-dorado/40 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Contactar ahora
            </button>

            <a
              href="#servicios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-securytech-azul-destacado hover:bg-securytech-azul-destacado/80 text-white font-semibold px-8 py-4 rounded-xl border border-securytech-dorado/30 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              Ver todos los servicios
            </a>
          </div>

        </div>
      </div>

      {/* Ola decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full translate-y-[1px]">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}