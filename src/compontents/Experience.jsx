import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { FaReact, FaJava, FaCodeBranch } from 'react-icons/fa';
import { SiTypescript, SiGitlab, SiTailwindcss } from 'react-icons/si';

function Experience() {
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

    return (
        <Section title="Experience">
            <motion.div
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white" variants={itemVariants}>
                    Frontend Developer Intern - TGGT [THE GOOD GAME THEORY]
                </motion.h3>
                <motion.p className="text-gray-600 dark:text-gray-300 mb-4" variants={itemVariants}>
                    September 2024 – April 2025
                </motion.p>
                <motion.ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200" variants={containerVariants}>
                    <motion.li variants={itemVariants} className="flex items-start">
                        <FaReact className="mt-1 mr-2 text-blue-500 flex-shrink-0" />
                        <span>Built interfaces with **TypeScript**, **React**, and **Tailwind CSS**.</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                        <FaJava className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                        <span>Collaborated with Al and backend teams to integrate APIs.</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                        <FaCodeBranch className="mt-1 mr-2 text-purple-500 flex-shrink-0" />
                        <span>Followed best coding practices and used **Git/GitLab** for seamless version control and teamwork.</span>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </Section>
    );
}

export default Experience;