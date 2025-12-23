import { ArrowRight, Code, Database, Globe, FileDown } from "lucide-react";

import FloatingElement from "@/components/ui/FloatingElement";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

const Home = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center relative px-6 overflow-hidden">
            {/* Hero Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElement delay={0} duration={8} yOffset={40} className="absolute top-1/4 left-10 opacity-20">
                    <Code size={100} className="text-primary" />
                </FloatingElement>
                <FloatingElement delay={2} duration={10} yOffset={60} className="absolute bottom-1/4 right-10 opacity-20">
                    <Database size={80} className="text-accent" />
                </FloatingElement>
                <FloatingElement delay={1} duration={7} yOffset={30} className="absolute top-1/3 right-1/4 opacity-10">
                    <Globe size={120} className="text-secondary-foreground" />
                </FloatingElement>
            </div>

            <div className="container mx-auto flex flex-col items-center justify-center relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="mb-6 inline-block">
                        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                            Full Stack Developer & Digital Creator
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/50">
                        Hamza DGHOUGHI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Développeur</span> Web
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Des sites web modernes, pensés pour la performance
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="group relative px-8 py-4 bg-primary text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <a href="/needs/cv_Hamza_complete.pdf" download="Hamza_CV.pdf">
                            <button className="flex items-center gap-2 px-8 py-4 bg-secondary/80 border border-white/10 hover:bg-secondary text-white font-medium rounded-lg transition-all backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <FileDown className="w-5 h-5" /> Download CV
                            </button>
                        </a>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium rounded-lg transition-all backdrop-blur-sm"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
