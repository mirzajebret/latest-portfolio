import React from 'react';
import { techStack } from '../data/portfolioData';

const HeroSection = () => {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <section
                id="home"
                className="pt-32 md:pt-48 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto relative"
            >
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <h1 className="text-[5rem] sm:text-[8rem] md:text-[10vw] font-medium leading-[0.85] tracking-tighter">
                        Mirza Alby<br />Assidiqie
                    </h1>

                    <div className="w-full md:w-auto flex flex-col items-end gap-8 relative z-10">
                        {/* Portrait Image */}
                        <div className="w-48 h-64 bg-gray-200 rounded-2xl overflow-hidden hidden md:block">
                            <img
                                src="/images/portrait-mirza.jpg"
                                alt="Portrait"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>

                        <p className="max-w-[280px] text-right text-sm md:text-base text-gray-700 font-medium">
                            Hai, Saya Mirza. Web Developer yang berfokus pada perancangan logika dan estetika antarmuka digital.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- TECH STACK MARQUEE --- */}
            <div className="py-6 border-y border-gray-200 overflow-hidden bg-white whitespace-nowrap mt-12">
                <div className="animate-marquee">
                    {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                        <span key={i} className="inline-flex items-center gap-3 text-lg font-medium text-gray-400 mr-12">
                            <span className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0"></span>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroSection;
