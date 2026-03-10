import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">NovaStudio</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Construimos MVPs SaaS y plataformas digitales en semanas. Transformamos ideas en productos funcionales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/servicios" className="text-gray-400 hover:text-white text-sm transition-colors">Desarrollo MVP SaaS</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white text-sm transition-colors">Automatización de negocios</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white text-sm transition-colors">Arquitectura de software</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white text-sm transition-colors">CTO as a Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/portafolio" className="text-gray-400 hover:text-white text-sm transition-colors">Portafolio</Link></li>
              <li><Link to="/proceso" className="text-gray-400 hover:text-white text-sm transition-colors">Proceso de trabajo</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li><Link to="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">Agendar consultoría</Link></li>
              <li><a href="mailto:hello@novastudio.dev" className="text-gray-400 hover:text-white text-sm transition-colors">hello@novastudio.dev</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NovaStudio. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacidad</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
