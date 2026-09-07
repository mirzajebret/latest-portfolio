import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Maximize2 } from 'lucide-react';
import { companyProfiles } from '../data/companyProfilesData';

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

/* ── Main Component ─────────────────────────────────────── */
const CompanyProfileSection = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedPdf) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedPdf]);

    return (
        <section id="company-profile" className="py-24 px-4 md:px-10 lg:px-16 max-w-[1400px] mx-auto bg-white rounded-[3rem] shadow-sm my-10 border border-gray-100">
            
            <div className="px-2 md:px-6">
                {/* ── Badge ── */}
                <motion.div
                    className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-14"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4 }}
                >
                    Company Profile
                </motion.div>

                <SectionHeader
                    title="Company Profiles"
                    subtitle="Kumpulan desain company profile perusahaan dan institusi."
                />

                {/* ── Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {companyProfiles.map((profile, idx) => (
                        <motion.div
                            key={profile.id}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            whileHover={{ y: -6 }}
                            onClick={() => setSelectedPdf(profile)}
                            className="hover-trigger relative block rounded-2xl overflow-hidden bg-gray-100 cursor-pointer group shadow-sm hover:shadow-md transition-all border border-gray-200"
                            style={{ aspectRatio: '1/1.414' }} // Standard A4 aspect ratio approximation
                        >
                            <img
                                src={profile.thumbnailUrl}
                                alt={profile.title}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                                <div className="hover-target">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FileText size={14} className="text-white/80" />
                                        <span className="text-white/80 text-xs font-medium uppercase tracking-wider">PDF Document</span>
                                    </div>
                                    <h3 className="text-white text-sm md:text-base font-medium leading-tight line-clamp-2">{profile.title}</h3>
                                </div>
                            </div>
                            
                            {/* Expand Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg transform translate-y-2 group-hover:translate-y-0">
                                <Maximize2 size={18} className="text-black" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── PDF Modal ── */}
            <AnimatePresence>
                {selectedPdf && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
                        onClick={() => setSelectedPdf(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full h-full max-w-5xl bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-100 bg-white">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 truncate pr-4">
                                    {selectedPdf.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <a 
                                        href={selectedPdf.pdfUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors"
                                    >
                                        Buka di Tab Baru
                                    </a>
                                    <button
                                        onClick={() => setSelectedPdf(null)}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-800"
                                        aria-label="Close modal"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>
                            
                            {/* Modal Body (PDF Viewer) */}
                            <div className="flex-1 w-full bg-gray-100 relative">
                                <iframe
                                    src={`${selectedPdf.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                    className="w-full h-full absolute inset-0 border-none"
                                    title={selectedPdf.title}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default CompanyProfileSection;
