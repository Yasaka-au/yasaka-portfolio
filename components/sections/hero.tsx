import { LucideMousePointer } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="flex items-center justify-center min-vh-screen text-center py-20 bg-base-100">
            <div className="container px-4">
                <div className="mb-4 text-xs font-bold tracking-widest uppercase text-primary animate-fade-up">
                    GRAPHIC DESIGNER | VISUAL STORYTELLER
                </div>
                <h1 className="mb-6 text-5xl md:text-7xl font-display font-extrabold leading-tight animate-fade-up [animation-delay:200ms]">
                    Designing Visual<br />Worlds That Speak.
                </h1>
                <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-neutral/60 animate-fade-up [animation-delay:400ms]">
                    Creative Director specializing in 3D visuals, cinematic storytelling,
                    and futuristic brand identities.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up [animation-delay:600ms]">
                    <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
                        View Projects
                    </button>
                    <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                        Contact Me
                    </button>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
                <div className="w-6 h-10 border-2 border-neutral rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neutral rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
};
