import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger the animation of child elements
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Me
                </motion.h2>

                <motion.div
                    className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="space-y-6 text-center text-gray-600 dark:text-gray-300">
                        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4">
                            <MdEmail className="text-3xl text-blue-500" />
                            <a href="mailto:sgangadhar.tech@gmail.com" className="hover:text-blue-500 font-medium transition-colors">sgangadhar.tech@gmail.com</a>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4">
                            <MdPhone className="text-3xl text-green-500" />
                            <a href="tel:+919392892432" className="hover:text-green-500 font-medium transition-colors">+91-9392892432</a>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4">
                            <FaLinkedin className="text-3xl text-blue-700" />
                            <a href="https://linkedin.com/in/gangadhar-sanganamoni-155203266/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 font-medium transition-colors">LinkedIn Profile</a>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4">
                            <FaGithub className="text-3xl text-gray-800 dark:text-white" />
                            <a href="https://github.com/S-Gangadhar-tech" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white font-medium transition-colors">GitHub Profile</a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;