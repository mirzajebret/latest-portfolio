import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <motion.div
                className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-10"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
            >
                Tentang Saya
            </motion.div>

            {/* Mobile portrait */}
            <motion.div
                className="w-full h-[300px] md:h-[600px] rounded-3xl mb-10 relative overflow-hidden group cursor-pointer flex items-center justify-center md:hidden block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
            >
                <motion.img
                    src="/images/portrait-mirza.jpg"
                    alt="Coding"
                    className="w-48 h-64 rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                />
                <div className="absolute inset-0" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
                <motion.h2
                    className="text-3xl md:text-6xl font-medium tracking-tight leading-tight max-w-xl"
                    variants={slideLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    Building Systems. Driving Efficiency.
                </motion.h2>

                <motion.div
                    className="space-y-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: 0.15 }}
                >
                    <p className="text-gray-600 text-lg">
                        Saya seorang Entry Level Web Developer dengan latar belakang Diploma Teknik Informatika. Saya memiliki pengalaman membangun ekosistem digital dari nol, melakukan digitalisasi pekerjaan konvensional untuk meningkatkan efisiensi operasional, mengotomatisasi proses manual untuk mengurangi human error, dan membantu bisnis bertransformasi ke sistem berbasis web yang modern dan terintegrasi.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
