import React from 'react';
import { Play } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-medium mb-10">
                Tentang Saya
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-xl">
                    Building Systems. Driving Efficiency.
                </h2>

                <div className="space-y-12">
                    <p className="text-gray-600 text-lg">
                        Saya seorang Entry Level Web Developer dengan latar belakang Diploma Teknik Informatika. Saya memiliki pengalaman membangun ekosistem digital dari nol dan merancang situs web korporat dengan performa tinggi, serta melakukan digitalisasi pekerjaan konvensional untuk meningkatkan efisiensi operasional, mengotomatisasi proses manual, mengurangi human error, dan membantu bisnis bertransformasi ke sistem berbasis web yang modern dan terintegrasi.
                    </p>

                    {/* <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-5xl md:text-7xl font-medium tracking-tighter mb-2">+8</div>
                            <p className="text-sm text-gray-500">Proyek Terselesaikan & Dipublikasi</p>
                        </div>
                        <div>
                            <div className="text-5xl md:text-7xl font-medium tracking-tighter mb-2">3.6</div>
                            <p className="text-sm text-gray-500">Indeks Prestasi Kumulatif (IPK)</p>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Full-width Image with Play Button */}
            <div className="w-full h-[300px] md:h-[600px] bg-gray-200 rounded-3xl mt-20 relative overflow-hidden group cursor-pointer flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
                    alt="Coding"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="w-20 h-20 bg-black/50 backdrop-blur-md rounded-full text-white flex items-center justify-center absolute z-10 transition-transform group-hover:scale-110 border border-white/20">
                    <Play fill="currentColor" className="ml-1" size={32} />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
