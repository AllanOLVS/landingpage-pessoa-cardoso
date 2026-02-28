import React, { useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Scale, MapPin, Building2, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setFeedback({ type: '', message: '' });

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',   // ← Substituir pelo Service ID do EmailJS
                'YOUR_TEMPLATE_ID',  // ← Substituir pelo Template ID do EmailJS
                formRef.current,
                'YOUR_PUBLIC_KEY'    // ← Substituir pela Public Key do EmailJS
            )
            .then(() => {
                setSending(false);
                setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
                formRef.current.reset();
            })
            .catch(() => {
                setSending(false);
                setFeedback({ type: 'error', message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.' });
            });
    };

    return (
        <section id="contato" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="bg-white rounded-sm shadow-xl overflow-hidden flex flex-col lg:flex-row border border-stone-200">

                    {/* Contact Form */}
                    <ScrollReveal direction="left" className="lg:w-1/2">
                        <div className="p-10 lg:p-16">
                            <h2 className="font-serif text-3xl text-stone-900 mb-2">Fale Conosco</h2>
                            <p className="text-stone-500 mb-8 text-sm">Envie sua mensagem. Retornaremos o mais breve possível.</p>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Nome *</label>
                                    <input type="text" name="from_name" required className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors" placeholder="Seu nome completo" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">E-mail *</label>
                                    <input type="email" name="from_email" required className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors" placeholder="seu.email@exemplo.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Assunto</label>
                                    <input type="text" name="subject" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors" placeholder="Motivo do contato" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Mensagem</label>
                                    <textarea rows="4" name="message" required className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors resize-none" placeholder="Escreva sua mensagem aqui..."></textarea>
                                </div>

                                {feedback.message && (
                                    <div className={`text-sm p-3 rounded-sm ${feedback.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                        {feedback.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="bg-amber-700 hover:bg-amber-800 disabled:bg-amber-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-sm font-bold tracking-wider uppercase text-sm transition-all w-full md:w-auto"
                                >
                                    {sending ? 'Enviando...' : 'Enviar Mensagem'}
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                    {/* Contact Info & Map */}
                    <ScrollReveal direction="right" className="lg:w-1/2">
                        <div className="bg-stone-900 text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                                <Scale className="w-96 h-96 -mt-20 -mr-20" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-serif text-2xl text-amber-500 mb-8">Informações de Contato</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-amber-600 w-6 h-6 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Sede Salvador</h4>
                                            <p className="text-stone-400 text-sm leading-relaxed">
                                                Al. Salvador, Nº 1057, Caminho das Árvores<br />
                                                Edifício Salvador Shopping Business<br />
                                                Torre América, Salas 1505 e 1506<br />
                                                Salvador - BA, CEP 41.820-790
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Building2 className="text-amber-600 w-6 h-6 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Filial Brasília</h4>
                                            <p className="text-stone-400 text-sm">Escritório de apoio para acompanhamento no TSE, TST, STJ e STF.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-stone-800">
                                        <Phone className="text-amber-600 w-5 h-5 flex-shrink-0" />
                                        <p className="text-stone-300">(71) 0000-0000</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-amber-600 w-5 h-5 flex-shrink-0" />
                                        <p className="text-stone-300 break-all">allan.oliveiraa009@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="mt-10 h-48 rounded border border-stone-700 overflow-hidden relative z-10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9579219261425!2d-38.459819901644245!3d-12.977234266258302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b53e8602ca3%3A0xe5f018a8b4c0b8c1!2sTorre%20Am%C3%A9rica!5e0!3m2!1spt-BR!2sbr!4v1772211815787!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização Pessoa Cardoso Advogados"
                                ></iframe>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}