"use client";
import GalaxyBackground from "@/components/GalaxyBackground";
import { useGalaxyRotation } from "@/hooks/useGalaxyRotation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function GalaxyLayout({ children }: { children: React.ReactNode }) {
  const rotation = useGalaxyRotation();
  return (
    <body className={`${inter.className} bg-gray-900 text-gray-100 relative`}>
      <GalaxyBackground rotation={rotation} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: 'rgba(0,0,0,.8)'
      }} />
      <Navbar />
      <main className="min-h-screen relative z-10">
        {children}
      </main>
      <Footer />
    </body>
  );
}
