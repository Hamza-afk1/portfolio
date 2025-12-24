
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-20 min-h-[90vh] flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12"
            >
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Let's Create Something Amazing
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8">
                        Ready to elevate your digital presence? I'm currently available for freelance projects and new opportunities.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="p-4 bg-secondary rounded-2xl text-primary shadow-sm"><Mail className="w-5 h-5" /></div>
                            <span>hamzadghoughi06@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="p-4 bg-secondary rounded-2xl text-primary shadow-sm"><Phone className="w-5 h-5" /></div>
                            <span>+212 632821459 </span>
                        </div>
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="p-4 bg-secondary rounded-2xl text-primary shadow-sm"><MapPin className="w-5 h-5" /></div>
                            <span>Digital Space</span>
                        </div>
                    </div>
                </div>

                <form className="flex flex-col gap-4 bg-card p-8 rounded-2xl border border-border shadow-2xl">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                        <input type="text" className="w-full p-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                        <input type="email" className="w-full p-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                        <textarea className="w-full p-3 bg-secondary/50 rounded-lg border border-border focus:border-primary focus:outline-none transition-colors h-32 resize-none" placeholder="Tell me about your project..." />
                    </div>
                    <button className="w-full p-5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg">
                        Send Message <Send className="w-4 h-4" />
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
