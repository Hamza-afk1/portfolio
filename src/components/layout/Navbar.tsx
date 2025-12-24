import { useState, useEffect } from "react";
import { Menu, X, Code2, User, Mail, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/dg-logo.png";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = ["home", "about", "projects", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is roughly in the middle of the viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "#home", icon: <Home className="w-4 h-4" /> },
        { name: "About", path: "#about", icon: <User className="w-4 h-4" /> },
        { name: "Projects", path: "#projects", icon: <Code2 className="w-4 h-4" /> },
        { name: "Contact", path: "#contact", icon: <Mail className="w-4 h-4" /> },
    ];

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background border-border py-4 shadow-sm"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                        <img
                            src={logo}
                            alt="DG Logo"
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.path}
                            onClick={() => scrollToSection(link.path)}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary relative group",
                                activeSection === link.path.replace("#", "") ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.icon}
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                                activeSection === link.path.replace("#", "") ? "w-full" : ""
                            )} />
                        </button>
                    ))}
                    <button onClick={() => scrollToSection("#contact")} className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg">
                        Hire Me
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.path}
                                    onClick={() => scrollToSection(link.path)}
                                    className={cn(
                                        "flex items-center gap-3 text-lg font-medium p-3 rounded-xl transition-colors",
                                        activeSection === link.path.replace("#", "") ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-secondary"
                                    )}
                                >
                                    {link.icon}
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="mt-4 w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md"
                            >
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
