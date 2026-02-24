import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-10">
                Pengalaman
            </div>

            <div className="grid md:grid-cols-[1fr_1fr] gap-8 mb-16 items-end">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-lg">
                    Rangkuman karir saya
                </h2>
                <p className="text-gray-600 text-right hidden md:block max-w-xs justify-self-end">
                    Ringkasan pengalaman.
                </p>
            </div>

            <div className="flex flex-col border-t border-black">
                {experience.map((exp, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-gray-300 hover:bg-gray-100 hover:px-6 transition-all cursor-pointer relative"
                    >
                        <div className="flex-1 md:pr-12">
                            <h3 className="text-2xl font-medium mb-2">{exp.role}</h3>
                            <p className="text-gray-600 text-sm max-w-xl">{exp.desc}</p>
                            <div className="text-sm font-medium text-gray-400 mt-2">{exp.company}</div>
                        </div>

                        <div className="text-4xl md:text-5xl font-medium tracking-tighter mt-6 md:mt-0 text-gray-800 group-hover:text-black transition-colors">
                            {exp.period}
                        </div>

                        {/* Hover Pointer Icon */}
                        <div className="hidden md:flex absolute left-[50%] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2">
                            <div className="bg-white p-2 rounded-full shadow-lg">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
