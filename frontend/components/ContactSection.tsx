'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Phone, Mail, Check } from 'lucide-react';
import Section from '@/components/ui/Section';

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
const PHONE_DISPLAY = '+52 56 6807 1790';
const EMAIL = 'seguritech111@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/seguritech_mx';
const FACEBOOK_URL = 'https://www.facebook.com/share/1CdBYX2moR/';

const benefits = [
  'Respuesta el mismo día por WhatsApp',
  'Cotización sin costo ni compromiso',
  'Garantía por escrito en cada servicio',
  'Atención a domicilio en Chilpancingo',
];

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

interface ContactChannel {
  label: string;
  description: string;
  value: string;
  href: string;
  external: boolean;
  iconBg: string;
  icon: React.ReactNode;
}

const contactChannels: ContactChannel[] = [
  {
    label: 'WhatsApp',
    description: 'Respuesta inmediata',
    value: PHONE_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Hola, me gustaría obtener información sobre sus servicios.'
    )}`,
    external: true,
    iconBg: 'bg-green-500',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Llámanos',
    description: 'Atención directa',
    value: PHONE_DISPLAY,
    href: `tel:+${WHATSAPP_NUMBER}`,
    external: false,
    iconBg: 'bg-securytech-dorado',
    icon: <Phone className="w-6 h-6 text-securytech-azul" aria-hidden="true" />,
  },
  {
    label: 'Correo',
    description: 'Envíanos los detalles',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    iconBg: 'bg-blue-500',
    icon: <Mail className="w-6 h-6 text-white" aria-hidden="true" />,
  },
  {
    label: 'Instagram',
    description: '@seguritech_mx',
    value: 'Síguenos',
    href: INSTAGRAM_URL,
    external: true,
    iconBg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    description: 'Visita nuestra página',
    value: 'Síguenos',
    href: FACEBOOK_URL,
    external: true,
    iconBg: 'bg-[#1877F2]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
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

  const inputBase =
    'w-full px-4 py-3 rounded-xl border bg-surface text-securytech-azul placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-securytech-dorado/40 transition';

  return (
    <Section id="contacto" tone="light">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Columna izquierda: mensaje + beneficios + canales */}
        <div>
          <span className="inline-block text-securytech-dorado font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Estamos para ayudarte
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-securytech-azul mb-4 tracking-tight leading-tight">
            Contáctanos por el medio que prefieras
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            Elige el canal más cómodo para ti, o llena el formulario y te escribimos
            por WhatsApp. Respondemos en horario laboral.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-text-muted">
                <span className="w-6 h-6 rounded-full bg-securytech-dorado/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-securytech-dorado" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactChannels.map((channel) => {
              const isExternal = channel.external;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group bg-surface border border-border rounded-2xl p-4 hover:border-securytech-dorado/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
                  aria-label={`Contactar por ${channel.label}: ${channel.value}`}
                >
                  <div className={`${channel.iconBg} text-white w-11 h-11 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0`}>
                    {channel.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-securytech-azul leading-tight">{channel.label}</p>
                    <p className="text-sm text-text-muted truncate">{channel.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Columna derecha: formulario en card */}
        <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-securytech-azul mb-2 tracking-tight">
              Solicita tu cotización
            </h3>
            <p className="text-text-muted">
              Llena el formulario y te contactaremos por WhatsApp.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-600" aria-hidden="true" />
              </div>
              <h4 className="font-display text-xl font-bold text-securytech-azul mb-2">¡Te redirigimos a WhatsApp!</h4>
              <p className="text-text-muted">
                Si no se abrió la ventana, revisa que tu navegador no haya
                bloqueado las pop-ups y vuelve a intentarlo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-securytech-azul mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.nombre ? 'border-red-400' : 'border-border'}`}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-securytech-azul mb-1.5">
                    Teléfono *
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.telefono ? 'border-red-400' : 'border-border'}`}
                    placeholder="10 dígitos"
                  />
                  {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="tipoProblema" className="block text-sm font-medium text-securytech-azul mb-1.5">
                  Tipo de problema *
                </label>
                <select
                  id="tipoProblema"
                  name="tipoProblema"
                  value={formData.tipoProblema}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.tipoProblema ? 'border-red-400' : 'border-border'}`}
                >
                  {problemTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                {errors.tipoProblema && <p className="text-red-500 text-xs mt-1">{errors.tipoProblema}</p>}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-securytech-azul mb-1.5">
                  Describe tu problema (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputBase} border-border resize-none`}
                  placeholder="Cuéntanos más detalles sobre tu problema..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 disabled:bg-green-500/60 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/40"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Abriendo WhatsApp...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar por WhatsApp
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
