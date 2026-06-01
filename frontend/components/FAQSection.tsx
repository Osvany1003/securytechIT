'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

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
    <Section id="preguntas" tone="muted">
      <SectionHeading
        eyebrow="Preguntas Frecuentes"
        title="Resolvemos tus dudas"
        subtitle="Lo que más nos preguntan antes de contratar. ¿Te queda otra duda? Escríbenos por WhatsApp."
        className="mb-12 md:mb-16"
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`bg-surface border rounded-2xl overflow-hidden transition-colors duration-300 ${
                isOpen ? 'border-securytech-dorado/50 shadow-soft' : 'border-border'
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
                  <Plus
                    className={`w-6 h-6 flex-shrink-0 text-securytech-dorado transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  />
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
    </Section>
  );
}
