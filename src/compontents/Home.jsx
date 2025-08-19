import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import pic from '../assets/picc.jpg'; // Assuming this is the path to the vertical profile picture

function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.section
            id="home"
            className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-900 text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex-1 md:pr-12 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hello, I'm <span className="text-blue-400">Sanganamoni Gangadhar</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-6">
                    [cite_start]I'm a passionate Full Stack Web Developer skilled in React.js on the frontend and Java-based backend technologies like Spring Boot, Spring, JDBC, Hibernate, Servlets, and Microservices[cite: 12]. [cite_start]I have a strong foundation in Java and DSA, and I regularly practice on GeeksforGeeks and LeetCode[cite: 14]. [cite_start]I've built scalable applications, led team projects, and developed a feature-rich educational platform[cite: 13].
                </p>

                {/* Location */}
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                    [cite_start]<p className="text-gray-400 text-lg">Hyderabad, India [cite: 3, 45]</p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center md:justify-start gap-5 text-3xl">
                    <a
                        href="https://linkedin.com/in/gangadhar-sanganamoni-155203266/266"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/S-Gangadhar-tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
            
            <div className="flex-1 flex justify-center md:justify-end">
                <img
                    src={pic}
                    alt="Sanganamoni Gangadhar"
                    className="rounded-full w-64 h-80 md:w-80 md:h-[400px] object-cover border-4 border-blue-400 shadow-lg"
                />
            </div>
        </motion.section>
    );
}

export default Home;