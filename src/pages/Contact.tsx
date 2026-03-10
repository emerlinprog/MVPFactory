import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  LayoutDashboard, 
  Cpu, 
  TerminalSquare, 
  Code2, 
  ArrowDown,
  ArrowRight,
  Send,
  AlertCircle
} from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    projectType: 'saas',
    problemDefinition: '',
    projectStage: 'idea',
    keyFeatures: '',
    budget: '1500-5000',
    timeline: '1-2-months',
    decisionMaker: 'me',
    integrations: 'not-sure',
    finalQuestion: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        projectType: 'saas',
        problemDefinition: '',
        projectStage: 'idea',
        keyFeatures: '',
        budget: '1500-5000',
        timeline: '1-2-months',
        decisionMaker: 'me',
        integrations: 'not-sure',
        finalQuestion: ''
      });
      
      setTimeout(() => setIsSuccess(false), 8000);
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    document.getElementById('qualification-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProfile = () => {
    document.getElementById('ideal-profile')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Inicia tu <span className="gradient-text">Proyecto de Software</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 mb-6"
        >
          Construimos plataformas MVP SaaS y sistemas de automatización para startups y empresas. Antes de agendar una consultoría, por favor completa este formulario de calificación de proyecto.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 mb-10 max-w-3xl mx-auto"
        >
          <p className="text-sm md:text-base">
            Para asegurar el éxito de cada proyecto, trabajamos solo con iniciativas que tienen un objetivo definido, un presupuesto realista y un tomador de decisiones activo.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button onClick={scrollToForm} className="px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Iniciar Evaluación de Proyecto <ArrowDown className="w-5 h-5" />
          </button>
          <button onClick={scrollToProfile} className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
            Descubre si tu proyecto califica
          </button>
        </motion.div>
      </div>

      {/* 2. Ideal Client Profile Section */}
      <section id="ideal-profile" className="mb-24 scroll-mt-32">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Está listo tu proyecto?</h2>
              <p className="text-gray-400 text-lg mb-6">
                Trabajamos mejor con proyectos que cumplen ciertas condiciones. Buscamos colaborar con fundadores y empresas que tienen:
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span> Un problema o idea clara</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span> Un objetivo definido</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span> Disponibilidad para colaborar durante el desarrollo</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span> Un presupuesto realista</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-1">•</span> Una persona responsable de las decisiones del proyecto</li>
              </ul>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-6 text-white">Checklist de preparación:</h3>
              <ul className="space-y-4">
                {[
                  "Puedo explicar el problema que quiero resolver",
                  "Tengo una idea inicial del producto o sistema",
                  "Tengo un presupuesto asignado para el desarrollo",
                  "Puedo participar en las decisiones durante el proyecto",
                  "Entiendo que la primera versión será un MVP"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lo que construimos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desarrollamos proyectos utilizando arquitectura moderna: Supabase, APIs, herramientas de IA y sistemas serverless para garantizar escalabilidad y rendimiento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: LayoutDashboard, title: "Plataformas MVP SaaS" },
            { icon: Cpu, title: "Sistemas de automatización de procesos" },
            { icon: TerminalSquare, title: "Herramientas internas de negocio" },
            { icon: Code2, title: "Prototipos de productos digitales" }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 text-center hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-200">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4 & 7. What We Do NOT Offer & Scope */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" /> Lo que SÍ incluimos
            </h2>
            <p className="text-gray-400 mb-6">Nuestro alcance de trabajo estándar cubre los fundamentos para lanzar con éxito:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                Arquitectura del sistema y base de datos
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                Desarrollo completo del MVP
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                Despliegue inicial en producción
              </li>
            </ul>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-400" /> Lo que NO ofrecemos
            </h2>
            <p className="text-gray-400 mb-6">Para mantener la calidad y velocidad, no proveemos los siguientes servicios. Cualquier funcionalidad adicional se maneja a través de un proceso de solicitud de cambios.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Peticiones de desarrollo o revisiones ilimitadas
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Sistemas de nivel empresarial desde el primer día
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Servicios de marketing o crecimiento del producto (adquisición de usuarios)
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Soporte técnico ilimitado
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                Infraestructura compleja sin planificación previa
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Project Process Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proceso de Desarrollo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La colaboración estrecha con el cliente es un requisito fundamental durante todo este proceso.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {["Discovery", "Arquitectura", "Desarrollo", "Testing", "Deployment", "Iteración"].map((step, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8">
              <div className="px-4 py-2 rounded-lg bg-[#111] border border-white/10 text-gray-300 font-medium">
                {i + 1}. {step}
              </div>
              {i < 5 && <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block" />}
            </div>
          ))}
        </div>
      </section>

      {/* 5 & 8. Project Qualification Form */}
      <section id="qualification-form" className="scroll-mt-32 max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Formulario de Calificación</h2>
            <p className="text-gray-400">Por favor, completa todos los campos con el mayor detalle posible.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">Información Básica</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre completo *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email profesional *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300">Empresa / Nombre del proyecto *</label>
                  <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-gray-300">País *</label>
                  <input type="text" id="country" name="country" required value={formData.country} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">Detalles del Proyecto</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium text-gray-300">Tipo de proyecto *</label>
                  <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white appearance-none">
                    <option value="saas">Plataforma SaaS</option>
                    <option value="internal">Sistema interno de negocio</option>
                    <option value="automation">Automatización</option>
                    <option value="prototype">Prototipo / MVP</option>
                    <option value="website">Sitio web / Landing</option>
                    <option value="not-sure">No estoy seguro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="projectStage" className="text-sm font-medium text-gray-300">Fase del proyecto *</label>
                  <select id="projectStage" name="projectStage" required value={formData.projectStage} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white appearance-none">
                    <option value="idea">Fase de idea</option>
                    <option value="concept">Concepto definido</option>
                    <option value="prototype">Prototipo diseñado</option>
                    <option value="existing">Producto existente</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="problemDefinition" className="text-sm font-medium text-gray-300">Describe el problema que quieres resolver *</label>
                <textarea id="problemDefinition" name="problemDefinition" required value={formData.problemDefinition} onChange={handleChange} rows={3}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white resize-none" />
              </div>

              <div className="space-y-2">
                <label htmlFor="keyFeatures" className="text-sm font-medium text-gray-300">¿Qué funcionalidades principales esperas en la primera versión? *</label>
                <textarea id="keyFeatures" name="keyFeatures" required value={formData.keyFeatures} onChange={handleChange} rows={3}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white resize-none" />
              </div>
            </div>

            {/* Logistics & Decision Making */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2">Logística y Decisiones</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-gray-300">Rango de presupuesto *</label>
                  <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white appearance-none">
                    <option value="under-500">Menos de $500</option>
                    <option value="500-1500">$500 - $1,500</option>
                    <option value="1500-5000">$1,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="above-10000">Más de $10,000</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium text-gray-300">Cronograma esperado *</label>
                  <select id="timeline" name="timeline" required value={formData.timeline} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white appearance-none">
                    <option value="2-4-weeks">2 - 4 semanas</option>
                    <option value="1-2-months">1 - 2 meses</option>
                    <option value="3-6-months">3 - 6 meses</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="decisionMaker" className="text-sm font-medium text-gray-300">Tomador de decisiones *</label>
                  <select id="decisionMaker" name="decisionMaker" required value={formData.decisionMaker} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white appearance-none">
                    <option value="me">Soy el tomador de decisiones</option>
                    <option value="team">Un equipo decide</option>
                    <option value="partners">Los socios deciden</option>
                    <option value="not-defined">Aún no definido</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="integrations" className="text-sm font-medium text-gray-300">Integraciones necesarias *</label>
                  <select id="integrations" name="integrations" required value={formData.integrations} onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white appearance-none">
                    <option value="payments">Sistemas de pago</option>
                    <option value="apis">APIs externas</option>
                    <option value="crm">CRM</option>
                    <option value="not-sure">No estoy seguro</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="finalQuestion" className="text-sm font-medium text-gray-300">¿Por qué buscas ayuda externa para este proyecto? *</label>
                <textarea id="finalQuestion" name="finalQuestion" required value={formData.finalQuestion} onChange={handleChange} rows={2}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white resize-none" />
              </div>
            </div>

            {/* Final Notice */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-blue-200 text-sm md:text-base">
                Debido a la cantidad de solicitudes que recibimos, revisamos cuidadosamente cada envío. Solo contactaremos proyectos que se alineen con nuestras capacidades y alcance.
              </p>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl gradient-bg text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {isSubmitting ? (
                <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Enviar Solicitud de Proyecto <Send className="w-5 h-5" /></>
              )}
            </button>
            
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center"
              >
                <h4 className="font-bold text-lg mb-2">¡Solicitud recibida con éxito!</h4>
                <p>Hemos recibido los detalles de tu proyecto. Nuestro equipo lo evaluará y te contactaremos pronto si hace match con nuestras capacidades.</p>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

