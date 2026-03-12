import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin, Gem } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl premium-button p-0 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white">
                MVP <span className="gradient-text">FActory</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Construimos MVPs SaaS y plataformas digitales en semanas. Transformamos ideas disruptivas en productos funcionales y escalables.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Servicios</h3>
            <ul className="space-y-3">
              {['Desarrollo MVP SaaS', 'Automatización de negocios', 'Arquitectura de software', 'CTO as a Service'].map((item) => (
                <li key={item}><Link to="/servicios" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Empresa</h3>
            <ul className="space-y-3">
              {[
                { name: 'Sobre nosotros', path: '/about' },
                { name: 'Portafolio', path: '/portafolio' },
                { name: 'Proceso de trabajo', path: '/proceso' },
                { name: 'Pricing', path: '/pricing' }
              ].map((item) => (
                <li key={item.name}><Link to={item.path} className="text-gray-400 hover:text-white text-sm transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li><Link to="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">Agendar consultoría</Link></li>
              <li><a href="mailto:hola@mvpfactory.dev" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">hola@mvpfactory.dev</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} MVP FActory. Todos los derechos reservados.</p>
            <p className="mt-1 flex items-center justify-center md:justify-start gap-1">
              Diseñada y creada con <Gem className="w-3.5 h-3.5 text-blue-400" /> por <span className="text-gray-300 font-medium ml-1">Orlando Linares</span>
            </p>
          </div>
          <div className="flex space-x-8">
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacidad</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
