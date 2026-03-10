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
  TrendingDown
} from 'lucide-react';

export function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-glow" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Estudio de Desarrollo SaaS
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Construimos MVPs SaaS y plataformas digitales en <span className="gradient-text">semanas</span>.
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ayudamos a startups y empresas a lanzar software funcional rápidamente usando arquitecturas modernas, inteligencia artificial y tecnologías serverless.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contacto" className="w-full sm:w-auto px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Agendar consultoría <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/servicios" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
                Ver servicios
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden">
            <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#111]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2 space-y-6">
                <div className="h-40 rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col justify-between">
                  <div className="w-32 h-4 rounded bg-white/10" />
                  <div className="w-full h-16 flex items-end gap-2">
                    {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500/20 rounded-t" style={{ height: `${h}%` }}>
                        <div className="w-full bg-blue-500 rounded-t" style={{ height: '4px' }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 rounded-xl bg-white/5 border border-white/5 p-6">
                    <div className="w-24 h-4 rounded bg-white/10 mb-4" />
                    <div className="w-16 h-8 rounded bg-white/20" />
                  </div>
                  <div className="h-32 rounded-xl bg-white/5 border border-white/5 p-6">
                    <div className="w-24 h-4 rounded bg-white/10 mb-4" />
                    <div className="w-16 h-8 rounded bg-white/20" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 rounded-xl bg-white/5 border border-white/5 p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div className="space-y-2 flex-1">
                      <div className="w-full h-3 rounded bg-white/10" />
                      <div className="w-2/3 h-3 rounded bg-white/5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Desarrollar software no debería tomar meses ni costar una fortuna.</h2>
            <p className="text-gray-400 text-lg">El modelo tradicional de agencias está roto. Las startups necesitan velocidad y validación, no proyectos interminables.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Desarrollos lentos", desc: "Meses de planificación y desarrollo antes de ver la primera versión funcional." },
              { icon: DollarSign, title: "Costos elevados", desc: "Presupuestos inflados por tecnologías obsoletas y equipos sobredimensionados." },
              { icon: TrendingDown, title: "Riesgo alto", desc: "Grandes inversiones sin validar si el mercado realmente quiere el producto." }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl text-center">
                <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro enfoque permite lanzar productos en <span className="gradient-text">semanas</span>.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Desarrollo rápido", desc: "MVP funcional en pocas semanas, listo para usuarios reales." },
              { icon: Layers, title: "Arquitectura moderna", desc: "Supabase, APIs, serverless y frameworks modernos." },
              { icon: Rocket, title: "Escalabilidad", desc: "Preparado para crecimiento desde el día uno." },
              { icon: CheckCircle2, title: "Validación", desc: "Probar ideas antes de realizar grandes inversiones." }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios especializados</h2>
              <p className="text-gray-400 text-lg">Todo lo que necesitas para construir, lanzar y escalar tu producto digital.</p>
            </div>
            <Link to="/servicios" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
              Ver todos los servicios <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LayoutDashboard, title: "Desarrollo de MVP SaaS", desc: "Construimos plataformas funcionales listas para usuarios." },
              { icon: Cpu, title: "Automatización de negocios", desc: "Digitalización de procesos internos para mayor eficiencia." },
              { icon: Database, title: "Arquitectura de software", desc: "Diseño técnico de plataformas digitales escalables." },
              { icon: Code2, title: "Prototipos para startups", desc: "Transformamos ideas en productos funcionales." },
              { icon: Users, title: "CTO as a Service", desc: "Soporte estratégico para startups tecnológicas." },
              { icon: TerminalSquare, title: "Sistemas Internos", desc: "Herramientas a medida para la gestión de tu empresa." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#111] border border-white/5 hover:bg-[#151515] transition-colors">
                <item.icon className="w-8 h-8 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MVP Factory Process */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MVP Factory: Convertimos ideas en software funcional.</h2>
            <p className="text-gray-400 text-lg">Un proceso optimizado para la velocidad y la calidad.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Definición", desc: "Alcance del producto" },
                { step: "02", title: "Arquitectura", desc: "Diseño del sistema" },
                { step: "03", title: "Desarrollo", desc: "Construcción rápida" },
                { step: "04", title: "Lanzamiento", desc: "Deploy a producción" },
                { step: "05", title: "Iteración", desc: "Mejoras continuas" }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#111] border-2 border-blue-500/30 flex items-center justify-center text-xl font-bold text-blue-400 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 font-medium tracking-wider uppercase text-sm mb-4 block">Caso de Éxito</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">RentaSmart</h2>
              <p className="text-gray-400 text-lg mb-8">
                Plataforma SaaS para gestión de alquileres. Permite a los propietarios administrar sus propiedades, contratos, pagos y control de tenants de forma centralizada.
              </p>
              <div className="space-y-4 mb-8">
                {['Gestión de propiedades', 'Contratos automatizados', 'Pasarela de pagos', 'Portal de tenants'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Supabase', 'React', 'Vercel', 'Stripe'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <Link to="/portafolio" className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
                Ver más proyectos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-[#111] p-2 shadow-2xl">
                <div className="rounded-xl overflow-hidden bg-[#050505] aspect-video flex items-center justify-center border border-white/5">
                  <LayoutDashboard className="w-16 h-16 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Orientativo */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Precios transparentes</h2>
            <p className="text-gray-400 text-lg">Inversión clara desde el primer día. Sin sorpresas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Landing Startup", price: "$300", desc: "Presencia digital profesional" },
              { title: "Automatización", price: "$500", desc: "Digitalización de procesos" },
              { title: "MVP SaaS", price: "$1,500", desc: "Producto funcional inicial" },
              { title: "Plataforma SaaS", price: "$4,000", desc: "Sistema completo escalable" }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col">
                <h3 className="text-lg font-medium text-gray-300 mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-white mb-4">
                  <span className="text-lg text-gray-500 font-normal mr-1">Desde</span>
                  {item.price}
                </div>
                <p className="text-sm text-gray-400 mb-8 flex-1">{item.desc}</p>
                <Link to="/contacto" className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-center text-sm font-medium transition-colors">
                  Consultar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Convierte tu idea en un producto digital.</h2>
          <p className="text-xl text-gray-400 mb-10">Agenda una consultoría gratuita de 30 minutos para discutir tu proyecto y definir la mejor arquitectura técnica.</p>
          <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity text-lg">
            Agendar consultoría <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
