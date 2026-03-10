import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$1,500",
      desc: "MVP básico para validar tu idea en el mercado rápidamente.",
      features: [
        "Arquitectura inicial",
        "Frontend responsivo",
        "Backend básico (Supabase)",
        "Autenticación de usuarios",
        "1 Integración API",
        "Deploy a producción",
        "Soporte por 1 mes"
      ],
      cta: "Empezar Starter",
      popular: false
    },
    {
      name: "Growth",
      price: "$3,000",
      desc: "SaaS completo con funcionalidades avanzadas y panel de administración.",
      features: [
        "Arquitectura escalable",
        "Frontend avanzado (React/Next.js)",
        "Backend robusto (Supabase/Node)",
        "Roles y permisos",
        "Integración de pagos (Stripe)",
        "Panel de administración",
        "Deploy a producción",
        "Soporte por 3 meses"
      ],
      cta: "Empezar Growth",
      popular: true
    },
    {
      name: "Scale",
      price: "$5,000+",
      desc: "Plataforma avanzada a medida para empresas en crecimiento.",
      features: [
        "Arquitectura microservicios",
        "Múltiples frontends (Web/Mobile)",
        "Backend personalizado",
        "Integraciones complejas (ERP/CRM)",
        "Automatizaciones avanzadas",
        "Auditoría de seguridad",
        "Infraestructura dedicada",
        "Soporte continuo (SLA)"
      ],
      cta: "Contactar Ventas",
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Precios <span className="gradient-text">Transparentes</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          Elige el plan que mejor se adapte a la etapa de tu producto. Sin costos ocultos ni sorpresas.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div 
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-blue-500 bg-[#111]' : 'border-white/10 glass-panel'} flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Más Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              {plan.name !== "Scale" && <span className="text-gray-500 ml-2">/ proyecto</span>}
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-blue-400' : 'text-gray-500'}`} />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/contacto" 
              className={`w-full py-4 rounded-xl font-medium text-center transition-all ${
                plan.popular 
                  ? 'gradient-bg text-white hover:opacity-90 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Servicios Adicionales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Landing Startup", price: "Desde $300", desc: "Diseño y desarrollo de landing page optimizada para conversión." },
            { title: "Automatización", price: "Desde $500", desc: "Configuración de workflows en Make/Zapier con integraciones." },
            { title: "Auditoría Técnica", price: "$800", desc: "Revisión profunda de código, arquitectura y seguridad." },
            { title: "CTO as a Service", price: "$2,000/mes", desc: "Liderazgo técnico part-time para tu equipo de desarrollo." }
          ].map((service, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 flex justify-between items-center group hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
              <div className="text-right ml-4">
                <span className="text-blue-400 font-bold whitespace-nowrap">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 text-center glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <h2 className="text-3xl font-bold mb-4 relative z-10">¿Necesitas un presupuesto personalizado?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
          Cuéntanos los detalles de tu proyecto y te enviaremos una propuesta detallada en menos de 48 horas.
        </p>
        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity relative z-10">
          Solicitar cotización <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
