import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>

      <button
        type="button"
        className={`back-to-top ${
          showBackToTop ? "back-to-top-visible" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;