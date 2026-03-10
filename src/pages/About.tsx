import { motion } from 'motion/react';
import { Users, Target, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Sobre <span className="gradient-text">Nosotros</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          Somos un estudio especializado en desarrollo de productos digitales y arquitecturas SaaS.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Creemos que el desarrollo de software no debería ser un cuello de botella para la innovación. Nuestro objetivo es democratizar el acceso a tecnología de calidad para startups y empresas de todos los tamaños.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nuestro enfoque combina arquitectura de negocios, desarrollo moderno e inteligencia artificial para construir software funcional rápidamente, permitiendo a nuestros clientes validar sus ideas y escalar sus operaciones sin fricción.
          </p>
          <div className="pt-4">
            <Link to="/contacto" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Conoce a nuestro equipo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-[#111] p-2 shadow-2xl overflow-hidden aspect-square">
            <img 
              src="https://picsum.photos/seed/team/800/800?blur=1" 
              alt="Equipo NovaStudio" 
              className="w-full h-full object-cover rounded-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {[
          { icon: Target, title: "Enfoque en Negocio", desc: "No solo escribimos código, entendemos tu modelo de negocio." },
          { icon: Zap, title: "Velocidad", desc: "Entregamos valor rápido mediante iteraciones cortas." },
          { icon: ShieldCheck, title: "Calidad", desc: "Arquitecturas robustas y código mantenible a largo plazo." },
          { icon: Users, title: "Transparencia", desc: "Comunicación clara y honesta durante todo el proceso." }
        ].map((value, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8 rounded-2xl border border-white/10 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-6">
              <value.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-400 text-sm">{value.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center glass-panel p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <h2 className="text-3xl font-bold mb-4 relative z-10">Únete a nuestra misión</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
          Siempre estamos buscando talento excepcional para unirse a nuestro equipo remoto.
        </p>
        <a href="mailto:careers@novastudio.dev" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors relative z-10">
          Ver posiciones abiertas <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
