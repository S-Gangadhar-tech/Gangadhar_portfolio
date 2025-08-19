import React from 'react';
import { motion } from 'framer-motion';

function Section({ title, children }) {
    return (
        <section id={title.toLowerCase().replace(' ', '-')} className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}

export default Section;