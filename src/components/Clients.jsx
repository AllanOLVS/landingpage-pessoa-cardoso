import React from 'react';
import logoAcademiaDoVale from '../assets/logos-empresas/academia-do-vale-pessoa-cardoso.png';
import logoBellaVista from '../assets/logos-empresas/bella-vista-pessoa-cardoso.png';
import logoCifais from '../assets/logos-empresas/cifais-pessoa-cardoso.png';
import logoComercialFerramentas from '../assets/logos-empresas/comercial-ferramentas-pessoa-cardoso.png';
import logoDevassa from '../assets/logos-empresas/devassa-brasilia-pessoa-cardoso.png';
import logoPostoShell from '../assets/logos-empresas/posto-shell-pessoa-cardoso.png';
import logoPremiumEngenharia from '../assets/logos-empresas/premium-engenharia-pessoa-cardoso.png';
import logoSobesaCafe from '../assets/logos-empresas/sobesa-cafe-pessoa-cardoso.png';
import logoCslContabilidade from '../assets/logos-empresas/csl-contabilidade-pessoa-cardoso.png';
import logoVillaContainer from '../assets/logos-empresas/villa-container-mall-pessoa-cardoso.png';
import logoUniqueConcept from '../assets/logos-empresas/unique-concept-pessoa-cardoso.png';
import logoPrimeHome from '../assets/logos-empresas/prime-home-pessoa-cardoso.png';

export default function Clients() {
    // Agora a lista é um array de objetos contendo o nome e o caminho da logo
    // DICA: Salve as imagens das logos dentro da pasta "public/logos/" do seu projeto Vite.
    const clientes = [
        { name: 'Sobesa Café', logoUrl: logoSobesaCafe },
        { name: 'Academia do Vale', logoUrl: logoAcademiaDoVale },
        { name: 'Premium Engenharia', logoUrl: logoPremiumEngenharia },
        { name: 'Codef', logoUrl: logoComercialFerramentas },
        { name: 'CSL Contabilidade', logoUrl: logoCslContabilidade },
        { name: 'Unique Concept', logoUrl: logoUniqueConcept },
        { name: 'Bella Vila', logoUrl: logoBellaVista },
        { name: 'Devassa Brasília', logoUrl: logoDevassa },
        { name: 'Posto Shell', logoUrl: logoPostoShell },
        { name: 'CIFAIS', logoUrl: logoCifais },
        { name: 'Primehome', logoUrl: logoPrimeHome },
        { name: 'Villa Container Mall', logoUrl: logoVillaContainer }
    ];

    return (
        <section id="clientes" className="py-24 bg-stone-950 text-white overflow-hidden relative border-t border-stone-900">
            <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
                <h4 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3">Parcerias Sólidas</h4>
                <h2 className="font-serif text-4xl lg:text-5xl">Principais Clientes</h2>
            </div>

            {/* Carrossel Infinito */}
            <div className="relative w-full flex overflow-hidden">
                {/* Fades laterais */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-stone-950 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-stone-950 to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                    {[1, 2].map((set) => (
                        <div key={set} className="flex gap-8 pr-8">
                            {clientes.map((client, index) => (
                                /* Cards maiores: alterado de w-64 para w-80 e adicionado h-72 */
                                <div key={`${set}-${index}`} className="flex-shrink-0 w-80 h-72 p-8 bg-stone-900 border border-stone-800 rounded-sm flex flex-col items-center justify-between hover:border-amber-700 hover:-translate-y-1 transition-all duration-300 group cursor-default">

                                    {/* Contêiner da Logo (Substituindo o círculo antigo) */}
                                    <div className="w-full h-44 mt-4 flex items-center justify-center relative">
                                        {client.logoUrl ? (
                                            <img
                                                src={client.logoUrl}
                                                alt={`Logo ${client.name}`}
                                                className="w-56 h-36 object-contain transition-all duration-500"
                                            />
                                        ) : (
                                            <span className="text-[10px] text-stone-500 text-center uppercase tracking-widest leading-relaxed">
                                                Logo<br />{client.name}
                                            </span>
                                        )}
                                    </div>

                                    {/* Nome do Cliente */}
                                    <span className="font-serif text-lg tracking-wide text-center text-stone-300 group-hover:text-amber-500 transition-colors mb-2">
                                        {client.name}
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