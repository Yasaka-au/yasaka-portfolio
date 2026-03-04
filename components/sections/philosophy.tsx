const timeline = [
    { year: "2023", title: "Motion Revolution", desc: "Explored the intersection of 3D motion and brand storytelling through cinematic sequences." },
    { year: "2024", title: "Digital Worlds", desc: "Launched a series of immersive 3D environments focusing on futuristic architectural concepts." },
    { year: "2025", title: "The Next Frontier", desc: "Currently pushing the boundaries of interactive web experiences and generative visual art." }
];

export const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 bg-white">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 italic">
                        “Design is <span className="text-primary">emotion</span> translated into visuals.”
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-base-300 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-16">
                        {timeline.map((item, index) => (
                            <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="hidden md:block w-1/2 text-right">
                                    {index % 2 !== 0 && (
                                        <div className="p-8 rounded-3xl bg-base-100 border border-base-200">
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-neutral/60">{item.desc}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                                    {item.year}
                                </div>

                                <div className="w-full md:w-1/2">
                                    {index % 2 === 0 ? (
                                        <div className="p-8 rounded-3xl bg-base-100 border border-base-200">
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-neutral/60">{item.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="md:hidden p-8 rounded-3xl bg-base-100 border border-base-200">
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-neutral/60">{item.desc}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
