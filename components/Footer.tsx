"use client";

import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiReact,
    SiLucide,
} from "react-icons/si";

const tech = [
    { icon: SiNextdotjs, name: "Next.js" , color: "#ffffff" },
    { icon: SiReact, name: "React" , color: "#00eaff" },
    { icon: SiTypescript, name: "TS" , color: "#3178c6" },
    { icon: SiTailwindcss, name: "Tailwind" , color: "#38bdf8" },
    { icon: SiFramer, name: "Framer" , color: "#ff2bd6" },
    { icon: SiLucide, name: "Lucide" , color: "#ffffff" },
];

export default function Footer() {
    return (
        <footer className="relative py-20 text-center overflow-hidden border-t border-white/10">
            <motion.div
                className="flex flex-col items-center space-y-5 relative mb-1"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-4xl font-bold leading-tight"
                >
                    <span className="text-[#ff2bd6] drop-shadow-[0_0_15px_#ff2bd6]">
                      Built With
                    </span>
                </motion.h1>
            </motion.div>
            {/* 🌌 Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#00eaff] opacity-10 blur-3xl rounded-full"></div>

            {/* ⚡ Tech Icons */}
            <div className="flex justify-center gap-6 relative z-10">
                {tech.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={i}
                            whileHover={{
                                scale: 1.3,
                                filter: `drop-shadow(0 0 10px ${item.color})`,
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon
                                size={30}
                                style={{
                                    color: item.color,
                                }}
                            />
                            <p className="text-xs text-gray-400 mt-2">{item.name}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* ✍️ Signature */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10 text-sm"
            >
                <span className="text-gray-400">Built by </span>
                <span className="text-white font-semibold neon-blue">
          Kyle Fick
        </span>
            </motion.div>

            {/* ✨ Animated Line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 1 }}
                className="h-[2px] bg-gradient-to-r from-[#00eaff] via-[#ff2bd6] to-[#7a5cff] mx-auto mt-6"
            />
        </footer>
    );
}