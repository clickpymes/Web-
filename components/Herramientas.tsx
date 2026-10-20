import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GRUPOS, HERRAMIENTAS } from './herramientasData';

export const Herramientas: React.FC = () => {
  return (
    <section id="herramientas" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold tracking-wide uppercase text-xs mb-1">Herramientas</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
            Ejemplos de lo que podemos desarrollar a medida
          </h2>
        </div>

        {GRUPOS.map((g) => (
          <div key={g.id} id={`herramientas-${g.id}`} className="mb-14 last:mb-0 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900">{g.titulo}</h3>
            <p className="text-slate-600 mt-1 mb-6">{g.subtitulo}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HERRAMIENTAS.filter((h) => h.grupo === g.id).map((h) => {
              const Icono = h.icono;
              return (
                <div key={h.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
                  <div className="bg-primary-600 p-3 rounded-2xl shadow-lg w-fit mb-5">
                    <Icono className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">{h.titulo}</h4>
                  <p className="text-slate-600 leading-relaxed flex-1">{h.descripcion}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {h.enlaces.map((e) => (
                      <a
                        key={e.href}
                        href={e.href}
                        target="_blank"
                        rel="noopener"
                        className={
                          e.principal
                            ? 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-600/30 transition-all'
                            : 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-primary-600 transition-all'
                        }
                      >
                        {e.texto}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};
