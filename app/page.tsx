"use client";

import { useState } from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Header } from "@/components/ui/header-2";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Philosophy } from "@/components/sections/philosophy";
import { Contact } from "@/components/sections/contact";
import { VisualStorytelling } from "@/components/sections/visual-storytelling";
import { Footer } from "@/components/ui/footer-taped-design";

export default function PortfolioPage() {
    const [showIntro, setShowIntro] = useState(true);

    if (showIntro) {
        return (
            <GooeyText
                texts={["Design", "Engineering", "Is", "Satoru"]}
                morphTime={0.8}
                cooldownTime={0.4}
                onComplete={() => setShowIntro(false)}
            />
        );
    }

    return (
        <main className="min-h-screen selection:bg-primary selection:text-white animate-in fade-in duration-1000">
            <Header />
            <Hero />
            <VisualStorytelling />
            <Projects />
            <Philosophy />
            <Contact />
            <Footer />
        </main>
    );
}
