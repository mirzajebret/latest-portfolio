import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = ({ scrollTo }) => {
    return (
        <footer id="contact" className="bg-[#111111] text-white pt-32 pb-12 mt-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* CTA Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-32 pb-16 border-b border-white/20">
                    <h2 className="text-[4rem] sm:text-[6rem] md:text-[8vw] font-medium leading-[0.9] tracking-tighter">
                        Let's Connect !
                    </h2>
                    <a
                        href="mailto:rzamirza006@gmail.com"
                        className="inline-flex items-center gap-4 bg-[#222222] border border-white/10 px-8 py-5 rounded-full font-medium hover:bg-white hover:text-black transition-colors shrink-0"
                    >
                        <span>Email Me </span>
                        <ArrowRight size={20} />
                    </a>
                </div>

                {/* Footer Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Brand + Social */}
                    <div className="col-span-1">
                        <img
                            src="/images/logo-mirza-blk.webp"
                            alt="Mirza Logo"
                            className="h-18 w-auto object-contain invert"
                        />


                        <div className="flex gap-4 mt-8">

                            <a href="https://linkedin.com/in/mirzaassidiqie" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://github.com/mirzajebret" aria-label="GitHub" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="https://dribbble.com/MirzaAssidiqie" target="_blank" rel="noreferrer" aria-label="Dribbble" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                                    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-white font-medium mb-6">Alamat</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Garut,<br />
                            Jawa Barat, Indonesia
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <h4 className="text-white font-medium mb-6">Contact</h4>
                        <a href="mailto:rzamirza006@gmail.com" className="text-gray-400 text-sm leading-relaxed">
                            rzamirza006@gmail.com
                        </a>
                        <br />
                        <a href="https://wa.me/621321245011" target="_blank" rel="noreferrer" className="text-gray-400 text-sm leading-relaxed">
                            +62 813 2124 5011
                        </a>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="text-white font-medium mb-6">Sitemap</h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <button onClick={() => scrollTo('home')} className="text-left hover:text-white transition-colors">
                                Home
                            </button>
                            <button onClick={() => scrollTo('about')} className="text-left hover:text-white transition-colors">
                                About Me
                            </button>
                            <button onClick={() => scrollTo('portfolio')} className="text-left hover:text-white transition-colors">
                                Portfolio
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-xs pt-8 border-t border-white/10">
                    © 2026 Mirza Assidiqie
                </div>
            </div>
        </footer>
    );
};

export default Footer;
