import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Sitio {
  nombre: string;
  url: string;
  dominio: string;
  imagen: string;
  alt: string;
  descripcion: string;
}

const SITIOS: Sitio[] = [
  {
    nombre: 'Be3D',
    url: 'https://be3d.com.ar/',
    dominio: 'be3d.com.ar',
    imagen: '/be3d-card.svg',
    alt: 'Be3D, impresión 3D a medida',
    descripcion:
      'Sitio de un emprendimiento de impresión 3D: presenta los servicios (piezas a medida, prototipos, repuestos y series cortas), recibe pedidos de cotización por formulario e incluye un conversor gratuito de archivos 3MF y OBJ a STL que funciona en el navegador.',
  },
];

export const SitiosDesarrollados: React.FC = () => (
  <section id="sitios" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p className="text-primary-600 font-semibold tracking-wide uppercase text-xs mb-1">Sitios desarrollados</p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Trabajos que ya están online</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {SITIOS.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener"
            className="group bg-slate-50 rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
          >
            <img src={s.imagen} alt={s.alt} width={1200} height={630} loading="lazy" className="w-full h-auto" />
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{s.nombre}</h3>
              <p className="text-slate-600 leading-relaxed flex-1">{s.descripcion}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                Visitar {s.dominio}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
