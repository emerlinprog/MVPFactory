import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: "MVP Starter",
      price: "$1,500",
      icon: Zap,
      desc: "Ideal para validación rápida de conceptos y prototipos de alta fidelidad.",
      features: [
        "Arquitectura Escalable Base",
        "Frontend Responsivo Premium",
        "Stack Supabase / Vercel",
        "Autenticación Segura (Auth)",
        "1 Integración API Core",
        "Deployment Automatizado",
        "Soporte Post-Lanzamiento (30 días)"
      ],
      cta: "Iniciar Forjado",
      popular: false
    },
    {
      name: "SaaS Growth",
      price: "$2,990",
      icon: Globe,
      desc: "La solución definitiva para startups que buscan traccionar con un producto robusto.",
      features: [
        "Arquitectura N-Tier Avanzada",
        "Fullstack Next.js / Node.js",
        "Infraestructura Cloud Elite",
        "Roles & Permisos Granulares",
        "Stripe Payments Integration",
        "Admin Dashboard Dashboard",
        "Soporte Prioritario (90 días)",
        "SEO Tech Optimization"
      ],
      cta: "Escalar Producto",
      popular: true
    },
    {
      name: "Enterprise Custom",
      price: "$5,000+",
      icon: ShieldCheck,
      desc: "Ingeniería a medida para ecosistemas complejos y requerimientos de alta demanda.",
      features: [
        "Estructura Microservicios",
        "Multi-Platform (Web & Mobile)",
        "Custom Backend Logic",
        "Integraciones ERP/CRM/SAP",
        "Automatizaciones con IA",
        "Auditoría de Seguridad Militar",
        "Infrastructure as Code (IaC)",
        "SLA de Soporte 24/7"
      ],
      cta: "Consultoría Elite",
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#030303]">
      <div className="text-center max-w-4xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full obsidian-glass text-sm text-blue-400 mb-8 border-blue-500/20">
            <ShieldCheck className="w-4 h-4" />
            Inversión Transparente
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
            Precios <br /> <span className="gradient-text">Sin Fricción.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Estructuras de costos diseñadas para maximizar el ROI de tu tecnología desde la primera fase.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div 
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col group ${plan.popular ? 'border-blue-500/50 bg-blue-500/5 shadow-2xl shadow-blue-500/10' : 'border-white/5 obsidian-glass hover:border-white/10'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Most Popular Choice
              </div>
            )}
            
            <div className="mb-10 text-center">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 duration-500 ${plan.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-gray-400'}`}>
                <plan.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{plan.name}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{plan.desc}</p>
            </div>
            
            <div className="mb-10 text-center">
              <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
              {plan.name !== "Enterprise Custom" && <span className="text-gray-500 text-sm ml-2 font-medium">/ flat fee</span>}
            </div>
            
            <div className="flex-1 space-y-5 mb-12">
              <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] text-center border-b border-white/5 pb-4">Features Included</h4>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-500' : 'text-gray-600'}`} />
                    <span className="text-gray-300 text-sm font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              to="/contacto" 
              className={`w-full py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center ${
                plan.popular 
                  ? 'gradient-bg text-white hover:scale-[1.02] shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/5 text-white hover:border-white/20'
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center text-white tracking-widest uppercase opacity-50">Servicios On-Demand</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Landing High-Conversion", price: "$490", desc: "Diseño y desarrollo de landins optimizadas para ROI." },
            { title: "Integración IA / LLM", price: "Desde $500", desc: "Flujos de automatización con Agents inteligentes." },
            { title: "Audit Técnica Profunda", price: "$850", desc: "Revisión 360 de escalabilidad, seguridad y performance." },
            { title: "Fractional CTO", price: "$1,800/mo", desc: "Dirección técnica estratégica de alto nivel continua." }
          ].map((service, i) => (
            <div key={i} className="obsidian-glass p-8 rounded-3xl border border-white/5 flex justify-between items-center group hover:border-blue-500/30 transition-all duration-500">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-400 font-light">{service.desc}</p>
              </div>
              <div className="text-right ml-6">
                <span className="text-2xl font-black text-blue-500/80 tracking-tighter">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-48 text-center obsidian-glass p-20 rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-3xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] -z-10" />
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight relative z-10">¿Requerimientos específicos?</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          Diseñamos propuestas técnicas personalizadas que se alinean exactamente con tus objetivos de negocio.
        </p>
        <Link to="/contacto" className="premium-button px-14 py-5 text-lg relative z-10">
          Solicitar Cotización Elite <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
