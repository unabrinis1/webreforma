import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="ArquiDecoGarden" className="h-10 w-auto" />
              <span className="font-bold text-xl">ArquiDecoGarden</span>
            </div>
            <p className="text-primary-300 text-sm">
              Transformamos espacios con calidad y profesionalidad. Más de 15 años de experiencia en el sector de reformas integrales.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                Reformas de baños
              </li>
              <li className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                Reformas de cocinas
              </li>
              <li className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                Decoración
              </li>
              <li className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                Jardinería
              </li>
              <li className="text-primary-300 hover:text-accent-500 transition-colors duration-300">
                Barbacoas a medida
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-500 mt-0.5" />
                <span className="text-primary-300">+34 651 960 371</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-500 mt-0.5" />
                <span className="text-primary-300">info@arquidecogarden.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-500 mt-0.5" />
                <span className="text-primary-300">Manzanares el real, Madrid, España</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-500 mt-0.5" />
                <span className="text-primary-300">Lun - Vie: 9:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-6 text-center text-primary-400 text-sm">
          © {new Date().getFullYear()} ArquiDecoGarden. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;