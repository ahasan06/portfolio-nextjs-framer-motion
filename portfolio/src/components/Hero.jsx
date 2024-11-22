'use client';
import React from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

function Hero() {
    return (
        <div
            className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]"
        >
            {/* Icons in corners */}
            <motion.div
                className="absolute top-4 left-4 p-2 bg-[#20232a] rounded-full"
                whileHover={{ scale: 1.2 }}
            >
                <FaReact className="text-blue-500 text-2xl" />
            </motion.div>
            <motion.div
                className="absolute top-4 right-4 p-2 bg-[#20232a] rounded-full"
                whileHover={{ scale: 1.2 }}
            >
                <SiNextdotjs className="text-white text-2xl" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-4 p-2 bg-[#20232a] rounded-full"
                whileHover={{ scale: 1.2 }}
            >
                <SiMongodb className="text-green-500 text-2xl" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 right-4 p-2 bg-[#20232a] rounded-full"
                whileHover={{ scale: 1.2 }}
            >
                <SiTailwindcss className="text-blue-400 text-2xl" />
            </motion.div>

            {/* Hero Content */}
            <div className="flex flex-col items-center max-w-[400px] mx-auto text-center">
                <div className="flex items-center justify-center text-4xl font-bold">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-orange-400 ml-2">John Doe</h1>
                </div>

                {/* Draggable Element */}
                <motion.div
                    className="mt-8 p-4 bg-red-600 rounded-full cursor-grab"
                    drag
                    dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <p className="text-white font-medium">React</p>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
