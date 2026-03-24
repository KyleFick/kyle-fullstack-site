import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Kyle Fick",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="min-h-full flex flex-col"

    >
      <body className={`${inter.variable} ${orbitron.variable}`}>

      <CursorGlow />
        {children}
      <Footer />
      {/* 🔥 Toasts */}
      <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0a0a0f",
              color: "#fff",
              border: "1px solid #ffffff22",
              boxShadow: "0 0 15px #00eaff",
            },
          }}
      />
      </body>
    </html>
  );
}
