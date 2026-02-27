import React from 'react';
import { Scale, MapPin, Building2, Phone, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contato" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="bg-white rounded-sm shadow-xl overflow-hidden flex flex-col lg:flex-row border border-stone-200">

                    {/* Contact Form */}
                    <div className="lg:w-1/2 p-10 lg:p-16">
                        <h2 className="font-serif text-3xl text-stone-900 mb-2">Fale Conosco</h2>
                        <p className="text-stone-500 mb-8 text-sm">Envie sua mensagem. Retornaremos o mais breve possível.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Nome *</label>
                                <input type="text" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors" placeholder="Seu nome completo" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">E-mail *</label>
                                <input type="email" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors" placeholder="seu.email@exemplo.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Assunto</label>
                                <input type="text" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors" placeholder="Motivo do contato" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Mensagem</label>
                                <textarea rows="4" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 bg-transparent transition-colors resize-none" placeholder="Escreva sua mensagem aqui..."></textarea>
                            </div>
                            <button type="button" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-sm font-bold tracking-wider uppercase text-sm transition-all w-full md:w-auto">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="lg:w-1/2 bg-stone-900 text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
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
                                    <p className="text-stone-300">contato@pessoacardoso.adv.br</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-10 h-48 bg-stone-800 rounded border border-stone-700 flex items-center justify-center relative z-10">
                            <span className="text-stone-500 flex flex-col items-center">
                                <MapPin className="mb-2 opacity-50" />
                                Placeholder do Google Maps
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}