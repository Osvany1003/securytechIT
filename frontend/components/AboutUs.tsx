import Image from 'next/image';
import { Cpu, MonitorSmartphone, Zap, ShieldCheck, Check, ArrowRight, type LucideIcon } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

interface ExpertiseItem {
  role: string;
  icon: LucideIcon;
}

const expertise: ExpertiseItem[] = [
  { role: 'Ingeniería en Sistemas', icon: Cpu },
  { role: 'Informática', icon: MonitorSmartphone },
  { role: 'Electrónica', icon: Zap },
  { role: 'Seguridad Electrónica', icon: ShieldCheck },
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
    <Section id="nosotros" tone="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <Reveal>
          <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Sobre Nosotros
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-securytech-azul mb-6 tracking-tight leading-tight">
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
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.role}
                  className="inline-flex items-center gap-2.5 bg-surface text-securytech-azul px-4 py-3 rounded-xl text-sm font-medium border border-securytech-dorado/30 shadow-soft"
                >
                  <Icon className="w-5 h-5 text-securytech-dorado flex-shrink-0" aria-hidden="true" />
                  {item.role}
                </div>
              );
            })}
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-securytech-azul hover:bg-securytech-azul-destacado text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Conoce más sobre nosotros
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div className="bg-gradient-to-br from-securytech-azul to-securytech-azul-destacado rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold mb-6 text-securytech-dorado-claro tracking-tight">
                Nuestros Valores
              </h3>

              <div className="space-y-5">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-securytech-dorado/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-securytech-dorado" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-securytech-dorado/30">
                <p className="text-slate-200 italic leading-relaxed">
                  &ldquo;Nuestro objetivo es que te olvides de los problemas técnicos
                  y te concentres en lo que realmente importa.&rdquo;
                </p>
                <p className="text-securytech-dorado-claro text-sm mt-2">— Equipo SECURITECH</p>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-securytech-dorado/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          </div>

          <Image
            src="/img/hero-instalacion.jpeg"
            alt="Equipo técnico de SECURITECH realizando instalación de sistema de videovigilancia en Chilpancingo"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-3xl shadow-md"
          />
        </Reveal>

      </div>
    </Section>
  );
}
