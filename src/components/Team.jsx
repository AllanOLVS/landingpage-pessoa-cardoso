import React from 'react';
import ScrollReveal from './ScrollReveal';
import fotoAntonio from '../assets/fotos-time/antonio-pessoa.jpeg';
import fotoPablicio from '../assets/fotos-time/pablicio-monteiro.jpeg';
import fotoPablo from '../assets/fotos-time/pablo-monteiro.jpeg';
// import fotoAdriano from '../assets/fotos-time/adriano-lacerda.jpeg';


export default function Team() {
    return (
        <section id="equipe" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Cabeçalho da Seção */}
                <ScrollReveal direction="right">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                        <div>
                            <h4 className="text-amber-700 font-bold tracking-widest uppercase text-sm mb-3">Nosso Time</h4>
                            <h2 className="font-serif text-4xl lg:text-5xl text-stone-900">Corpo Jurídico</h2>
                        </div>
                        <p className="text-stone-600 max-w-md">
                            Profissionais altamente qualificados, combinando sólida formação acadêmica com vasta experiência prática nos tribunais.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Lawyer 1 */}
                    <ScrollReveal direction="left">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                            <div className="w-full sm:w-48 h-96 sm:h-64 bg-stone-200 rounded-sm flex-shrink-0 overflow-hidden border border-stone-300">
                                <img src={fotoAntonio} alt="Antonio Pessoa Cardoso" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="font-serif text-2xl text-stone-900 font-bold mb-1 group-hover:text-amber-700 transition-colors">Antonio Pessoa Cardoso</h3>
                                <p className="text-amber-600 text-sm font-bold uppercase tracking-wider mb-4">Sócio Fundador / Ex-Magistrado</p>
                                <div className="text-stone-600 text-sm space-y-2 leading-relaxed">
                                    <p>Graduado pela Fac. Nacional de Direito (RJ, 1970). Magistrado no período 1977/2013, com notável atuação eleitoral e trabalhista.</p>
                                    <p>Criou Conselhos de Conciliação em 1983. Eleito Corregedor das Comarcas do Interior (2012/2014) e Secretário do Colégio Permanente de Corregedores.</p>
                                    <p>Aposentado como Desembargador Corregedor (2013). Autor de livros e mais de 300 artigos jurídicos.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Lawyer 2 */}
                    <ScrollReveal direction="right">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                            <div className="w-full sm:w-48 h-96 sm:h-64 bg-stone-200 rounded-sm flex-shrink-0 overflow-hidden border border-stone-300">
                                <img src={fotoPablicio} alt="Pablício Monteiro Cardoso" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="font-serif text-2xl text-stone-900 font-bold mb-1 group-hover:text-amber-700 transition-colors">Pablício Monteiro Cardoso</h3>
                                <p className="text-amber-600 text-sm font-bold uppercase tracking-wider mb-4">Sócio</p>
                                <div className="text-stone-600 text-sm space-y-2 leading-relaxed">
                                    <p>Graduado pelo UNIEURO. Pós-graduado em Direito Material e Processual do Trabalho (UNICEUB) e Direito Público (Inst. Processus).</p>
                                    <p>Credenciado pela OAB-DF e OAB-BA. Membro do Grupo de Direito do Trabalho desde 2003.</p>
                                    <p>Experiência profissional junto a renomados Ministros do TST. Doutorando em Direito Laboral (UBA - Argentina).</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Lawyer 3 */}
                    <ScrollReveal direction="left">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                            <div className="w-full sm:w-48 h-96 sm:h-64 bg-stone-200 rounded-sm flex-shrink-0 overflow-hidden border border-stone-300">
                                <img src={fotoPablo} alt="Pablo Monteiro Cardoso" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="font-serif text-2xl text-stone-900 font-bold mb-1 group-hover:text-amber-700 transition-colors">Pablo Monteiro Cardoso</h3>
                                <p className="text-amber-600 text-sm font-bold uppercase tracking-wider mb-4">Advogado Especialista</p>
                                <div className="text-stone-600 text-sm space-y-2 leading-relaxed">
                                    <p>Advogado graduado pela UNIJORGE.</p>
                                    <p>Pós-graduando em Direito Tributário pelo Instituto Brasileiro de Estudos Tributários - IBET.</p>
                                    <p>Possui ampla experiência prática e teórica acumulada em renomados escritórios de advocacia do estado da Bahia.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Lawyer 4 */}
                    <ScrollReveal direction="right">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
                            <div className="w-full sm:w-48 h-96 sm:h-64 bg-stone-200 rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden border border-stone-300 relative">
                                <span className="text-stone-400 text-sm font-medium absolute z-10 text-center px-4">Inserir Foto<br />Adriano Lacerda</span>
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="font-serif text-2xl text-stone-900 font-bold mb-1 group-hover:text-amber-700 transition-colors">Adriano Rios de Lacerda</h3>
                                <p className="text-amber-600 text-sm font-bold uppercase tracking-wider mb-4">Advogado Especialista</p>
                                <div className="text-stone-600 text-sm space-y-2 leading-relaxed">
                                    <p>Advogado graduado pela Faculdade Ruy Barbosa.</p>
                                    <p>Pós-graduando em Direito Administrativo pela Universidade Candido Mendes - UCAM.</p>
                                    <p>Vasta trajetória e experiência profissional consolidada atuando em grandes bancas da Bahia.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}