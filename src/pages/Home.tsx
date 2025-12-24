import { ArrowRight, Code, Database, Globe, FileDown } from "lucide-react";

import FloatingElement from "@/components/ui/FloatingElement";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

const Home = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center relative px-6 overflow-hidden">
            {/* Hero Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingElement delay={0} duration={8} yOffset={40} className="absolute top-1/4 left-10 opacity-10">
                    <Code size={100} className="text-primary" />
                </FloatingElement>
                <FloatingElement delay={2} duration={10} yOffset={60} className="absolute bottom-1/4 right-10 opacity-10">
                    <Database size={80} className="text-accent" />
                </FloatingElement>
                <FloatingElement delay={1} duration={7} yOffset={30} className="absolute top-1/3 right-1/4 opacity-5">
                    <Globe size={120} className="text-foreground" />
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
                        <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide">
                            Full Stack Developer & Digital Creator
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-foreground drop-shadow-sm">
                        Hamza DGHOUGHI <br /> <span className="text-primary">Développeur</span> Web
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Des sites web modernes, pensés pour la performance
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="group relative px-10 py-5 bg-primary text-primary-foreground font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                        >
                            <span className="relative flex items-center gap-2">
                                View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <a href="/needs/cv_Hamza_complete.pdf" download="Hamza_CV.pdf">
                            <button className="flex items-center gap-2 px-10 py-5 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-medium rounded-2xl transition-all shadow-sm">
                                <FileDown className="w-5 h-5" /> Download CV
                            </button>
                        </a>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-10 py-5 bg-transparent border border-border hover:bg-secondary/50 text-foreground font-medium rounded-2xl transition-all"
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
