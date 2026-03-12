import { motion } from 'motion/react';
import { LayoutDashboard, Cpu, Database, Code2, Users, TerminalSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      id: "mvp-saas",
      icon: LayoutDashboard,
      title: "Desarrollo de MVP SaaS",
      desc: "Forjamos plataformas escalables listas para el mercado en tiempo récord. El núcleo de tu negocio, optimizado.",
      includes: [
        "Arquitectura Cloud Nativa",
        "Frontend de Alto Rendimiento",
        "Backend Robusto y Seguro",
        "Panel de Control Avanzado",
        "Pasarelas de Pago Global (Stripe)",
        "Deployment Automatizado (CI/CD)"
      ],
      useCases: ["Marketplaces Disruptivos", "Plataformas SaaS B2B/B2C", "Sistemas de Gestión Pro"]
    },
    {
      id: "automatizacion",
      icon: Cpu,
      title: "Automatización & IA",
      desc: "Eliminamos el trabajo repetitivo mediante flujos inteligentes. Tu negocio operando a la velocidad del código.",
      includes: [
        "Auditoría de Procesos Críticos",
        "Integración Profunda de APIs",
        "Workflows de IA Generativa",
        "Dashboards en Tiempo Real",
        "Sistemas de Alerta Predictiva",
        "Mantenimiento Proactivo"
      ],
      useCases: ["Onboarding Automatizado", "Optimización de Inventario", "Sincronización de Ecosistemas"]
    },
    {
      id: "arquitectura",
      icon: Database,
      title: "Arquitectura de Software",
      desc: "Diseñamos los cimientos técnicos para el crecimiento exponencial. Seguridad y escalabilidad sin compromisos.",
      includes: [
        "Modelado de Datos Avanzado",
        "Selección de Stack Elite",
        "Diseño de APIs (REST/GraphQL)",
        "Estrategia Multi-Cloud",
        "Auditorías de Ciberseguridad",
        "Plan de Escalabilidad Vertical"
      ],
      useCases: ["Refactorización de Sistemas", "Nuevos Productos Core", "Migraciones de Infraestructura"]
    },
    {
      id: "prototipos",
      icon: Code2,
      title: "Prototipos de Alta Fidelidad",
      desc: "Validación instantánea de ideas complejas. Tangibilizamos tu visión para inversores y early adopters.",
      includes: [
        "UX/UI de Nivel Premium",
        "Prototipado Interactivo 1:1",
        "Pruebas de Concepto (PoC)",
        "Validación de Viabilidad Técnica",
        "High-Conversion Landings",
        "Soporte para Pitch Tech"
      ],
      useCases: ["Rondas de Capital (Seed/A)", "Validación de Mercado", "MVP de Producto Mínimo"]
    },
    {
      id: "cto-service",
      icon: Users,
      title: "CTO as a Service (Fractional)",
      desc: "Liderazgo técnico estratégico para fundadores. Tu partner tecnológico para decisiones críticas de negocio.",
      includes: [
        "Dirección Técnica Estratégica",
        "Gestión de Equipos de Ingeniería",
        "Code Reviews de Alto Nivel",
        "Auditoría de Terceros",
        "Planificación de Roadmap Tech",
        "Talent Acquisition (Tech)"
      ],
      useCases: ["Startups en Fase Semilla", "Empresas en Transformación", "Estructuración de Equipos IT"]
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
            <Cpu className="w-4 h-4" />
            Nuestras Capacidades
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
            Servicios <span className="gradient-text">Premium</span> <br /> para Ideas Brillantes.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ingeniería de software de alto impacto diseñada para startups que no aceptan la mediocridad.
          </p>
        </motion.div>
      </div>

      <div className="space-y-40">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="w-16 h-16 rounded-2xl bg-white/5 text-blue-400 flex items-center justify-center mb-10 border border-white/10 glow-border">
                <service.icon className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">{service.title}</h2>
              <p className="text-gray-400 text-xl font-light mb-10 leading-relaxed">{service.desc}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="obsidian-glass p-6 rounded-2xl border-white/5">
                  <h3 className="text-white font-bold mb-5 flex items-center gap-2 text-sm uppercase tracking-widest opacity-70">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> Ingeniería
                  </h3>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="obsidian-glass p-6 rounded-2xl border-white/5">
                  <h3 className="text-white font-bold mb-5 flex items-center gap-2 text-sm uppercase tracking-widest opacity-70">
                    <TerminalSquare className="w-4 h-4 text-purple-400" /> Core Focus
                  </h3>
                  <ul className="space-y-3">
                    {service.useCases.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-12">
                <Link to="/contacto" className="inline-flex items-center gap-2 text-white hover:text-blue-400 font-bold transition-all group">
                  Explorar solución <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full perspective-1000">
              <div className="aspect-[4/3] rounded-[2.5rem] obsidian-glass border border-white/5 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-40 h-40 text-blue-500/10 group-hover:scale-110 group-hover:text-blue-500/20 transition-all duration-700" />
                </div>
                {/* Decorative floating dots */}
                <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-blue-500/20" />
                <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-purple-500/20" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-48 text-center obsidian-glass p-16 rounded-[3rem] border border-white/5 relative overflow-hidden shadow-3xl">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10" />
        <h2 className="text-4xl font-bold mb-6 text-white tracking-tight relative z-10">¿Listos para elevar el estándar?</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          Tu próximo gran salto tecnológico comienza con una conversación honesta sobre tus objetivos.
        </p>
        <Link to="/contacto" className="premium-button px-10 relative z-10">
          Agendar Consultoría Elite <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
