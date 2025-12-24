
import { motion } from "framer-motion";
import { Code, Database, Globe, Award, BookOpen, Terminal } from "lucide-react";

// Skills mapped from CV
const skills = [
    { name: "Frontend", icon: <Globe className="w-8 h-8 text-cyan-400" />, desc: "React, JavaScript, Bootstrap, HTML/CSS" },
    { name: "Backend", icon: <Database className="w-8 h-8 text-purple-500" />, desc: "Laravel, PHP, Python, MySQL" },
    { name: "Tools & Design", icon: <Terminal className="w-8 h-8 text-pink-500" />, desc: "Git, VS Code, Figma (Basic)" },
];

const education = [
    {
        school: "École High Tech – Rabat",
        degree: "Licence en Génie Informatique (3e année)",
        date: "10/2025",
        desc: "Formation universitaire en cours (2025), axée sur les bases avancées de l’informatique, du développement logiciel et des systèmes informatiques."
    },
    {
        school: "Institut Spécialisé des Technologies Appliquées (ISTA) - IFRANE",
        degree: "Technicien Spécialisé en Développement Digital Option Web Full Stack",
        date: "09/2023 - 07/2025",
        desc: "Formation de deux ans complétée en 2025, avec une spécialisation en technologies front-end et back-end pour le développement de solutions web complètes."
    },
    {
        school: "Lycée Tarik Ben Ziyad",
        degree: "Baccalauréat en Sciences Physiques",
        date: "09/2022 - 06/2023",
        desc: "Formation approfondie en physique et sciences expérimentales."
    }
];

const certifications = [
    { name: "Les bases du materiel informatique", provider: "Cisco" },
    { name: "Python Essentials 1", provider: "Cisco" },
    { name: "Cybersécurité", provider: "Cisco" },
];

const About = () => {
    return (
        <div className="container mx-auto px-6 py-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    À Propos De Moi
                </h1>

                {/* Bio & Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Développeur web et passionné de digital, je crée des sites web sur mesure, des landing pages performantes, des menus digitaux et des solutions adaptées aux besoins modernes des entreprises.
                            <br /><br />
                            Curieux et créatif, je m’intéresse à tout ce qui touche au digital, avec une passion particulière pour la photographie, qui enrichit mon sens du détail et de l’esthétique dans chacun de mes projets.
                        </p>
                    </div>

                    <div className="relative flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                            <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay" />
                            <img
                                src="/assets/pic2.webp"
                                alt="Hamza Dghoughi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-[-20px] right-[-20px] w-64 h-64 md:w-80 md:h-80 border-2 border-primary/20 rounded-2xl" />
                    </div>
                </div>

                {/* Skills */}
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Code className="text-primary" /> Compétences Techniques
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors hover:shadow-[0_0_20px_rgba(var(--primary),0.2)] group"
                        >
                            <div className="mb-4 p-3 bg-secondary/30 w-fit rounded-lg group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-muted-foreground text-sm">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <BookOpen className="text-primary" /> Éducation
                </h2>
                <div className="space-y-8 mb-16">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                            <h3 className="text-2xl font-bold">{edu.degree}</h3>
                            <h4 className="text-xl text-primary/80 mb-2">{edu.school}</h4>
                            <span className="text-sm px-3 py-1 bg-secondary rounded-full text-foreground/70 mb-4 inline-block">{edu.date}</span>
                            <p className="text-muted-foreground">{edu.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <Award className="text-primary" /> Certifications
                </h2>
                <div className="flex flex-wrap gap-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2 px-6 py-3 bg-secondary/20 border border-white/10 rounded-full">
                            <Award className="w-5 h-5 text-accent" />
                            <span className="font-medium">{cert.name}</span>
                            <span className="text-sm text-muted-foreground">- {cert.provider}</span>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};

export default About;
