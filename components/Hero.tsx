import React from 'react';
import { ArrowRight, Code2, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-400 blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
              Impulsamos tu Pyme <br/>
              hacia el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">futuro digital</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Somos tu socio tecnológico. Ofrecemos desarrollo web a medida, soluciones robustas en WordPress y consultoría de IA para optimizar tus procesos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:-translate-y-1"
              >
                Hablemos de tu proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-primary-600 hover:border-primary-200 shadow-sm"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://picsum.photos/800/800?random=1" 
                alt="Equipo clickpymes trabajando" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Badge 1 */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Desarrollo</p>
                  <p className="text-sm font-bold text-slate-900">100% A Medida</p>
                </div>
              </div>

               {/* Floating Badge 2 */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-accent-100 p-2 rounded-lg text-accent-600">
                  <Cpu size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Integración</p>
                  <p className="text-sm font-bold text-slate-900">IA Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};