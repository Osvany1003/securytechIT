'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Tienen que perforar paredes para instalar las cámaras?',
    answer:
      'Las cámaras que instalamos son WiFi, así que en la mayoría de los casos solo se hace una pequeña perforación para el soporte de montaje. No hay cableado largo ni instalaciones invasivas. Si tu espacio es rentado, lo platicamos antes de arrancar.',
  },
  {
    question: '¿Puedo ver las cámaras desde mi celular?',
    answer:
      'Sí. Configuramos todo para que puedas ver en vivo desde tu teléfono (Android o iPhone) desde donde estés. También te explicamos cómo usarla antes de irnos.',
  },
  {
    question: '¿Cuánto tiempo tarda una instalación de cámaras?',
    answer:
      'Un Plan Básico (1 cámara) lo instalamos en aproximadamente 2 horas. Un Plan Premium (3 cámaras + NVR) en 4 a 6 horas, generalmente en el mismo día. Te confirmamos la fecha y hora antes.',
  },
  {
    question: '¿Qué incluye el mantenimiento preventivo de cómputo?',
    answer:
      'Limpieza física interna, cambio de pasta térmica, revisión de ventiladores, reinstalación del sistema operativo si es necesario, instalación de antivirus y optimización general. Si detectamos alguna falla de hardware, te avisamos antes de cualquier cargo extra.',
  },
  {
    question: '¿Trabajan a domicilio en toda Chilpancingo?',
    answer:
      'Sí, vamos a tu casa o negocio en toda la ciudad. Incluye Centro, Zapata, Burócratas, Moctezuma, El Palmar, Petaquillas y más. Si estás en un municipio cercano, escríbenos y lo valoramos.',
  },
  {
    question: '¿Qué garantía dan por sus servicios?',
    answer:
      'En instalación de cámaras: 6 meses en equipo y 30 días en mano de obra. En mantenimiento de cómputo: 30 días. En configuración de redes: 15 días. Todo queda por escrito.',
  },
  {
    question: '¿Aceptan efectivo o solo transferencia?',
    answer:
      'Aceptamos efectivo, transferencia bancaria SPEI y depósito. Emitimos factura CFDI 4.0 si la necesitas.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="preguntas" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-securytech-azul mb-4 tracking-tight">
            Resolvemos tus dudas
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Lo que más nos preguntan antes de contratar. ¿Te queda otra duda? Escríbenos por WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-surface border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-securytech-dorado/50' : 'border-border'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex items-center justify-between gap-4 w-full text-left px-6 py-5 cursor-pointer"
                  >
                    <span className="font-semibold text-securytech-azul">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 text-securytech-dorado transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
