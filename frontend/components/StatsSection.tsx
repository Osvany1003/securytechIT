'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: '47',
    label: 'personas encuestadas en Chilpancingo',
  },
  {
    value: '72%',
    label: 'ya tiene o planea instalar cámaras este año',
  },
  {
    value: '87%',
    label: 'pagaría $450+ MXN por mantenimiento profesional con garantía',
  },
  {
    value: '83%',
    label: 'prefiere WhatsApp — respondemos en menos de 2 horas',
  },
];

export default function StatsSection() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="bg-surface py-14 md:py-16 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={item}
              className={`text-center px-2 lg:px-6 ${
                i > 0 ? 'lg:border-l lg:border-border' : ''
              }`}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-securytech-dorado mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
