import { motion } from 'motion/react';
import { Users, Target, Zap, ShieldCheck, ArrowRight, Award, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#030303]">
      <div className="text-center max-w-4xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full obsidian-glass text-sm text-blue-400 mb-8 border-blue-500/20">
            <Award className="w-4 h-4" />
            Nuestra Esencia
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight text-white">
            El Laboratorio de <br /> <span className="gradient-text">Productos de Élite.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            En MVP FActory, no solo escribimos código. Forjamos el futuro digital de las startups más ambiciosas de habla hispana.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-tight">Nuestra Visión</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full" />
          </div>
          <p className="text-gray-400 text-xl font-light leading-relaxed">
            Creemos que la tecnología de alto nivel no debería ser un privilegio de las grandes corporaciones. Nuestra misión es empoderar a fundadores con herramientas de grado enterprise desde el día uno.
          </p>
          <p className="text-gray-400 text-xl font-light leading-relaxed">
            Fusionamos arquitectura de software de vanguardia con una comprensión profunda del negocio para crear productos que no solo funcionen, sino que dominen su categoría.
          </p>
          <div className="pt-6">
            <Link to="/contacto" className="premium-button shadow-none border-white/10">
              Colaboremos en tu visión <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-[100px] -z-10" />
          <div className="relative rounded-[3rem] border border-white/10 obsidian-glass p-3 shadow-3xl overflow-hidden aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
              alt="MVP Factory Team" 
              className="w-full h-full object-cover rounded-[2.5rem] opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
        {[
          { icon: Target, title: "ADN de Negocio", desc: "Pensamos como co-fundadores. Tu éxito comercial es nuestro KPI principal." },
          { icon: Zap, title: "Ejecución Blitz", desc: "Velocidad quirúrgica. Transformamos ideas en software productivo en semanas." },
          { icon: ShieldCheck, title: "Rigor Técnico", desc: "Código de autor. Arquitecturas limpias, escalables y seguras por definición." },
          { icon: Users, title: "Cultura Radical", desc: "Transparencia absoluta. Sin jerga técnica innecesaria, solo resultados reales." }
        ].map((value, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="obsidian-glass p-10 rounded-3xl border border-white/5 text-center group hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 text-blue-400 flex items-center justify-center mx-auto mb-8 glow-border group-hover:scale-110 transition-transform duration-500">
              <value.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{value.title}</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center obsidian-glass p-20 rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-3xl">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight relative z-10">Únete al Factory</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          Siempre buscamos ingenieros y diseñadores que crean que el software es una forma de arte.
        </p>
        <a href="mailto:hola@mvpfactory.dev" className="premium-button bg-white/5 border-white/10 hover:bg-white/10 px-12 relative z-10">
          Ver Posiciones Abiertas <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
      
      <div className="mt-20 text-center opacity-30">
        <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
          Fundada y dirigida con excelencia por <Gem className="w-4 h-4 text-blue-400" /> <span className="text-white font-bold">Orlando Linares</span>
        </p>
      </div>
    </div>
  );
}
