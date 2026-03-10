import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
  const projects = [
    {
      id: "rentasmart",
      title: "RentaSmart",
      category: "Plataforma SaaS",
      desc: "Gestión de alquileres para propietarios y tenants.",
      problem: "Los propietarios perdían tiempo gestionando cobros, contratos y mantenimiento de forma manual o con hojas de cálculo.",
      solution: "Una plataforma centralizada que automatiza contratos, pagos recurrentes y comunicación con tenants.",
      tech: ["Supabase", "React", "Vercel", "Stripe", "Tailwind CSS"],
      results: [
        "Reducción del 80% en tiempo de gestión",
        "Aumento del 30% en pagos puntuales",
        "Onboarding de tenants 100% digital"
      ],
      image: "https://picsum.photos/seed/dashboard1/800/600?blur=2"
    },
    {
      id: "sistemas-internos",
      title: "LogisFlow",
      category: "Sistema Interno",
      desc: "Control de inventario y logística para retail.",
      problem: "Descoordinación entre almacenes y tiendas físicas causando quiebres de stock y pérdida de ventas.",
      solution: "Dashboard en tiempo real con alertas predictivas de inventario y optimización de rutas de entrega.",
      tech: ["PostgreSQL", "Node.js", "React", "AWS", "Google Maps API"],
      results: [
        "Reducción del 45% en quiebres de stock",
        "Optimización de rutas en un 20%",
        "Visibilidad total de la cadena de suministro"
      ],
      image: "https://picsum.photos/seed/logistics/800/600?blur=2"
    },
    {
      id: "automatizaciones",
      title: "AutoLead",
      category: "Automatización",
      desc: "Calificación y enrutamiento de leads B2B.",
      problem: "El equipo de ventas perdía horas calificando leads manualmente, retrasando el contacto inicial.",
      solution: "Workflow automatizado que enriquece datos del lead, lo califica con IA y lo asigna al vendedor adecuado.",
      tech: ["Make", "OpenAI", "HubSpot", "Slack API"],
      results: [
        "Tiempo de respuesta reducido de horas a minutos",
        "Aumento del 25% en tasa de conversión",
        "Ahorro de 15 horas semanales por vendedor"
      ],
      image: "https://picsum.photos/seed/automation/800/600?blur=2"
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
          Nuestro <span className="gradient-text">Portafolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          Casos de éxito y proyectos recientes donde hemos transformado ideas en productos digitales escalables.
        </motion.p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 relative group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-8">
              <div>
                <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-2 block">{project.category}</span>
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-xl text-gray-300">{project.desc}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">El Problema</h3>
                  <p className="text-gray-400">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">La Solución</h3>
                  <p className="text-gray-400">{project.solution}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Resultados</h3>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/contacto" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Quiero un proyecto similar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <h2 className="text-3xl font-bold mb-4 relative z-10">¿Tienes un proyecto en mente?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
          Revisemos tu idea y diseñemos la arquitectura técnica ideal para tu próximo producto digital.
        </p>
        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity relative z-10">
          Agendar consultoría <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
