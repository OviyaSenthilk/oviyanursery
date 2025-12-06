// components/Navbar.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Admissions", id: "admissions" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    if (pathname !== "/") {
      // Navigate to home first if not already there
      router.push("/").then(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      });
    } else {
      // Directly scroll if already on home page
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-200 py-5 shadow-xl overflow-hidden">
      {/* Clouds */}
      <motion.div
        className="absolute top-2 left-[-200px] text-5xl hidden sm:block"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ☁️ ☁️
      </motion.div>

      {/* Sun */}
      <motion.div
        className="absolute top-2 right-4 text-6xl hidden sm:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        🌞
      </motion.div>

      {/* Navbar Content */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <motion.h1
          className="text-xl sm:text-3xl font-bold text-pink-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Oviya Nursery School
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold text-pink-600">
          {menuItems.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer bg-transparent"
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-pink-600" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-full w-64 bg-blue-100 p-6 shadow-xl z-50 flex flex-col"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setOpen(false)} className="text-pink-600">
                <X size={28} />
              </button>
            </div>
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="text-pink-700 font-bold text-lg mb-4 text-left hover:scale-105 transition-transform"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

          </nav>
        );
      }
