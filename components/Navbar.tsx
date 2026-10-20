import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, MousePointer2 } from 'lucide-react';
import { GRUPOS, HERRAMIENTAS, type Grupo } from './herramientasData';

const linksDe = (grupo: Grupo) => HERRAMIENTAS.filter((h) => h.grupo === grupo).flatMap((h) => h.menu);
const nombreMenu: Record<Grupo, string> = { gratis: 'Herramientas', ejemplo: 'Apps de ejemplo' };

// Submenú de escritorio: abre al pasar el mouse o al hacer click; se cierra al tocar afuera o con Escape
const MenuEscritorio: React.FC<{ grupo: Grupo }> = ({ grupo }) => {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!abierto) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAbierto(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [abierto]);
  return (
    <div ref={ref} className="relative" onMouseEnter={() => setAbierto(true)} onMouseLeave={() => setAbierto(false)}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={abierto}
        onClick={() => setAbierto(true)}
        className="inline-flex items-center gap-1 text-slate-600 hover:text-primary-600 font-medium transition-colors duration-200"
      >
        {nombreMenu[grupo]}
        <ChevronDown className={`h-4 w-4 transition-transform ${abierto ? 'rotate-180' : ''}`} />
      </button>
      {abierto && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 z-50">
          <div role="menu" className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2">
            {linksDe(grupo).map((t) => (
              <a
                key={t.href}
                role="menuitem"
                href={t.href}
                target="_blank"
                rel="noopener"
                className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600"
              >
                {t.texto}
              </a>
            ))}
            <a
              role="menuitem"
              href={`#herramientas-${grupo}`}
              onClick={() => setAbierto(false)}
              className="block px-4 py-2.5 mt-1 text-sm font-semibold text-primary-600 border-t border-slate-100 hover:bg-slate-50"
            >
              {grupo === 'gratis' ? 'Ver todas las herramientas' : 'Ver todas las apps'}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuCelular: React.FC<{ grupo: Grupo; cerrar: () => void }> = ({ grupo, cerrar }) => {
  const [abierto, setAbierto] = useState(false);
  return (
    <div>
      <button
        type="button"
        aria-expanded={abierto}
        onClick={() => setAbierto((o) => !o)}
        className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
      >
        {nombreMenu[grupo]}
        <ChevronDown className={`h-5 w-5 transition-transform ${abierto ? 'rotate-180' : ''}`} />
      </button>
      {abierto && (
        <div className="ml-3 pl-3 border-l-2 border-slate-100 space-y-1">
          {linksDe(grupo).map((t) => (
            <a
              key={t.href}
              href={t.href}
              target="_blank"
              rel="noopener"
              onClick={cerrar}
              className="block px-3 py-2.5 text-sm text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
            >
              {t.texto}
            </a>
          ))}
          <a
            href={`#herramientas-${grupo}`}
            onClick={cerrar}
            className="block px-3 py-2.5 text-sm font-semibold text-primary-600 hover:bg-slate-50 rounded-md"
          >
            {grupo === 'gratis' ? 'Ver todas las herramientas' : 'Ver todas las apps'}
          </a>
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <MousePointer2 className="h-6 w-6 text-white" />
            </div>
            <span className={`font-heading font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-slate-800'}`}>
              click<span className="text-primary-600">pymes</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8 text-sm lg:text-base">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-600 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
                {link.name === 'Servicios' && GRUPOS.map((g) => <MenuEscritorio key={g.id} grupo={g.id} />)}
              </React.Fragment>
            ))}
            <a 
              href="#contacto"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:-translate-y-0.5"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
                {link.name === 'Servicios' && GRUPOS.map((g) => <MenuCelular key={g.id} grupo={g.id} cerrar={() => setIsOpen(false)} />)}
              </React.Fragment>
            ))}
            <div className="pt-2">
                 <a 
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary-600 text-white px-5 py-3 rounded-lg font-medium"
                >
                  Contacto
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};