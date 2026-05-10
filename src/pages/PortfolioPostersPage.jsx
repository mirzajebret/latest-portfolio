import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { posters } from '../data/portfolioData';

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.06,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

/* ── Lightbox ─────────────────────────────────────────── */
const Lightbox = ({ poster, onClose }) => (
    <AnimatePresence>
        {poster && (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="relative max-w-lg w-full"
                    initial={{ scale: 0.88, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.88, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={poster.image}
                        alt={poster.title}
                        className="w-full rounded-2xl shadow-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl p-6">
                        <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs mb-2 border border-white/30">
                            {poster.category}
                        </span>
                        <h3 className="text-white text-lg font-semibold">{poster.title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors border border-white/20"
                    >
                        <X size={16} />
                    </button>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

/* ── Filter Pill ──────────────────────────────────────── */
const FilterPill = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
            active
                ? 'bg-[#111111] text-white border-[#111111]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
        }`}
    >
        {label}
    </button>
);

/* ── Main Component ────────────────────────────────────── */
const PortfolioPostersPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    const [activeFilter, setActiveFilter] = useState('Semua');

    const clients = ['Semua', ...Array.from(new Set(posters.map((p) => p.client)))];
    const filtered = activeFilter === 'Semua' ? posters : posters.filter((p) => p.client === activeFilter);

    return (
        <div className="min-h-screen bg-[#F8F9FA] text-[#111111] font-sans">

            {/* ── Lightbox ── */}
            <Lightbox poster={selected} onClose={() => setSelected(null)} />

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
                        Banner &amp; Poster
                    </motion.h1>

                    <motion.p
                        className="text-gray-400 mt-5 max-w-lg text-base md:text-lg"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                    >
                        Kumpulan desain sosial media, banner promosi, dan poster digital untuk berbagai klien.
                    </motion.p>

                    <motion.div
                        className="mt-8 inline-block bg-white/10 rounded-full px-4 py-2 text-sm text-gray-300 border border-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                    >
                        {posters.length} Karya
                    </motion.div>
                </div>
            </div>

            {/* ── Filter Bar ── */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 pt-10">
                <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {clients.map((c) => (
                        <FilterPill
                            key={c}
                            label={c}
                            active={activeFilter === c}
                            onClick={() => setActiveFilter(c)}
                        />
                    ))}
                </motion.div>
            </div>

            {/* ── Masonry-style Grid ── */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-10 pb-20">
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    layout
                >
                    <AnimatePresence>
                        {filtered.map((poster, idx) => (
                            <motion.div
                                key={poster.image}
                                custom={idx}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }}
                                layout
                                whileHover={{ y: -5 }}
                                className="hover-trigger relative rounded-xl overflow-hidden bg-gray-200 cursor-pointer group"
                                style={{ aspectRatio: poster.category === 'Banner' ? '16/9' : '3/4' }}
                                onClick={() => setSelected(poster)}
                            >
                                <img
                                    src={poster.image}
                                    alt={poster.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                    <div className="hover-target">
                                        <span className="inline-block bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[10px] mb-1 border border-white/20">
                                            {poster.category}
                                        </span>
                                        <p className="text-white text-xs font-medium leading-tight">{poster.title}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* ── Footer strip ── */}
            <div className="border-t border-gray-200 py-10 px-4 md:px-10 lg:px-20 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Mirza Jebret — Semua hak dilindungi.
            </div>

            <style>{`
                .hover-trigger .hover-target { opacity: 0; transform: translateY(8px); transition: all 0.3s ease; }
                .hover-trigger:hover .hover-target { opacity: 1; transform: translateY(0); }
            `}</style>
        </div>
    );
};

export default PortfolioPostersPage;
