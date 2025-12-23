import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SectionWrapper from "./components/ui/SectionWrapper";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <SectionWrapper id="home">
          <Home />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="projects" disableAnimation={true}>
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
