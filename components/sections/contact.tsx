export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-base-100">
            <div className="container px-4 mx-auto max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 italic">
                    Let's Build Something <span className="text-primary">Legendary.</span>
                </h2>

                <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-6 rounded-2xl bg-white border border-base-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-6 rounded-2xl bg-white border border-base-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="w-full p-6 rounded-2xl bg-white border border-base-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full py-6 bg-primary text-white font-bold rounded-2xl hover:scale-[1.02] transition-transform shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
