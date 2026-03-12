import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
  const projects = [
    {
      id: "rentasmart",
      title: "RentaSmart",
      category: "Plataforma SaaS Elite",
      desc: "Ecosistema de gestión de Real Estate automatizado al 100%.",
      problem: "Fragmentación de datos y procesos manuales que ralentizaban la escalabilidad de portfolios inmobiliarios.",
      solution: "Arquitectura centralizada con automatización de contratos inteligentes, conciliación bancaria y portal de inquilinos.",
      tech: ["Next.js 14", "Supabase", "Stripe Connect", "Resend", "Tailwind CSS"],
      results: [
        "80% de ahorro en carga administrativa",
        "Tasa de cobro puntual incrementada al 98%",
        "Gestión de incidencias 3x más rápida"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
    },
    {
      id: "sistemas-internos",
      title: "LogisFlow AI",
      category: "Infraestructura Logística",
      desc: "Soberanía de datos y optimización de cadena de suministro en tiempo real.",
      problem: "Falta de visibilidad predictiva en almacenes distribuidos, causando roturas de stock críticas.",
      solution: "Engine de IA para predicción de demanda integrado con dashboards de alta fidelidad y control de flotas GPS.",
      tech: ["React Premium", "Node.js", "PostgreSQL", "Google Cloud Vision", "MQTT"],
      results: [
        "Reducción de stock muerto en un 35%",
        "Optimización de rutas de última milla (22%)",
        "Visibilidad total E2E (End-to-End)"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: "automatizaciones",
      title: "AutoLead Engine",
      category: "Automatización Inteligente",
      desc: "Pipeline de ventas potenciado por Large Language Models.",
      problem: "Inundación de leads no calificados que drenaban los recursos del equipo comercial senior.",
      solution: "Agentes de IA autónomos que pre-califican, enriquecen y enrutan oportunidades en segundos.",
      tech: ["OpenAI API", "Make.com", "Pinecone", "HubSpot SDK"],
      results: [
        "Respuesta inicial en < 30 segundos",
        "Incremento del 40% en SQLs (Sales Qualified Leads)",
        "Ahorro de 50+ horas mensuales por SDR"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#030303]">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full obsidian-glass text-sm text-blue-400 mb-8 border-blue-500/20">
            <Briefcase className="w-4 h-4" />
            Casos de Estudio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
            Ingeniería que <br /> <span className="gradient-text">Define Mercados.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Una selección de productos digitales que hemos diseñado, desarrollado y escalado para fundadores visionarios.
          </p>
        </motion.div>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
          >
            <div className="flex-1 w-full relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="rounded-[2.5rem] overflow-hidden border border-white/10 obsidian-glass relative group shadow-2xl aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-widest">
                    Live Project
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-8">
              <div className="space-y-3">
                <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px] block">{project.category}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed">{project.desc}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div className="space-y-3">
                  <h3 className="text-white/30 font-bold text-[10px] uppercase tracking-widest">El Desafío</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{project.problem}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-white/30 font-bold text-[10px] uppercase tracking-widest">Ingeniería</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{project.solution}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-white/30 font-bold text-[10px] uppercase tracking-widest">Impacto Real</h3>
                  <div className="space-y-3">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/70" />
                        <span className="text-gray-300 text-xs font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-white/30 font-bold text-[10px] uppercase tracking-widest">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-blue-300/60 uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/contacto" className="premium-button shadow-none border-white/10 hover:border-blue-500/50">
                  Quiero una solución similar <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-56 text-center obsidian-glass p-20 rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[150px] -z-10" />
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight relative z-10">Tu proyecto es nuestro próximo éxito.</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          No solo escribimos código, construimos activos digitales que generan valor real desde el primer día.
        </p>
        <Link to="/contacto" className="premium-button px-14 py-5 text-lg relative z-10">
          Iniciar mi Transformación <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
