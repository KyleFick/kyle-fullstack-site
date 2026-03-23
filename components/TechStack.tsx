"use client";

import { motion } from "framer-motion";
import {
    SiHtml5,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiSharp,
    SiDotnet,
    SiGithub,
    SiGit,
    SiDatabricks,
} from "react-icons/si";

const sections = [
    {
        title: "Frontend",
        color: "#00eaff",
        tech: [
            { icon: SiHtml5, name: "HTML5" },
            { icon: SiReact, name: "React" },
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
        ],
    },
    {
        title: "Backend",
        color: "#ff2bd6",
        tech: [
            { icon: SiNodedotjs, name: "Node.js" },
            { icon: SiSharp, name: "C#" },
            { icon: SiDotnet, name: "ASP.NET" },
            { icon: null, name: "Razor" },
        ],
    },
    {
        title: "Database",
        color: "#7a5cff",
        tech: [
            { icon: SiDatabricks, name: "SQL Server" },
        ],
    },
    {
        title: "Tools & Platforms",
        color: "#00eaff",
        tech: [
            { icon: SiGithub, name: "Github" },
            { icon: SiGit, name: "Git" },
        ],
    },
];

export default function TechStack() {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto text-center">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold neon-pink"
            >
                Tech Stack
            </motion.h2>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {sections.map((section, idx) => (
                    <div key={idx}>

                        {/* Section Title */}
                        <h3
                            className="text-2xl font-semibold mb-8"
                            style={{
                                color: section.color,
                                textShadow: `0 0 10px ${section.color}`,
                            }}
                        >
                            {section.title}
                        </h3>

                        {/* Tech Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {section.tech.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: `0 0 25px ${section.color}`,
                                        }}
                                        className="glass p-6 rounded-xl flex flex-col items-center gap-3"
                                    >
                                        {Icon ? (
                                            <Icon
                                                size={40}
                                                style={{
                                                    color: section.color,
                                                    filter: `drop-shadow(0 0 8px ${section.color})`,
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="px-3 py-2 text-sm rounded-md"
                                                style={{
                                                    background: section.color,
                                                    boxShadow: `0 0 10px ${section.color}`,
                                                }}
                                            >
                                                {item.name}
                                            </div>
                                        )}

                                        <p className="text-sm text-gray-300">{item.name}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}