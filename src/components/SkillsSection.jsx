import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { skills } from '../data/portfolioData';

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto bg-white rounded-[3rem] shadow-sm"
        >
            <motion.div
                className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-10"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4 }}
            >
                Keahlian
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
                {/* Left: Description + CV Button */}
                <div>
                    <motion.h2
                        className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Tech Stack
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                    >
                        Gambaran komprehensif teknologi yang saya gunakan.
                    </motion.p>
                    <motion.a
                        href="https://docs.google.com/document/d/1ajRB8O19UjXWU_Zgewo4MGfWBPVa061e/edit?usp=sharing&ouid=106966749482299590039&rtpof=true&sd=true"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Unduh CV
                    </motion.a>
                </div>

                {/* Right: Skill Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                            className={`p-10 rounded-3xl flex flex-col justify-between h-[320px] cursor-default ${skill.inverted
                                ? 'bg-[#111111] text-white'
                                : 'bg-[#F8F9FA] text-[#111111]'
                                }`}
                        >
                            <div>
                                <h3 className="text-2xl font-medium mb-4">{skill.name}</h3>
                                <p className={`text-sm leading-relaxed ${skill.inverted ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {skill.desc}
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <ArrowRight size={28} className={skill.inverted ? 'text-white' : 'text-[#111111]'} />
                            </div>
                        </motion.div>
                    ))}

                    {/* Certification Card */}
                    <motion.div
                        custom={skills.length}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                        className="p-10 rounded-3xl bg-[#F8F9FA] text-[#111111] flex flex-col justify-between h-[320px] border border-dashed border-gray-300 cursor-default"
                    >
                        <div>
                            <h3 className="text-2xl font-medium mb-4">Sertifikasi</h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                Junior Web Developer (BNSP), UI/UX Design (Rakamin), Backend Engineering (Talenthub).
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <ArrowRight size={28} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
