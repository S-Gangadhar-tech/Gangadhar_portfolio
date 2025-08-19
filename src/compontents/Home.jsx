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
        <div className="container mx-auto my-12 p-6 bg-gray-900 rounded-lg shadow-lg">
            <motion.section
                id="home"
                className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex-1 md:pr-12 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hello, I'm <span className="text-blue-400">Sanganamoni Gangadhar</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-6">
                        I'm a passionate Full Stack Web Developer skilled in React.js on the frontend and Java-based backend technologies like Spring Boot, Spring, JDBC, Hibernate, Servlets, and Microservices. I have a strong foundation in Java and DSA, and I regularly practice on GeeksforGeeks and LeetCode. I've built scalable applications, led team projects, and developed a feature-rich educational platform.
                    </p>
                    {/* Location */}
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                        <FaMapMarkerAlt className="text-red-500 text-xl" />
                        <p className="text-gray-400 text-lg">Hyderabad, India</p>
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
                        className="
        rounded-full
        w-64 
        md:w-80
        max-h-[500px]      /* Limit very tall images */
        object-contain     /* Shows entire image, won't crop hair */
        border-4 border-blue-400 shadow-lg
        bg-gray-800        /* Optional: background for better appearance if image doesn't fill box */
    "
                        style={{
                            aspectRatio: '3/4' // Helps enforce portrait ratio if you want, or remove if not needed
                        }}
                    />

                </div>
            </motion.section>
        </div>
    );
}

export default Home;
