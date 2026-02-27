import React from 'react';
import logo from '../assets/logo-pessoa-cardoso-sfundo.png';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-stone-950 border-t border-stone-900 pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-stone-800 pb-12">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src={logo} alt="Pessoa Cardoso Advogados" className="h-12 mr-3 object-contain" />
                            <div>
                                <h2 className="font-serif text-lg font-bold uppercase tracking-widest text-white">Pessoa Cardoso</h2>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-amber-700">Advogados</p>
                            </div>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            Conceito, experiência e seriedade em advocacia preventiva e contenciosa há mais de 40 anos.
                        </p>
                    </div>

                    {/* Links Úteis */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-serif text-lg mb-6">Links Úteis</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            {[
                                ['Conselho Nacional de Justiça', 'http://www.cnj.jus.br'],
                                ['Supremo Tribunal Federal', 'http://www.stf.jus.br'],
                                ['Superior Tribunal de Justiça', 'http://www.stj.jus.br'],
                                ['Tribunal Superior Eleitoral', 'http://www.tse.jus.br'],
                                ['Tribunal Superior do Trabalho', 'http://www.tst.jus.br'],
                                ['Tribunal Regional Eleitoral - BA', 'http://www.tre-ba.jus.br'],
                                ['Tribunal Regional do Trabalho - 5ª', 'http://www.trt5.jus.br'],
                                ['Tribunal de Justiça da Bahia', 'http://www5.tjba.jus.br'],
                                ['Ordem dos Advogados do Brasil', 'http://www.oab.org.br'],
                                ['Consultor Jurídico', 'http://www.conjur.com.br']
                            ].map(([name, url], i) => (
                                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-amber-500 text-sm transition-colors flex items-center gap-2">
                                    <ChevronRight size={14} className="text-amber-800" />
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Navegação</h4>
                        <ul className="space-y-3">
                            {['Home', 'Quem Somos', 'Atuação', 'Equipe', 'Clientes', 'Contato'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-stone-500 hover:text-amber-500 text-sm transition-colors uppercase tracking-wider">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-stone-600 text-xs">
                    <p>© {new Date().getFullYear()} by PESSOA CARDOSO ADVOGADOS. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
                </div>
            </div>
        </footer>
    );
}