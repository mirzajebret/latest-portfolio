import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Linkedin, Github, Printer, ArrowLeft, Twitter, ArrowBigDown } from 'lucide-react';

/* ─── BILINGUAL DATA ─── */
const cvData = {
    id: {
        name: 'Mirza Alby Assidiqie',
        title: 'Web Developer',
        bio: 'Saya seorang Entry Level Web Developer dengan latar belakang Diploma Teknik Informatika. Saya memiliki pengalaman membangun ekosistem digital dari nol, melakukan digitalisasi pekerjaan konvensional untuk meningkatkan efisiensi operasional, mengotomatisasi proses manual untuk mengurangi human error, dan membantu bisnis bertransformasi ke sistem berbasis web yang modern dan terintegrasi.',
        contacts: [
            { icon: 'phone', label: '+62 813 2124 5011', href: 'https://wa.me/6281321245011' },
            { icon: 'email', label: 'rzamirza006@gmail.com', href: 'mailto:rzamirza006@gmail.com' },
            { icon: 'linkedin', label: 'Mirza Assidiqie', href: 'https://linkedin.com/in/mirzaassidiqie' },
            { icon: 'github', label: '@mirzajebret', href: 'https://github.com/mirzajebret' },
        ],
        experience: [
            {
                role: 'IT Staff',
                company: 'Kantor Notaris & PPAT Havis Akbar',
                location: 'Garut, Jawa Barat',
                period: '2024 – Sekarang',
                points: [
                    'Membangun Website Kantor yang berhasil meningkatkan engagement dan visibilitas kantor.',
                    'Merancang dan mengembangkan tools internal kantor untuk meningkatkan efisiensi operasional.',
                    'Mengotomatisasi proses manual pembuatan dokumen, mengurangi human error secara signifikan.',
                ],
            },
            {
                role: 'Data Administrator (Intern)',
                company: 'PDAM Tirta Intan',
                location: 'Garut, Jawa Barat',
                period: '2023',
                points: [
                    'Membangun Website yang digunakan untuk media konsultasi dan layanan keluhan PDAM.',
                    'Data Entry dan pengelolaan database pelanggan.',
                    'Berkoordinasi dengan tim teknis untuk integrasi sistem.',
                ],
            },
            {
                role: 'Graphic Designer',
                company: "Gordon's Racing Company",
                location: 'Garut, Jawa Barat',
                period: '2019 – 2020',
                points: [
                    'Desain produk visual & merchandise untuk industri otomotif.',
                    'Membuat materi promosi digital dan cetak.',
                    'Mengembangkan identitas visual brand perusahaan.',
                ],
            },
        ],
        education: [
            {
                degree: 'D3 Teknik Informatika',
                field: 'Teknik Informatika',
                school: 'AMIK Garut',
                location: 'Garut, Jawa Barat',
                period: '2020 – 2023',
            },
        ],
        skillGroups: [
            {
                title: 'Frontend Development',
                left: ['React.js & Next.js', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Design'],
                right: ['JavaScript (ES6+)', 'Figma & UI/UX Design', 'SEO Best Practices'],
            },
            {
                title: 'Backend Development',
                left: ['Python & Django', 'Laravel (PHP)', 'MySQL / SQLite', 'RESTful API Design'],
                right: ['Node.js', 'Database Management', 'Server Deployment', 'Git & Version Control'],
            },
        ],
        certifications: [
            'Junior Web Developer – BNSP',
            'UI/UX Design – Rakamin Academy',
            'Backend Engineering – Talenthub',
        ],
        labels: {
            workExperience: 'Work Experience',
            education: 'Education',
            skills: 'Skills & Expertise',
            certifications: 'Sertifikasi',
            backToPortfolio: 'Kembali ke Portfolio',
            footer: '© 2026 Mirza Alby Assidiqie',
        },
    },

    en: {
        name: 'Mirza Alby Assidiqie',
        title: 'Web Developer',
        bio: 'I am an Entry Level Web Developer with a background in Diploma of Informatics Engineering. I have experience building digital ecosystems from scratch, digitizing conventional workflows to improve operational efficiency, automating manual processes to reduce human error, and helping businesses transform into modern web-based integrated systems.',
        contacts: [
            { icon: 'phone', label: '+62 813 2124 5011', href: 'https://wa.me/6281321245011' },
            { icon: 'email', label: 'rzamirza006@gmail.com', href: 'mailto:rzamirza006@gmail.com' },
            { icon: 'linkedin', label: 'Mirza Assidiqie', href: 'https://linkedin.com/in/mirzaassidiqie' },
            { icon: 'github', label: '@mirzajebret', href: 'https://github.com/mirzajebret' },
        ],
        experience: [
            {
                role: 'IT Staff',
                company: 'Notary & PPAT Office of Havis Akbar',
                location: 'Garut, West Java',
                period: '2024 – Present',
                points: [
                    'Built the office website, successfully increasing client engagement and overall visibility.',
                    'Designed and developed internal office tools to streamline operational efficiency.',
                    'Automated manual document creation workflows, significantly reducing human error.',
                ],
            },
            {
                role: 'Data Administrator (Intern)',
                company: 'PDAM Tirta Intan',
                location: 'Garut, West Java',
                period: '2023',
                points: [
                    'Built a website used as a consultation and complaint service platform for PDAM.',
                    'Data entry and customer database management.',
                    'Coordinated with technical teams for system integration.',
                ],
            },
            {
                role: 'Graphic Designer',
                company: "Gordon's Racing Company",
                location: 'Garut, West Java',
                period: '2019 – 2020',
                points: [
                    'Designed visual products & merchandise for the automotive industry.',
                    'Created digital and print promotional materials.',
                    "Developed the company's visual brand identity.",
                ],
            },
        ],
        education: [
            {
                degree: 'Associate Degree in Informatics Engineering',
                field: 'Informatics Engineering',
                school: 'AMIK Garut',
                location: 'Garut, West Java',
                period: '2020 – 2023',
            },
        ],
        skillGroups: [
            {
                title: 'Frontend Development',
                left: ['React.js & Next.js', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Design'],
                right: ['JavaScript (ES6+)', 'Figma & UI/UX Design', 'SEO Best Practices'],
            },
            {
                title: 'Backend Development',
                left: ['Python & Django', 'Laravel (PHP)', 'MySQL / SQLite', 'RESTful API Design'],
                right: ['Node.js', 'Database Management', 'Server Deployment', 'Git & Version Control'],
            },
        ],
        certifications: [
            'Junior Web Developer – BNSP',
            'UI/UX Design – Rakamin Academy',
            'Backend Engineering – Talenthub',
        ],
        labels: {
            workExperience: 'Work Experience',
            education: 'Education',
            skills: 'Skills & Expertise',
            certifications: 'Certifications',
            backToPortfolio: 'Back to Portfolio',
            footer: '© 2026 Mirza Alby Assidiqie',
        },
    },
};

/* ─── ICON helper ─── */
const CIcon = ({ type, size = 13 }) => {
    const cls = 'text-gray-400';
    if (type === 'phone') return <Phone size={size} className={cls} />;
    if (type === 'email') return <Mail size={size} className={cls} />;
    if (type === 'linkedin') return <Linkedin size={size} className={cls} />;
    if (type === 'github') return <Github size={size} className={cls} />;
    if (type === 'twitter') return <Twitter size={size} className={cls} />;
    return null;
};

/* ─── Section divider (centered label + lines) ─── */
const SectionDivider = ({ label }) => (
    <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-[9.5px] font-semibold tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
            {label}
        </span>
        <div className="flex-1 h-px bg-gray-200" />
    </div>
);

/* ─── PAGE ─── */
const CVPage = () => {
    const [lang, setLang] = useState('id');
    const cv = cvData[lang];
    const isEN = lang === 'en';

    return (
        <div className="cv-outer min-h-screen bg-[#f1f1f1] py-8 px-2">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .cv-page { font-family: 'Inter', sans-serif; color: #333; }
        .cv-name { font-family: 'Playfair Display', serif; }
        .role-title { font-family: 'Playfair Display', serif; font-style: italic; }

        /* Force desktop document width on all screens */
        .cv-doc {
          width: 700px;
          min-width: 700px;
          transform-origin: top center;
        }
        .cv-outer {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        /* Scale down on small screens so it fits without scrolling */
        @media (max-width: 740px) {
          .cv-doc {
            transform: scale(0.5);
            margin-bottom: calc((700px - (700px * ((100vw - 16px) / 700))) * -1);
          }
          .cv-toolbar {
            width: calc(100vw - 16px);
          }
        }

        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .cv-doc { box-shadow: none !important; margin: 0 auto !important; border-radius: 0 !important;
                    transform: none !important; min-width: unset !important; width: 100% !important; }
          @page { margin: 10mm 15mm; }
        }
      `}</style>

            {/* Toolbar */}
            <div className="cv-toolbar no-print w-[700px] flex justify-between items-center mb-4 px-1">
                <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    <ArrowLeft size={15} />
                    {cv.labels.backToPortfolio}
                </Link>

                <div className="flex items-center gap-3">
                    {/* Language Toggle */}
                    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full p-1">
                        <button
                            onClick={() => setLang('id')}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${!isEN
                                ? 'bg-[#222] text-white shadow-sm'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            ID
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${isEN
                                ? 'bg-[#222] text-white shadow-sm'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            EN
                        </button>
                    </div>

                    {/* Print / Download */}
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                        <Printer size={14} />

                    </button>
                </div>
            </div>

            {/* CV Document */}
            <div className="cv-doc cv-page bg-white shadow-md rounded-sm">
                <div className="px-14 py-12">

                    {/* ── HEADER ── */}
                    <div className="flex gap-8 items-start mb-6">
                        {/* Portrait */}
                        <div className="w-[110px] h-[110px] rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                            <img
                                src="/images/portrait-mirza.jpg"
                                alt="Mirza Alby Assidiqie"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Identity */}
                        <div className="flex-1 pt-1">
                            <h1 className="cv-name text-[2rem] font-bold text-gray-900 leading-none mb-1">
                                {cv.name}
                            </h1>
                            <p className="text-sm text-gray-400 mb-3 tracking-wide">{cv.title}</p>
                            <p className="text-[12.5px] text-gray-500 leading-relaxed justify-center">{cv.bio}</p>
                        </div>
                    </div>

                    {/* Contact bar */}
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 pb-6 border-b border-gray-100">
                        {cv.contacts.map((c) => (
                            <a
                                key={c.icon}
                                href={c.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-[11.5px] text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <CIcon type={c.icon} />
                                {c.label}
                            </a>
                        ))}
                    </div>

                    {/* ── PROFESSIONAL EXPERIENCE ── */}
                    <SectionDivider label={cv.labels.workExperience} />

                    <div className="space-y-7">
                        {cv.experience.map((exp, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="role-title font-bold text-[14px] text-gray-800">{exp.role}</h3>
                                    <span className="text-[11px] text-gray-400 ml-4 shrink-0">{exp.period}</span>
                                </div>
                                <p className="text-[12px] font-medium text-[#c87941] mt-0.5">{exp.company}</p>
                                <p className="text-[11px] text-gray-400 mb-2">{exp.location}</p>
                                <ul className="space-y-1 pl-0">
                                    {exp.points.map((pt, j) => (
                                        <li key={j} className="text-[12px] text-gray-500 leading-relaxed flex gap-2">
                                            <span className="text-[#c87941] mt-[5px] text-[7px] leading-none flex-shrink-0">●</span>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* ── EDUCATION ── */}
                    <SectionDivider label={cv.labels.education} />

                    <div className="space-y-5">
                        {cv.education.map((edu, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="role-title font-bold text-[14px] text-gray-800">{edu.degree}</h3>
                                    <span className="text-[11px] text-gray-400 ml-4 shrink-0">{edu.period}</span>
                                </div>
                                <p className="text-[12px] font-medium text-[#c87941] mt-0.5">{edu.field}</p>
                                <p className="text-[12px] text-gray-500">{edu.school}</p>
                                <p className="text-[11px] text-gray-400">{edu.location}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── SKILLS & EXPERTISE ── */}
                    <SectionDivider label={cv.labels.skills} />

                    <div className="space-y-5">
                        {cv.skillGroups.map((group, i) => (
                            <div key={i}>
                                <h4 className="text-[13px] font-semibold text-gray-700 mb-2">{group.title}</h4>
                                <div className="grid grid-cols-2 gap-x-6">
                                    <ul className="space-y-1">
                                        {group.left.map((s, j) => (
                                            <li key={j} className="text-[12px] text-gray-500 flex gap-2 items-start">
                                                <span className="text-[#c87941] mt-[5px] text-[7px] leading-none flex-shrink-0">●</span>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="space-y-1">
                                        {group.right.map((s, j) => (
                                            <li key={j} className="text-[12px] text-gray-500 flex gap-2 items-start">
                                                <span className="text-[#c87941] mt-[5px] text-[7px] leading-none flex-shrink-0">●</span>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* Certifications */}
                        <div>
                            <h4 className="text-[13px] font-semibold text-gray-700 mb-2">{cv.labels.certifications}</h4>
                            <div className="grid grid-cols-2 gap-x-6">
                                <ul className="space-y-1">
                                    {cv.certifications.map((cert, i) => (
                                        <li key={i} className="text-[12px] text-gray-500 flex gap-2 items-start">
                                            <span className="text-[#c87941] mt-[5px] text-[7px] leading-none flex-shrink-0">●</span>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 py-3 text-center">
                    <p className="text-[10px] text-gray-300">{cv.labels.footer}</p>
                </div>
            </div>
        </div>
    );
};

export default CVPage;
