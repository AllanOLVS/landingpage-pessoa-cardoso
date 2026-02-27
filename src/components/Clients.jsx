import React from 'react';

export default function Clients() {
    const clientes = [
        'Sobesa Café', 'Academia do Vale', 'Premium Engenharia', 'Codef',
        'CSL Contabilidade', 'Unique Concept', 'Bella Vila', 'Devassa Brasília',
        'Posto Shell', 'CIFAIS', 'Primehome', 'Villa Container Mall'
    ];

    return (
        <section id="clientes" className="py-24 bg-stone-950 text-white overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
                <h4 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3">Parcerias Sólidas</h4>
                <h2 className="font-serif text-4xl lg:text-5xl">Principais Clientes</h2>
            </div>

            {/* Carrossel Infinito */}
            <div className="relative w-full flex overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {[1, 2].map((set) => (
                        <div key={set} className="flex gap-8 pr-8">
                            {clientes.map((client, index) => (
                                <div key={`${set}-${index}`} className="flex-shrink-0 w-64 p-8 bg-stone-900 border border-stone-800 rounded-sm flex flex-col items-center justify-center gap-6 hover:border-amber-700 hover:-translate-y-1 transition-all group cursor-default">
                                    <div className="w-24 h-24 bg-stone-800 rounded-full flex items-center justify-center border-2 border-stone-700 group-hover:border-amber-500 transition-colors overflow-hidden">
                                        <span className="text-[10px] text-stone-500 text-center uppercase tracking-widest leading-relaxed">
                                            Logo<br />Aqui
                                        </span>
                                    </div>
                                    <span className="font-serif text-lg tracking-wide text-center text-stone-300 group-hover:text-amber-500 transition-colors">
                                        {client}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}