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
  AlertCircle,
  Gem
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
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#030303]">
      {/* 1. Hero Section */}
      <div className="text-center max-w-5xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full obsidian-glass text-sm text-blue-400 mb-8 border-blue-500/20">
            <Gem className="w-4 h-4" />
            Admisión de Proyectos Elite
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight text-white">
            Forjemos tu <br /> <span className="gradient-text">Próximo Hit.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            No somos una agencia masiva. Somos un laboratorio de ingeniería selectivo. 
            Antes de agendar, aseguremos que tu visión y nuestra ejecución son el match perfecto.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={scrollToForm} className="premium-button px-12 py-5 text-lg">
              Iniciar Auditoría de Proyecto <ArrowDown className="ml-2 w-5 h-5" />
            </button>
            <button onClick={scrollToProfile} className="px-10 py-5 rounded-2xl obsidian-glass border-white/5 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center">
              Requisitos de Calificación
            </button>
          </div>
        </motion.div>
      </div>

      {/* 2. Ideal Client Profile Section */}
      <section id="ideal-profile" className="mb-40 scroll-mt-32">
        <div className="obsidian-glass p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -z-10 group-hover:bg-blue-500/10 transition-all duration-700" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-500 text-xs font-black tracking-[0.3em] uppercase block mb-4">The Ideal Partner</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">¿Está listo tu proyecto para el Factory?</h2>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-10">
                Maximizamos resultados trabajando con fundadores que entienden el valor de la ingeniería de precisión. Buscamos:
              </p>
              <ul className="space-y-6 text-gray-300">
                {[
                  "Visión clara del problema core a resolver.",
                  "Compromiso real con la agilidad y el feedback.",
                  "Respeto por los estándares de ingeniería moderna.",
                  "Presupuesto alineado con un producto de alta calidad.",
                  "Liderazgo con capacidad de toma de decisiones rápida."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-lg font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl">
              <h3 className="text-2xl font-bold mb-8 text-white tracking-tight flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-blue-500" /> Pre-Flight Checklist
              </h3>
              <ul className="space-y-6">
                {[
                  "Puedo definir mi éxito en 1 sola oración.",
                  "Entiendo que el MVP es el inicio, no el final.",
                  "Tengo capital listo para invertir en tecnología crítica.",
                  "Tengo disponibilidad de 3h semanales para syncing.",
                  "Busco un partner técnico, no solo un proveedor."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-gray-400 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 7. Scope Section */}
      <section className="mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="obsidian-glass p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Our Full-Service Scope</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">Entregamos un sistema completo, listo para escalar y recibir usuarios reales.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Arquitectura Cloud Nativa",
                "Frontend de Alto Impacto",
                "Backend de Nivel Enterprise",
                "QA & Stress Testing",
                "CI/CD Pipelines",
                "Tech Documentation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="obsidian-glass p-12 rounded-[2.5rem] border border-red-500/10 relative overflow-hidden bg-red-500/[0.02]">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500/80 flex items-center justify-center mb-8">
              <XCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Out of Scope Policies</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">Definimos límites claros para garantizar la velocidad de entrega y el enfoque en el producto.</p>
            <ul className="space-y-4">
              {[
                "Revisiones de diseño ilimitadas sin data.",
                "Marketing digital o adquisición de tráfico.",
                "Soporte técnico legacy de otros proveedores.",
                "Desarrollo de hardware o embedded systems.",
                "Consultoría legal o de cumplimiento regulatorio."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-400/80 font-light italic">
                  <div className="w-1 h-1 rounded-full bg-red-500/30" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="qualification-form" className="scroll-mt-32 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="obsidian-glass p-12 md:p-20 rounded-[3.5rem] border border-white/5 shadow-3xl"
        >
          <div className="mb-20 text-center">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Admission Form</span>
            <h2 className="text-5xl font-bold mb-6 text-white tracking-tighter">Inicia la Evaluación.</h2>
            <p className="text-gray-400 text-xl font-light">Completa con rigor técnico. Buscamos los detalles que hacen la diferencia.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold border border-blue-500/20">01</div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Identity & Context</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Tu Nombre</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white transition-all placeholder:text-gray-600 font-light" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email de Negocio</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@startup.com"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white transition-all placeholder:text-gray-600 font-light" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Proyecto / Startup</label>
                  <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="Nova Stealth Corp"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white transition-all placeholder:text-gray-600 font-light" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">País de Operación</label>
                  <input type="text" name="country" required value={formData.country} onChange={handleChange} placeholder="España, USA, MX..."
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white transition-all placeholder:text-gray-600 font-light" />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold border border-blue-500/20">02</div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Product Architecture</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Project Category</label>
                  <select name="projectType" required value={formData.projectType} onChange={handleChange}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white appearance-none font-light">
                    <option value="saas">SaaS Ecosystem</option>
                    <option value="internal">Inner Business Logic</option>
                    <option value="automation">AI & Flow Automation</option>
                    <option value="prototype">High-Fidelity MVP</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Current Roadmap Stage</label>
                  <select name="projectStage" required value={formData.projectStage} onChange={handleChange}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white appearance-none font-light">
                    <option value="idea">Conceptual Idea</option>
                    <option value="concept">Verified Concept</option>
                    <option value="prototype">Wired / Designed</option>
                    <option value="existing">Scaling Existing Product</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Desafío Técnico Principal</label>
                <textarea name="problemDefinition" required value={formData.problemDefinition} onChange={handleChange} rows={4} placeholder="Describe el obstáculo de ingeniería que frena tu crecimiento..."
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-3xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white resize-none transition-all placeholder:text-gray-600 font-light" />
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold border border-blue-500/20">03</div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Scalability & Logistics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Inversión Planificada</label>
                  <select name="budget" required value={formData.budget} onChange={handleChange}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white appearance-none font-light">
                    <option value="1500-5000">$1,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="above-10000">Above $10,000</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Deployment Window</label>
                  <select name="timeline" required value={formData.timeline} onChange={handleChange}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white appearance-none font-light">
                    <option value="1-2-months">Agresivo (1-2 meses)</option>
                    <option value="3-6-months">Estratégico (3-6 meses)</option>
                    <option value="flexible">Flexible / Long-term</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5">
              <div className="bg-blue-500/5 border border-blue-500/10 rounded-[2rem] p-8 mb-12 flex gap-6 items-start">
                <AlertCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tratamos cada solicitud con confidencialidad absoluta. Debido a la alta demanda, solo respondemos a proyectos que demuestran un fit técnico y estratégico claro para nuestro stack (Supabase, Next.js, AI Agents).
                </p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="premium-button w-full py-6 text-xl tracking-[0.1em] shadow-[0_20px_50px_rgba(59,130,246,0.2)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Enviar Evaluación a Ingeniería <Send className="ml-3 w-6 h-6" /></>
                )}
              </button>
            </div>
            
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-[2.5rem] bg-green-500/5 border border-green-500/20 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-4 tracking-tighter">Transmisión Exitosa.</h4>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl mx-auto">
                  Tu auditoría de proyecto está en manos de nuestros ingenieros. Revisaremos la viabilidad técnica y te contactaremos vía email en las próximas 48 horas.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </section>
    </div>
  );
}

