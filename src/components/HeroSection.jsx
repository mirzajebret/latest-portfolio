import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/portfolioData';

// Animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 60, skewY: 4 },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const HeroSection = () => {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <section
                id="home"
                className="pt-32 md:pt-48 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto relative"
            >
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Big Name - word by word */}
                    <div className="overflow-hidden">
                        <motion.h1
                            className="text-[5rem] sm:text-[8rem] md:text-[10vw] font-medium leading-[0.85] tracking-tighter"
                            variants={containerVariants}
                        >
                            {["Mirza", "Alby", "Assidiqie"].map((word, i) => (
                                <span key={i} className="block overflow-hidden">
                                    <motion.span
                                        className="block"
                                        variants={wordVariants}
                                    >
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </motion.h1>
                    </div>

                    <div className="w-full md:w-auto flex flex-col items-end gap-8 relative z-10">
                        {/* Portrait Image */}
                        <motion.div
                            className="w-48 h-64 bg-gray-200 rounded-2xl overflow-hidden hidden md:block"
                            variants={fadeUp}
                            whileHover={{ scale: 1.03, rotate: -1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <img
                                src="/images/portrait-mirza.jpg"
                                alt="Portrait"
                                className="w-full h-full object-cover grayscale"
                            />
                        </motion.div>

                        <motion.p
                            className="max-w-[280px] text-right text-sm md:text-base text-gray-700 font-medium"
                            variants={fadeUp}
                        >
                            Hai, Saya Mirza. Web Developer yang berfokus pada perancangan logika dan estetika antarmuka digital.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* --- TECH STACK MARQUEE --- */}
            <motion.div
                className="py-6 border-y border-gray-200 overflow-hidden bg-white whitespace-nowrap mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                <div className="animate-marquee">
                    {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                        <span key={i} className="inline-flex items-center gap-3 text-lg font-medium text-gray-400 mr-12">
                            <span className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0"></span>
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default HeroSection;
