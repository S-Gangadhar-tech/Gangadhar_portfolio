import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const contactIconsMap = {
    'Email': { icon: MdEmail, color: '#D14836' },
    'Phone': { icon: MdPhone, color: '#10B981' },
    'LinkedIn': { icon: FaLinkedin, color: '#0077B5' },
    'GitHub': { icon: FaGithub, color: '#181717' },
};

function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.18 },
        },
    };
    const itemVariants = {
        hidden: { y: 32, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <section
            id="contact"
            className="w-full min-h-[60vh] py-20 px-4 sm:px-12 bg-gray-900 text-white transition-colors duration-500"
        >
            <motion.h2
                className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-600"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                Contact Me
            </motion.h2>
            <motion.div
                className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {/* Email */}
                <motion.a
                    href="mailto:sgangadhar.tech@gmail.com"
                    className="flex items-center gap-6 py-8 px-4 rounded-xl transition duration-300 hover:bg-gray-800/40"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                >
                    <MdEmail className="text-5xl" style={{ color: contactIconsMap.Email.color }} />
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Email</h3>
                        <p className="text-lg text-gray-300">sgangadhar.tech@gmail.com</p>
                    </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                    href="tel:+919392892432"
                    className="flex items-center gap-6 py-8 px-4 rounded-xl transition duration-300 hover:bg-gray-800/40"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                >
                    <MdPhone className="text-5xl" style={{ color: contactIconsMap.Phone.color }} />
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Phone</h3>
                        <p className="text-lg text-gray-300">+91-9392892432</p>
                    </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    href="https://linkedin.com/in/gangadhar-sanganamoni-155203266/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 py-8 px-4 rounded-xl transition duration-300 hover:bg-gray-800/40"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                >
                    <FaLinkedin className="text-5xl" style={{ color: contactIconsMap.LinkedIn.color }} />
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">LinkedIn</h3>
                        <p className="text-lg text-gray-300">gangadhar-sanganamoni</p>
                    </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                    href="https://github.com/S-Gangadhar-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 py-8 px-4 rounded-xl transition duration-300 hover:bg-gray-800/40"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                >
                    <FaGithub className="text-5xl" style={{ color: contactIconsMap.GitHub.color }} />
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">GitHub</h3>
                        <p className="text-lg text-gray-300">S-Gangadhar-tech</p>
                    </div>
                </motion.a>
            </motion.div>
        </section>
    );
}

export default Contact;
