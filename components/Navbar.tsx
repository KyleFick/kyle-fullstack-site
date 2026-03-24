"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");

    // 🔥 Track active section
    useEffect(() => {
        const handleScroll = () => {
            links.forEach((link) => {
                const section = document.querySelector(link.href);
                if (!section) return;

                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActive(link.href);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">

            {/* 🔥 Logo */}
            <h1 className="font-bold text-[#00eaff] drop-shadow-[0_0_15px_#00eaff] text-lg md:text-2xl">
                Kyle Fick
            </h1>

            {/* 💻 Desktop Nav */}
            <div className="hidden md:flex gap-8 text-lg">
                {links.map((link) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0 0 10px #ff2bd6",
                        }}
                        className={`transition ${
                            active === link.href
                                ? "text-[#00eaff]"
                                : "text-[#ff2bd6]"
                        }`}
                    >
                        {link.label}
                    </motion.a>
                ))}
            </div>

            {/* 📱 Burger Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            >
                <motion.span
                    animate={{
                        rotate: open ? 45 : 0,
                        y: open ? 6 : 0,
                    }}
                    className="absolute w-6 h-[2px] bg-[#00eaff]"
                />
                <motion.span
                    animate={{ opacity: open ? 0 : 1 }}
                    className="absolute w-6 h-[2px] bg-[#00eaff]"
                />
                <motion.span
                    animate={{
                        rotate: open ? -45 : 0,
                        y: open ? -6 : 0,
                    }}
                    className="absolute w-6 h-[2px] bg-[#00eaff]"
                />
            </button>

            {/* 📱 Fullscreen Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full right-4 mt-4 w-56 rounded-xl border border-white/10 backdrop-blur-md bg-[#0a0a0f]/90 shadow-[0_0_20px_#00eaff33] flex flex-col py-4 md:hidden"
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0 0 10px #ff2bd6",
                                }}
                                className={`px-6 py-3 text-left text-lg transition ${
                                    active === link.href
                                        ? "text-[#00eaff]"
                                        : "text-[#ff2bd6]"
                                }`}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}