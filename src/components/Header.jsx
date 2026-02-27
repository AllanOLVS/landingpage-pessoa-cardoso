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
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="flex items-center cursor-pointer" onClick={closeMenu}>
                    <img src={logo} alt="Pessoa Cardoso Advogados" className="h-14 mr-4 object-contain" />
                    <div>
                        <h1 className={`font-serif text-2xl font-bold uppercase tracking-widest ${isScrolled ? 'text-stone-900' : 'text-white'}`}>Pessoa Cardoso</h1>
                        <p className={`text-xs tracking-[0.2em] uppercase ${isScrolled ? 'text-amber-700' : 'text-amber-500'}`}>Advogados</p>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {['Quem Somos', 'Atuação', 'Equipe', 'Clientes'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm font-medium uppercase tracking-wider hover:text-amber-600 transition-colors ${isScrolled ? 'text-stone-600' : 'text-stone-300'}`}>
                            {item}
                        </a>
                    ))}
                    <a href="#contato" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-sm text-sm font-medium uppercase tracking-wider transition-all">
                        Fale Conosco
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-amber-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 py-4 flex flex-col">
                    {['Quem Somos', 'Atuação', 'Equipe', 'Clientes'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={closeMenu} className="py-3 px-6 text-left text-stone-600 font-medium uppercase text-sm tracking-wider border-b border-stone-100 block">
                            {item}
                        </a>
                    ))}
                    <a href="#contato" onClick={closeMenu} className="mx-6 mt-4 bg-amber-700 text-white py-3 rounded-sm text-sm font-medium uppercase tracking-wider text-center block">
                        Fale Conosco
                    </a>
                </div>
            )}
        </header>
    );
}