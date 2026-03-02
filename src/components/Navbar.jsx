import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isScrolled, scrollTo }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change / resize
    useEffect(() => {
        const close = () => setMenuOpen(false);
        window.addEventListener('resize', close);
        return () => window.removeEventListener('resize', close);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const handleScrollTo = (id) => {
        setMenuOpen(false);
        scrollTo(id);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#F8F9FA] py-4 shadow-sm'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <div
                        className="font-bold text-2xl tracking-tighter cursor-pointer flex items-center gap-2"
                        onClick={() => scrollTo('home')}
                    >
                        <Link to="/">
                            <img
                                src="/images/logo-mirza-blk.webp"
                                alt="Mirza Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex gap-8 font-medium text-sm">
                        <button onClick={() => scrollTo('about')} className="hover:text-gray-500 transition-colors">
                            About
                        </button>
                        <button onClick={() => scrollTo('skills')} className="hover:text-gray-500 transition-colors">
                            Skills
                        </button>
                        <button onClick={() => scrollTo('experience')} className="hover:text-gray-500 transition-colors">
                            Experience
                        </button>
                        <button onClick={() => scrollTo('portfolio')} className="hover:text-gray-500 transition-colors">
                            Portfolio
                        </button>
                        <Link to="/cv" className="hover:text-gray-500 transition-colors">
                            CV
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <button
                        onClick={() => scrollTo('contact')}
                        className="hidden md:inline-flex border border-[#111111] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#111111] hover:text-[#F8F9FA] transition-all"
                    >
                        Contact Me
                    </button>

                    {/* Mobile: Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Full-Screen Drawer */}
            <div
                className={`fixed inset-0 z-40 bg-[#F8F9FA] flex flex-col transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Drawer Content */}
                <div className="flex-1 flex flex-col justify-center px-10 gap-8">
                    <button
                        onClick={() => handleScrollTo('about')}
                        className="text-left text-4xl font-medium tracking-tight hover:translate-x-2 transition-transform"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleScrollTo('skills')}
                        className="text-left text-4xl font-medium tracking-tight hover:translate-x-2 transition-transform"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => handleScrollTo('experience')}
                        className="text-left text-4xl font-medium tracking-tight hover:translate-x-2 transition-transform"
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => handleScrollTo('portfolio')}
                        className="text-left text-4xl font-medium tracking-tight hover:translate-x-2 transition-transform"
                    >
                        Portfolio
                    </button>
                    <Link
                        to="/cv"
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl font-medium tracking-tight hover:translate-x-2 transition-transform"
                    >
                        CV
                    </Link>
                </div>

                {/* Drawer Footer */}
                <div className="px-10 pb-12">
                    <button
                        onClick={() => handleScrollTo('contact')}
                        className="w-full bg-[#111111] text-white py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

