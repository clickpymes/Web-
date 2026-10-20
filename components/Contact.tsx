import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const CONTACT_EMAIL = 'contacto@clickpymes.com.ar';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Campo trampa: las personas no lo ven, los robots sí. Si viene lleno, no se envía nada.
    if (data.get('_honey')) {
      setFormStatus('success');
      return;
    }

    setFormStatus('submitting');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          service: data.get('service'),
          message: data.get('message'),
          _subject: 'Nuevo mensaje desde clickpymes.com.ar',
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) === 'false') throw new Error('No se pudo enviar');
      form.reset();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
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
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
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
                      name="email"
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
                    name="service"
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
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all resize-none shadow-sm"
                    placeholder="Cuéntanos qué necesitas..."
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    No pudimos enviar tu mensaje. Probá de nuevo en unos minutos o escribinos directamente a{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">{CONTACT_EMAIL}</a>.
                  </p>
                )}

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
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-900 font-semibold hover:text-primary-600 transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} clickpymes. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://puntoxpunto.app/" target="_blank" rel="noopener" className="hover:text-primary-600 transition-colors">Anotadores gratis</a>
            <a href="/privacidad.html" className="hover:text-primary-600 transition-colors">Privacidad</a>
            <a href="/terminos.html" className="hover:text-primary-600 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};