"use client";

import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiVercel,
    SiReact,
} from "react-icons/si";

const tech = [
    { icon: SiNextdotjs, color: "#ffffff" },
    { icon: SiReact, color: "#00eaff" },
    { icon: SiTypescript, color: "#3178c6" },
    { icon: SiTailwindcss, color: "#38bdf8" },
    { icon: SiFramer, color: "#ff2bd6" },
    { icon: SiVercel, color: "#ffffff" },
];

export default function Footer() {
    return (
        <footer className="relative py-20 text-center overflow-hidden border-t border-white/10">

            {/* 🌌 Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#00eaff] opacity-10 blur-3xl rounded-full"></div>

            {/* ⚡ Tech Icons */}
            <div className="flex justify-center gap-8 relative z-10">
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