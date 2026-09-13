import { useEffect, useState } from "react";
import logo from "../assets/logoAB.png";

function Navbar() {
  const [darkSection, setDarkSection] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDarkSection(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  // Prevent background page scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${darkSection ? "navbar-dark" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      {/* Logo */}
      <a href="#home" className="logo" onClick={closeMenu}>
        <img src={logo} alt="AB" />
      </a>

      {/* Desktop Navigation */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#blog">Exploring</a>
      </nav>

      {/* Desktop Connect */}
      <a href="#contact" className="connect-link">
        Let's Connect
        <span>↗</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className="menu-icon">
          {menuOpen ? "×" : "☰"}
        </span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#blog" onClick={closeMenu}>
            Exploring
          </a>
        </nav>

        <a
          href="#contact"
          className="mobile-connect-link"
          onClick={closeMenu}
        >
          Let's Connect
          <span>↗</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;