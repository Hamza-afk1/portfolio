import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-background text-foreground">
            {/* Background Elements can go here */}
            {/* Background Elements removed for total clarity */}

            <Navbar />
            <main className="flex-grow z-10 relative">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
