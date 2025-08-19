import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';
import Aboutme from "./compontents/Aboutme";
import Home from "./compontents/Home";
import Contact from "./compontents/Contact";
import Projects from "./compontents/Projects";
import Experience from './compontents/Experience';
import resumePDF from './assets/resume.pdf';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(prev => !prev);
    const handleClose = () => setMenuOpen(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Gangadhar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#aboutme' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
            <motion.nav 
                className="fixed w-full z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold text-white tracking-wide">
                        SANGANAMONI GANGADHAR
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} onClick={handleClose} className="text-gray-300 hover:text-white transition-colors text-lg font-medium">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <motion.button
                                onClick={() => { handleClose(); handleDownload(); }}
                                className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaFileDownload />
                                <span>Download Resume</span>
                            </motion.button>
                        </li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <motion.button onClick={handleToggle} whileTap={{ scale: 0.8 }}>
                            {menuOpen ? <FaTimes size={28} className="text-white" /> : <FaBars size={28} className="text-white" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        className="md:hidden bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg py-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col items-center space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} onClick={handleClose} className="block text-gray-300 hover:text-white transition-colors text-lg">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => { handleClose(); handleDownload(); }}
                                    className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                                >
                                    <FaFileDownload />
                                    <span>Download Resume</span>
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </motion.nav>

            {/* Sections */}
            <main className="pt-24">
                <section id="home"><Home /></section>
                <section id="aboutme"><Aboutme /></section>
                <section id="projects"><Projects /></section>
                <section id="experience"><Experience /></section>
                <section id="contact"><Contact /></section>
            </main>
        </div>
    );
}

export default App;