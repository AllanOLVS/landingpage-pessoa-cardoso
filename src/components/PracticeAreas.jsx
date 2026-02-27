import React from 'react';
import { Landmark, FileText, Award, Briefcase, Users, Gavel, ChevronRight } from 'lucide-react';

export default function PracticeAreas() {
    return (
        <section id="atuacao" className="py-24 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="text-amber-700 font-bold tracking-widest uppercase text-sm mb-3">Expertise Jurídica</h4>
                    <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6">Nossa Atuação</h2>
                    <p className="text-stone-600">
                        Focamos em matérias relacionadas ao Direito Público e Direito Privado. Primamos pela advocacia preventiva, almejando evitar litígios na esfera judicial e minimizar prejuízos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Direito Eleitoral */}
                    <div className="bg-white p-10 rounded-sm shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <Landmark className="text-amber-600 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-serif text-2xl text-stone-900 mb-4">Direito Eleitoral</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            Consultoria para evitar descuidos desde a inscrição até a proclamação. Assessoria a candidatos, partidos e coligações. Defesas e recursos administrativos e judiciais, com forte atuação no TSE via nossa base em Brasília.
                        </p>
                    </div>

                    {/* Direito Administrativo */}
                    <div className="bg-white p-10 rounded-sm shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <FileText className="text-amber-600 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-serif text-2xl text-stone-900 mb-4">Direito Administrativo</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            Consultoria em licitações públicas, contratos administrativos e concursos. Acompanhamento junto a órgãos, agências reguladoras e autarquias em Salvador e Brasília.
                        </p>
                    </div>

                    {/* Direito Tributário */}
                    <div className="bg-white p-10 rounded-sm shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <Award className="text-amber-600 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-serif text-2xl text-stone-900 mb-4">Direito Tributário</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            Acompanhamento de fiscalizações, consultas, obtenção de certidões. Defesa em autos de infração, ações anulatórias e recuperação de impostos pagos indevidamente.
                        </p>
                    </div>

                    {/* Direito Empresarial */}
                    <div className="bg-white p-10 rounded-sm shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <Briefcase className="text-amber-600 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-serif text-2xl text-stone-900 mb-4">Direito Empresarial</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            Planejamento e auditoria societária. Elaboração de contratos comerciais, imobiliários, sucessão, recuperação de empresas, securitização, agrobusiness e responsabilidade civil.
                        </p>
                    </div>

                    {/* Direito do Trabalho */}
                    <div className="bg-white p-10 rounded-sm shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <Users className="text-amber-600 w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-serif text-2xl text-stone-900 mb-4">Direito do Trabalho</h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            Consultoria preventiva e auditoria. Defesas em autos de infração perante a DRT. Acompanhamento em reclamações, elaboração de recursos, representação sindical e acordos coletivos.
                        </p>
                    </div>

                    {/* Extra Info Card */}
                    <div className="bg-stone-900 p-10 rounded-sm shadow-sm border border-stone-800 flex flex-col justify-center items-center text-center">
                        <Gavel className="text-amber-500 w-12 h-12 mb-4" />
                        <h3 className="font-serif text-2xl text-white mb-2">Tribunais Superiores</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            Atuação dedicada no acompanhamento de recursos em Brasília.
                        </p>
                        <a href="#contato" className="mt-6 text-amber-500 hover:text-amber-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                            Solicite uma Consulta <ChevronRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}