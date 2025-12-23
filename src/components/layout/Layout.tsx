import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-background text-foreground">
            {/* Background Elements can go here */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
            </div>

            <Navbar />
            <main className="flex-grow z-10 relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
