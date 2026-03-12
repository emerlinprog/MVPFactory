import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  Layers, 
  Rocket, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Database, 
  LayoutDashboard, 
  TerminalSquare, 
  Users,
  Clock,
  DollarSign,
  TrendingDown,
  Sparkles
} from 'lucide-react';

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden bg-[#030303] selection:bg-blue-500/30">
      <div className="hero-glow" />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-64 lg:pb-52 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full obsidian-glass text-sm text-blue-400 mb-10 border-blue-500/20"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-medium tracking-wide uppercase text-xs">Estudio de Elite en MVP SaaS</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.9] text-white">
              Creamos MVPs SaaS <br /> 
              <span className="gradient-text">a la velocidad de la luz.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
              En <span className="text-white font-semibold">MVP FActory</span>, transformamos tu visión en software funcional en semanas, no meses. Arquitecturas premium diseñadas para escalar.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contacto" className="premium-button group shadow-2xl shadow-blue-500/20 min-w-[240px]">
                Agendar consultoría 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/servicios" className="px-8 py-4 rounded-xl obsidian-glass text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center min-w-[200px] border-white/10">
                Ver servicios
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
          className="mt-24 relative mx-auto max-w-6xl group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          <div className="relative rounded-[2rem] border border-white/10 obsidian-glass p-1.5 shadow-3xl">
            <div className="rounded-[1.8rem] overflow-hidden bg-black/80">
              <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="mx-auto text-[10px] text-gray-500 font-mono tracking-widest uppercase">system_architecture.v1</div>
              </div>
              <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="col-span-2 space-y-8">
                  <div className="h-48 rounded-2xl bg-white/5 border border-white/5 p-8 flex flex-col justify-between group/chart">
                    <div className="w-48 h-5 rounded-lg bg-white/10 mb-4" />
                    <div className="w-full h-24 flex items-end gap-3">
                      {[60, 40, 80, 50, 95, 70, 100].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1 + (i * 0.1), duration: 1, ease: "backOut" }}
                          className="flex-1 bg-gradient-to-t from-blue-500/40 to-blue-500/10 rounded-lg relative overflow-hidden"
                        >
                          <div className="w-full bg-blue-400 rounded-full" style={{ height: '4px' }} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    {[1, 2].map(i => (
                      <div key={i} className="h-40 rounded-2xl bg-white/5 border border-white/5 p-8">
                        <div className="w-24 h-4 rounded bg-white/10 mb-6" />
                        <div className="w-20 h-10 rounded-xl bg-blue-500/20 border border-blue-500/20" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-24 rounded-2xl bg-white/5 border border-white/5 p-5 flex items-center gap-5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="w-full h-3 rounded bg-white/10" />
                        <div className="w-2/3 h-2 rounded bg-white/5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="section-padding relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">El desarrollo lento es el <br /><span className="text-red-500/80">asesino de las startups.</span></h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">Las agencias tradicionales se mueven a paso de tortuga. Nosotros operamos con la mentalidad de un cohete.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Fin de la espera", desc: "No más ciclos de 6 meses. Lanzamos tu primera versión en semanas.", color: "red" },
              { icon: DollarSign, title: "Eliminación de desperdicio", desc: "Arquitecturas eficientes que maximizan cada centavo de tu inversión.", color: "blue" },
              { icon: TrendingDown, title: "Mitigación de riesgo", desc: "Validamos rápido con usuarios reales antes de construir la catedral completa.", color: "purple" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="card-innovation text-left relative group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`} />
                <div className="w-14 h-14 rounded-2xl bg-white/5 text-white flex items-center justify-center mb-10 border border-white/10">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">Ingeniería <span className="gradient-text">High-End</span></h2>
            <p className="text-gray-400 text-lg">Combinamos la mejor tecnología del ecosistema moderno para una ejecución impecable.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Velocidad Extrema", desc: "Vite, Next.js y procesos optimizados para el deploy instantáneo." },
              { icon: Layers, title: "Infra Elite", desc: "Supabase, Edge Functions y bases de datos distribuidas." },
              { icon: Rocket, title: "Escala Infinita", desc: "Diseñado para pasar de 1 a 100,000 usuarios sin sudar." },
              { icon: CheckCircle2, title: "Calidad MVP", desc: "Un producto mínimo que se siente como una versión final." }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-3xl obsidian-glass hover:bg-white/[0.03] transition-all border border-white/5 hover:border-blue-500/40">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-white">Lo que construimos en el <br /><span className="gradient-text">Laboratorio</span>.</h2>
              <p className="text-gray-400 text-xl font-light">Especializados en sistemas que impulsan el crecimiento.</p>
            </div>
            <Link to="/servicios" className="group flex items-center gap-3 text-white font-bold text-lg hover:text-blue-400 transition-colors">
              Ver todo el catálogo <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: LayoutDashboard, title: "Desarrollo de MVP SaaS", desc: "Plataformas SaaS completas desde el diseño hasta el despliegue." },
              { icon: Cpu, title: "Business Automation", desc: "Sustitución de procesos manuales por robots y software inteligente." },
              { icon: Database, title: "Cloud Architecture", desc: "Diseño de cimientos digitales robustos y ultra-escalables." },
              { icon: Code2, title: "Digital Prototypes", desc: "Pruebas de concepto de alta fidelidad para levantar capital." },
              { icon: Users, title: "Tech Advisors", desc: "Acompañamiento estratégico para fundadores no-técnicos." },
              { icon: TerminalSquare, title: "Custom Internal Tools", desc: "Paneles y herramientas para gestionar tu propio imperio." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                className="p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all group hover:bg-[#0f0f0f]"
              >
                <div className="mb-10 text-blue-500 group-hover:text-blue-400 transition-colors transition-transform duration-500 group-hover:-translate-y-1">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Legacy Project</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 text-white tracking-tighter">RentaSmart</h2>
              <p className="text-gray-400 text-xl font-light mb-12 leading-relaxed">
                El futuro de la gestión inmobiliaria. Creamos un motor SaaS ultra-eficiente que centraliza propiedades, contratos de IA y flujos de pago globales.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {['Smart Contracts', 'Global Payments', 'Tenant Portal', 'Automated Ledgers'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/portafolio" className="premium-button !bg-transparent border border-white/10 hover:border-white/30 !px-10">
                Ver caso completo
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full group-hover:bg-purple-500/20 transition-all duration-1000" />
              <div className="relative obsidian-glass rounded-[2rem] p-4 shadow-3xl transform rotate-2 hover:rotate-0 transition-all duration-700">
                <div className="rounded-[1.5rem] overflow-hidden bg-black aspect-video flex items-center justify-center border border-white/5">
                  <LayoutDashboard className="w-24 h-24 text-white/10 group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-12 text-white tracking-tighter">
              ¿Listo para <br /> <span className="gradient-text">hacer historia?</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-16 font-light max-w-3xl mx-auto leading-relaxed">
              No esperes un año para validar tu idea. Hagámoslo realidad en cuestión de semanas con la mejor arquitectura del mercado.
            </p>
            <Link to="/contacto" className="premium-button text-xl !px-12 !py-6 shadow-3xl shadow-blue-500/40">
              Agenda tu Consultoría Directa
            </Link>
            <p className="mt-10 text-gray-500 text-sm font-mono tracking-widest uppercase italic">The Factory is open. Built by innovation.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
