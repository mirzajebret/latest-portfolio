import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
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

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <motion.div
                className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-10"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
            >
                Portfolio
            </motion.div>

            <div className="grid md:grid-cols-[1fr_1fr] gap-8 mb-16 items-end">
                <motion.h2
                    className="text-4xl md:text-5xl font-medium tracking-tight max-w-md"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    Eksplorasi solusi kreatif & digital saya
                </motion.h2>
                <motion.p
                    className="text-gray-600 text-right hidden md:block max-w-xs justify-self-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                >
                    Koleksi proyek pilihan yang menunjukkan kemampuan saya dalam web development.
                </motion.p>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        viewport={{ once: true, margin: '-60px' }}
                        whileHover={{ y: -6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                        className="hover-trigger relative block rounded-3xl overflow-hidden aspect-[4/3] bg-gray-200"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                        />

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <div className="hover-target">
                                <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs mb-3 border border-white/30">
                                    {project.category}
                                </div>
                                <h3 className="text-white text-2xl font-medium">{project.title}</h3>
                            </div>
                        </div>

                        {/* Top Right Arrow */}
                        <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 hover-target transition-all hover:scale-110">
                            <ArrowUpRight size={20} className="text-black" />
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;
