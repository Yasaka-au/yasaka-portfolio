import { ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "Cyberpunk 2077 Redux",
        category: "3D Environment & Lighting",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Aura Branding",
        category: "Minimalist Identity Design",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Neon Dreams",
        category: "Motion Graphics & VFX",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-base-100">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Featured <span className="text-primary italic">Projects</span>
                    </h2>
                    <p className="text-neutral/60 max-w-xl mx-auto">
                        A collection of selected works that push the boundaries of visual design.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-neutral/50 text-sm mb-6 uppercase tracking-wider">{project.category}</p>
                                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                                    View Case Study <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
