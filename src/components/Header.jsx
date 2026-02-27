import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-pessoa-cardoso-sfundo.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-stone-950/80 backdrop-blur-sm py-5'}`}>
            {/* Adicionado gap-4 para garantir que logo e menu nunca se toquem */}
            <div className="container mx-auto px-4 lg:px-6 xl:px-12 flex justify-between items-center relative gap-4">

                {/* Logo - Adicionado shrink-0 e tamanhos responsivos */}
                <a href="#home" className="flex items-center cursor-pointer min-w-0 overflow-hidden" onClick={closeMenu}>
                    <img src={logo} alt="Pessoa Cardoso Advogados" className="h-12 xl:h-14 mr-3 xl:mr-4 object-contain" />
                    <div>
                        <h1 className={`font-serif text-xl xl:text-2xl font-bold uppercase tracking-widest ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
                            Pessoa Cardoso
                        </h1>
                        <p className={`text-[10px] xl:text-xs tracking-[0.2em] uppercase ${isScrolled ? 'text-amber-700' : 'text-amber-500'}`}>
                            Advogados
                        </p>
                    </div>
                </a>

                {/* Desktop Nav - Adicionado whitespace-nowrap e gap/textos responsivos (lg vs xl) */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
                    {['Quem Somos', 'Atuação', 'Equipe', 'Clientes'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className={`text-xs xl:text-sm font-medium uppercase tracking-wider whitespace-nowrap hover:text-amber-600 transition-colors ${isScrolled ? 'text-stone-600' : 'text-stone-300'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contato"
                        className="bg-amber-700 hover:bg-amber-800 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-sm text-xs xl:text-sm font-medium uppercase tracking-wider transition-all whitespace-nowrap"
                    >
                        Fale Conosco
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={`lg:hidden transition-colors z-50 shrink-0 p-2 ${isMobileMenuOpen ? 'text-amber-700' : 'text-amber-600'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Alternar menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* --- MENU MOBILE COMPACTO --- */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 w-screen h-screen z-40"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                )}

                <div
                    className={`absolute top-full mt-6 right-6 w-56 bg-stone-950 border border-stone-800 border-t-2 border-t-amber-700 rounded-sm shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-top-right z-50 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
                        }`}
                >
                    <div className="flex flex-col py-2">
                        {['Quem Somos', 'Atuação', 'Equipe', 'Clientes'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={closeMenu}
                                className="py-3 px-6 text-left text-stone-300 font-medium uppercase text-[11px] tracking-[0.15em] hover:bg-stone-900 hover:text-amber-500 transition-colors border-l-2 border-transparent hover:border-amber-700"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="bg-stone-900 p-4 border-t border-stone-800">
                        <a
                            href="#contato"
                            onClick={closeMenu}
                            className="flex justify-center items-center w-full bg-amber-700 hover:bg-amber-600 text-white py-3 rounded-sm text-[11px] font-bold uppercase tracking-[0.15em] transition-colors shadow-md"
                        >
                            Fale Conosco
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}