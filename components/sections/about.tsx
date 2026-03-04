export const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group overflow-hidden rounded-3xl bg-base-300">
                    <img
                        src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
                        alt="Creative Space"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                        Visual Storytelling<br />
                        <span className="text-primary italic">Redefined.</span>
                    </h2>
                    <p className="text-lg text-neutral/70 mb-8 leading-relaxed">
                        With over 2 years of professional experience, I bridge the gap between
                        imagination and reality. My work is inspired by the fusion of minimalist aesthetics and
                        futuristic dreamscapes.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {["3D Modeling", "Brand Identity", "UI/UX Design", "Motion Graphics", "Digital Art"].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-base-200 text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
