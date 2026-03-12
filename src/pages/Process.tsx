import { motion } from 'motion/react';
import { Search, PenTool, Code, TestTube, Rocket, RefreshCw, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Process() {
  const steps = [
    {
      id: "discovery",
      icon: Search,
      title: "Discovery & Estrategia",
      subtitle: "Inmersión en el Producto",
      desc: "Desglosamos tu visión para identificar el núcleo de valor. No solo escuchamos, desafiamos y optimizamos tu modelo antes de escribir una sola línea de código.",
      deliverables: ["Product Roadmap Master", "User Flow Maps", "Estrategia de Monetización", "Alcance Técnico MVP"]
    },
    {
      id: "arquitectura",
      icon: PenTool,
      title: "Arquitectura Elite",
      desc: "Diseñamos sistemas que no solo funcionan, sino que escalan. Definimos la infraestructura cloud y el stack tecnológico que mejor se adapte a tu futuro crecimiento.",
      deliverables: ["Cloud Infra Diagram", "Schema de BD Relacional", "UI/UX High Fidelity", "Tech Stack Audit"]
    },
    {
      id: "desarrollo",
      icon: Code,
      title: "Ingeniería de Precisión",
      desc: "Desarrollo ágil con estándares de clase mundial. Implementamos un código limpio, modular y documentado siguiendo las mejores prácticas de la industria.",
      deliverables: ["Clean Architecture Code", "REST/GraphQL API Documentation", "Premium UI Components", "Security First Auth"]
    },
    {
      id: "testing",
      icon: TestTube,
      title: "Validación y Rigor",
      desc: "Sometemos el producto a pruebas de estrés y calidad exhaustivas. Nada sale a producción sin superar nuestros estándares de rendimiento y seguridad.",
      deliverables: ["Full Tech Audit", "Unit & E2E Tests", "Performance Benchmarks", "Security Pentesting"]
    },
    {
      id: "deploy",
      icon: Rocket,
      title: "Lanzamiento y Escala",
      desc: "Despliegue automatizado en entornos optimizados. Configuramos la infraestructura necesaria para un lanzamiento global sin fricciones.",
      deliverables: ["Production Environment", "Zero-Downtime CI/CD", "Monitoring Dashboards", "Cloud Scaling Rules"]
    },
    {
      id: "iteracion",
      icon: RefreshCw,
      title: "Evolución Continua",
      desc: "El lanzamiento es solo el comienzo. Analizamos datos reales de usuarios para iterar sobre el producto y mantener tu ventaja competitiva.",
      deliverables: ["Data-Driven Insights", "V2 Product Roadmap", "Soporte Técnico Ninja", "Optimización Post-Launch"]
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
            <Layers className="w-4 h-4" />
            Metodología MVP Factory
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
            Nuestra Ruta a la <br /> <span className="gradient-text">Excelencia Digital.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Un puente de ingeniería sólido entre tu concepto audaz y un producto que domine el mercado.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent -translate-x-1/2" />
        
        <div className="space-y-16 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 flex justify-center md:items-start px-4 md:px-12 mb-8 md:mb-0">
                <div className={`w-full obsidian-glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative group hover:border-blue-500/30 transition-all duration-500 shadow-2xl ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 text-blue-400 flex items-center justify-center flex-shrink-0 glow-border group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Fase 0{index + 1}</span>
                      <h3 className="text-3xl font-bold text-white tracking-tight">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">{step.desc}</p>
                  
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <h5 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">Deliverables Key Focus</h5>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item, i) => (
                        <span key={i} className="text-xs text-gray-400 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#030303] border-2 border-white/10 items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-56 text-center obsidian-glass p-16 md:p-24 rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-3xl">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10" />
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight relative z-10">¿Listo para activar este motor?</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          Tu próximo producto estrella merece un proceso de ingeniería de nivel mundial.
        </p>
        <Link to="/contacto" className="premium-button px-14 py-5 text-lg relative z-10">
          Agendar Discovery Call <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
