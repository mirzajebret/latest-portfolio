import React from 'react';
import { ArrowRight } from 'lucide-react';
import { skills } from '../data/portfolioData';

const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto bg-white rounded-[3rem] shadow-sm"
        >
            <div className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-10">
                Keahlian
            </div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
                {/* Left: Description + CV Button */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
                        Tech Stack
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Gambaran komprehensif teknologi yang saya gunakan.
                    </p>
                    <a
                        href="https://docs.google.com/document/d/1ajRB8O19UjXWU_Zgewo4MGfWBPVa061e/edit?usp=sharing&ouid=106966749482299590039&rtpof=true&sd=true"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        Unduh CV
                    </a>
                </div>

                {/* Right: Skill Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className={`p-10 rounded-3xl flex flex-col justify-between h-[320px] transition-transform hover:-translate-y-2 ${skill.inverted
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
                        </div>
                    ))}

                    {/* Certification Card */}
                    <div className="p-10 rounded-3xl bg-[#F8F9FA] text-[#111111] flex flex-col justify-between h-[320px] border border-dashed border-gray-300">
                        <div>
                            <h3 className="text-2xl font-medium mb-4">Sertifikasi</h3>
                            <p className="text-sm leading-relaxed text-gray-600">
                                Junior Web Developer (BNSP), UI/UX Design (Rakamin), Backend Engineering (Talenthub).
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <ArrowRight size={28} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
