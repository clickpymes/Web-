import React from 'react';
import { ShieldCheck, Rocket, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="relative mb-12 lg:mb-0">
             {/* Decorative Background Pattern */}
             <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6 w-24 h-24 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
             <div className="absolute bottom-0 right-0 translate-x-6 translate-y-6 w-24 h-24 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            
            <img 
              src="https://picsum.photos/600/800?random=2" 
              alt="Reunión de estrategia clickpymes" 
              className="relative rounded-2xl shadow-2xl w-full object-cover z-10"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              El puente tecnológico entre tu negocio y el <span className="text-primary-600">éxito</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              En <span className="font-semibold text-slate-900">clickpymes</span>, entendemos que la tecnología puede resultar abrumadora. Nuestro objetivo es simplificar la transformación digital.
            </p>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              No somos solo programadores; somos consultores estratégicos. Analizamos tu modelo de negocio para implementar las herramientas exactas que necesitas, evitando costos innecesarios y enfocándonos en el retorno de inversión.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-slate-200 text-primary-600 shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-bold text-slate-900">Confianza y Transparencia</h5>
                  <p className="mt-1 text-slate-600">Hablamos tu idioma, sin tecnicismos innecesarios. Presupuestos claros desde el día uno.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-slate-200 text-primary-600 shadow-sm">
                    <Rocket className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-bold text-slate-900">Modernización Real</h5>
                  <p className="mt-1 text-slate-600">Implementamos tecnología de vanguardia que realmente impacta en la productividad de tu equipo.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-slate-200 text-primary-600 shadow-sm">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-bold text-slate-900">Acompañamiento Continuo</h5>
                  <p className="mt-1 text-slate-600">No desaparecemos tras la entrega. Te acompañamos en el crecimiento de tu proyecto.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};