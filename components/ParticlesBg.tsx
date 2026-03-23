"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <Particles
            init={particlesInit}
            className="absolute inset-0 -z-10"
            options={{
                background: { color: "transparent" },
                particles: {
                    number: { value: 50 },
                    color: { value: "#7a5cff" },
                    links: {
                        enable: true,
                        color: "#00eaff",
                    },
                    move: { enable: true, speed: 1 },
                    size: { value: 2 },
                },
            }}
        />
    );
}