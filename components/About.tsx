"use client";

import { motion } from "framer-motion";

const highlights = [
    {
        title: "Full Stack",
        desc: "Frontend + Backend with scalable architecture",
        color: "#00eaff",
    },
    {
        title: "Performance",
        desc: "Fast, optimized and smooth user experiences",
        color: "#ff2bd6",
    },
    {
        title: "UI/UX Focus",
        desc: "Clean, modern and engaging interfaces",
        color: "#7a5cff",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative py-32 px-6 max-w-6xl mx-auto overflow-hidden"
        >
            {/* 🌌 Background Glow Effects */}
            {/*<div className="absolute -top-20 -left-20 w-72 h-72 bg-[#7a5cff] opacity-20 blur-3xl rounded-full animate-pulse"></div>*/}
            {/*<div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00eaff] opacity-20 blur-3xl rounded-full animate-pulse"></div>*/}

            {/* 🔥 Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold text-center neon-blue"
            >
                About Me
            </motion.h2>

            {/* ✨ Main Content */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
                className="mt-16 grid md:grid-cols-2 gap-12 items-center"
            >
                {/* 🧠 Left Side Text */}
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                    <motion.p variants={fadeUp}>
                        I’m a{" "}
                        <span className="text-neonPink neon-pink font-semibold">
              full-stack developer
            </span>{" "}
                        focused on building high-performance, scalable applications with
                        clean architecture and exceptional user experience.
                    </motion.p>

                    <motion.p variants={fadeUp}>
                        I specialize in{" "}
                        <span className="text-neonBlue">Next.js</span>,{" "}
                        <span className="text-neonPink">TypeScript</span>, and modern backend
                        systems using <span className="text-neonBlue">C# / ASP.NET</span>.
                    </motion.p>

                    <motion.p variants={fadeUp}>
                        I don’t just build apps — I craft experiences that feel{" "}
                        <span className="text-white">fast</span>,{" "}
                        <span className="text-white">smooth</span>, and{" "}
                        <span className="text-white">intuitive</span>.
                    </motion.p>

                    <motion.p variants={fadeUp}>
                        Constantly learning, constantly improving — always pushing toward
                        better performance, cleaner code, and stronger design.
                    </motion.p>
                </div>

                {/* 💎 Right Side Cards */}
                <div className="grid gap-6">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 30px ${item.color}`,
                            }}
                            className="glass p-6 rounded-xl border border-white/10"
                        >
                            <h3
                                className="text-xl font-semibold"
                                style={{
                                    color: item.color,
                                    textShadow: `0 0 10px ${item.color}`,
                                }}
                            >
                                {item.title}
                            </h3>

                            <p className="text-gray-400 mt-2">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

/* 🎬 Animation Variant */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};