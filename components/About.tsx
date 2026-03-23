"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold neon-blue"
      >
        About Me
      </motion.h2>

      <p className="mt-4 text-gray-400">
        I specialize in building scalable web apps using modern technologies like
        Next.js, TypeScript, and cloud platforms.
      </p>
    </section>
  );
}