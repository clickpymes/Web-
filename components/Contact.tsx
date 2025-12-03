import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

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
    <footer id="contacto" className="bg-slate-50 text-slate-800 pt-20 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Form Side - Takes up more space now since we removed info */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-heading font-bold mb-4 text-slate-900">¿Hablamos?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Déjanos un mensaje y te contactaremos para discutir cómo podemos impulsar tu negocio.
            </p>

            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="inline-flex bg-green-100 rounded-full p-3 mb-4">
                   <Send className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-600">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-primary-600 hover:text-primary-700 underline text-sm font-medium"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all shadow-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all shadow-sm"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                   <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Servicio de interés</label>
                   <select 
                    id="service"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 outline-none transition-all appearance-none shadow-sm"
                   >
                     <option>Consultoría IA</option>
                     <option>Desarrollo Web a Medida</option>
                     <option>WordPress / E-commerce</option>
                     <option>Otro</option>
                   </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all resize-none shadow-sm"
                    placeholder="Cuéntanos qué necesitas..."
                  ></textarea>
                </div>

                <div className="text-right">
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg shadow-primary-600/20 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                    {!formStatus && <Send className="ml-2 w-5 h-5" />}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Simple Contact Info Side */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Contacto Directo</h4>
              
              <div className="flex items-center space-x-4 group">
                <div className="bg-primary-50 p-3 rounded-full group-hover:bg-primary-100 transition-colors">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <a href="mailto:contacto@clickpymes.com" className="text-slate-900 font-semibold hover:text-primary-600 transition-colors">
                    contacto@clickpymes.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 clickpymes. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};