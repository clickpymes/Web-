import React from 'react';
import { ArrowUpRight, Gamepad2 } from 'lucide-react';

export const Herramientas: React.FC = () => {
  return (
    <section id="herramientas" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10 md:flex md:items-center md:justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="bg-primary-600 p-3 rounded-2xl shadow-lg shrink-0">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-primary-600 font-semibold tracking-wide uppercase text-xs mb-1">
                Herramientas gratis
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2">
                Anotadores para jugar a las cartas
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Creamos Punto x Punto, anotadores online y gratuitos para Fichitas (La Podrida) y Truco. Sin registro,
                sin instalar nada y se guardan en tu celular. Un ejemplo de lo que podemos desarrollar a medida.
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a
              href="https://puntoxpunto.app/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-600/30 transition-all"
            >
              Probar Fichitas
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://puntoxpunto.app/truco"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-primary-600 transition-all"
            >
              Probar Truco
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
