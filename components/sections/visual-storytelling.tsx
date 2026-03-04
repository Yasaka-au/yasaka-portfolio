"use client";

import { Globe } from "@/components/ui/interactive-globe";

export function VisualStorytelling() {
    return (
        <section id="visual-storytelling" className="flex items-center justify-center bg-transparent py-16 px-4 md:px-8">
            <div className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden relative shadow-2xl">
                {/* Ambient glow */}
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                <div className="flex flex-col lg:flex-row min-h-[500px]">
                    {/* Left content */}
                    <div className="flex-1 flex flex-col justify-center p-10 md:p-14 relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-neutral/10 bg-base-300/50 px-3 py-1 text-xs font-bold tracking-widest uppercase text-primary mb-6 w-fit">
                            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                            Creative Portfolio
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-black tracking-tight text-base-content leading-[1.1] mb-6">
                            Visual Storytelling
                            <br />
                            <span className="bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent italic">
                                Redefined.
                            </span>
                        </h2>

                        <p className="text-base md:text-lg text-neutral/60 max-w-md leading-relaxed mb-10">
                            Merging interactive technology with cinematic visuals.
                            Explore the global reach of my creative influence.
                            Drag the globe to interact.
                        </p>

                        <div className="flex items-center gap-10">
                            {/* User Image Integration */}
                            <div className="relative size-20 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg group">
                                <img
                                    src="/icn.jpg"
                                    alt="Creative Portrait"
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="flex gap-6">
                                <div>
                                    <p className="text-2xl font-display font-bold text-base-content italic">150+</p>
                                    <p className="text-[10px] uppercase tracking-widest text-neutral/40 font-bold">Projects</p>
                                </div>
                                <div className="w-px h-8 bg-neutral/10" />
                                <div>
                                    <p className="text-2xl font-display font-bold text-base-content italic">100%</p>
                                    <p className="text-[10px] uppercase tracking-widest text-neutral/40 font-bold">Passion</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Globe */}
                    <div className="flex-1 flex items-center justify-center p-4 lg:p-0 min-h-[400px]">
                        <Globe size={460} />
                    </div>
                </div>
            </div>
        </section>
    );
}
