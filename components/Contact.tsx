"use client";

import { motion } from "framer-motion";
import {
    SiInstagram,
    SiLinkerd,
    SiGithub,
    SiDiscord,
    SiWhatsapp,
    SiGmail,
} from "react-icons/si";
import toast from "react-hot-toast";

const socials = [
    {
        icon: SiInstagram,
        name: "Instagram",
        link: "https://instagram.com/im_justkay",
        color: "#ff2bd6",
        isCopy: false,

    },
    {
        icon: SiLinkerd,
        name: "LinkedIn",
        link: "https://linkedin.com/in/kylefick99",
        color: "#00eaff",
        isCopy: false,

    },
    {
        icon: SiGmail,
        name: "Gmail",
        link: "kylefick99@gmail.com",
        color: "#ff2bd6",
        isCopy: true,
    },
    {
        icon: SiDiscord,
        name: "Discord",
        link: "https://discord.com/users/proslacker#7773",
        color: "#5865F2",
    },
    {
        icon: SiGithub,
        name: "GitHub",
        link: "https://github.com/KyleFick",
        color: "#ffffff",
        isCopy: false,

    },
    {
        icon: SiWhatsapp,
        name: "WhatsApp",
        link: "https://wa.me/27833022049",
        color: "#25D366",
        isCopy: false,

    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-32 px-6 text-center overflow-hidden"
        >
            {/* 🌌 Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00eaff] opacity-10 blur-3xl rounded-full"></div>

            {/* 🔥 Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold neon-blue"
            >
                Let’s Work Together
            </motion.h2>

            {/* ✨ Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 mt-6 max-w-xl mx-auto"
            >
                Got a project, idea, or opportunity? Reach out and let’s build something
                powerful.
            </motion.p>

            {/* ⚠️ Communication Notice */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-sm text-gray-500"
            >
                ⚠️ I don’t take direct phone calls — please contact me via{" "}
                <span className="text-[#25D366] font-semibold">WhatsApp (call or message)</span>.
            </motion.p>

            {/* 💎 Social Icons */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
                className="flex flex-wrap justify-center gap-6 mt-12"
            >
                {socials.map((item, i) => {
                    const Icon = item.icon;

                    const handleClick = async () => {
                        if (!item.isCopy) return;

                        try {
                            // ✅ Modern API
                            if (navigator.clipboard && window.isSecureContext) {
                                await navigator.clipboard.writeText(item.link);
                            } else {
                                // ⚠️ Fallback for HTTP / older browsers
                                const textArea = document.createElement("textarea");
                                textArea.value = item.link;
                                textArea.style.position = "fixed"; // prevent scroll jump
                                document.body.appendChild(textArea);
                                textArea.focus();
                                textArea.select();

                                document.execCommand("copy");
                                document.body.removeChild(textArea);
                            }

                            toast.success("Email copied to clipboard 📧", {
                                icon: "📋",
                                style: {
                                    border: "1px solid #ff2bd6",
                                    boxShadow: "0 0 20px #ff2bd6",
                                },
                            });

                        } catch (err) {
                            console.error("Copy failed:", err);

                            toast.error("Failed to copy email ❌");
                        }
                    };

                    const content = (
                        <>
                            <Icon
                                size={28}
                                style={{
                                    color: item.color,
                                    filter: `drop-shadow(0 0 8px ${item.color})`,
                                }}
                            />
                            <span className="text-xs text-gray-300">{item.name}</span>
                        </>
                    );

                    // 📧 Gmail (copy action)
                    if (item.isCopy) {
                        return (
                            <motion.div
                                key={i}
                                onClick={handleClick}
                                whileHover={{
                                    scale: 1.15,
                                    boxShadow: `0 0 25px ${item.color}`,
                                }}
                                className="glass p-5 rounded-xl flex flex-col items-center gap-2 w-24 cursor-pointer"
                            >
                                {content}
                            </motion.div>
                        );
                    }

                    // 🔗 Normal links
                    return (
                        <motion.a
                            key={i}
                            href={item.link}
                            target="_blank"
                            whileHover={{
                                scale: 1.15,
                                boxShadow: `0 0 25px ${item.color}`,
                            }}
                            className="glass p-5 rounded-xl flex flex-col items-center gap-2 w-24"
                        >
                            {content}
                        </motion.a>
                    );
                })}
            </motion.div>

            {/* 🚀 CTA Button */}
            <motion.a
                href="https://discord.com/users/YOUR_USER_ID"
                target="_blank"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px #5865F2",
                }}
                className="inline-block mt-12 px-8 py-4 rounded-lg font-semibold text-white bg-[#5865F2] shadow-[0_0_20px_#5865F2]"
            >
                Message Me on Discord
            </motion.a>
            {/*<motion.a*/}
            {/*    href="https://wa.me/YOUR_NUMBER"*/}
            {/*    target="_blank"*/}
            {/*    initial={{ opacity: 0 }}*/}
            {/*    whileInView={{ opacity: 1 }}*/}
            {/*    transition={{ delay: 0.5 }}*/}
            {/*    whileHover={{*/}
            {/*        scale: 1.05,*/}
            {/*        boxShadow: "0 0 30px #25D366",*/}
            {/*    }}*/}
            {/*    className="inline-block mt-12 px-8 py-4 rounded-lg font-semibold text-black bg-[#25D366] shadow-[0_0_20px_#25D366]"*/}
            {/*>*/}
            {/*    Message Me on WhatsApp*/}
            {/*</motion.a>*/}

        </section>
    );
}