import { motion } from 'motion/react';
import { Search, PenTool, Code, TestTube, Rocket, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Process() {
  const steps = [
    {
      id: "discovery",
      icon: Search,
      title: "Discovery",
      subtitle: "Análisis del producto",
      desc: "Entendemos tu negocio, tus usuarios y el problema que quieres resolver. Definimos el alcance del MVP para maximizar el valor con el menor esfuerzo.",
      deliverables: ["Documento de requerimientos", "User personas", "User journeys", "Alcance del MVP"]
    },
    {
      id: "arquitectura",
      icon: PenTool,
      title: "Arquitectura",
      subtitle: "Diseño técnico",
      desc: "Diseñamos la estructura del sistema, seleccionamos el stack tecnológico adecuado y creamos los wireframes iniciales de la interfaz.",
      deliverables: ["Diagrama de arquitectura", "Modelo de base de datos", "Wireframes UI/UX", "Selección de stack"]
    },
    {
      id: "desarrollo",
      icon: Code,
      title: "Desarrollo",
      subtitle: "Construcción del sistema",
      desc: "Escribimos código limpio y escalable. Implementamos el frontend, backend, base de datos y todas las integraciones necesarias.",
      deliverables: ["Código fuente", "APIs documentadas", "Componentes UI", "Integraciones de terceros"]
    },
    {
      id: "testing",
      icon: TestTube,
      title: "Testing",
      subtitle: "Validación funcional",
      desc: "Aseguramos que todo funcione correctamente. Realizamos pruebas de calidad, seguridad y rendimiento antes del lanzamiento.",
      deliverables: ["Reporte de QA", "Pruebas unitarias", "Pruebas E2E", "Auditoría de seguridad"]
    },
    {
      id: "deploy",
      icon: Rocket,
      title: "Deploy",
      subtitle: "Publicación",
      desc: "Desplegamos tu aplicación en producción. Configuramos dominios, certificados SSL y entornos de staging.",
      deliverables: ["Entorno de producción", "Entorno de staging", "CI/CD pipelines", "Monitoreo inicial"]
    },
    {
      id: "iteracion",
      icon: RefreshCw,
      title: "Iteración",
      subtitle: "Mejoras continuas",
      desc: "Analizamos cómo los usuarios interactúan con el producto y planificamos las siguientes funcionalidades basadas en datos reales.",
      deliverables: ["Análisis de métricas", "Roadmap de producto", "Soporte técnico", "Nuevas funcionalidades"]
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
          Nuestro <span className="gradient-text">Proceso</span> de Trabajo
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          Una metodología probada para transformar ideas complejas en productos digitales funcionales y escalables.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/10 -translate-x-1/2" />
        
        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-start px-8 mb-8 md:mb-0">
                <div className={`w-full max-w-md glass-panel p-8 rounded-2xl border border-white/10 relative ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                  <div className="absolute top-8 -left-4 md:hidden w-8 h-0.5 bg-white/10" />
                  <div className={`hidden md:block absolute top-1/2 w-16 h-0.5 bg-white/10 -translate-y-1/2 ${index % 2 === 0 ? '-left-16' : '-right-16'}`} />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-blue-400 text-sm font-medium tracking-wider uppercase block">Paso 0{index + 1}</span>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-300 mb-3">{step.subtitle}</h4>
                  <p className="text-gray-400 mb-6">{step.desc}</p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Entregables</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border-4 border-[#111] items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32 text-center glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <h2 className="text-3xl font-bold mb-4 relative z-10">¿Listo para empezar el proceso?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
          El primer paso es una llamada de Discovery gratuita para entender tus necesidades.
        </p>
        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity relative z-10">
          Agendar Discovery <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
