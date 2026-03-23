"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between">
      <h1 className="font-bold neon-pink">K + F</h1>
      <div className="flex gap-6 text-sm">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}