import React from 'react';
import { ArrowUpRight, BarChart3, Gamepad2, Globe, Instagram, SearchCheck } from 'lucide-react';

export const Herramientas: React.FC = () => {
  return (
    <section id="herramientas" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary-600 font-semibold tracking-wide uppercase text-xs mb-1">Herramientas gratis</p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
            Ejemplos de lo que podemos desarrollar a medida
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
            <div className="bg-primary-600 p-3 rounded-2xl shadow-lg w-fit mb-5">
              <SearchCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">Auditoría SEO gratis</h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Pegá la dirección de tu sitio y en un par de minutos recibís un informe en español con SEO, enlaces rotos,
              velocidad y accesibilidad, listo para descargar en PDF.
            </p>
            <div className="mt-6">
              <a
                href="https://auditoria.clickpymes.com.ar/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-600/30 transition-all"
              >
                Auditar mi sitio
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
            <div className="bg-primary-600 p-3 rounded-2xl shadow-lg w-fit mb-5">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">¿Es WordPress?</h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Pegá la dirección de cualquier sitio y descubrí si usa WordPress, con qué plantilla y qué plugins está hecho,
              y datos de su hosting.
            </p>
            <div className="mt-6">
              <a
                href="https://auditoria.clickpymes.com.ar/wordpress/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-600/30 transition-all"
              >
                Detectar WordPress
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
            <div className="bg-primary-600 p-3 rounded-2xl shadow-lg w-fit mb-5">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">Diagnóstico de Instagram</h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Escribí el usuario de un perfil público y mirá cómo está: ritmo de publicación, interacción, biografía y qué
              mejorar, con informe en español descargable en PDF.
            </p>
            <div className="mt-6">
              <a
                href="https://auditoria.clickpymes.com.ar/instagram/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-600/30 transition-all"
              >
                Diagnosticar Instagram
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
            <div className="bg-primary-600 p-3 rounded-2xl shadow-lg w-fit mb-5">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">Comparador de competencia</h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Poné tu sitio y hasta 3 competidores y mirá lado a lado quién está mejor en SEO, velocidad en celular,
              contacto y presencia online, con los puntos para corregir primero y PDF descargable.
            </p>
            <div className="mt-6">
              <a
                href="https://auditoria.clickpymes.com.ar/comparar/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-600/30 transition-all"
              >
                Comparar con mi competencia
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col md:col-span-2">
            <div className="bg-primary-600 p-3 rounded-2xl shadow-lg w-fit mb-5">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">Anotadores para jugar a las cartas</h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Punto x Punto: anotadores online y gratuitos para Fichitas (La Podrida) y Truco. Sin registro, sin instalar
              nada y se guardan en tu celular.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
};
