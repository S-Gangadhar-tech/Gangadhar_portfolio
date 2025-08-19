import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaGithub, FaReact, FaCode, FaDatabase } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

function Projects() {
    const projectsData = [
        {
            title: 'Driver_Locker',
            description: 'A full-stack application that uses an API to accept an area or college name as input and fetch all relevant details about the college, including its location, courses offered, and other key information.',
            date: 'July 2025',
            liveLink: '#',
            githubLink: 'https://github.com/S-Gangadhar-tech/Driver_Locker',
            techIcons: [
                { icon: FaReact, name: 'React.js' },
                { icon: SiSpringboot, name: 'Spring Boot' },
                { icon: FaDatabase, name: 'SQL' },
            ],
        },
        {
            title: 'NewsPage',
            description: 'A React-based web application that allows users to register, log in, and view personalized news content. It features JWT-based authentication to ensure secure access. Users can customize their news feed based on interests or categories, providing a tailored news-reading experience through a clean and responsive interface.',
            date: 'March 2025',
            liveLink: '#',
            githubLink: 'https://github.com/S-Gangadhar-tech/NewsPage',
            techIcons: [
                { icon: FaReact, name: 'React.js' },
                { icon: FaCode, name: 'Backend' },
                { icon: FaDatabase, name: 'Database' },
            ],
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
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col justify-between"
                            variants={itemVariants}
                        >
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Date: {project.date}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Tech Stack:</h4>
                                <div className="flex space-x-4 mb-4">
                                    {project.techIcons.map((tech, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <tech.icon className="text-3xl text-gray-700 dark:text-white" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                    >
                                        <FaLaptopCode />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors"
                                    >
                                        <FaGithub />
                                        <span>Source Code</span>
                                    </a>
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