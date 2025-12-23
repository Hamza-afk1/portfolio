import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    demoLink?: string;
    codeLink?: string;
}

const ProjectCard = ({ title, description, tags, image, demoLink, codeLink }: ProjectCardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full perspective-1000 group"
        >
            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT FACE */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 shadow-xl backdrop-blur-md flex flex-col [backface-visibility:hidden]">
                    <div
                        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                        className="absolute inset-4 rounded-xl bg-black/20 shadow-inner -z-10"
                    />

                    <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full pointer-events-none">
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-4">
                            {title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {tags.map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 text-center text-xs text-muted-foreground/50 uppercase tracking-widest">
                            Hover to see preview
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] border border-white/20">
                    {image && image !== "true" ? (
                        <img src={image} alt={title} className="w-full h-full object-cover opacity-100 transition-opacity duration-300" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                    )}

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40 backdrop-blur-[2px]">
                        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                        <div className="flex gap-4">
                            {demoLink && (
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
                                >
                                    Live Demo <ArrowUpRight className="w-4 h-4" />
                                </a>
                            )}
                            {codeLink && (
                                <a
                                    href={codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2"
                                >
                                    Code <Github className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ProjectCard;
