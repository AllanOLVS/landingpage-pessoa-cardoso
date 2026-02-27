import React from 'react';
import { Award, Building2, Scale } from 'lucide-react';

export default function Differentials() {
    return (
        <section className="bg-amber-800 text-amber-50 py-12 relative z-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-amber-700">
                    <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
                        <Award className="text-amber-300 w-12 h-12 flex-shrink-0" />
                        <div>
                            <h3 className="font-serif text-xl font-bold mb-1">Tradição & Ética</h3>
                            <p className="text-sm text-amber-200">Mais de quatro décadas de atuação pautada na confiança.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
                        <Building2 className="text-amber-300 w-12 h-12 flex-shrink-0" />
                        <div>
                            <h3 className="font-serif text-xl font-bold mb-1">Bases Estratégicas</h3>
                            <p className="text-sm text-amber-200">Escritórios estruturados em Salvador (BA) e Brasília (DF).</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
                        <Scale className="text-amber-300 w-12 h-12 flex-shrink-0" />
                        <div>
                            <h3 className="font-serif text-xl font-bold mb-1">Advocacia Preventiva</h3>
                            <p className="text-sm text-amber-200">Foco em evitar litígios com eficiência e economicidade.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}