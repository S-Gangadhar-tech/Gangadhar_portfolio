import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiGitlab, SiTailwindcss, SiGo, SiNextdotjs, SiMongodb } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

// Expanded centralized map for brand-specific icon colors
const experienceIconsMap = {
    'TypeScript': { icon: SiTypescript, color: '#3178C6' },
    'React': { icon: FaReact, color: '#61DAFB' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#38B2AC' },
    'Go': { icon: SiGo, color: '#00ADD8' },
    'Next.js': { icon: SiNextdotjs, color: '#FFFFFF' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'API': { icon: AiOutlineApi, color: '#F97316' },
    'Git/GitLab': { icon: SiGitlab, color: '#FC6D26' },
};

// Animation variants for smooth entry
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

// Centralized array mapped to UI
const experiences = [
    {
        id: "fission-infotech",
        role: "Full Stack Development Intern",
        company: "Fission Infotech",
        duration: "January 2025 – March 2026",
        bullets: [
            {
                iconKey: 'Go',
                content: (
                    <>
                        Engineered the high-performance backend architecture for an Affiliate Management System using <span className="font-semibold text-blue-400">Golang</span>.
                    </>
                )
            },
            {
                iconKey: 'Next.js',
                content: (
                    <>
                        Built out the user-facing dashboard and administrative interfaces using <span className="font-semibold text-blue-400">Next.js</span>.
                    </>
                )
            },
            {
                iconKey: 'MongoDB',
                content: (
                    <>
                        Designed and optimized <span className="font-semibold text-blue-400">MongoDB</span> schemas to accurately track thousands of affiliate links, leads, and conversions in real-time.
                    </>
                )
            }
        ]
    },
    {
        id: "tggt",
        role: "Frontend Developer Intern",
        company: "TGGT [THE GOOD GAME THEORY]",
        duration: "September 2024 – April 2025",
        bullets: [
            {
                iconKey: 'React',
                content: (
                    <>
                        Built interfaces with <span className="font-semibold text-blue-400">TypeScript</span>, <span className="font-semibold text-blue-400">React</span>, and <span className="font-semibold text-blue-400">Tailwind CSS</span>.
                    </>
                )
            },
            {
                iconKey: 'API',
                content: (
                    <>
                        Collaborated with AI and backend teams to integrate <span className="font-semibold text-blue-400">APIs</span>.
                    </>
                )
            },
            {
                iconKey: 'Git/GitLab',
                content: (
                    <>
                        Followed best coding practices and used <span className="font-semibold text-blue-400">Git/GitLab</span> for seamless version control and teamwork.
                    </>
                )
            }
        ]
    }
];

function Experience() {
    return (
        <section id="experience" className="py-20 bg-gray-900 transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-16"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-green-600">
                        Experience
                    </span>
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            className="p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 max-w-4xl mx-auto w-full"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.h3 className="text-3xl font-bold mb-2 text-gray-100" variants={itemVariants}>
                                {exp.role}
                            </motion.h3>
                            <motion.p className="text-xl font-medium text-blue-400 mb-2" variants={itemVariants}>
                                {exp.company}
                            </motion.p>
                            <motion.p className="text-gray-400 mb-6" variants={itemVariants}>
                                {exp.duration}
                            </motion.p>

                            <motion.div className="space-y-6" variants={containerVariants}>
                                {exp.bullets.map((bullet, index) => {
                                    // Fallback to FaGitAlt and a purple color if the iconKey isn't mapped
                                    const IconComponent = experienceIconsMap[bullet.iconKey]?.icon || FaGitAlt;
                                    const iconColor = experienceIconsMap[bullet.iconKey]?.color || '#A855F7';

                                    return (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                                        >
                                            <span className="flex-shrink-0">
                                                <IconComponent
                                                    className="text-3xl"
                                                    style={{ color: iconColor }}
                                                />
                                            </span>
                                            <span className="text-lg text-gray-200">
                                                {bullet.content}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;