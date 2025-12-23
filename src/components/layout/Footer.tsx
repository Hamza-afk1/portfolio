import { Github, Linkedin, Mail } from "lucide-react";


const Footer = () => {
    return (
        <footer className="w-full py-8 text-center text-muted-foreground border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} Hamza. All rights reserved. Built with React & Tailwind.
                </p>
                <div className="flex items-center gap-6">
                    {[
                        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/hamza-dghoughi/", label: "LinkedIn" },
                        { icon: <Github className="w-5 h-5" />, href: "https://github.com/hamzadghoughi", label: "GitHub" },
                        { icon: <Mail className="w-5 h-5" />, href: "mailto:hamzadghoughi06@gmail.com", label: "Email" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="hover:text-primary hover:scale-110 transition-all duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
