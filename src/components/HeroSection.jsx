import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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

// "Halo" fan — one greeting per language, fanned out around the portrait on hover.
// Tweak GREETINGS / FAN_SPREAD / FAN_RADIUS to change how wide or far it opens.
const GREETINGS = [
    'Halo', 'Bonjour', 'Ciao', 'Annyeong', 'Olá', 'Ahoj',
    'Merhaba', 'Kumusta', 'Konnichiwa', 'Namaste', 'Hallo', 'Nǐ hǎo',
];
const FAN_SPREAD = 130; // total arc, in degrees
const FAN_RADIUS = 118; // base distance from pivot, in px

const HeroSection = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    return (
        <>
            {/* --- HERO SECTION --- */}
            <section
                id="home"
                className="pt-32 md:pt-48 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden"
            >
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Big Name - word by word */}
                    <div className="overflow-hidden relative z-0">
                        <motion.h1
                            className="text-[5rem] sm:text-[8rem] md:text-[10vw] font-medium leading-[0.85] tracking-tighter text-neutral-900"
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

                    <div className="w-full md:w-auto flex flex-col items-end gap-8 relative z-10 md:-ml-20 lg:-ml-32">
                        {/* Portrait — cutout, no frame. Hover/tap fans out greetings and lifts the grayscale. */}
                        <motion.div
                            className="relative hidden md:flex justify-center w-56 lg:w-64"
                            variants={fadeUp}
                            onMouseEnter={() => setIsRevealed(true)}
                            onMouseLeave={() => setIsRevealed(false)}
                            onClick={() => setIsRevealed((v) => !v)}
                        >
                            {/* Fan of greetings, pivoting from just above the portrait's head */}
                            <div
                                className="absolute left-1/2 top-[14%] w-0 h-0 pointer-events-none"
                                aria-hidden="true"
                            >
                                <AnimatePresence>
                                    {isRevealed &&
                                        GREETINGS.map((word, i) => {
                                            const angle =
                                                -FAN_SPREAD / 2 +
                                                i * (FAN_SPREAD / (GREETINGS.length - 1));
                                            const radius = FAN_RADIUS + (i % 3) * 14;
                                            return (
                                                // Outer span: fixed fan position only (rotate + push
                                                // out along that angle). Framer never touches this
                                                // element, so its transform can't get clobbered.
                                                <span
                                                    key={word}
                                                    className="absolute left-0 top-0"
                                                    style={{
                                                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
                                                    }}
                                                >
                                                    {/* Inner motion.span: only handles the
                                                        appear/disappear animation (opacity + scale) */}
                                                    <motion.span
                                                        className="block whitespace-nowrap text-[11px] lg:text-xs font-medium text-neutral-600"
                                                        initial={{ opacity: 0, scale: 0.4 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.4 }}
                                                        transition={
                                                            shouldReduceMotion
                                                                ? { duration: 0.15 }
                                                                : {
                                                                      duration: 0.35,
                                                                      delay: i * 0.03,
                                                                      ease: [0.22, 1, 0.36, 1],
                                                                  }
                                                        }
                                                    >
                                                        {word}
                                                    </motion.span>
                                                </span>
                                            );
                                        })}
                                </AnimatePresence>
                            </div>

                            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                            <img
                                src="/images/portrait-mirza.png"
                                alt="Mirza Alby Assidiqie"
                                className={`relative z-10 w-full h-auto object-contain drop-shadow-2xl cursor-pointer transition-all duration-500 ease-out ${
                                    isRevealed ? 'grayscale-0 scale-[1.02]' : 'grayscale'
                                }`}
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
                className="relative py-6 border-y border-gray-200 overflow-hidden bg-white whitespace-nowrap mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                {/* Edge fade so the marquee text doesn't cut off abruptly */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]">
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
