import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulkareem Sikirulahi — AI/ML Engineer & Researcher",
  description:
    "Portfolio of Abdulkareem Sikirulahi — AI/ML Engineer, Python Developer, and Published Researcher specializing in LLMs, RAG systems, Multi-Agent Architectures, and Computer Vision.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "RAG Systems",
    "Computer Vision",
    "Researcher",
    "Python Developer",
    "Multi-Agent Systems",
  ],
  authors: [{ name: "Abdulkareem Sikirulahi" }],
  openGraph: {
    title: "Abdulkareem Sikirulahi — AI/ML Engineer & Researcher",
    description:
      "Portfolio of Abdulkareem Sikirulahi — AI/ML Engineer specializing in LLMs, RAG systems, and Computer Vision research.",
    type: "website",
    locale: "en_US",
    siteName: "Abdulkareem Sikirulahi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulkareem Sikirulahi — AI/ML Engineer & Researcher",
    description:
      "AI/ML Engineer specializing in LLMs, RAG systems, and Computer Vision research.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
