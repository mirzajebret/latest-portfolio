import React from 'react';

const Navbar = ({ isScrolled, scrollTo }) => {
    return (
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
                    <img
                        src="/images/logo-mirza-blk.webp"
                        alt="Mirza Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* Nav Links */}
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
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => scrollTo('contact')}
                    className="border border-[#111111] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#111111] hover:text-[#F8F9FA] transition-all"
                >
                    Contact Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
