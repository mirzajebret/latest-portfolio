import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects, posters } from '../data/portfolioData';

/* ── Animation Variants ─────────────────────────────────── */
const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

/* ── Website Card ───────────────────────────────────────── */
const WebsiteCard = ({ project, idx }) => (
    <motion.a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        custom={idx}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        whileHover={{ y: -6 }}
        className="hover-trigger relative block rounded-2xl overflow-hidden bg-gray-100"
        style={{ aspectRatio: '4/3' }}
    >
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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
);

/* ── Poster Card ────────────────────────────────────────── */
const PosterCard = ({ poster, idx }) => (
    <motion.div
        custom={idx}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        whileHover={{ y: -6 }}
        className="hover-trigger relative block rounded-2xl overflow-hidden bg-gray-100 cursor-pointer"
        style={{ aspectRatio: '3/4' }}
    >
        <img
            src={poster.image}
            alt={poster.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
            <div className="hover-target">
                <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs mb-2 border border-white/30">
                    {poster.category}
                </span>
                <h3 className="text-white text-base font-semibold leading-tight">{poster.title}</h3>
            </div>
        </div>
    </motion.div>
);

/* ── Section Header ─────────────────────────────────────── */
const SectionHeader = ({ title, subtitle }) => (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {title}
        </motion.h2>
        <motion.p
            className="text-gray-500 text-sm md:text-base max-w-xs text-left md:text-right"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
        >
            {subtitle}
        </motion.p>
    </div>
);

/* ── "Selengkapnya" Button ──────────────────────────────── */
const MoreButton = ({ onClick, label = 'Selengkapnya' }) => (
    <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
    >
        <button
            onClick={onClick}
            className="group flex items-center gap-2 px-7 py-3 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-800 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-sm"
        >
            {label}
            <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
            />
        </button>
    </motion.div>
);

/* ── Main Component ─────────────────────────────────────── */
const PortfolioSection = () => {
    const navigate = useNavigate();

    const featuredWebsites = projects.slice(0, 3);
    const featuredPosters  = posters.slice(0, 3);

    return (
        <section id="portfolio" className="py-24 px-4 md:px-10 lg:px-16 max-w-[1400px] mx-auto">

            {/* ── Badge ── */}
            <motion.div
                className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-14"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
            >
                Portfolio
            </motion.div>

            {/* ════════════════════════════════════════════
                WEBSITE SECTION
            ════════════════════════════════════════════ */}
            <SectionHeader
                title="Website(s)"
                subtitle="Beberapa website statis & dinamis yang sudah saya develop."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredWebsites.map((project, idx) => (
                    <WebsiteCard key={idx} project={project} idx={idx} />
                ))}
            </div>

            <MoreButton onClick={() => navigate('/portfolio/website')} label="Lihat semua website" />

            {/* ════════════════════════════════════════════
                BANNER & POSTER SECTION
            ════════════════════════════════════════════ */}
            <div className="mt-24">
                <SectionHeader
                    title="Banner & Poster"
                    subtitle="Desain konten sosial media & banner promosi."
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {featuredPosters.map((poster, idx) => (
                        <PosterCard key={idx} poster={poster} idx={idx} />
                    ))}
                </div>

                <MoreButton onClick={() => navigate('/portfolio/posters')} label="Lihat semua poster & banner" />
            </div>

        </section>
    );
};

export default PortfolioSection;
