import React from 'react';
import { LayoutTemplate, Terminal, Bot, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Terminal className="w-10 h-10 text-white" />,
      title: "Programación Web a Medida",
      description: "Desarrollamos aplicaciones web escalables y personalizadas utilizando tecnologías modernas como React y Node.js para resolver tus necesidades específicas.",
      features: ["Aplicaciones Web (SPA)", "Sistemas de Gestión", "APIs RESTful"],
      color: "bg-primary-600"
    },
    {
      icon: <LayoutTemplate className="w-10 h-10 text-white" />,
      title: "Implementación WordPress",
      description: "Creamos sitios web corporativos y e-commerce rápidos, seguros y autogestionables. La solución ideal para tener presencia online profesional rápidamente.",
      features: ["Diseño Personalizado", "Tiendas Online (WooCommerce)", "Optimización SEO"],
      color: "bg-slate-800"
    },
    {
      icon: <Bot className="w-10 h-10 text-white" />,
      title: "Consultoría en Inteligencia Artificial",
      description: "Asesoramos a tu empresa para integrar herramientas de IA que automatizan tareas, mejoran la atención al cliente y optimizan la toma de decisiones.",
      features: ["Chatbots Inteligentes", "Automatización de Procesos", "Análisis de Datos"],
      color: "bg-accent-500"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Soluciones tecnológicas diseñadas para crecer
          </h3>
          <p className="text-slate-600 text-lg">
            Cubrimos todo el espectro digital, desde el código puro hasta la inteligencia artificial, adaptándonos al presupuesto y objetivos de tu Pyme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-xl ${service.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};