import { motion } from "framer-motion";
import { User, Code, Heart, Layers, Terminal, Sparkles } from "lucide-react";
import { RxInstagramLogo, RxTwitterLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

// Explicitly use the provided data
const creatorData = {
    name: "Jeimeen Chaudhari",
    title: "Full Stack Developer & Creator",
    aboutTitle: "About",
    subtitle: "The passionate developer behind this experience", // Adapted to generic since "Diarify Soul" context might be wrong for Pagani site
    story: "I'm Jeimeen Chaudhari, and I built this detailed Pagani Zonda R showcase to demonstrate immersive web capabilities. As a developer passionate about creating meaningful digital experiences, I wanted to build something that combines the beauty of automotive engineering with modern web technology.",
    why: "I believe web experiences should be as meticulously crafted as the machines they showcase. This project represents my vision of combining performance, elegance, and functionality to bring a legend like the Zonda R to life in the browser.",
    social: [
        { icon: RxGithubLogo, href: "https://github.com/JeimeenChaudhari" },
        { icon: RxLinkedinLogo, href: "https://www.linkedin.com/in/jeimeen-chaudhari-3a680028b/" },
        { icon: RxTwitterLogo, href: "https://x.com/Jeimeen3031" },
        { icon: RxInstagramLogo, href: "https://www.instagram.com/jeimeen_editzzz/" }
    ],
    stats: [
        {
            icon: Code,
            label: "Full Stack Dev",
            sub: "React, Node.js, TypeScript"
        },
        {
            icon: Heart,
            label: "Passionate Learner",
            sub: "Always exploring new tech"
        }
    ]
};

const AboutCreator = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-pagani-black" id="creator">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-pagani-gold/5 via-transparent to-transparent opacity-40" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block font-rajdhani text-sm text-pagani-gold mb-2 tracking-widest uppercase">
                        Meet the Creator
                    </span>
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {creatorData.aboutTitle} <span className="text-gradient-gold">{creatorData.name}</span>
                    </h2>
                    <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
                        {creatorData.subtitle}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-black/40 backdrop-blur-md border border-pagani-gold/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-pagani-gold/50 transition-colors duration-500"
                    >
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pagani-gold to-yellow-600 p-1 mb-6 shadow-lg shadow-pagani-gold/20">
                            <div className="w-full h-full rounded-full bg-pagani-black flex items-center justify-center overflow-hidden">
                                <img src="/pfp.jpeg" alt={creatorData.name} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">{creatorData.name}</h3>
                        <p className="font-rajdhani text-pagani-gold mb-8 tracking-widest uppercase text-sm">{creatorData.title}</p>

                        <div className="flex gap-4">
                            {creatorData.social.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-pagani-gold hover:text-black hover:border-pagani-gold transition-all duration-300 transform hover:scale-110"
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Info Cards */}
                    <div className="lg:col-span-7 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-pagani-gold/10 rounded-lg text-pagani-gold">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-orbitron text-xl font-bold text-foreground mb-3">My Story</h4>
                                    <p className="font-rajdhani text-muted-foreground leading-relaxed">
                                        {creatorData.story}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-pagani-gold/10 rounded-lg text-pagani-gold">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-orbitron text-xl font-bold text-foreground mb-3">Why I Built This</h4>
                                    <p className="font-rajdhani text-muted-foreground leading-relaxed">
                                        {creatorData.why}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {creatorData.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + (idx * 0.1) }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-pagani-gold/30 transition-colors duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <stat.icon className="w-8 h-8 text-pagani-gold mb-3" />
                                        <h4 className="font-orbitron font-bold text-foreground mb-1">{stat.label}</h4>
                                        <p className="font-rajdhani text-xs text-muted-foreground">{stat.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCreator;
