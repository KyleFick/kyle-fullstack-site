"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern neon portfolio with animations",
  },
  {
    title: "CRM System",
    desc: "Integrated ERP + CRM solution",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center neon-pink">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass p-6 rounded-xl shadow-[0_0_15px_#7a5cff]"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}