import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

    const navLinks = ['about', 'skills', 'experience', 'portfolio'];
    const navLabels = ['About', 'Skills', 'Experience', 'Portfolio'];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#F8F9FA] py-4 shadow-sm'
                    : 'bg-transparent py-6'
                    }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        className="font-bold text-2xl tracking-tighter cursor-pointer flex items-center gap-2"
                        onClick={() => scrollTo('home')}
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Link to="/">
                            <img
                                src="/images/logo-mirza-blk.webp"
                                alt="Mirza Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex gap-8 font-medium text-sm">
                        {navLinks.map((id, i) => (
                            <motion.button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className="hover:text-gray-500 transition-colors"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                                whileHover={{ y: -2 }}
                            >
                                {navLabels[i]}
                            </motion.button>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.38, duration: 0.4 }}
                            whileHover={{ y: -2 }}
                        >
                            <Link to="/cv" className="hover:text-gray-500 transition-colors">
                                CV
                            </Link>
                        </motion.div>
                    </div>

                    {/* Desktop CTA */}
                    <motion.button
                        onClick={() => scrollTo('contact')}
                        className="hidden md:inline-flex border border-[#111111] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#111111] hover:text-[#F8F9FA] transition-all"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.4 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Contact Me
                    </motion.button>

                    {/* Mobile: Hamburger */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={menuOpen ? 'close' : 'open'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {menuOpen ? <X size={18} /> : <Menu size={18} />}
                            </motion.span>
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Full-Screen Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-[#F8F9FA] flex flex-col md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Drawer Content */}
                        <div className="flex-1 flex flex-col justify-center px-10 gap-8">
                            {navLinks.map((id, i) => (
                                <motion.button
                                    key={id}
                                    onClick={() => handleScrollTo(id)}
                                    className="text-left text-4xl font-medium tracking-tight"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07, duration: 0.4 }}
                                    whileHover={{ x: 10, transition: { type: 'spring', stiffness: 300 } }}
                                >
                                    {navLabels[i]}
                                </motion.button>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
                                whileHover={{ x: 10, transition: { type: 'spring', stiffness: 300 } }}
                            >
                                <Link
                                    to="/cv"
                                    onClick={() => setMenuOpen(false)}
                                    className="text-4xl font-medium tracking-tight"
                                >
                                    CV
                                </Link>
                            </motion.div>
                        </div>

                        {/* Drawer Footer */}
                        <motion.div
                            className="px-10 pb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            <button
                                onClick={() => handleScrollTo('contact')}
                                className="w-full bg-[#111111] text-white py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                                Contact Me
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
