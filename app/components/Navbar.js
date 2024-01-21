"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navbarStyle = {
    transition: "background-color 0.6s ease",
    backgroundColor: scrollPosition > 0 ? "#4c4339" : "#feddbf",
  };

  const textStyle = {
    color: scrollPosition > 0 ? "white" : "#4c4339",
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full  bg-transparent  p-5  z-50"
      style={navbarStyle}
    >
      <div className="md:flex mx-auto items-center hidden  container justify-end ">
        <ul className={`flex `} style={textStyle}>
          <li className="md:ml-4 text-sm uppercase hover:border-b">
            <Link href="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="md:ml-4 text-sm uppercase hover:border-b">
            <Link href="#projects" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="md:ml-4 text-sm uppercase hover:border-b">
            <Link href="#skills" onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li className="md:ml-4 text-sm uppercase hover:border-b">
            <Link href="#about" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>

      <button onClick={handleToggleClick} className="md:hidden   h-max">
        ☰
      </button>
      <div
        className={`items-center flex flex-col h-screen ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className={`flex flex-col h-1/2 justify-evenly`} style={textStyle}>
          <Link href="/" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="#projects" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">
              Projects
            </li>
          </Link>
          <Link href="#skills" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="#about" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
