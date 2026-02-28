import React from 'react';
import ScrollReveal from './ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <section id="quem-somos" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <ScrollReveal direction="left" className="lg:w-1/2">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Escritório de Advocacia" className="rounded-sm shadow-2xl" />
                            <div className="absolute -bottom-8 -right-8 bg-stone-900 text-white p-8 rounded-sm shadow-xl hidden md:block max-w-xs">
                                <p className="font-serif text-2xl mb-2 text-amber-500">Apresentação</p>
                                <p className="text-sm text-stone-300">Primamos, acima de tudo, pela experiência e seriedade na defesa de nossos clientes.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="right" className="lg:w-1/2">
                        <h4 className="text-amber-700 font-bold tracking-widest uppercase text-sm mb-3">Quem Somos</h4>
                        <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6 leading-tight">
                            Eficiência, criatividade e compromisso com o seu direito.
                        </h2>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            Pessoa Cardoso Advogados propõe-se a atuar fundamentalmente na agilidade das causas, embasado na experiência de quem militou na área por mais de quarenta anos. Entendemos que o advogado tem obrigação de defender o direito do seu cliente com independência e destemor.
                        </p>
                        <p className="text-stone-600 mb-8 leading-relaxed">
                            Nossa característica situa-se nos princípios da eficiência, economicidade e criatividade na condução das demandas, sempre sustentadas na ética, chancelando a confiança dos nossos clientes com nosso corpo funcional.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Ampla experiência em Direito Público e Privado.',
                                'Acompanhamento de recursos nos Tribunais Superiores (STF, STJ, TSE, TST).',
                                'Equipe altamente qualificada e em constante atualização acadêmica.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-amber-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}