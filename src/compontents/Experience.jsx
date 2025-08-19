import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiGitlab, SiTailwindcss } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

// A centralized map for brand-specific icon colors
const experienceIconsMap = {
    'TypeScript': { icon: SiTypescript, color: '#3178C6' },
    'React': { icon: FaReact, color: '#61DAFB' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#38B2AC' },
    'Java': { icon: FaJava, color: '#007396' },
    'API': { icon: AiOutlineApi, color: '#F97316' }, // A vibrant orange for APIs
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

                <motion.div
                    className="p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.h3 className="text-3xl font-bold mb-2 text-gray-100" variants={itemVariants}>
                        Frontend Developer Intern
                    </motion.h3>
                    <motion.p className="text-xl font-medium text-blue-400 mb-2" variants={itemVariants}>
                        TGGT [THE GOOD GAME THEORY]
                    </motion.p>
                    <motion.p className="text-gray-400 mb-6" variants={itemVariants}>
                        September 2024 – April 2025
                    </motion.p>

                    <motion.div className="space-y-6" variants={containerVariants}>
                        <motion.div
                            variants={itemVariants}
                            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                        >
                            <span className="flex-shrink-0">
                                <experienceIconsMap.React.icon
                                    className="text-3xl"
                                    style={{ color: experienceIconsMap.React.color }}
                                />
                            </span>
                            <span className="text-lg text-gray-200">
                                Built interfaces with <span className="font-semibold text-blue-400">TypeScript</span>, <span className="font-semibold text-blue-400">React</span>, and <span className="font-semibold text-blue-400">Tailwind CSS</span>.
                            </span>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                        >
                            <span className="flex-shrink-0">
                                <AiOutlineApi
                                    className="text-3xl"
                                    style={{ color: experienceIconsMap.API.color }}
                                />
                            </span>
                            <span className="text-lg text-gray-200">
                                Collaborated with Al and backend teams to integrate <span className="font-semibold text-blue-400">APIs</span>.
                            </span>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                        >
                            <span className="flex-shrink-0">
                                <FaGitAlt
                                    className="text-3xl text-purple-400"
                                />
                            </span>
                            <span className="text-lg text-gray-200">
                                Followed best coding practices and used <span className="font-semibold text-blue-400">Git/GitLab</span> for seamless version control and teamwork.
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
