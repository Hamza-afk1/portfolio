import { motion } from "framer-motion";


interface FloatingElementProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
}

const FloatingElement = ({
    children,
    delay = 0,
    duration = 5,
    yOffset = 20,
    className = "",
}: FloatingElementProps) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -yOffset, 0],
                rotate: [0, 1, -1, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingElement;
