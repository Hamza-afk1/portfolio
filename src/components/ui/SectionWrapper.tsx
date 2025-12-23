import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
    disableAnimation?: boolean;
}

const SectionWrapper = ({ children, id, className = "", disableAnimation = false }: SectionWrapperProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <section id={id} className={`w-full relative ${className}`}>
            <motion.div
                ref={ref}
                style={{
                    scale: disableAnimation ? 1 : scaleProgress,
                    opacity: disableAnimation ? 1 : opacityProgress,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
