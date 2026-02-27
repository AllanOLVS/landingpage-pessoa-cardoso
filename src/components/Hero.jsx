import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/90 to-stone-950/80"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <div className="inline-block bg-amber-700/20 border border-amber-600/30 px-3 sm:px-4 py-1.5 rounded-full mb-6">
                        <span className="text-amber-500 font-medium text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase">Mais de 40 anos de militância</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-serif text-white leading-tight mb-6">
                        Conceito, <br />
                        <span className="text-amber-600">Experiência</span> & Seriedade.
                    </h2>
                    <p className="text-lg lg:text-xl text-stone-300 mb-10 leading-relaxed font-light max-w-2xl">
                        Focados na advocacia preventiva e estratégica. Defendemos os direitos dos nossos clientes com independência, destemor e compromisso ético em instâncias ordinárias e Tribunais Superiores.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#atuacao" className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-sm font-semibold tracking-wider uppercase text-sm transition-all flex items-center justify-center gap-2">
                            Nossa Atuação
                            <ArrowRight size={18} />
                        </a>
                        <a href="#contato" className="border border-stone-400 hover:border-white text-white px-8 py-4 rounded-sm font-semibold tracking-wider uppercase text-sm transition-all flex items-center justify-center">
                            Fale com um Especialista
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}