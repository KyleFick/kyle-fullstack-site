"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/github")
            .then(res => res.json())
            .then(setProjects);
    }, []);

    return (
        <section id="projects" className="py-24 px-6">
            <h2 className="text-3xl text-center neon-pink">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
                {projects.map((p, i) => (
                    <motion.a
                        key={i}
                        href={p.url}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="glass p-6 rounded-xl shadow-[0_0_20px_#7a5cff]"
                    >
                        <h3 className="text-xl">{p.name}</h3>
                        <p className="text-gray-400 mt-2">{p.description}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}