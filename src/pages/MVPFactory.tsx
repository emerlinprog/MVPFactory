import { motion } from 'motion/react';
import { Rocket, Target, Zap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MVPFactory() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#030303]">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full obsidian-glass text-sm text-blue-400 mb-8 border-blue-500/20">
            <Rocket className="w-4 h-4" />
            Lanzamiento Ultra-Rápido
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
            Forja tu MVP con <br /> <span className="gradient-text">Precisión Quirúrgica.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            En el laboratorio de <span className="text-white font-semibold">MVP FActory</span>, convertimos visiones audaces en software funcional en tiempo récord (3 a 6 semanas). 
          </p>
          <div className="flex justify-center">
            <Link to="/contacto" className="premium-button shadow-blue-500/20 px-10">
              Empezar mi MVP <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
          { icon: Target, title: "Validación Real", desc: "No adivines. Pon tu concepto frente a usuarios reales y obtén datos de mercado en semanas." },
          { icon: ShieldCheck, title: "Riesgo Controlado", desc: "Evita el sobre-desarrollo. Invierte inteligentemente en lo que tus usuarios realmente necesitan." },
          { icon: Zap, title: "Ejecución Blitz", desc: "La velocidad es tu mayor ventaja competitiva. Desplegamos mientras otros siguen planeando." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-innovation text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 text-blue-400 flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:scale-110 transition-transform">
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="obsidian-glass rounded-[2.5rem] border border-white/5 overflow-hidden mb-32 shadow-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8 text-white tracking-tight">¿Qué es un MVP Real?</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              Un Producto Mínimo Viable no es un prototipo incompleto. Es la versión más pura de tu idea, diseñada para recolectar el máximo aprendizaje validado con el menor esfuerzo.
            </p>
            <ul className="space-y-6">
              {[
                "Enfoque absoluto en el core del negocio.",
                "Resolución directa del dolor principal del usuario.",
                "Estructura técnica lista para el escalado masivo.",
                "Base de datos optimizada para iteración constante."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#050505] p-12 lg:p-20 border-l border-white/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-50" />
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-10 text-white uppercase tracking-widest text-sm opacity-50">Ciclo de Producción Elite</h3>
              <div className="flex items-center justify-center w-56 h-56 rounded-full border-2 border-white/5 mx-auto mb-10 relative">
                <div className="absolute inset-2 rounded-full border-t-2 border-blue-500 animate-spin" style={{ animationDuration: '4s' }} />
                <div className="absolute inset-6 rounded-full border-b-2 border-purple-500 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                <div className="text-center">
                  <span className="text-7xl font-extrabold text-white block tracking-tighter">3-6</span>
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Semanas</span>
                </div>
              </div>
              <p className="text-gray-400 font-light max-w-xs mx-auto">
                Desde la concepción arquitectónica hasta el deployment global.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] -z-10 rounded-full" />
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight">¿Listo para forjar el futuro?</h2>
        <Link to="/contacto" className="premium-button px-12 py-5 text-lg">
          Lanzar mi Proyecto <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
