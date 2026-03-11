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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        nombre: '',
        telefono: '',
        tipoProblema: '',
        mensaje: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Side */}
          <div>
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              ¿Tienes un problema técnico?{' '}
              <span className="text-blue-600">¡Contáctanos!</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Estamos listos para ayudarte. Completa el formulario y nos pondremos
              en contacto contigo lo antes posible.
            </p>

            {/* Coverage Info */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <h4 className="font-semibold text-slate-900">Servicio Presencial</h4>
                    <p className="text-gray-600 text-sm">
                      Chilpancingo y sus alrededores (Guerrero, México)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Soporte Remoto</h4>
                    <p className="text-gray-600 text-sm">
                      Disponible para cualquier ubicación (problemas de software,
                      configuraciones, asesoría técnica)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4">
              <a
                href="tel:+527471234567"
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Llámanos</p>
                  <p className="font-semibold text-slate-900">+52 747 123 4567</p>
                </div>
              </a>

              <a
                href="mailto:contacto@securytechit.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Escríbenos</p>
                  <p className="font-semibold text-slate-900">contacto@securytechit.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Solicita una revisión
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-gray-600">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
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
                          : 'border-gray-300 focus:ring-blue-500'
                      } focus:ring-2 focus:border-transparent transition-all duration-200 outline-none`}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
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
                          : 'border-gray-300 focus:ring-blue-500'
                      } focus:ring-2 focus:border-transparent transition-all duration-200 outline-none`}
                      placeholder="747 123 4567"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
                    )}
                  </div>

                  {/* Tipo de problema */}
                  <div>
                    <label
                      htmlFor="tipoProblema"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
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
                          : 'border-gray-300 focus:ring-blue-500'
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
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Describe tu problema (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                      placeholder="Cuéntanos más detalles sobre tu problema..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar solicitud
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

