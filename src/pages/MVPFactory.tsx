import { motion } from 'motion/react';
import { Rocket, Target, Zap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MVPFactory() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-8">
            <Rocket className="w-4 h-4" />
            Lanzamiento Rápido
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Desarrollo rápido de MVPs para <span className="gradient-text">startups y empresas</span>.
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Convertimos ideas en software funcional en 3 a 6 semanas. Validamos tu modelo de negocio con usuarios reales antes de realizar grandes inversiones.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contacto" className="px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Empezar mi MVP <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: Target, title: "Validar ideas", desc: "Prueba tu concepto con usuarios reales en el mercado lo antes posible." },
          { icon: ShieldCheck, title: "Reducir riesgo", desc: "Minimiza la inversión inicial y evita construir funcionalidades innecesarias." },
          { icon: Zap, title: "Lanzar rápido", desc: "Llega al mercado en semanas, no en meses, y obtén feedback valioso." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8 rounded-2xl border border-white/10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">¿Qué es un MVP?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Un Producto Mínimo Viable (MVP) es la versión de un nuevo producto que permite a un equipo recolectar la máxima cantidad de aprendizaje validado sobre los clientes con el menor esfuerzo posible.
            </p>
            <ul className="space-y-4">
              {[
                "No es un producto a medias, es un producto enfocado.",
                "Resuelve el problema principal de tu usuario.",
                "Permite iterar basado en datos reales, no suposiciones.",
                "Es la base escalable para el futuro de tu plataforma."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] p-12 lg:p-16 border-l border-white/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-white">Tiempo típico de desarrollo</h3>
              <div className="flex items-center justify-center w-48 h-48 rounded-full border-4 border-blue-500/30 mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
                <div className="text-center">
                  <span className="text-5xl font-bold text-white block">3-6</span>
                  <span className="text-blue-400 font-medium">Semanas</span>
                </div>
              </div>
              <p className="text-center text-gray-400">
                Desde la definición de la arquitectura hasta el despliegue en producción.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">¿Listo para construir tu MVP?</h2>
        <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity">
          Cuéntanos tu idea <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
