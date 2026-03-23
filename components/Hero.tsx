"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0f] text-white px-6 md:px-16">
      {/*<ParticlesBg />*/}
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div className="mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-[#ff2bd6] drop-shadow-[0_0_15px_#ff2bd6]">
              Kyle Fick
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-lg"
          >
              <Typewriter
                  words={[
                    "Full Stack Developer",
                    "Next.js Specialist",
                    "UI/UX Focused",
                    "Cloud & Scalable Systems",
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
              />
             building modern, scalable and visually stunning applications with a passion for clean design and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex gap-4"
          >
            <Link href="#projects">
                <button className="px-6 py-3 bg-[#ff2bd6] text-black font-semibold rounded-lg shadow-[0_0_20px_#ff2bd6] hover:scale-105 transition">
                    View Projects
                </button>
            </Link>

            <Link href="#contact">
                <button className="px-6 py-3 border border-[#00eaff] text-[#00eaff] rounded-lg shadow-[0_0_15px_#00eaff] hover:scale-105 transition">
                    Contact Me
                </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#7a5cff] blur-3xl opacity-30"></div>

            {/* Your Image */}
            <Image
              src="/CartoonProfile.png"
              alt="Kyle"
              width={350}
              height={350}
              className="relative rounded-full object-cover border-4 border-[#111] shadow-[0_0_30px_#7a5cff]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}