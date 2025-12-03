import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Form Side */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">¿Listo para empezar?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Cuéntanos sobre tu proyecto. Analizaremos tus necesidades y te propondremos la mejor solución tecnológica.
            </p>

            {formStatus === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
                <div className="inline-flex bg-green-500 rounded-full p-3 mb-4">
                   <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-300">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-primary-400 hover:text-white underline text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>
                
                <div>
                   <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Servicio de interés</label>
                   <select 
                    id="service"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white outline-none transition-all appearance-none"
                   >
                     <option>Desarrollo Web a Medida</option>
                     <option>WordPress / E-commerce</option>
                     <option>Consultoría IA</option>
                     <option>Otro</option>
                   </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all resize-none"
                    placeholder="Cuéntanos brevemente qué necesitas..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary-600/20 transition-all hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                  {!formStatus && <Send size={18} />}
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="mb-8">
                 <div className="inline-block bg-white p-4 rounded-xl shadow-sm">
                   {/* Logo SVG Inline para evitar errores 404 en deploy */}
                   <svg width="180" height="50" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Icono Tech */}
                      <circle cx="25" cy="25" r="20" className="fill-primary-100" />
                      <path d="M25 12V18M25 32V38M12 25H18M32 25H38" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="25" cy="25" r="8" className="stroke-primary-600" strokeWidth="2"/>
                      <circle cx="25" cy="25" r="3" className="fill-accent-500"/>
                      <path d="M38 15L35 18M12 35L15 32M38 35L35 32M12 15L15 18" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
                      
                      {/* Texto */}
                      <text x="55" y="32" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="24" fill="#1e293b">
                        click<tspan fill="#2563EB">pymes</tspan>
                      </text>
                   </svg>
                 </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-400 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Escríbenos</h4>
                    <p className="text-slate-400">contacto@clickpymes.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-400 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Llámanos</h4>
                    <p className="text-slate-400">+34 912 345 678</p>
                  </div>
                </div>

                 <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-400 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Ubicación</h4>
                    <p className="text-slate-400">Madrid, España (Servicio Remoto Global)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-slate-500 text-sm leading-relaxed">
              <p>
                Transformamos ideas en soluciones digitales. Especialistas en hacer crecer pequeños negocios con tecnología de grandes empresas.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2023 clickpymes. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};