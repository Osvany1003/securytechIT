'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  nombre: string;
  telefono: string;
  tipoProblema: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  tipoProblema?: string;
}

const WHATSAPP_NUMBER = '525668071790';

const problemTypes = [
  { value: '', label: 'Selecciona el tipo de problema' },
  { value: 'reparacion-pc', label: 'Reparación de PC/Laptop' },
  { value: 'mantenimiento', label: 'Mantenimiento preventivo' },
  { value: 'redes', label: 'Configuración de redes' },
  { value: 'cctv', label: 'Instalación de cámaras CCTV' },
  { value: 'software', label: 'Problemas de software' },
  { value: 'virus', label: 'Virus/Malware' },
  { value: 'soporte-remoto', label: 'Soporte remoto' },
  { value: 'otro', label: 'Otro' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    tipoProblema: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^[0-9]{10}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Ingresa un número de teléfono válido (10 dígitos)';
    }

    if (!formData.tipoProblema) {
      newErrors.tipoProblema = 'Selecciona un tipo de problema';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const buildWhatsAppMessage = (): string => {
    const tipoLabel =
      problemTypes.find((t) => t.value === formData.tipoProblema)?.label ??
      formData.tipoProblema;

    const lineas = [
      'Hola, solicito una revisión técnica.',
      '',
      `*Nombre:* ${formData.nombre}`,
      `*Teléfono:* ${formData.telefono}`,
      `*Tipo de problema:* ${tipoLabel}`,
    ];

    if (formData.mensaje.trim()) {
      lineas.push(`*Detalles:* ${formData.mensaje.trim()}`);
    }

    return lineas.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppMessage()
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        nombre: '',
        telefono: '',
        tipoProblema: '',
        mensaje: '',
      });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Side */}
          <div>
            <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-wider mb-3">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-securytech-azul mb-6">
              ¿Tienes un problema técnico?{' '}
              <span className="text-securytech-dorado">¡Contáctanos!</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Estamos listos para ayudarte. Completa el formulario y nos pondremos
              en contacto contigo lo antes posible.
            </p>

            {/* Coverage Info */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
              <h3 className="text-lg font-bold text-securytech-azul mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-securytech-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Área de Cobertura
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-securytech-azul">Servicio Presencial</h4>
                    <p className="text-gray-600 text-sm">
                      Chilpancingo y sus alrededores (Guerrero, México)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-securytech-dorado/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-securytech-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-securytech-azul">Soporte Remoto</h4>
                    <p className="text-gray-600 text-sm">
                      Disponible para cualquier ubicación (problemas de software,
                      configuraciones, asesoría técnica)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Atención Directa */}
            <div className="space-y-4">
              <a
                href="tel:+525668071790"
                className="flex items-center gap-4 p-4 bg-securytech-azul rounded-xl hover:bg-securytech-azul-destacado transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-securytech-dorado/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-securytech-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-securytech-dorado-claro">Llámanos</p>
                  <p className="font-semibold text-white">+52 566 807 1790</p>
                </div>
              </a>

              <a
                href="mailto:seguritech111@gmail.com"
                className="flex items-center gap-4 p-4 bg-securytech-azul rounded-xl hover:bg-securytech-azul-destacado transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-securytech-dorado/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-securytech-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-securytech-dorado-claro">Escríbenos</p>
                  <p className="font-semibold text-white">seguritech111@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-securytech-azul mb-6">
                Solicita una revisión
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-securytech-azul mb-2">
                    ¡Te redirigimos a WhatsApp!
                  </h4>
                  <p className="text-gray-600">
                    Si no se abrió la ventana, revisa que tu navegador no haya
                    bloqueado las pop-ups y vuelve a intentarlo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.nombre
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-securytech-dorado focus:border-securytech-dorado'
                      } focus:ring-2 focus:border-transparent transition-all duration-200 outline-none`}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.telefono
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-securytech-dorado focus:border-securytech-dorado'
                      } focus:ring-2 focus:border-transparent transition-all duration-200 outline-none`}
                      placeholder="566 807 1790"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
                    )}
                  </div>

                  {/* Tipo de problema */}
                  <div>
                    <label htmlFor="tipoProblema" className="block text-sm font-medium text-slate-700 mb-2">
                      Tipo de problema *
                    </label>
                    <select
                      id="tipoProblema"
                      name="tipoProblema"
                      value={formData.tipoProblema}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.tipoProblema
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-securytech-dorado focus:border-securytech-dorado'
                      } focus:ring-2 focus:border-transparent transition-all duration-200 outline-none bg-white`}
                    >
                      {problemTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.tipoProblema && (
                      <p className="mt-1 text-sm text-red-500">{errors.tipoProblema}</p>
                    )}
                  </div>

                  {/* Mensaje (opcional) */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                      Describe tu problema (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-securytech-dorado focus:border-securytech-dorado transition-all duration-200 outline-none resize-none"
                      placeholder="Cuéntanos más detalles sobre tu problema..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Abriendo WhatsApp...
                      </>
                    ) : (
                      <>
                        Enviar por WhatsApp
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

