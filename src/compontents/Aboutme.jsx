import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaBootstrap, FaServer, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMongodb, SiMysql, SiPostman, SiTailwindcss, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { IoIosApps } from 'react-icons/io';

function Aboutme() {
    const iconStyle = "text-5xl text-gray-400 transition-transform duration-300 hover:scale-110 hover:text-white";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const skillsData = {
        'Programming Languages': [
            { icon: FaJava, name: 'Java' },
            { icon: FaJs, name: 'JavaScript' },
        ],
        'Frontend': [
            { icon: FaReact, name: 'React.js' },
            { icon: FaHtml5, name: 'HTML5' },
            { icon: FaCss3, name: 'CSS3' },
            { icon: FaBootstrap, name: 'Bootstrap' },
            { icon: SiTailwindcss, name: 'Tailwind CSS' },
        ],
        'Backend': [
            { icon: SiSpringboot, name: 'Spring Boot' },
            { icon: FaServer, name: 'Servlet' },
            { icon: FaDatabase, name: 'JDBC' },
            { icon: SiHibernate, name: 'Hibernate' },
            { icon: IoIosApps, name: 'Microservices' },
        ],
        'Database': [
            { icon: SiMysql, name: 'SQL' },
            { icon: SiMongodb, name: 'MongoDB' },
        ],
        'Tools & Platforms': [
            { icon: FaGitAlt, name: 'Git' },
            { icon: FaGithub, name: 'GitHub' },
            { icon: FaCode, name: 'VS Code' },
            { icon: SiPostman, name: 'Postman' },
        ],
    };

    return (
        <motion.div
            className="p-8 md:p-16 bg-gray-900 text-gray-100"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1 className="text-4xl font-bold mb-6 text-center text-white" variants={itemVariants}>
                About Me
            </motion.h1>
            <motion.div className="flex flex-col md:flex-row gap-8 mb-12" variants={itemVariants}>
                <div className="flex-1 space-y-4 text-lg">
                    <p>
                        [cite_start]I'm a passionate Full Stack Web Developer skilled in <span className="font-semibold text-blue-400">React.js</span> on the frontend and Java-based backend technologies like <span className="font-semibold text-blue-400">Spring Boot</span>, <span className="font-semibold text-blue-400">Spring</span>, <span className="font-semibold text-blue-400">JDBC</span>, <span className="font-semibold text-blue-400">Hibernate</span>, <span className="font-semibold text-blue-400">Servlets</span>, and <span className="font-semibold text-blue-400">Microservices</span>[cite: 12]. [cite_start]I've built scalable applications, led team projects, and developed a feature-rich educational platform[cite: 13]. [cite_start]I'm proficient in Java and DSA, and I regularly practice on GeeksforGeeks and LeetCode[cite: 14]. [cite_start]Currently, I'm pursuing a B.Tech degree and am eager to grow through impactful internships and real-world experience[cite: 15].
                    </p>
                    <p>
                        I am actively practicing Data Structures and Algorithms (DSA) on coding platforms. [cite_start]I am a highly motivated and collaborative professional with proven leadership skills[cite: 13, 15, 18]. [cite_start]I also ranked 3rd in the GeeksforGeeks University competition[cite: 37].
                    </p>
                    <div className="flex items-center justify-center space-x-6 mt-6">
                        <motion.a href="https://leetcode.com/u/S-Gangadhar/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center" variants={itemVariants}>
                            <SiLeetcode className={iconStyle} />
                            <p className="mt-2 text-gray-400">LeetCode</p>
                        </motion.a>
                        <motion.a href="https://geeksforgeeks.org/sgangadhar/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center" variants={itemVariants}>
                            <SiGeeksforgeeks className={iconStyle} />
                            <p className="mt-2 text-gray-400">GeeksforGeeks</p>
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            <motion.div className="skills" initial="hidden" animate="visible" variants={containerVariants}>
                <motion.h1 className="text-4xl font-bold mb-4 text-center text-white" variants={itemVariants}>
                    Skills
                </motion.h1>
                <motion.p className="text-center text-lg mb-8 text-gray-400" variants={itemVariants}>
                    I am proficient in these technologies.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <motion.div key={category} className="p-6 bg-gray-800 rounded-lg shadow-md" variants={itemVariants}>
                            <h2 className="text-2xl font-semibold mb-4 text-center text-white">{category}</h2>
                            <div className="flex justify-center gap-6 flex-wrap">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center">
                                        <skill.icon className={iconStyle} />
                                        <p className="mt-2 text-sm text-gray-400">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Aboutme;