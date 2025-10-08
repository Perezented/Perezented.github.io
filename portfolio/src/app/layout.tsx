import type { Metadata } from "next";
import "./globals.css";
import GalaxyLayout from "@/components/GalaxyLayout";

export const metadata: Metadata = {
  title: "Michael Perez's Portfolio | Web Developer",
  description: "Portfolio website showcasing web development projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <GalaxyLayout>{children}</GalaxyLayout>
    </html>
  );
}
