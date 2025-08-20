import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaBootstrap, FaServer, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMongodb, SiMysql, SiPostman, SiTailwindcss, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { IoIosApps } from 'react-icons/io';

// A centralized map for vibrant icon colors
const skillIconsMap = {
    'Java': { icon: FaJava, color: '#007396' },
    'JavaScript': { icon: FaJs, color: '#F7DF1E' },
    'React.js': { icon: FaReact, color: '#61DAFB' },
    'HTML5': { icon: FaHtml5, color: '#E34F26' },
    'CSS3': { icon: FaCss3, color: '#1572B6' },
    'Bootstrap': { icon: FaBootstrap, color: '#7952B3' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#38B2AC' },
    'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
    'Servlet': { icon: FaServer, color: '#B0413E' },
    'JDBC': { icon: FaDatabase, color: '#336791' },
    'Hibernate': { icon: SiHibernate, color: '#59666C' },
    'Microservices': { icon: IoIosApps, color: '#FCA5A5' },
    'SQL': { icon: SiMysql, color: '#4479A1' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'Git': { icon: FaGitAlt, color: '#F05032' },
    'GitHub': { icon: FaGithub, color: '#181717' },
    'VS Code': { icon: FaCode, color: '#007ACC' },
    'Postman': { icon: SiPostman, color: '#FF6C37' },
    'LeetCode': { icon: SiLeetcode, color: '#FFA116' },
    'GeeksforGeeks': { icon: SiGeeksforgeeks, color: '#009744' },
};

// Animation variants for smooth entry
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

function Aboutme() {
    // The skills data structure is now streamlined for easier mapping
    const skillsData = {
        'Programming Languages': ['Java', 'JavaScript'],
        'Frontend': ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
        'Backend': ['Spring Boot', 'Servlet', 'JDBC', 'Hibernate', 'Microservices'],
        'Database': ['SQL', 'MongoDB'],
        'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Postman'],
    };

    return (
        <motion.div
            className="py-16 md:py-20 bg-gray-900 text-gray-100 transition-colors duration-500"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h1
                    className="text-5xl font-extrabold mb-8 text-center"
                    variants={itemVariants}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-600">
                        About Me
                    </span>
                </motion.h1>
                <motion.p className="text-lg md:text-xl text-center max-w-4xl mx-auto mb-16 text-gray-300" variants={itemVariants}>
                    I'm a passionate Full Stack Web Developer with a strong foundation in modern web technologies and a drive to create scalable, impactful applications.
                </motion.p>

                {/* About Me Section with Links */}
                <motion.div className="flex flex-col items-center mb-16" variants={itemVariants}>
                    <p className="text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto">
                        I'm a passionate Full Stack Web Developer skilled in <span className="font-semibold text-blue-400">React.js</span> on the frontend and Java-based backend technologies like <span className="font-semibold text-blue-400">Spring Boot</span>, <span className="font-semibold text-blue-400">Spring</span>, <span className="font-semibold text-blue-400">JDBC</span>, <span className="font-semibold text-blue-400">Hibernate</span>, <span className="font-semibold text-blue-400">Servlets</span>, and <span className="font-semibold text-blue-400">Microservices</span>. I've built scalable applications, led team projects, and developed a feature-rich educational platform. I'm proficient in Java and DSA, and I regularly practice on GeeksforGeeks and LeetCode. Currently, I'm pursuing a B.Tech degree and am eager to grow through impactful internships and real-world experience. I am actively practicing Data Structures and Algorithms (DSA) on coding platforms. I am a highly motivated and collaborative professional with proven leadership skills. I also ranked 3rd in the GeeksforGeeks University competition.
                    </p>
                    <div className="flex items-center justify-center space-x-6 mt-6">
                        <motion.a
                            href="https://leetcode.com/u/S-Gangadhar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center transition-transform hover:scale-110"
                            whileHover={{ scale: 1.15 }}
                            variants={itemVariants}
                        >
                            <SiLeetcode className="text-5xl" style={{ color: skillIconsMap['LeetCode'].color }} />
                            <p className="mt-2 text-gray-400 text-sm font-medium">LeetCode</p>
                        </motion.a>
                        <motion.a
                            href="https://geeksforgeeks.org/sgangadhar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center transition-transform hover:scale-110"
                            whileHover={{ scale: 1.15 }}
                            variants={itemVariants}
                        >
                            <SiGeeksforgeeks className="text-5xl" style={{ color: skillIconsMap['GeeksforGeeks'].color }} />
                            <p className="mt-2 text-gray-400 text-sm font-medium">GeeksforGeeks</p>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                    <motion.h2 className="text-4xl font-bold mb-4 text-center text-white" variants={itemVariants}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-600">
                            My Skills
                        </span>
                    </motion.h2>
                    <motion.p className="text-center text-lg mb-12 text-gray-400" variants={itemVariants}>
                        I am proficient in these technologies.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skillsData).map(([category, skills]) => (
                            <motion.div
                                key={category}
                                className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 hover:border-blue-500"
                                variants={itemVariants}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-center text-white">{category}</h3>
                                <div className="flex justify-center gap-6 flex-wrap">
                                    {skills.map((skillName) => {
                                        const skillInfo = skillIconsMap[skillName];
                                        if (!skillInfo) return null;
                                        const IconComponent = skillInfo.icon;
                                        return (
                                            <motion.div
                                                key={skillName}
                                                className="flex flex-col items-center cursor-pointer"
                                                whileHover={{ scale: 1.15 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <IconComponent className="text-4xl" style={{ color:skillName==="GitHub"?"#fff": skillInfo.color }} />
                                                <p className="mt-2 text-sm text-gray-400 font-medium">{skillName}</p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Aboutme;
