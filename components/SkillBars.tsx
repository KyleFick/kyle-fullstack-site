"use client";

import { motion } from "framer-motion";

const skills = [
    // 🌐 Frontend
    { name: "HTML5", level: 90, color: "#00eaff" },
    { name: "React", level: 85, color: "#00eaff" },
    { name: "Next.js", level: 85, color: "#00eaff" },
    { name: "TypeScript", level: 80, color: "#00eaff" },
    { name: "Tailwind CSS", level: 85, color: "#00eaff" },

    // ⚙️ Backend
    { name: "C#", level: 90, color: "#ff2bd6" },
    { name: "ASP.NET", level: 85, color: "#ff2bd6" },
    { name: "Node.js", level: 75, color: "#ff2bd6" },
    { name: "Razor", level: 80, color: "#ff2bd6" },

    // 🗄️ Database
    { name: "SQL Server", level: 85, color: "#7a5cff" },
];

export default function SkillBars() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold neon-blue text-center"
            >
                Skills
            </motion.h2>

            <div className="mt-12 space-y-6">
                {skills.map((skill, i) => (
                    <div key={i}>

                        {/* Skill Name + % */}
                        <div className="flex justify-between mb-1 text-sm">
                            <span>{skill.name}</span>
                            <span className="text-gray-400">{skill.level}%</span>
                        </div>

                        {/* Progress Bar Background */}
                        <div className="w-full h-3 bg-[#1a1a22] rounded-full overflow-hidden">

                            {/* Animated Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{
                                    background: skill.color,
                                    boxShadow: `0 0 10px ${skill.color}`,
                                }}
                            />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}