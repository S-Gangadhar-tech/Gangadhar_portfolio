import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaGithub, FaReact, FaCode, FaDatabase } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const techIconsMap = {
    'React.js': { icon: FaReact, color: '#61DAFB' },
    'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
    'SQL': { icon: FaDatabase, color: '#F29111' },
    'Backend': { icon: FaCode, color: '#3B82F6' },
    'Database': { icon: FaDatabase, color: '#10B981' },
};

function Projects() {
    const projectsData = [
        {
            title: 'Driver_Locker',
            description: 'A full-stack application that uses an API to accept an area or college name as input and fetch all relevant details about the college, including its location, courses offered, and other key information.',
            date: 'July 2025',
            liveLink: 'https://drivelocker-latest.onrender.com/api/v1.0/swagger-ui/index.html#/',
            githubLink: 'https://github.com/S-Gangadhar-tech/Drive_Locker',
            techStack: ['React.js', 'Spring Boot', 'SQL'],
        },
        {
            title: 'NewsPage',
            description: 'A React-based web application that allows users to register, log in, and view personalized news content. It features JWT-based authentication to ensure secure access. Users can customize their news feed based on interests or categories, providing a tailored news-reading experience through a clean and responsive interface.',
            date: 'March 2025',
            // liveLink: '#',
            githubLink: 'https://github.com/S-Gangadhar-tech/NewsPage',
            techStack: ['React.js', 'Backend', 'Database'],
        },
    ];

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
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-16 text-gray-800 dark:text-white"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-600">
                        My Projects
                    </span>
                </motion.h2>

                <motion.div
                    className="flex flex-col gap-12 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-blue-500 hover:scale-105"
                            variants={itemVariants}
                            whileHover={{
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="flex flex-col justify-between h-full">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Date: {project.date}</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-3">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-4 mb-6">
                                        {project.techStack.map((techName, i) => {
                                            const techInfo = techIconsMap[techName];
                                            if (!techInfo) return null;
                                            const IconComponent = techInfo.icon;
                                            return (
                                                <div
                                                    key={i}
                                                    className="flex items-center space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                                                >
                                                    <IconComponent
                                                        className="text-2xl"
                                                        style={{ color: techInfo.color }}
                                                    />
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{techName}</span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                       {project.liveLink && (<a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                        >
                                            <FaLaptopCode className="text-xl" />
                                            <span>Live Demo</span>
                                        </a>)}
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 px-6 py-3 font-semibold text-white bg-gray-700 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                        >
                                            <FaGithub className="text-xl" />
                                            <span>Source Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;