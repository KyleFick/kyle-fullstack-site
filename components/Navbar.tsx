"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between">
      <h1 className="font-bold text-[#00eaff] drop-shadow-[0_0_15px_#00eaff]">K + F</h1>
      <div className="flex gap-6 text-sm">
        <a href="#about" className="text-[#ff2bd6] drop-shadow-[0_0_15px_#ff2bd6]">About</a>
        <a href="#projects" className="text-[#ff2bd6] drop-shadow-[0_0_15px_#ff2bd6]">Projects</a>
        <a href="#contact" className="text-[#ff2bd6] drop-shadow-[0_0_15px_#ff2bd6]">Contact</a>
      </div>
    </nav>
  );
}