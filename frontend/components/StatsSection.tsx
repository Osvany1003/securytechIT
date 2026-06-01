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
  return (
    <section className="bg-securytech-azul py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-2 lg:px-6 ${
                i > 0 ? 'lg:border-l lg:border-white/10' : ''
              }`}
            >
              <p className="text-3xl md:text-4xl font-bold text-securytech-dorado mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
