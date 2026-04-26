import React from 'react';
import { motion } from 'framer-motion';

function Section({ title, children }) {
    return (
        <section id={title.toLowerCase().replace(' ', '-')} className="py-20 bg-gray-900 transition-colors duration-500">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h2
                    className="text-5xl font-extrabold text-center mb-16"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-green-600">
                        {title}
                    </span>
                </motion.h2>
                <div>
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Section;
