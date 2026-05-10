import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.08,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const PortfolioWebsitePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F8F9FA] text-[#111111] font-sans">

            {/* ── Hero Header ── */}
            <div className="bg-[#111111] text-white pt-20 pb-16 px-4 md:px-10 lg:px-20">
                <div className="max-w-[1400px] mx-auto">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-10"
                    >
                        <ArrowLeft size={16} />
                        Kembali ke Home
                    </button>

                    <motion.p
                        className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Portfolio
                    </motion.p>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                    >
                        Website(s)
                    </motion.h1>

                    <motion.p
                        className="text-gray-400 mt-5 max-w-lg text-base md:text-lg"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                    >
                        Semua website statis & dinamis yang telah saya kembangkan — mulai dari company profile hingga web application.
                    </motion.p>

                    <motion.div
                        className="mt-8 inline-block bg-white/10 rounded-full px-4 py-2 text-sm text-gray-300 border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                    >
                        {projects.length} Proyek
                    </motion.div>
                </div>
            </div>

            {/* ── Grid ── */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            whileHover={{ y: -6 }}
                            className="hover-trigger relative block rounded-2xl overflow-hidden bg-gray-200 group"
                            style={{ aspectRatio: '4/3' }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="hover-target">
                                    <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs mb-2 border border-white/30">
                                        {project.category}
                                    </span>
                                    <h3 className="text-white text-xl font-semibold leading-tight">{project.title}</h3>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 hover-target transition-all shadow-lg">
                                <ArrowUpRight size={18} className="text-black" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* ── Footer strip ── */}
            <div className="border-t border-gray-200 py-10 px-4 md:px-10 lg:px-20 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Mirza Jebret — Semua hak dilindungi.
            </div>

            <style>{`
                .hover-trigger .hover-target { opacity: 0; transform: translateY(10px); transition: all 0.3s ease; }
                .hover-trigger:hover .hover-target { opacity: 1; transform: translateY(0); }
            `}</style>
        </div>
    );
};

export default PortfolioWebsitePage;
