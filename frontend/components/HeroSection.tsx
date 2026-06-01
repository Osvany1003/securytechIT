'use client';

import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Laptop, Camera, Wrench, ArrowRight } from 'lucide-react';

const PHONE_RAW = '525668071790';
const WA_LINK = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
  'Hola, me gustaría obtener información sobre sus servicios.'
)}`;

const chips = [
  { icon: Laptop, label: 'Reparación de PC y Laptops' },
  { icon: Camera, label: 'Instalación de Cámaras' },
  { icon: Wrench, label: 'Mantenimiento Preventivo' },
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="inicio" className="relative bg-securytech-azul overflow-hidden">
      <div
        className="absolute top-1/4 left-1/3 w-2/3 h-1/2 bg-securytech-dorado/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-securytech-azul-destacado/40 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 bg-securytech-dorado/10 border border-securytech-dorado/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-securytech-dorado rounded-full animate-ping opacity-60" />
                <span className="relative inline-flex w-2 h-2 bg-securytech-dorado rounded-full" />
              </span>
              <span className="text-securytech-dorado-claro text-sm font-medium tracking-wide">
                Servicio técnico disponible en Chilpancingo
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
            >
              Soporte tecnológico{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-securytech-dorado via-securytech-dorado-claro to-securytech-dorado">
                rápido, seguro y confiable
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Reparamos tus equipos, instalamos cámaras de seguridad y optimizamos tu red.
              Soluciones prácticas para que la tecnología trabaje para ti, sin complicaciones.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {chips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 bg-securytech-azul-destacado/70 text-slate-200 rounded-full text-sm font-medium border border-securytech-dorado/20 px-4 py-2 backdrop-blur-sm"
                  >
                    <Icon className="w-4 h-4 text-securytech-dorado" aria-hidden="true" />
                    {chip.label}
                  </span>
                );
              })}
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
              >
                <WhatsAppGlyph className="w-5 h-5" />
                Cotizar por WhatsApp
              </a>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-securytech-dorado hover:bg-securytech-dorado-claro text-securytech-azul font-semibold px-7 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-securytech-dorado/40 hover:-translate-y-0.5"
              >
                Enviar mensaje
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-securytech-dorado/20 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-2xl">
                <div className="bg-white rounded-2xl p-6 md:p-8 flex items-center justify-center">
                  <Image
                    src="/Logo.jpeg"
                    alt="SECURITECH — Soporte Informático y Seguridad Electrónica"
                    width={520}
                    height={520}
                    priority
                    className="w-full h-auto max-w-xs md:max-w-sm object-contain"
                  />
                </div>

                <Image
                  src="/img/hero-instalacion.jpeg"
                  alt="Técnico de SECURITECH instalando cámara de seguridad WiFi en local comercial de Chilpancingo"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-xl object-cover mt-6"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-securytech-dorado/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-securytech-azul-destacado/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="h-20 bg-gradient-to-b from-transparent to-white pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
