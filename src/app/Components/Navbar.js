"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/"><Image className="rounded-lg bg-white" src="/SS-Consultants.png" width={150} height={5} alt="brand logo" /></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About us
          </Link>
          <Link href="/jobs" className="hover:text-gray-300">
            Apply jobs
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl !important focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span>&#x2715;</span> // X sign
            ) : (
              <span>&#9776;</span> // Hamburger menu
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white text-black transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="text-center text-2xl font-semibold my-auto h-screen">
        {/* <h1 className="text-lg font-bold text-black"> */}
          <Image className="rounded-lg" src="/SS-Consultants.png" width={100} height={5} alt="brand logo" />
        {/* </h1> */}
          <Link
            href="/"
            className="block py-2 hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            About us
          </Link>
          <Link
            href="/jobs"
            className="block py-2 hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Apply jobs
          </Link>
          <Link
            href="/contact"
            className="block py-2 hover:text-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
