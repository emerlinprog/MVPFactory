import { motion } from 'motion/react';
import { LayoutDashboard, Cpu, Database, Code2, Users, TerminalSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      id: "mvp-saas",
      icon: LayoutDashboard,
      title: "Desarrollo de MVP SaaS",
      desc: "Construimos plataformas funcionales listas para usuarios reales en semanas, no meses.",
      includes: [
        "Arquitectura del sistema",
        "Desarrollo Frontend & Backend",
        "Autenticación segura",
        "Panel de administración",
        "Integración de pagos (Stripe)",
        "Deploy a producción"
      ],
      useCases: ["Marketplaces", "Plataformas SaaS B2B/B2C", "Herramientas internas"]
    },
    {
      id: "automatizacion",
      icon: Cpu,
      title: "Automatización de negocios",
      desc: "Digitalización de procesos internos para mayor eficiencia y reducción de costos operativos.",
      includes: [
        "Auditoría de procesos",
        "Integración de APIs",
        "Workflows automatizados",
        "Dashboards de control",
        "Alertas y notificaciones",
        "Soporte continuo"
      ],
      useCases: ["Onboarding de clientes", "Gestión de inventario", "Sincronización de datos"]
    },
    {
      id: "arquitectura",
      icon: Database,
      title: "Arquitectura de software",
      desc: "Diseño técnico de plataformas digitales escalables y seguras.",
      includes: [
        "Diseño de base de datos",
        "Selección de stack tecnológico",
        "Diseño de APIs",
        "Estrategia de infraestructura",
        "Auditoría de seguridad",
        "Plan de escalabilidad"
      ],
      useCases: ["Sistemas legacy", "Nuevos productos", "Migraciones cloud"]
    },
    {
      id: "prototipos",
      icon: Code2,
      title: "Prototipos para startups",
      desc: "Transformamos ideas en productos funcionales para validar con inversores o primeros usuarios.",
      includes: [
        "Wireframes y UI/UX",
        "Prototipos interactivos",
        "Pruebas de concepto (PoC)",
        "Validación técnica",
        "Landing pages",
        "Pitch deck técnico"
      ],
      useCases: ["Rondas de inversión", "Validación de mercado", "Programas de aceleración"]
    },
    {
      id: "cto-service",
      icon: Users,
      title: "CTO as a Service",
      desc: "Soporte estratégico para startups tecnológicas que necesitan liderazgo técnico sin contratar a tiempo completo.",
      includes: [
        "Liderazgo técnico",
        "Gestión de equipo de desarrollo",
        "Revisión de código",
        "Decisiones de arquitectura",
        "Estrategia tecnológica",
        "Entrevistas técnicas"
      ],
      useCases: ["Startups early-stage", "Empresas sin equipo técnico", "Transiciones de liderazgo"]
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
          Nuestros <span className="gradient-text">Servicios</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          Soluciones tecnológicas integrales para startups y empresas que buscan innovar y escalar rápidamente.
        </motion.p>
      </div>

      <div className="space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-400 text-lg mb-8">{service.desc}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" /> Qué incluye
                  </h3>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <TerminalSquare className="w-5 h-5 text-purple-400" /> Casos de uso
                  </h3>
                  <ul className="space-y-3">
                    {service.useCases.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-10">
                <Link to="/contacto" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Consultar sobre este servicio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="aspect-square rounded-3xl border border-white/10 bg-[#111] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <h2 className="text-3xl font-bold mb-4 relative z-10">¿No estás seguro de qué necesitas?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
          Agenda una llamada exploratoria gratuita y te ayudaremos a definir la mejor estrategia técnica para tu proyecto.
        </p>
        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity relative z-10">
          Agendar consultoría <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
