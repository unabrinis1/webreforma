import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determinar si se debe usar texto oscuro: al hacer scroll o en rutas distintas a la home
  const useDarkText = isScrolled || location.pathname !== '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <span className={`font-bold text-xl ${useDarkText ? 'text-primary-900' : 'text-white'}`}>
            ArquiDecoGarden
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {['/', '/servicios', '/proyectos', '/contacto'].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''} ${useDarkText ? 'text-primary-900' : 'text-white'}`}
            >
              {path === '/' ? 'Inicio' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </NavLink>
          ))}
          <NavLink to="/contacto" className="btn btn-primary">
            Solicitar Presupuesto
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${useDarkText ? 'text-primary-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${useDarkText ? 'text-primary-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {['/', '/servicios', '/proyectos', '/contacto'].map((path, i) => (
              <NavLink key={i} to={path} className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>  
                {path === '/' ? 'Inicio' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </NavLink>
            ))}
            <NavLink to="/contacto" className="btn btn-primary text-center">
              Solicitar Presupuesto
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;