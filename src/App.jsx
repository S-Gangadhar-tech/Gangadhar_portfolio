import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';
import Aboutme from "./compontents/Aboutme";
import Home from "./compontents/Home";
import Contact from "./compontents/Contact";
import Projects from "./compontents/Projects";
import Experience from './compontents/Experience';

// Import the resume PDF directly. Ensure it's in your src/assets folder.
import resumePDF from './assets/resume.pdf';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Event listener to track scroll position for a dynamic navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
    };

    const linkVariants = {
        hover: { scale: 1.1, color: "rgb(255, 255, 255)" },
        tap: { scale: 0.95 }
    };

    // Variants for the mobile menu's collapse animation
    const menuVariants = {
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                when: "afterChildren"
            }
        }
    };

    const menuItemVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: -20, opacity: 0 }
    };

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
            <motion.nav
                className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                    {/* Brand Name / Logo */}
                    <a href="#home" className="text-2xl font-extrabold tracking-wide">
                        <motion.span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-600"
                            whileHover={{ scale: 1.05 }}
                        >
                            GANGADHAR
                        </motion.span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <motion.a
                                    href={item.href}
                                    onClick={handleClose}
                                    className="text-gray-300 hover:text-white transition-colors text-lg font-medium relative overflow-hidden group"
                                    variants={linkVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                                </motion.a>
                            </li>
                        ))}
                        <li>
                            <motion.button
                                onClick={handleDownload}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg"
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }}
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

                {/* Mobile Menu - Collapsible */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            className="md:hidden bg-gray-800 bg-opacity-90 backdrop-blur-md py-4 absolute w-full top-full overflow-hidden"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <motion.ul
                                className="flex flex-col items-center space-y-6"
                                variants={menuVariants}
                            >
                                {navItems.map((item) => (
                                    <motion.li key={item.name} variants={menuItemVariants}>
                                        <motion.a
                                            href={item.href}
                                            onClick={handleClose}
                                            className="block text-gray-300 hover:text-white transition-colors text-xl font-medium"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {item.name}
                                        </motion.a>
                                    </motion.li>
                                ))}
                                <motion.li variants={menuItemVariants}>
                                    <motion.button
                                        onClick={() => { handleClose(); handleDownload(); }}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg"
                                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaFileDownload />
                                        <span>Download Resume</span>
                                    </motion.button>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
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
