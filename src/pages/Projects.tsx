
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";

// Import project images
import electroBabaImg from "../assets/projects/babaStock_screen.webp";
import project2Img from "../assets/projects/project2-dashboard.webp";
import uniCenterImg from "../assets/projects/uni-center.webp";

const Projects = () => {
    // Projects data
    const projects = [
        {
            title: "ElectroBaba",
            description: "Freelance Project: A comprehensive Stock Management Web Application managing products, entries/exits, and users with full authentication and CRUD capabilities.",
            tags: ["Freelance", "Laravel", "MySQL", "Web App"],
            image: electroBabaImg,
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Freelance Project 2",
            description: "A second major freelance project demonstrating full-stack development capabilities. (Details and visuals coming soon)",
            tags: ["Freelance", "Full Stack", "React"],
            image: project2Img,
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Centre Al Akhawayn",
            description: "Internship (Stage): Participated in the design, optimization, and maintenance of websites, developing practical project management skills in a professional environment.",
            tags: ["Internship", "Web Maintenance", "Optimization"],
            image: uniCenterImg,
            demoLink: "#",
            codeLink: "#"
        }
    ];

    const handlers = useSwipeable({
        onSwipedLeft: () => console.log("Swiped left!"),
        onSwipedRight: () => console.log("Swiped right!"),
        delta: 50,
    });

    return (
        <div className="container mx-auto px-6 py-20 min-h-screen" {...handlers}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary"
            >
                Featured Projects
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                {projects.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-[400px]"
                    >
                        <ProjectCard {...p} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
